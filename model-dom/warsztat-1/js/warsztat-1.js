'use strickt';

/*function ustawTlo() {
    document.getElementsByTagName('p')[0].style.background = 'red';
    document.getElementsByTagName('p')[1].style.background = 'yellow';
}    
    document.getElementById("przycisk").addEventListener('click', ustawTlo);*/

/*for (var i=0; i < document.getElementsByTagName('p').lenth,i++) {
    if(i%2 == 0) {
        
        document.getElementsByTagName('p')[i].style.background = 'red';
        else {
    document.getElementsByTagName('p')[i].style.background = 'yellow';

}}*/

function ustawTlo() {
    var pParzyste = document.querySelectorAll('p:nth-child(2n)');
    pParzyste.forEach(function (paragraf) {
        paragraf.style.background = "red";
    });

    var pNieparzyste = document.querySelectorAll('p:nth-child(2n-1)');
    pNieparzyste.forEach(function (paragraf) {
        paragraf.style.background = "yellow";
    });
    
}

document.getElementById('przycisk')

function zerujTlo() {
    for(var i =0; i < document.getElementsByTagName('p').length; i++) {
        document.getElementsByTagName('p')[i].style.background = '';
    }
}



