<?php
/**
 * Rush Fox Security – quote / enquiry form handler.
 * Receives the contact form (POST, JSON or form-encoded) and emails it to info@rushfox.co.za.
 * Spam protection: honeypot field, minimum fill time, per-IP rate limit, header-injection stripping.
 * Responds with JSON: { ok: true } or { ok: false, error: "..." }.
 */

declare(strict_types=1);

const TO_ADDRESS   = 'info@rushfox.co.za';
const FROM_ADDRESS = 'info@rushfox.co.za';
const FROM_NAME    = 'Rush Fox Website';
const MIN_SECONDS  = 3;      // form filled faster than this = bot
const MAX_PER_HOUR = 5;      // submissions per IP per hour

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

function respond(int $code, array $data): void {
    http_response_code($code);
    echo json_encode($data);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(405, ['ok' => false, 'error' => 'Method not allowed']);
}

// Accept JSON or form-encoded bodies
$raw = file_get_contents('php://input') ?: '';
$in = $_POST;
if (stripos($_SERVER['CONTENT_TYPE'] ?? '', 'application/json') !== false) {
    $decoded = json_decode($raw, true);
    $in = is_array($decoded) ? $decoded : [];
}

$field = static function (string $key, int $max = 200) use ($in): string {
    $v = isset($in[$key]) && is_scalar($in[$key]) ? (string) $in[$key] : '';
    $v = trim(strip_tags($v));
    return mb_substr($v, 0, $max);
};
$oneLine = static fn (string $v): string => trim(preg_replace('/[\r\n\t]+/', ' ', $v) ?? '');

// Honeypot + timing: pretend success so bots learn nothing
if ($field('website') !== '') {
    respond(200, ['ok' => true]);
}
$started = (int) $field('ts', 20);
if ($started > 0 && (time() - (int) floor($started / 1000)) < MIN_SECONDS) {
    respond(200, ['ok' => true]);
}

// Rate limit per IP (simple file counter in the system temp folder)
$ip = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$ip = explode(',', $ip)[0];
$bucket = sys_get_temp_dir() . '/rf_form_' . hash('sha256', $ip . date('YmdH'));
$count = is_file($bucket) ? (int) file_get_contents($bucket) : 0;
if ($count >= MAX_PER_HOUR) {
    respond(429, ['ok' => false, 'error' => 'Too many submissions. Please call or WhatsApp us.']);
}
// Fields
$name     = $oneLine($field('name', 120));
$org      = $oneLine($field('org', 160));
$phone    = $oneLine($field('phone', 40));
$email    = $oneLine($field('email', 160));
$service  = $oneLine($field('service', 120));
$province = $oneLine($field('province', 60));
$town     = $oneLine($field('town', 120));
$street   = $oneLine($field('street', 200));
$message  = $field('msg', 4000);
$consent  = $field('consent', 10);

$errors = [];
if ($name === '')     { $errors[] = 'name'; }
if ($phone === '' || !preg_match('/^[0-9+()\s-]{9,20}$/', $phone)) { $errors[] = 'phone'; }
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) { $errors[] = 'email'; }
if ($province === '') { $errors[] = 'province'; }
if ($town === '')     { $errors[] = 'town'; }
if ($consent !== '1' && strtolower($consent) !== 'true' && strtolower($consent) !== 'on') { $errors[] = 'consent'; }
if ($errors) {
    respond(422, ['ok' => false, 'error' => 'Please check: ' . implode(', ', $errors), 'fields' => $errors]);
}

$subject = sprintf('Website quote request: %s – %s (%s, %s)', $service ?: 'General enquiry', $org ?: $name, $town, $province);
$lines = [
    'New enquiry from rushfox.co.za',
    str_repeat('-', 40),
    'Name:           ' . $name,
    'Company:        ' . ($org ?: '-'),
    'Phone:          ' . $phone,
    'Email:          ' . ($email ?: '-'),
    'Service:        ' . ($service ?: 'General enquiry'),
    'Province:       ' . $province,
    'Town / suburb:  ' . $town,
    'Street address: ' . ($street ?: '-'),
    '',
    'Message:',
    $message ?: '-',
    '',
    str_repeat('-', 40),
    'POPIA consent given: yes',
    'Sent: ' . date('Y-m-d H:i') . ' (server time)',
];
$body = implode("\r\n", $lines);

$headers = [
    'From: ' . FROM_NAME . ' <' . FROM_ADDRESS . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'X-Mailer: RushFoxWebsite',
];
if ($email !== '') {
    $headers[] = 'Reply-To: ' . ($name !== '' ? '"' . str_replace('"', '', $name) . '" ' : '') . '<' . $email . '>';
}

@file_put_contents($bucket, (string) ($count + 1), LOCK_EX);

$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
$sent = mail(TO_ADDRESS, $encodedSubject, $body, implode("\r\n", $headers), '-f' . FROM_ADDRESS);

if (!$sent) {
    respond(500, ['ok' => false, 'error' => 'The message could not be sent. Please call or WhatsApp us.']);
}
respond(200, ['ok' => true]);
