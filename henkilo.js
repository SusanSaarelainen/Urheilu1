class Henkilo {
  /*etunimet = " ";
  sukunimi = "";
  kutsumanimi = "";
  syntymavuosi = new Date();*/

  constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi) {
    this.etunimet = etunimet;
    this.sukunimi = sukunimi;
    this.kutsumanimi = kutsumanimi;
    this.syntymavuosi = syntymavuosi;
  }

  /*get Etunimet() {
    return this.etunimet;
  }

  set Etunimet(etunimet) {
    this.etunimet = etunimet;
  }

  get Sukunimi() {
    return this.sukunimi;
  }

  set Sukunimi(sukunimi) {
    this.sukunimi = sukunimi;
  }

  get Kutumanimi() {
    return this.kutsumanimi;
  }

  set Kutumanimi(kutsumanimi) {
    this.kutsumanimi = kutsumanimi;
  }

  get Syntymavuosi() {
    return this.syntymavuosi;
  }

  set Syntymavuosi(syntymavuosi) {
    this.syntymavuosi = syntymavuosi;
  }*/
}

module.exports = Henkilo;
