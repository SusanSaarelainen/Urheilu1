const Henkilo = require("./henkilo.js");

class Urheilija extends Henkilo {
  constructor(
    etunimet,
    sukunimi,
    kutsumanimi,
    syntymavuosi,
    linkki,
    omapaino,
    laji,
    saavutukset
  ) {
    super(etunimet, sukunimi, kutsumanimi, syntymavuosi);
    this.linkki = linkki;
    this.omapaino = omapaino;
    this.laji = laji;
    this.saavutukset = saavutukset;
  }

  get Linkki() {
    return this.linkki;
  }

  set Linkki(linkki) {
    this.linkki = linkki;
  }

  get Omapaino() {
    return this.omapaino;
  }

  set Omapaino(omapaino) {
    this.omapaino = omapaino;
  }

  get Laji() {
    return this.laji;
  }

  set Laji(laji) {
    this.laji = laji;
  }

  get Saavutukset() {
    return this.linkki;
  }

  set Saavutukset(saavutukset) {
    this.saavutukset = saavutukset;
  }
}

//const date = new Date(); käytä syntymäaikaan
module.exports = Urheilija;
