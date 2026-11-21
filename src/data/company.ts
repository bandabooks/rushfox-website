// Single source of truth for company facts used across the website.
// Facts mirror the approved Company Profile 2026/27 (approved by MF Banda, 21/11/2026).
// Change a number or contact HERE only.

const DOMAIN = 'rushfox.co.za';

export const company = {
  legalName: 'Rush Fox Security and CCTV (Pty) Ltd',
  tradingName: 'Rush Fox Security',
  tagline: 'Protect · Detect · Respond',
  founded: '20 May 2021',
  director: 'Malesela Fanny Banda',
  directorShort: 'M.F. Banda',
  phones: ['076 339 3561', '072 104 1051'],
  // Email domain: change here once the domain is registered (all addresses update automatically).
  domain: DOMAIN,
  email: `info@${DOMAIN}`,
  emails: [
    { label: 'General enquiries & quotes', address: `info@${DOMAIN}` },
    { label: 'Accounts & invoices', address: `accounts@${DOMAIN}` },
    { label: 'Compliance & tender documents', address: `compliance@${DOMAIN}` },
  ],
  // WhatsApp: international format without + or spaces (062 859 3706)
  whatsapp: '27628593706' as string | null,
  whatsappDisplay: '062 859 3706',
  address: {
    line1: 'No 48 Rabe Street, Havenga Building, Office 2',
    city: 'Mokopane',
    province: 'Limpopo',
    postalCode: '0600',
    postal: 'P.O. Box 103, Mokopane, 0600',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=48+Rabe+Street+Mokopane+0600',
  },
  areas: ['Mokopane', 'Polokwane'],
  registrations: {
    cipc: '2021/629748/07',
    psira: '5062671',
    psiraCert: '21033066',
    tax: '9541900198',
    paye: '7930828738',
    uif: '2674504/8',
    coida: '990001524157',
    coidaCert: '2023131537',
    csd: 'MAAA1525265',
    cidb: '10407354',
    cidbGrade: '1CE, 1SQ',
    nbcpss: 'LV8107',
    bbbee: 'Level 1 (EME)',
  },
};

export const tel = (p: string) => 'tel:+27' + p.replace(/\s/g, '').replace(/^0/, '');

export const compliance = [
  { body: 'CIPC', what: 'Private company registration', number: company.registrations.cipc, status: 'In Business; annual returns current', valid: 'Ongoing' },
  { body: 'PSiRA', what: 'Security business registration (Act 56 of 2001)', number: `${company.registrations.psira} · Cert. ${company.registrations.psiraCert}`, status: 'Registered security service provider', valid: '26 Jan 2027' },
  { body: 'National Treasury CSD', what: 'Central Supplier Database', number: company.registrations.csd, status: 'Active supplier; security activities', valid: 'Current' },
  { body: 'B-BBEE', what: 'Sworn affidavit, Exempted Micro Enterprise', number: company.registrations.bbbee, status: '100% black-owned; 135% procurement recognition', valid: 'Current' },
  { body: 'CIDB', what: 'Construction Industry Development Board', number: `CRS ${company.registrations.cidb}`, status: `Grading ${company.registrations.cidbGrade}`, valid: '12 Sep 2027' },
  { body: 'SARS', what: 'Income tax, PAYE and UIF', number: `IT ${company.registrations.tax} · PAYE ${company.registrations.paye}`, status: 'Tax compliant; status verifiable by PIN', valid: 'Current' },
  { body: 'Employment & Labour', what: 'UIF registration', number: company.registrations.uif, status: 'Employer registered', valid: 'Current' },
  { body: 'Compensation Fund', what: 'COIDA letter of good standing', number: `${company.registrations.coida} · Cert. ${company.registrations.coidaCert}`, status: 'In good standing', valid: '30 Apr 2027' },
  { body: 'NBCPSS', what: 'Bargaining Council, Private Security Sector', number: `Levy no. ${company.registrations.nbcpss}`, status: 'Registered employer', valid: '30 Apr 2027' },
];

export const manned = [
  { icon: 'guard', title: 'Static & Site Guarding', text: 'Day and night shift security officers (Grades A to C; D and E as required) for retail, commercial, industrial, residential and government sites.' },
  { icon: 'access', title: 'Manned Access Control', text: 'Gatehouse and entrance control: visitor and vehicle registers, searches, permits and key control.' },
  { icon: 'patrol', title: 'Patrols & Supervision', text: 'Foot and vehicle patrols, site inspections and mobile supervisors to keep standards high.' },
  { icon: 'retail', title: 'Retail Security & Loss Prevention', text: 'Uniformed and plain-clothes officers, exit checks and shrinkage control for stores and wholesalers.' },
  { icon: 'crowd', title: 'Event Security & Crowd Control', text: 'Planning and staffing for events, functions, meetings and public gatherings.' },
  { icon: 'vip', title: 'Close Protection (VIP)', text: 'Bodyguarding and protection of executives and dignitaries, by arrangement.' },
  { icon: 'react', title: 'Reaction & Response', text: 'Response to alarm activations and incidents at contracted sites, by arrangement.' },
  { icon: 'car', title: 'Car Watch & Parking Security', text: 'Parking area protection for shopping centres, offices and events.' },
  { icon: 'maint', title: 'Construction & Project Site Security', text: 'Asset protection for construction sites, plant, materials and stock yards.' },
];

