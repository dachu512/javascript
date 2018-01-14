'use strict'; 
var imie = 'Wojtek';
var wzrost = 180;
var wiek = 29;
var wiekWojtka = wiek;

console.log(imie);
console.log(wzrost);
console.log(wiek);
console.log(wiekWojtka);

function wyswietlZmienna() {
    var imie = 'Karolina';
    console.log(imie);
}

var wyswietlWiek = function() {
    console.log(wiek);
}

wyswietlZmienna();
//wyswietlWiek;
wyswietlWiek();

function mnozenie(parametr1, parametr2) {
    var wynik = parametr1 * parametr2;
    console.log('Wynik: ' + wynik);
    
//    return przerywa funkcje, z reguły ostatnia instrukcja funkcji.
    
    return wynik;
}

mnozenie(5, 6);
mnozenie(4, 10);

var wynikMnozenia = mnozenie(3, 5);

//nie zadziala:
console.log('wynikMnozenia: ' + wynikMnozenia);

























