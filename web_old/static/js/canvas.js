var canvas = document.getElementById('canvas_background'),
ctx = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener('resize', function(){
    //update canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});


