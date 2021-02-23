const canvas = document.getElementById('myCanvas');

const ctx = canvas.getContext('2d');
console.log(ctx); //view all the methods we need to see


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particalesArray = [];

const numberOfParticles = 1000;

let colours = ['#00FFFF', '#FF00FF', '#FFFF00']


class Particle {

    constructor(x, y){
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 2;
        this.carryWeight = Math.random() * 1 + 1;
        this.weight = this.carryWeight;
        this.directionX = Math.random() * 1 + 1;
        this.colour = colours[Math.floor(Math.random() * particalesArray.length)];

    }

    update(){
        if(this.y > canvas.height){
            this.y = 0 - 10;
            this.weight = this.carryWeight;
            this.x = Math.random() * canvas.width;
        }

        if(this.x > canvas.width){
            this.x = 0 - 10;
        }

        this.weight += 0.01;
        this.y += this.weight;
        this.x += this.directionX;
    }

    draw(){
        ctx.fillStyle = this.colour;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}


function init(){
    for (i = 0; i < numberOfParticles; i++){
        const tempX = Math.random() * canvas.width;
        const tempY = Math.random() * canvas.height;
        particalesArray.push(new Particle(tempX, tempY));
        console.log("Created particle: " + i);
    }
}



function main(){
    init();
    animate();
}



function animate(){

    ctx.fillStyle = 'rgba(0, 0, 0, 0.01)';
    ctx.fillRect(0,0, canvas.width, canvas.height);

    for (i = 0; i < particalesArray.length ; i++){
        particalesArray[i].draw();
        particalesArray[i].update();
    }

    requestAnimationFrame(animate); //recursion
}

main();
