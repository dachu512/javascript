'use strict';

for (var i = 10; i > 0;i--) {
    console.log(i);
}

///* for each */
//
//var iminoa = ['Wojtek', 'Krystian', 'Zenek'];
//
//imiona.forEach(function(element, index ) {
//console.log(Element z Indexem: '+ index + ' ma wartość '+ element );
//});
    
    
    for(var i = 0; i< 3; i++) {
        for(var j = 0; j < 4;j++) {
            if(j == 2) {
                break;
            }
            
            console.log('i = '+i+',j = '+j);
            
        }
    }