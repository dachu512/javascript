//Napisz funkcję mathSign(x), która w przypadku liczby zwróci znak liczby (1 w przypadku liczby
//dodatniej i -1 w przypadku liczby ujemnej).
//Funkcja po użyciu w konsoli powinna dawać takie wyniki:
//console.log(mathSign(7)) // 1
//console.log(mathSign(0)) // 0
//console.log(mathSign(-0)) // -0
//console.log(mathSign(-7)) // -1
//console.log(mathSign(NaN)) // NaN


function mathSign (x) {
  
  if ( x > 0 ) return 1;
  if ( x < 0 ) return -1;  
  if (x == 0 ) return 0;
  if (x == -0 ) return -0;
  if ( x !== NaN) return NaN;
  
}

console.log ( mathSign (7) );