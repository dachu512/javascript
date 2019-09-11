// Typy proste JS:
// -String
// -Number
// -Boolean
// -undefined
// -Null
// -Symbol

// Typy referenycjne:
// -obiekty

// ***

var name = "Wojtek";
var seven = 7;
var isTrue = true;
var undef;
var nul = null;
var object = {};

console.log(name + seven);
console.log(isTrue + object);
console.log(undef + object);
console.log(object + undef);

// ***

var width = "20px";
var sum = parseInt(width, 10) + 30; //10 is numeral system to be used
console.log(sum);

// ***

if(typeof age === "undefined") {
    var age = 31;
    console.log(age);
}

// ***

myVar1 = 11;
myVar2 = 7;

console.log(myVar1 + myVar2);
console.log(myVar1 - myVar2);
console.log(myVar1 * myVar2);
console.log(myVar1 / myVar2);
console.log(typeof myVar1);
console.log(typeof myVar2);

// ***
var text;
console.log(text);
var text = "przykładowy tekst";
console.log(text);

// ***

// console.log(text2);
let text2 = "przykładowy tekst";

// ***

let var1 = 20;
let var2 = 33;

var1++;
var2++;

console.log(var1 + " + " + var2 + " = " + (var1 + var2));

// ***

let a = 20;
let b = 20;

if( a === b ){
    console.log("zmienna a i b są takie same");
} else {
    console.log("zmienna a i b nie są takie same");
}

// ***

let txt = "";
txt += "linijka tekstu";
txt += " kolejna linijka tekstu";

console.log(txt);

// ***

let number1 = Math.random()*10 + 1;
let number2 = Math.random()*10 + 1;

if(number1 > number2){
    console.log(number1 + " jest wieksze od " + number2);
} else { 
    console.log(number1 + " jest mniejsze od " + number2);
}

// ***

let textString = "Dowolne zdanie";
console.log(textString + " ma" + " " + textString.length + " liter");

// ***

const textString2 = "Bardzo lubie jeść marchewke";
const words = textString2.split(" ");

console.log(words.length);

// ***

let nameString = "marcin";
let capitalLetterName = nameString.charAt(0).toUpperCase() + nameString.slice(1);
console.log(capitalLetterName);

// ***

const email = "wojtekzalewski@gmail.com";

if( email.indexOf('@') !== -1) {
    console.log("email zawiera @");
} else {
    console.log("email nie zawiera @");
}

// ***

const textString3 = "Uczę się stringów w C++";
const textString3New = textString3.slice(0, textString3.indexOf('C++')) + "JavaScript";

console.log(textString3New);

// ***

const textString4 = "ALA ma kota";
const textLowerCaseString4 = textString4.toLowerCase();
const textUpperCaseString4 = textString4.toUpperCase();
const replaceText = textString4.replace("ALA", "OLA");
console.log(textLowerCaseString4); 
console.log(textUpperCaseString4); 
console.log(replaceText);

// ***

let a2 = 2;
let b2 = 3;
let c2 = 4;

if(a2 > b2 && a2 > c2){
    console.log("a2 jest największa");
} else {
    if( b2 > c2 ) {
        console.log("b2 jest największe");
    } else {
        console.log("c2 jest największe");
    }
}

// ***

document.querySelector('#myForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const age = document.querySelector('#formAge').value;
    const ageNumber = Number(age, 10);

    console.log(ageNumber);

    if(!isNaN(ageNumber) && ageNumber >= 18) {
        console.log("wszystko ok");
    } else {
        console.log("dostęp zablokowany");
    }
});

// ***

let str = "";
for (let i=0; i<6; i++) {
    str += "*";
}
console.log(str);


// ***

let oneToten = "";

for ( let i= 1; i<=10; i++ ) {
    oneToten += i;
}
console.log(oneToten);

// ***

const txtFunctions = "Wojtek";

function print(txtFunctions){
    console.log(txtFunctions);
}

print();

// ***

let tab = ["tablica", "z", "pięcioma", "super", "tekstami"];
console.log(tab + " " + tab.length);

for( let i=0; i<tab.length; i++){
    console.log(tab[i], tab[i].length);
}

tab.push("!");
tab.unshift("Moja");

console.log(tab + " " + tab.length);

// ***

const tab2 = [];
for(let i=0; i<10; i++){
    tab2.push(Math.floor(Math.random()*10)+1);
}
tab2.sort(function(a,b){
    return a - b;
})

console.log(tab2);
console.log("najmniejszy element: " + tab2[0]);
console.log("największy element: " + tab2[tab2.length-1]);

// ***

const tab3 = [
    "xloremipsumdolor",
    "kloremipsum",
    "aloremipsumdol",
    "blor",
    "cloremipsu",
    "gloremip",
]

tab3.sort(function(a3,b3){
    return a3.length - b3.length
});

console.log(tab3);
const letterTogether = tab3.join("").length;
console.log(letterTogether);

// ***

const files = [
    "zdjecie.jpg",
    "wakacje.jpg",
    "kolekcja.filmow.jpg",
    "mem.gif",
    "wpis.na.blog.txt",
    "auto.png",
    "archiwum.zip",
    "dokument.txt",
    "paczka.zip",
    "kwiatek.png"
]

files.sort(function(a4,b4) {
    const a4Ext = a4.substr(a4.lastIndexOf('.')+1);
    const b4Ext = b4.substr(b4.lastIndexOf('.')+1);
    return a4Ext.localeCompare(b4Ext);
})

console.log(files);