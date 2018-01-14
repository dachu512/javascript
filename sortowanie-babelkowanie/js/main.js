'use script';

var tablica = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

function sortowanieBabelkowe(element) {
    for(var index = 0; index<element.length; index++) {
        for (var i = 0; i < element.length - 1; i++) {

        if (element[i] > element[i + 1]) {
            temp = element[i];
            element[i] = element[i + 1];
            element[i + 1] = temp;
            swap = true;
        }
    }
}
    return element;
}


var tablica = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

sortowanieBabelkowe(tablica);
console.log(sortowanieBabelkowe(tablica));
