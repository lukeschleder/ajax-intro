

$(document).ready(onReady);

function onReady(){
    console.log('jQuery is Ready');
    $.ajax({
        url: '/quotes',
        method: 'GET'
    }).then(function(response){
        console.log(response);
        $("body").append(`<li>${response[0].quote}</li>`);
        
        
    });
}

// function sendToDisplay(array){
//     $('body').append(`<ul>`);
//     array.forEach(function(input))
// }
