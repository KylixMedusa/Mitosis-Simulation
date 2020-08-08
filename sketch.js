cells=[];
function setup() {
  createCanvas(400, 400);
  var pos = createVector(random(100,width-100),random(100,height-100));
  cells.push(new cell(pos,80));
  pos = createVector(random(100,width-100),random(100,height-100));
  cells.push(new cell(pos,80));
}
function mousePressed(){
  for(var i=cells.length-1;i>=0;i--){
    if(cells[i].clicked(mouseX,mouseY)){
       cells[i].mitosis();
       cells.splice(i,1);
    }
  }
}

function draw() {
  background(220);
  for(var i=cells.length-1;i>=0;i--){
    cells[i].show();
    cells[i].move();
  }
}