/* KLASY class utworzenie kilka obiektow, szablon ktory definiuje obiekt,
raczej nazywamy z wielkiej litery , zeby latwiej było odroznic */

'use strict';

class Osoba {
    constructor(imie, nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
    }
    
    wyswietlInfo() {
        console.log("Imię: " + this.imie + ", " + "Nazwisko: " + this.nazwisko);
    }
}


var krystian = new Osoba('Krystian', 'Dziopa');
var wojtek = new Osoba('Wojtek', 'Potocki');

krystian.wyswietlInfo();
wojtek.wyswietlInfo();

console.log(krystian.imie);