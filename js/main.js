
window.setInterval(()=>{
  if(keyPressed.RIGHT){
    camera.move(new Vec2(10,0));
    grid.drawGrid2(camera,ctx);
  }
   if(keyPressed.LEFT){
camera.move(new Vec2(-10,0));
grid.drawGrid2(camera,ctx);
   }
   if(keyPressed.UP){
camera.move(new Vec2(0,-10));
grid.drawGrid2(camera,ctx);
   }
   if(keyPressed.DOWN){
camera.move(new Vec2(0,10))
grid.drawGrid2(camera,ctx);
   }
},1000/90);


