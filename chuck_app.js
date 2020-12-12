/* jshint esversion: 6 */


// JS - API Chuck Norris
//----------------------
// 

document.querySelector(".get-jokes-button").addEventListener('click', validate);


function getJokes(number){

    //AJAX
    // API Stuff - http://api.icndb.com/jokes/random/3  will return a tuple with 3 random jokes.
    // One joke looks like: { "type": "success", "value": { "id": 268, "joke": "Time waits for no man. Unless that man is Chuck Norris." } }
    xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
    xhr.onload = function(){
        if(this.status === 200){
            const responce = JSON.parse(this.responseText);
            console.log("AJAX Responce - " + JSON.stringify(this.responseText))

            let output = '';

            // Check the api returns "type": "success"
            if(responce.type == 'success'){

                // We only want the joke inside the value section.
                responce.value.forEach(function(joke){
                    output += `<li>${joke.joke}</li>`;
                });

            }
            else {
                output += "<li>Chuck Norris doesn't make errors, this must be your fault!</li>"
            }

            // Insert data into webpage
            // <ul class="jokes"></ul>
            document.querySelector('.chuck-jokes').innerHTML = output;
        }
    };
    xhr.send();
}

function validate(e){

    // Grab the number of jokes from the form field.


    //  Don't need to worry about users inputting text as the form only takes numbers.
    //  <input type="number" id="number">
    const number = document.querySelector('input[type="number"]').value;

    // Hidden message field for user feedback
    let message = " ";

    if(number > 30) {
        message = "<p>Sorry. No more than 30 jokes or Chuck gets angry!</p>";
        console.log(" > 30 error");
    }
    else if (number < 1){
        message = "<p>Sorry. Chuck isn't a nothing or negative in any way.</p>";
        console.log(" < 1 error");
    }
    else {
        // Talk to the Chuck API and use AJAX to insert jokes into the page.
        getJokes(number);
        console.log("running getJokes");
    }

    document.querySelector('.message').innerHTML = message;
    console.log("Message: " + message);

    e.preventDefault();
}