class Cell {
  constructor( a, b, position, cellWidth){
    this.xIndex = a ;
    this.yIndex = b ;
    this.position = position ;
    this.value = 0 ;
    this.cellWidth = cellWidth ;
    //for random distribution of balls in center of cell
    this.probability = Math.random()<0.1 ? true:false;     
    this.color = 'rgb('+Math.random()*255+','+Math.random()*255+','+Math.random()*255+')';
  }
  
  GetValue(){
    return this.value ;
  }

  SetValue(value){
    this.value = value ;
  }

  IncValue(){
    this.value = this.value + 1 ;
  }

  colorBox(ctx){
    // for test purpose
    if(this.probability){
    ctx.beginPath();
    ctx.arc(this.position.x+this.cellWidth/2,this.position.y+this.cellWidth/2,10,0,Math.PI*2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
    }
    ctx.strokeRect( this.position.x, this.position.y, this.cellWidth, this.cellWidth);

  }
}
