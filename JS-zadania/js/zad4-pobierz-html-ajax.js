$.ajax({
    url: "https://www.webankieta.pl/",
    dataType: '',
    success: function (data) {
        console.log(data);   
        
        var wyswietlPraca = $("div:contains('praca')");
        console.log(wyswietlPraca);

    },
    onerror: function (msg) {
        console.log(msg);
    }
    
});



