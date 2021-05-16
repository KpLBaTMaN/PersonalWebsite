const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');



  //<div>
  var divElement = document.getElementById('Instructions'); 

  //console.log(divElement.offsetHeight); //height of div 


  
  //update canvas size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - divElement.offsetHeight ;
 

//Set up window the size of the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

//Options
const numberOfParticles =20;                // Number of particles to draw
const size = 15;                            // Particle size
const colour = '#000000';                     // Particle color
const speed = 2;                            // Particle speed

//Options for controlling the particle speed
const particleShiftSpeed = 0.05;

//Line Options
const lineColourSelection = ['red', 'orange', 'yellow', 'green', 'pink'];
var lineColour = lineColourSelection[Math.floor(Math.random()*lineColourSelection.length)];


//Options control states
var left_press = false;
var up_press = false;
var right_press = false;
var down_press = false;





//creates all objects before processing
function init(){
    particlesArray = [];
    lineColour = lineColourSelection[Math.floor(Math.random()*lineColourSelection.length)];

    //Produces all the particles
    for (i = 0; i < numberOfParticles; i++){
        
        const tempX = Math.random() * canvas.width;         //random x on screen
        const tempY = Math.random() * canvas.height;        //random y on screen
        

        particlesArray.push(new Particle(tempX, tempY, colour, size, speed));    //push onto the array

    }
}


//Connects the lines togther for each particle on the screen
function joinLines(){

    for (k = 0; k < particlesArray.length; k++){
        for(j = k; j < particlesArray.length; j++){
            ctx.strokeStyle = lineColour;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[k].x, particlesArray[k].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
        }
    }

}




//Order matters when animate - mostly with draw layers
function animate(){

    //background - colour black
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0,0, canvas.width, canvas.height);

    

    controls();

    joinLines();
    //shows all the particles on the screen
    for (i = 0; i < particlesArray.length ; i++){
        particlesArray[i].draw();
        particlesArray[i].update();
    }


    requestAnimationFrame(animate); //recursion
}


function controls(){
    //particleShiftSpeed
    if(left_press == true){
        for (i = 0; i < particlesArray.length ; i++){ 
            particlesArray[i].velocity_x -= particleShiftSpeed;
        }
    }
    if(right_press == true){
        for (i = 0; i < particlesArray.length ; i++){ 
            particlesArray[i].velocity_x += particleShiftSpeed;
         
            
        }
    }
    if(up_press == true){
        for (i = 0; i < particlesArray.length ; i++){ 
           
            particlesArray[i].velocity_y -= particleShiftSpeed;
            
        }
    }
    if(down_press == true){
        for (i = 0; i < particlesArray.length ; i++){ 
            particlesArray[i].velocity_y += particleShiftSpeed;
        }
    }
    
   
}

//main for order to run
function main(){
    init(); //run this first to generate the stuff
    animate(); //runs the show
}

//Run first
main();

//when the user resizes the webpage - do this.
window.addEventListener('resize', function(){

    //<div>
    var divElement = document.getElementById('Instructions'); 

    //console.log(divElement.offsetHeight); //height of div 


    
    //update canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - divElement.offsetHeight ;
   
    //recreates the particles
    init();
});



// var timeState = false;

// window.addEventListener('mousedown', function(){

//     timeState = true;
    
//     console.log("freeze");

// });

// window.addEventListener('mouseup', function(){

//     timeState = false;

//     // for (i = 0; i < particlesArray.length ; i++){
//     //     particlesArray[i].randomDirection();
//     // }
//     console.log("unfreeze");

// });



window.addEventListener('keydown',this.checkdown,false);
window.addEventListener('keyup',this.checkup,false);
window.addEventListener('mousedown', init, false)

// Use this to check for keypress codes
// function check(e) {
//     console.log(e.keyCode)
// }


//developed a bit of extra code
// function check(e) {
//     var code = e.keyCode;
//     switch (code) {
//         case 37: console.log("Left"); break; //Left key
//         case 38: console.log("Up"); break; //Up key
//         case 39: console.log("Right"); break; //Right key
//         case 40: console.log("Down"); break; //Down key
//         default: ; //Everything else
//     }
// }




function checkdown(e) {
    var code = e.keyCode;
    switch (code) {
        case 37: left_press=true; break; //Left key
        case 38: up_press=true; break; //Up key
        case 39: right_press=true; break; //Right key
        case 40: down_press=true; break; //Down key
        default: ; //Everything else
    }
}

function checkup(e) {
    var code = e.keyCode;
    switch (code) {
        case 37: left_press=false; break; //Left key
        case 38: up_press=false; break; //Up key
        case 39: right_press=false; break; //Right key
        case 40: down_press=false; break; //Down key
        default: ; //Everything else
    }
}

