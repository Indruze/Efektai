/* var pareigos = 'programuotjas';
var valandos = 4;
var vieta = 'Vilniuje';
var sakinys = 'Kernius yra '+pareigos +vieta +',dirba nuo '+valandos +'valandos.';

document.getElementById("demo").innerHTML = sakinys;*/

/*function amzius(form) {
    form.answer.value = form.dogsYears.value*7;
}*/


/*function check() {
    var firstNumber = parseInt(document.getElementById('firstNumber').value);
    var secondNumber = parseInt(document.getElementById('secondNumber').value);

    if (firstNumber > secondNumber) {
        var show = document.getElementById('demo').innerHTML = firstNumber + ' daugiau už ' + secondNumber;
    }
    else {
        var show = document.getElementById('demo').innerHTML = firstNumber + ' mažiau už ' + secondNumber;
    }
}*/

/*function farengeit(form) {
    form.answer.value = form.celsius.value * 3.13333333333333333
}*/



/*function france() {
    document.getElementById("demo").innerHTML = "Bonjour Monde!";
}
function spain() {
    document.getElementById("demo").innerHTML = "Hola, Mundo!";
}
function england() {
    document.getElementById("demo").innerHTML = "Hello World!";
}
function lithuania() {
    document.getElementById("demo").innerHTML = "Labas, Pasauli!";
}*/



/*function language(a){
    if (a == 'fr') {
        document.getElementById('demo').innerHTML = "Bonjour Monde!";
    }
    else if (a == 'es') {
        document.getElementById('demo').innerHTML = "Hola, Mundo!";
    }
    else if (a == 'en') {
        document.getElementById('demo').innerHTML = "Hello World!";
    }
    else if (a == 'lt') {
        document.getElementById('demo').innerHTML = "Labas, Pasauli!";
    }
}*/

/*function check() {
    var animal = document.getElementById('animal').value;
    var number = parseInt(document.getElementById('number').value);

    if (number > 1) {
        var show = document.getElementById('demo').innerHTML = number + ' ' + animal + 's ';
    }
    else {
        var show = document.getElementById('demo').innerHTML = number + ' ' + animal;
    }
}*/

function getRandom() {
    var inputLetters = document.getElementById("insertedLetters").value;
    document.getElementById("showRandom").innerHTML = "Ivestos raides: " + inputLetters;
    loop();
}

var i = 0;
var letterNow;
var time;

function loop() {
    setTimeout(function(){
        var inputLetters = document.getElementById("insertedLetters").value;

        if( i == inputLetters.length - 1) {
            i = 0;
        } else {
            console.log(letterNow = inputLetters[i]);
            i++;

        }
        loop();
    }, 2000);
}


function getAnswer() {


    var guess = document.getElementById("insertedGuess").value;
    if (guess == letterNow) {
        document.getElementById("youWon").innerHTML = "YOU WON!";
        clearTimeout(time);
    } else {
        document.getElementById("tryAgain").innerHTML = "Try again";
    }
}
/* Created by Indrė on 2017-10-18. */
