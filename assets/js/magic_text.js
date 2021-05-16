/* Coded by Andrew Brown - licence*/
let information;
let information_split = [];
let counter = 0;

var opacity = 0;
var intervalID=0;

var element = document.getElementById('magic_text');

information = element.getAttribute('data-info');
information_split = information.split(",");

console.log(information_split);

fadeTimer = element.getAttribute('data-timer');


window.onload = function(){
    setUpTextFading();
}

function setUpTextFading(){
    window.setInterval(magicText, 2000);
    document.getElementById('magic_text').innerText = information_split[counter];
    counter+=1;
    show();
}


function magicText(){
    if(counter >= information_split.length){
        counter =0;
    }

    //change the text from the input and fade
    if(opacity<1){
        document.getElementById('magic_text').innerText = information_split[counter];
        fadeIn();
        counter+= 1;
    }
    else {
        fadeOut();
    }
}

//fade the text - make it slowly go clear
function fadeOut(){
    intervalID = setInterval(hide, fadeTimer);
}


//fade the text in - make it slowly come back
function fadeIn(){
    intervalID = setInterval(show, fadeTimer);
}

function hide(){
    opacity = Number(window.getComputedStyle(element).getPropertyValue("opacity"));

    if(opacity >0){
        opacity = opacity -0.05;
        element.style.opacity=opacity;
    }
    else {
        clearInterval(intervalID);
    }
}

function show(){
    opacity = Number(window.getComputedStyle(element).getPropertyValue("opacity"));

    if(opacity <1){
        opacity = opacity + 0.05;
        element.style.opacity=opacity;
    }
    else {
        clearInterval(intervalID);
    }
}


