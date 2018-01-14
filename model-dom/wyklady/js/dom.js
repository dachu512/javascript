'use strict';

//console.log(window);
//
//console.log(document);
//console.log(document.decumentElement);
//console.log(document.head);
//console.log(document.body);

/*
var parFirst = document.getElementById('parFirst');
console.log(parFirst);

var link = document.getElementsByClassName('link');
console.log(link);

var linkiPoTagu = document.getElementsByTagName('p');
console.log(linkiPoTagu);

var wszystkieLinki = document.querySelectorAll(".link");
console.log(wszystkieLinki);

wszystkieLinki.forEach(function(link, index) {
    console.log(link.outerHTML);
})

wszystkieLinki.forEach(function(link, index) {
    console.log(link.innerHTML);
})

console.log( document.getElementById( "parFirst" ).children );
console.log( document.getElementById( "parFirst" ).childNodes );
console.log( document.getElementById( "parFirst" ).childNodes[1] );
console.log( document.getElementById( "parFirst" ).firstChild );
console.log( document.getElementById( "parFirst" ).lastChild );
*/



//-------------węzły:


/*var istniejacyWezel = document.getElementById('parSecond');

console.log(istniejacyWezel);

var newElement = document.createElement('p'); // stworz nowy element p

var newElement = document.createTextNode('To jest nowy paragraf');  // stworz tekst dla nowego elementu p

newElement.appendChild(newElementContent);

console.log(newElement);

istniejacyWezel.appendChild(newElement);

istniejacyWezel.removeChild(newElement);

var parFirtDiv = document.getElementById('parFirst');

var parFirstDiv.replaceChild(newElement, );*/





// dodaj znacznik <br> po kazdym linku i usun z nich atrybut klasy

var allLinks = document.getElementsByTagName('a');
console.log(allLinks);

for (var i = 0; i < allLinks.length; i++) {
    console.log(allLinks[i]);
    var br = document.createElement('br');
    allLinks[i].parentNode.insertBefore(br, allLinks[i].nextSibling);
    allLinks[i].removeAttribute('class'); //usun atrybut klasy
    allLinks[i].setAttribute('id', 'link-id-'+1);
    
}