export const tech = [
  { icon: 'cctv', title: 'CCTV Surveillance Systems', text: 'Design, supply and installation of HD analogue and IP camera systems: bullet, dome, PTZ, night-vision and 4MP/8MP (4K) cameras with NVR/DVR recording.' },
  { icon: 'eye', title: 'AI Video Analytics & LPR', text: 'Line-crossing, intrusion and person/vehicle detection; licence plate recognition (LPR/ANPR) for gates and car parks.' },
  { icon: 'monitor', title: 'Remote Viewing & Monitoring', text: 'Client live view and playback on mobile and desktop, event alerts and cloud backup; off-site monitoring arranged per site.' },
  { icon: 'finger', title: 'Electronic Access Control', text: 'Biometric (fingerprint and face), card and tag readers, keypads, time-and-attendance and door controllers, designed to keep emergency exits compliant.' },
  { icon: 'gate', title: 'Turnstiles, Boom Gates & Automation', text: 'Pedestrian turnstiles, boom gates, sliding and swing gate motors and garage automation.' },
  { icon: 'intercom', title: 'Intercom & Video Intercom', text: 'Audio and video intercom systems for gates, complexes and offices.' },
  { icon: 'alarm', title: 'Intruder Alarm Systems', text: 'Wired and wireless alarms, PIR and beam detectors, panic buttons and armed-response linking.' },
  { icon: 'fence', title: 'Electric Fencing & Perimeter Detection', text: 'Electric fence installation and repair by a registered electric fence installer, with certificate of compliance; outdoor beams and perimeter detection.' },
  { icon: 'fire', title: 'Fire & Smoke Detection', text: 'Smoke and heat detection integrated with alarm systems; certified fire installations scoped with accredited fire-detection partners.' },
  { icon: 'network', title: 'Networking & Connectivity', text: 'Structured cabling, PoE switching, Wi-Fi bridges and 4G/LTE links for remote sites.' },
  { icon: 'power', title: 'Backup Power for Security', text: 'UPS, inverter and solar backup for cameras, alarms and gates; electrical work certified (CoC) by a registered electrician.' },
  { icon: 'lock', title: 'Locksmith & Physical Security', text: 'Locks, safes, burglar bars and security doors to harden premises.' },
];

export const consulting = [
  { icon: 'risk', title: 'Security Risk Assessments & Audits', text: 'On-site surveys and written risk reports with practical recommendations.' },
  { icon: 'cctv', title: 'CCTV Layout Planning', text: 'Camera placement plans and coverage analysis before any installation.' },
  { icon: 'train', title: 'Officer Training & Site Induction', text: 'Site-specific induction, post instructions and refresher training for officers.' },
  { icon: 'guard', title: 'Security Plans & Procedures', text: 'Post orders, emergency procedures and access control policies for your site.' },
  { icon: 'maint', title: 'Maintenance & Service Level Agreements', text: 'Preventive maintenance, health checks, firmware updates, repairs and fault call-outs for systems we install and for existing systems we take over.' },
];

export const steps = [
  { title: 'Site Risk Assessment', text: 'We inspect the site, identify threats and weak points, and review existing measures.' },
  { title: 'Security Plan & Design', text: 'A written proposal: officer deployment, camera layout, access points and costs.' },
  { title: 'Deploy & Install', text: 'Officers are placed, briefed and equipped; systems are installed and commissioned.' },
  { title: 'Monitor & Supervise', text: 'Supervisor visits, CCTV review, occurrence records and incident handling.' },
  { title: 'Report & Improve', text: 'Regular client reporting, reviews and recommendations as risks change.' },
];

export const values = [
  { title: 'Integrity', text: 'Honest reporting, transparent billing and ethical conduct on every site.' },
  { title: 'Compliance', text: 'PSiRA, SARS, COIDA, bargaining council and labour law obligations met as standard.' },
  { title: 'Vigilance', text: 'Officers and systems that watch, detect and act before losses happen.' },
  { title: 'Accountability', text: 'Clear supervision, occurrence records and reporting you can audit.' },
  { title: 'Innovation', text: 'Modern IP CCTV, smart access control and remote viewing built into our service.' },
];

export const why = [
  { icon: 'guard', title: 'Guarding and technology from one provider', text: 'One contract, one point of accountability for officers, cameras, access control and alarms.' },
  { icon: 'risk', title: 'Fully compliant and tender-ready', text: `PSiRA-registered, on the Central Supplier Database (${company.registrations.csd}), CIDB-registered and B-BBEE ${company.registrations.bbbee}.` },
  { icon: 'train', title: 'Graded, trained officers', text: 'Security officers registered with PSiRA, graded A to C, with site induction and refresher training.' },
  { icon: 'patrol', title: 'Supervision that shows up', text: 'Mobile supervisors with GPS-tracked vehicles conduct site visits and inspections.' },
  { icon: 'monitor', title: 'Evidence, not excuses', text: 'Occurrence books, incident reports and recorded CCTV footage support every investigation.' },
  { icon: 'react', title: 'Local, responsive and scalable', text: 'Limpopo-based management with the structure to take on new sites and regions quickly.' },
];

export const sectors = ['Retail & wholesale', 'Commercial property', 'Government & municipalities', 'Schools & education', 'Healthcare facilities', 'Industrial & warehousing', 'Construction sites', 'Mining & agriculture', 'Residential estates', 'Events & hospitality', 'Motor dealerships', 'Transport & logistics'];

export const clients = ['Fairplay Stores', 'IE Bhyat Property Holdings', 'Ismails Wholesalers', 'AKT Investments', 'Save Point', 'Metro', 'Mohamedys Hardware', 'Honchos', 'KIA Motors Mokopane', 'Omega Security'];

export const insightCategories = ['Security Tips', 'CCTV & Technology', 'Access Control', 'Business Security', 'Compliance', 'Company News'] as const;
