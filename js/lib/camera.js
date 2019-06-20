
class Camera{
    constructor(position,width,height){
        this.position = position;
        this.width = width;
        this.height = height;
        
    } 
    move(velocity){
        if(this.position.x<=0)
          if(velocity.x>0)
         this.position.x+=velocity.x;
        if(this.position.x>0)
        this.position.x+=velocity.x;

        if(this.position.y<=0)
           if(velocity.y>0)
         this.position.y+=velocity.y;
         if(this.position.y>0)
        this.position.y+=velocity.y;
    
    }
    

}

