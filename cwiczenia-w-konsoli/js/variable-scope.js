//zasieg zmiennych z ang scope

var iloscOsoba1 = 3500;
var iloscOsoba2 = 5000;
var iloscOsoba3 = 7500;
var iloscOsoba4 = 2000;

//zmienna globalna:

var sumaKasy;

sumaKasy = iloscOsoba1 + iloscOsoba2 + iloscOsoba3;

console.log(sumaKasy);

function policzSumeKasy(iloscOsoba1, iloscOsoba2, iloscOsoba3) {
    
//    zmienna lokalna (dostęp tylko w obrebie funkcji, co innego niz zmienna globalna):    
    var sumaKasy;
    sumaKasy = iloscOsoba1 + iloscOsoba2 + iloscOsoba3 + iloscOsoba4;
    console.log(sumaKasy);
    var sumaKasyLokalnie - sumaKasy;    
    console.log("Kasa lokalnie wewnatrz funkcji: " + sumaKasyLokalnie);
}

policzSumeKasy(iloscOsoba1, 3000, iloscOsoba3);
console.log("Kasa lokalnie poza funkcja: " + sumaKasyLokalnie);



