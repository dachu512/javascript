'use strict';

function obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek) {
    if (podatek) {
        var OprocentowanieOpodatkowane = oprocentowanie - (oprocentowanie * 0, 19);
    } else {
        var OprocentowanieOpodatkowane = oprocentowanie;
    }

    var kapital = wplata * Math.pow(1 + (OprocentowanieOpodatkowane / okresKapitalizacji), iloscLat * okresKapitalizacji);

    return parseFloat(kapital).toFixed(2);

}

function oblicz() {

    var wplata = parseInt(document.getElementById('wplata').value);

    var iloscLat = parseInt(document.getElementById('ilosc-lat').value);

    var okresKapitalizacji = parseInt(document.getElementById('okres-kapitalizacji').value);
    
    var oprocentowanie = parseInt(document.getElementById('oprocentowanie').value)/100;

    var podatek = document.getElementById('podatek').checked;
    
    var wynik = obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek);
    
    document.getElementById('wynik').innerHTML = wynik;
    
}

function kapital() {
    
}