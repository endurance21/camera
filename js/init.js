const canvas = document.querySelector('canvas'), ctx = canvas.getContext('2d'), grid = new Grid(40,40,50);

canvas.width = innerWidth;
canvas.height = innerHeight;

var  handleKeyPress, keyCode,  position = {
    x:innerWidth/2,
    y:innerHeight/2
 } 
, camera = new Camera(new Vec2(300,100),innerWidth/2,innerHeight/2,grid);
grid.drawGrid2(camera,ctx);