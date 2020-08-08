class cell{
  constructor(pos,r){
    this.pos = pos.copy();
    this.r = r;
  }
  show(){
    noStroke();
    fill(255,100);
    circle(this.pos.x,this.pos.y,this.r);
  }
  clicked(x,y){
    var dis = dist(this.pos.x,this.pos.y,x,y);
    if(dis<this.r)
      return true;
    else 
      return false;
  }
  
  mitosis(){
    var Offset = random(-this.r,this.r);
    this.pos.x+=Offset;
    this.pos.y+=Offset;
    cells.push(new cell(this.pos,this.r/2));
    this.pos.x-=Offset;
    this.pos.y-=Offset;
    cells.push(new cell(this.pos,this.r/2));
  }
  move(){
    var vel = p5.Vector.random2D();
    this.pos.add(vel);
    if(this.r <= 80){
      this.r+=0.5;
    }
  }
}