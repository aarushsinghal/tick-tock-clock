var m,h,s;
var mAngle,hAngle,sAngle;

function setup() {
  createCanvas(1000,1000);
  angleMode(DEGREES)
}

function draw() {
  background(0,0,0);  
  h=hour()
  m=minute()
  s=second()
  console.log(s);

  sAngle=map(s,0,60,0,360)
  mAngle=map(m,0,60,0,360)
  hAngle=map(h,0,12,0,360)
  
  stroke(255,255,255)
  strokeWeight(8)
  ellipseMode(CENTER)
  ellipse(500,500,610,610)
  translate(500,500)

  push()
  rotate(sAngle)
  stroke(255,255,255)
  strokeWeight(8)
  line(0,0,300,0)
  pop()

  push()
  rotate(mAngle)
  stroke(255,255,255)
  strokeWeight(8)
  line(0,0,280,0)
  pop()

  push()
  rotate(hAngle)
  stroke(255,255,255)
  strokeWeight(8)
  line(0,0,260,0)
  pop()
  drawSprites();
}