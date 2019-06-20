const canvas = document.querySelector('canvas'), ctx = canvas.getContext('2d'), grid = new Grid(400,400,50);

canvas.width = innerWidth*5;
canvas.height = innerHeight*5;

var  handleKeyPress, keyCode,  position = {
    x:innerWidth/2,
    y:innerHeight/2
 } 
, camera = new Camera(new Vec2(100,100),400,400);
grid.drawGrid2(camera,ctx);