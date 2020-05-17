var movingRect,fixedRect;
var rect1,rect2,rect3;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 200, 50, 50);
  movingRect=createSprite(400,200,50,50);

  fixedRect.shapeColor="green";
  movingRect.shapeColor="red";
  fixedRect.velocityX=4;
  movingRect.velocityX=-4;

  rect1 = createSprite(100,300,70,30);
  rect1.shapeColor="blue";
  rect1.velocityY=4;

  
  rect2 = createSprite(100,200,70,30);
  rect2.shapeColor="blue";
  rect2.velocityY=-4;
}

function draw() {
  background(0);  

  //movingRect.x=World.mouseX;
  //movingRect.y=World.mouseY;

BounceOff(fixedRect,movingRect);
BounceOff(rect1,rect2);

  drawSprites();
}

