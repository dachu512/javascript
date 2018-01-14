// zadanie-1

function odwrocString(napis) {
    return napis.split("").reverse().join("");
}

console.log(odwrocString('Akademia108'));

//zadanie-2

function sortuj(napis) {
    return napis.split("").sort().join("");
}

console.log(sortuj('Akademia108'));

//zadanie-3

var tablica = [1, 2, 3, 4, 5, 6];

function sumaIloczyn(tablica) {
    var suma = 0;
    var iloczyn = 1;
    tablica.forEach(function (element) {
        suma += element;
        iloczyn *= element;
    });

    console.log('suma: ', suma);
    console.log('iloczyn:', iloczyn);
}

sumaIloczyn(tablica);

//zadanie-4

var tablica = [1, 2, 3, 4, 5, 6];
var suma = 0;

function sumaKwadratow(tablica) {

    tablica.forEach(function (item) {
        suma += Math.pow(item,2);
    });

    console.log('Suma kwadratów: ', suma);
}

sumaKwadratow(tablica);