
class Camera{
    constructor(position,width,height,grid){
        this.position = position;
        this.width = width;
        this.height = height;
        this.maxX = grid.width-this.width;
        this.maxY = grid.height-this.height; 
        this.viewport  = {x:0,y:0};
        
    } 
    move(velocity){
        if(velocity.x>0){
         if(this.viewport.x<=this.maxX)
          this.viewport.x+=velocity.x; 
        }
        if(velocity.x<0){
            if(this.viewport.x>0)
             this.viewport.x+=velocity.x; 
        }
        if(velocity.y>0){
            if(this.viewport.y<=this.maxY)
             this.viewport.y+=velocity.y; 
        }
        if(velocity.y<0){     
            if(this.viewport.y>0)
            this.viewport.y+=velocity.y; 
           }
           
    }
    

}

