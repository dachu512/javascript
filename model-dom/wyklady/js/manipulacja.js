'use strict';

var mainHeader = document.getElementById('main-header'); // przypisanie nagłówka strony do zmiennej

mainHeader.innerHTML = 'Treść nagłówka'; //dodajemy tresc do nagłówka

var link = document.getElementsByClassName('link')[0]; //przypisujemy pierwszy link do zmiennej

link.href = 'http://akademia108.pl'; // nadpisuje atrybut href w linku

console.log(link.classList);

/*link.className = 'nowa-klasa'; //nadpisuje nazwe klasy w linku*/

link.className += ' nowa-klasa';

mainHeader.style.color = "#11aa22";
