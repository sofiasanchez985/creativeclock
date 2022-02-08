var circlePosX = []
var circlePosY = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for(var i = 0; i < 60; i++){
    circlePosX[i] = random(0, width)
    circlePosY[i] = random(0, height)
  }
  
}

function draw() {
  background(50, 70, 70);
  
  // seconds
  noStroke()
  colorVal = map(second(), 0, 60, 100, 255)
  fill(colorVal-100, colorVal-20, colorVal-20)
  circle(width/2, height/2, second()*10)
  
  // minutes
  noFill()
  stroke(255)
  for(var i = 0; i < minute(); i++){
    circle(circlePosX[i],circlePosY[i], random(10,40))
  }
  
  // hours
  for(var i = 0; i < hour(); i ++){
    circle(width/2, height/2, i * 1.5 * hour())
  }
  
}
