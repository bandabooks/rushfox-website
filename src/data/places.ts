// Towns and suburbs offered in the quote form, by province. Visitors can also type a place that is not listed.
export const places: Record<string, string[]> = {
  Limpopo: [
    'Mokopane', 'Mokopane – Mahwelereng', 'Mokopane – Akasia', 'Mokopane – Piet Potgietersrust CBD', 'Polokwane CBD',
    'Polokwane – Bendor', 'Polokwane – Fauna Park', 'Polokwane – Flora Park', 'Polokwane – Westenburg', 'Polokwane – Ivy Park',
    'Polokwane – Nirvana', 'Polokwane – Ladanna', 'Seshego', 'Mankweng', 'Lebowakgomo', 'Modimolle', 'Mookgophong',
    'Bela-Bela', 'Lephalale', 'Thabazimbi', 'Musina', 'Makhado', 'Thohoyandou', 'Tzaneen', 'Phalaborwa', 'Giyani',
    'Burgersfort', 'Marble Hall', 'Groblersdal', 'Jane Furse', 'Hoedspruit', 'Modjadjiskloof', 'Zebediela', 'Alldays',
  ],
  Gauteng: [
    'Johannesburg CBD', 'Sandton', 'Midrand', 'Randburg', 'Roodepoort', 'Soweto', 'Alexandra', 'Pretoria CBD',
    'Centurion', 'Pretoria East', 'Pretoria North', 'Soshanguve', 'Mabopane', 'Hammanskraal', 'Mamelodi', 'Atteridgeville',
    'Kempton Park', 'Germiston', 'Boksburg', 'Benoni', 'Springs', 'Alberton', 'Tembisa', 'Krugersdorp', 'Vereeniging', 'Vanderbijlpark',
  ],
  Mpumalanga: ['Mbombela (Nelspruit)', 'Emalahleni (Witbank)', 'Middelburg', 'Secunda', 'Ermelo', 'Standerton', 'Lydenburg', 'White River', 'Malelane', 'Komatipoort', 'Piet Retief', 'Hazyview', 'Barberton', 'Delmas'],
  'North West': ['Mahikeng', 'Rustenburg', 'Brits', 'Klerksdorp', 'Potchefstroom', 'Vryburg', 'Lichtenburg', 'Zeerust', 'Hartbeespoort', 'Mogwase', 'Ga-Rankuwa'],
  'Free State': ['Bloemfontein', 'Welkom', 'Bethlehem', 'Kroonstad', 'Sasolburg', 'Parys', 'Phuthaditjhaba', 'Harrismith', 'Botshabelo'],
  'KwaZulu-Natal': ['Durban', 'Pietermaritzburg', 'Umhlanga', 'Pinetown', 'Richards Bay', 'Newcastle', 'Ladysmith', 'Empangeni', 'Ballito', 'Port Shepstone', 'Vryheid'],
  'Eastern Cape': ['Gqeberha (Port Elizabeth)', 'East London', 'Mthatha', 'Makhanda', 'Komani (Queenstown)', 'Kariega (Uitenhage)', 'Bhisho', 'Butterworth'],
  'Western Cape': ['Cape Town CBD', 'Bellville', 'Stellenbosch', 'Paarl', 'Somerset West', 'George', 'Mossel Bay', 'Worcester', 'Khayelitsha', 'Mitchells Plain'],
  'Northern Cape': ['Kimberley', 'Upington', 'Kuruman', 'Springbok', 'De Aar', 'Kathu'],
  'Outside South Africa': [],
};
export const provinces = Object.keys(places);
