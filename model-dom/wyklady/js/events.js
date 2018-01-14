'use strict';

var secondLink = document.getElementsByTagName('a')[1];

function alarm(event) {
    event.preventDefault();
    alert('kliknieto w linkaaaa');
}

secondLink.onclick = alarm;

var firstLink = document.getElementsByTagName('a')[0];

firstLink.addEventListener('click', alarm);
firstLink.removeEventListener('click', alarm);

function klikHeader() {
    console.log('kliknales w header');
}

document.getElementsByTagName('header')
[0].addEventListener('click', klikHeader);

function klikH1(e) {
    console.log('Kliknales w h1');
}

document.getElementsByTagName('h1')[0].addEventListener('click', function(e){
    e.stopPropagation(); //zeby klikac tylko na h1,bo h1 jest w header
    console.log('kliknales w h1');
});










