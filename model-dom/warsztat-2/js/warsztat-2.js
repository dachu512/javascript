/*function pobierzImie (event) {
    
    event.preventDefault();
       
    console.log(document.getElementsByName('fname')[0].value);
    console.log(document.getElementsByName('lname')[0].value);

}*/

/*

pobiera wszystkie poza submit
*/

function pobierzImie (event) {
    
    event.preventDefault();
    
    var inputs = document.querySelectorAll('input[type=text]');
       
for(var i = 0; i < inputs.length; i++)
    {
    console.log(inputs[i].value);
    }
}
