//Napisz kod, który usunie liczby "3" z poniższej tablicy, a następnie wypisz poszczególne elementy
//tablicy (każda osobno) - wypisania dokonaj na 3 sposoby.
//var arr = [1, 2, 3, 4, 5, 6, 7, 3, 1, 10];

var arr = [1,2,3,4,5,6,7,3,1,10];

var usunLiczbe3 = arr.filter(function(el,i) {
    return el != '3';
});

console.log(usunLiczbe3);

//-------------------------------------------

//var arr = new Set ([1,2,3,4,5,6,7,3,1,10]);
//
//arr.delete('3');
//console.log(arr);

//----------------------------------------------

//var usunLiczbe3;
//
//for (var i = 0; i<usunLiczbe3.length; i++) {
//    
//    console.log(i,usunLiczbe3[i]);
//}

//------------------------------------------------

//usunLiczbe3.forEach(function(element) {
//    console.log(element);
//});



//usunLiczbe3.every(function(el,i){
//    
//    console.log(el);
//    
//    if (i.length) { 
//        return false;
//    } else {
//        return true;
//    }
//});
