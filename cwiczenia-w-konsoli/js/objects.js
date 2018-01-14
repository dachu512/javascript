'use strict';

var osoba = {
    imie: 'Wojtek',
    wzrost: 181,
    przedstawOsobe: function() {
        console.log(this.imie);
    } 
}

console.log(osoba.imie);

console.log(osoba['imie']);

osoba.przedstawOsobe();

/* pamietac o this! , wskazuje konkretnie dana wlasciwosc */
/* metoda funkcja w obiekcie*/

osoba.nazwisko = 'Potocki';
console.log(osoba.nazwisko);

console.log(osoba);



