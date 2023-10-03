const Henkilo = require("./henkilo.js");
const Urheilija = require("./urheilija.js");

const kaisa = new Urheilija(
  "Kaisa Leena",
  "Mäkäräinen",
  "Kaisa",
  1983,
  "https://hs.mediadelivery.fi/img/978/f3e9033d020b469f8c306475937e0885.jpg",
  58,
  "ampumahiihto",
  "moninkertainen maailmancup-voittaja"
);

const iivo = new Urheilija(
  "Iivo Henrik",
  "Niskanen",
  "Iivo",
  1992,
  "https://urheilutoimittajat.fi/wp-content/uploads/2023/04/Iivo-Niskanen-Peking-2-Suomen-Olympiakomitea-Jesse-Va%CC%88a%CC%88na%CC%88nen-scaled.jpg",
  80,
  "maastohiihto",
  "olympiavoittaja ja maailmanmestari"
);

console.log(kaisa);
console.log(iivo);
