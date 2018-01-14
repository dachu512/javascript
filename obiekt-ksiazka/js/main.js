'use strict';

class Ksiazka {
    constructor(tytul, autor, przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
        this.opiszKsiazke = function() {
            
            if(this.przeczytana === true) {
                return ("Książka ma tytuł " + this.tytul + " autorem jest " + this.autor + "i została przeczytana.");
            } else {
                return ("Książka ma tytuł " + this.tytul  + " autorem jest " + this.autor + " i książka nie została przeczytana.");
            }
        }
    }
}

var wiedzmin = new Ksiazka("Wiedźmin", "Andrzej Sapkowski", true);
var ludzkieZoo = new Ksiazka("Ludzkie zoo", "Marek Krajewski", false);
var erynie = new Ksiazka("Erynie", "Marek Krajewski", false);

var bazaKsiazek = [];
bazaKsiazek.push(wiedzmin, ludzkieZoo, erynie);

function iloscPrzeczytanych (element) {
        var iloscPrzeczytanychKsiazek = 0;
    
        for(var i = 0; i<element.length; i++) {
            console.log(element[i].opiszKsiazke());
            
        if(element[i].przeczytana ===true) {
            iloscPrzeczytanychKsiazek++        
        }
    } 
    return iloscPrzeczytanychKsiazek;
}

 iloscPrzeczytanych(bazaKsiazek);