function setup() {
  createCanvas(1200,400);
  log1 = new Log(200,100,50,200);
}



function draw() {
  background(255,255,255);  
 log1.display();
  drawSprites();
}