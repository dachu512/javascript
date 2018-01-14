'use strict';

function iloczyn(parametr1, parametr2, parametr3) {
    var wynik = parametr1 * parametr2 * parametr3;
    return wynik;
}

var wynikGlobalny = iloczyn(3, 4, 1);
console.log(wynikGlobalny);

alert(wynikGlobalny);
