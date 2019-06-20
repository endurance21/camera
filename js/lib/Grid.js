class Grid {
    constructor( row = 0, column = 0, cellWidth = 0){
      this.row = row ;
      this.column = column ;
      this.cellWidth = cellWidth ;
      this.width = this.cellWidth*this.column;
      this.height = this.cellWidth*this.row;
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
      let x = camera.position.x ,y = camera.position.y;
      let startCol = Math.floor(camera.viewport.x / map.cellWidth);
      let endCol = startCol + Math.floor((camera.width / map.cellWidth));
      let startRow = Math.floor(camera.viewport .y / map.cellWidth);
      let endRow = startRow + Math.floor((camera.height / map.cellWidth));
      ctx.clearRect(0,0,canvas.width,canvas.height);
      for (let i = startRow; i < endRow; i++) {
        console.log(endCol)

        for (let j = startCol; j < endCol; j++){
          this.cell[i][j].position.x = x ;
          this.cell[i][j].position.y = y ;
          this.cell[i][j].colorBox(ctx);
          x = x + this.cellWidth;
        }
      x = camera.position.x;
      y = y + this.cellWidth;

      }
    }
  
  }
  