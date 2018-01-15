//Napisz funkcję, która posortuje rosnąco poniższą tablice (a elementy które nie są liczbami, usunie).
//var arr = ["1", "test", 2, 10, 20, NaN, true, false];

var arr = ["1","test",2,10,20,NaN,true,false];

    var onlyNumbers = arr.filter(
        element => !isNaN(element) && typeof element === 'number'
    ); 

        var sorted = onlyNumbers.sort(function(a,b){
            return a-b
        });
 
console.log(sorted);