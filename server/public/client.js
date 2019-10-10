

$(document).ready(onReady);

function onReady(){
    $('#quoteButton').on('click', newQuote)
    console.log('jQuery is Ready');
    //get all quotes and append to DOM
    $.ajax({
        url: '/quotes',
        method: 'GET'
    }).then(function(response){
        console.log(response);
        $('body').append(`<ul></ul>`);
        console.log(response);
        for (let quotes of response) {
            $('ul').append(`<li>${quotes.quote}<p>${quotes.author}</p></li>`);
        }
        
        
        
        
        
    });

    function newQuote(){
        $.ajax({
            url: '/new-quote',
            method: 'POST'
        }).then(function(response){
            console.log(response);
            $('ul').remove();
            $.ajax({
                url: '/quotes',
                method: 'GET'
            }).then(function(response){
                console.log(response);
                $('body').append(`<ul></ul>`);
                console.log(response);
                for (let quotes of response) {
                    $('ul').append(`<li>${quotes.quote}<p>${quotes.author}</p></li>`);
                }
                
                
                
                
                
            });
            
            
            
            
            
            
        });
    }
}

// function getAllQuotes(){

// }

// function handleNewQuoteClick(){
//     console.log('button was clicked!');
//     $.ajax({
//         url: '/new-quote',
//         method: 'GET'
//     }).then(function(){
//         getAllQuotes();
//     })
// }

// function sendToDisplay(array){
//     $('body').append(`<ul>`);
//     array.forEach(function(input))
// }
