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

// ***

const product1 = {
    name: "Kubek",
    price: 50,
    weight: 1 
}

const product2 = {
    name: "plakat",
    price: 30,
    weight: 0.03
}

console.log(product1);
console.log(product2);
console.log("Produkt numer jeden to: " + product1.name);
console.log("Produkt numer dwa to: " + product2.name);
console.log("Produkty kosztują razem: " + (product1.price + product2.price));
console.log("Produkty waźą razem: " + (product1.weight + product2.weight));

// ***
const currentUser = {
    name: "Piotr",
    surname: "Szwed",
    email: "pioszwed@mail.pl",
    www: "www.pszwed.pl",
    userType: "developer",
    show: function() {
        console.log("Imię: " + this.name);
        console.log("Nazwisko: " + this.surname);
        console.log("Email: " + this.email);
        console.log("Strona www: " + this.www);
        console.log("Typ: " + this.userType);
    }
}

currentUser.show();

// ***

const book = {
    title: "Erynie",
    author: "Marek Krajewski",
    pageCount: 300,
    publisher: "Znak",
    showDetails: function() {
        for (const i in this) {
            if (typeof this[i] !== "function"){
                console.log("Klucz: " + i);
                console.log("Wartość: " + this[i]);
            }
        }
    }
}

// ***

const users = [
    //id name surname email age value
    [  1, "Shauna", "Bradnocke", "sbradnocke0@altervista.org", 20, 108.28 ],
    [  2, "Mela", "Redman", "mredman1@nps.gov", 24, 267.37 ],
    [  3, "Othelia", "Lemon", "olemon2@slashdot.org", 15, 748.06 ],
    [  4, "Meier", "Cockell", "mcockell3@icio.us", 32, 1951.64 ],
    [  5, "Shellysheldon", "Gronowe", "sgronowe4@cnbc.com", 16, 1040.54 ],
    [  6, "Francisca", "Tofanini", "ftofanini5@gnu.org", 21, 1544.08 ],
    [  7, "Cliff", "Underwood", "cunderwood6@addtoany.com", 10, 451.21 ],
    [  8, "Caron", "Falshaw", "cfalshaw7@hugedomains.com", 27, 1968.72 ],
    [  9, "Anitra", "Warters", "awarters8@intel.com", 12, 380.68 ],
    [ 10, "Caitrin", "Baudrey", "cbaudrey9@ihg.com", 13, 1385.44 ]
]

function fixData(tab) {
    const newTab = [];
    for (const el of tab){
        const ob ={
            id: el[0],
            name: el[1],
            surname: el[2],
            email: el[3],
            age: el[4],
            money: el[5]
        }
        newTab.push(ob);
    }
    return newTab;
}

const fixTab = fixData(users);
console.log(fixTab);

let money = 0;
let age2 = 0;

for(const el of fixTab){
    money += el.money;
    age2 += el.age2;
}

const summary = {
    money: money,
    age2: age2,
    averageAge: age2/fixTab.length
}

// ***

function Car(name, brand, engine, mile, age) {
    this.name = name;
    this.brand = brand;
    this.engine = engine;
    this.mile = mile;
    this.age = age;
}

Car.prototype.printDetails = function() {
    console.log("Nazwa: ", this.name);
    console.log("Marka: " + this.brand);
    console.log("Silnik: " + this.engine);
    console.log("Przebieg: " + this.mile);
    console.log("Wiek: " + this.age);
}

const car1 = new Car("Corolla", "Toyota", 1.4, 240000, 15);
const car2 = new Car("Corsa", "Opel", 1.2, 120000, 11);
const car3 = new Car("Grand Vitara", "Suzuki", 2.0, 198000, 12);

// ***

const Enemy = function(name, live, speed, attack,posX) {
    this.name = name;
    this.live = 5;
    this.speed = speed;
    this.attack = attack;
    this.posX = posX;
}

Enemy.prototype.printName = function() {
    return "Jestem " + this.name + ". " 
}

Enemy.prototype.move = function() {
    this.posX = this.posX - this.speed;
    console.log(this.printName() + "Znajduje się na pozycji" + this.posX);
}

Enemy.prototype.attackEnemy = function() {
    console.log(this.printName() + "Atakuję gracza z pozycji " + this.posX + " z siłą " + this.attack);
}
Enemy.prototype.hit = function() {
    this.live--
    console.log(this.printName() + "Mam teraz życia " + this.live);
}

const e1 = new Enemy("Enemy1", 4, 10, 250);
e1.move();
e1.move();
e1.move();
e1.attackEnemy();

const e2 = new Enemy("Enemy2", 3, 15, 250);
e2.move();
e2.move();
e2.move();
e2.attackEnemy();
e2.hit();
e2.hit();
e2.hit();

// ***

String.prototype.sortText = function(char){
    const tab = this.split(char);
    tab.sort();

    const newStr = tab.join(char);
    return newStr;
}

console.log("Marcin|Ania|Piotrek|Beata".sortText('|'));

// ***

const ob = {
    time: 2000,
    pets: ["pies", "kot", "świnka"],
    print: function() {
        setTimeout(function() {
            for(const pet of this.pets) {
                console.log(pet.toUpperCase());
            }
        }.bind(this), this.time);
    }
}
ob.print();

// ***

const h2 = document.querySelector('.tasks-for-you-cnt h2');

console.log(h2);
console.dir(h2);

