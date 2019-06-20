class Grid {
    constructor( row = 0, column = 0, cellWidth = 0){
      this.row = row ;
      this.column = column ;
      this.cellWidth = cellWidth ;
      this.cell = [];
      for (let i = 0; i < this.row ; i++) {
        this.cell[i] = [];
      }
  
  
      this.intitializeCell();
    }
  
    intitializeCell(){
      for (let i = 0; i < this.row; i++) {
        for (let j = 0; j < this.column; j++) {
          let position = new Vec2(j*this.cellWidth,i*this.cellWidth);
          this.cell[i][j] = new Cell ( i, j, position , this.cellWidth);
        }
      }
    }
  
  //changed the drwaGrid function for camera implementation
    drawGrid2(camera,ctx){
      let map = this;
      let x = 0 ,y = 0;
      let startCol = Math.floor(camera.position.x / map.cellWidth);
      let endCol = startCol + (camera.width / map.cellWidth);
      let startRow = Math.floor(camera.position.y / map.cellWidth);
      let endRow = startRow + (camera.height / map.cellWidth);
      ctx.clearRect(0,0,canvas.width,canvas.height);
      for (let i = startRow; i < endRow; i++) {
        for (let j = startCol; j < endCol; j++){
          this.cell[i][j].x = x + this.cellWidth/2;
          this.cell[i][j].y = y + this.cellWidth/2;
          this.cell[i][j].colorBox(ctx);
          x = x + this.cellWidth;
        }
      }
      x = 0;
      y = y + this.cellWidth;
    }
  
  }
  