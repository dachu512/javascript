// Repetition of JavaScript from w3school

// JS is to program behaviors of webpage
// was invented by Brendan Eich in 1995
// ECMAscript is official name from 1997

var carName; //value undefined
var x = "5" + 2 + 3 //output: 523 - if you start from string , rest of number will be treated as as strings
var y = 2 + 3 +"5" //output: 55

// x += y same as x = x + y

var a = 10;
a += 5; // output: a = a + 10 = 15;

var z = "Volvo" + 16 + 4; //Output: Volvo164;

// object: 
var person = {
    firstName : "Jan",
    lastName : "Kowalski",
    age : 50,
    eyeColor : "blue"
}

// data type of null is object

// type of undefined is undefined
// type of null is object

// Primitive data: number, string, undefined, boolean, null
// Complex data: function, object

// type of array is object
// type of function is function

// String can be object:
// var b = new String("John") //return object

var x = "John";
var y = new String("John");

// (x == y ) is true - same value;
//( x === y ) is false - different type (string and object);

var x = new String("Jan");
var y = new String("Jan");

// ( x == y) is false - different objects

// indexOf() and lastIndexOf() returns -1 if the text is not found

slice(7,13); //extracts from string

// substr() is similar to slice() 
concat() //joins two or more strings
trim() //

var x = "100";
var y = "10";

var z = x/y //10
var zz = x*y //1000
var zzz = x - y //90
var zzzz = x + y //10010
var x = 100/"apple" //NaN
var xx = 100/"10" //10
var xxx = NaN + 5 //NaN 

type of NaN //number
type of infinity //number

var d = 2/0 //infinity
var dd = new Number(123) //type of object

// arrays are objects

// looping array:

fruits = ["Banana", "Orange", "Apple", "Mango"];
text = "<ul>";
for ( i = 0; i < fruits.length[i] + i++){
    text = text + "<li>" + fruits[i] + "</li>"; 
}
text +="<ul>";

// arrays use numbered indexes
// objects use named indexes

var points = [] //creates new array
// boolean value of 0 is false
// boolean value of -0 is false
// boolean value of empty string is false
// boolean value of null and undefined and NaN is false

// There are 6 types of objects:
// object, array, date, string, number, Boolean

5 + null //return 5 
"5" + null //return "5null"
"5" + 2 //return "52"
"5" - 2 // return 3
"5" * "2" //return 10


// BOM - Browser Object Model

// cookies - data stored in small text files. Are invented to remember information about the user

// AJAX - Asynchronous JavaSript And XML. Let working on data without reload the page
// XMLHttpRequest Object - to exchange data with a server
var xhttp = new XMLHttpRequest();

// GET is simpler and faster than POST and can be used in most cases
// POST is more secure than GET , has no size limitations

// JSON - JavaScript Object Notation. Is syntax for exchanging data









