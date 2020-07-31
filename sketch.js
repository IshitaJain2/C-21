var fixedRect,movingRect,shape1,shape2,shape3,shape4,shape5,shape6;

function setup() {
  createCanvas(1200,800);
 fixedRect =  createSprite(200, 200, 50,80);
 fixedRect.shapeColor = "green";
  movingRect = createSprite(200,200,80,50);
  movingRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect.debug = true;
  shape1 = createSprite(100,100,50,50);
  shape1.shapeColor = "green";
  shape2 = createSprite(200,100,50,50);
  shape2.shapeColor = "green";
  shape3 = createSprite(300,100,50,50);
  shape3.shapeColor = "green";
  shape4 = createSprite(400,100,50,50);
  shape4.shapeColor = "green";
  shape5 = createSprite(100,500,50,50);
  shape5.shapeColor = "blue";
  shape5.velocityX = 3;
  shape6 = createSprite(1100,500,50,50);
  shape6.shapeColor = "blue";
  shape6.velocityX = -3;
}

function draw() {
  background(0);  
movingRect.x = World.mouseX;
movingRect.y = World.mouseY;
if(isTouching(movingRect,shape1)){
movingRect.shapeColor = "red";
shape1.shapeColor = "red";
}
else{
movingRect.shapeColor = "green";
shape1.shapeColor = "green";
}

bounceOff(shape5,shape6);

  drawSprites();
}

function isTouching(object1,object2){
  //object1 = movingRect
  //object2 = fixedRect
  if (object1.x-object2.x < object2.width/2+object1.width/2
    && object2.x-object1.x <object2.width/2+object1.width/2
    && object1.y-object2.y < object2.height/2+object1.height/2
    && object2.y-object1.y < object2.height/2 + object1.height/2) {
    return true;
  }
  else{
    return false;
  }

}

function bounceOff (object1,object2){
if(isTouching(object1,object2)){
object1.velocityX = object1.velocityX*(-1);
object2.velocityX = object2.velocityX*(-1);
object1.velocityY = object1.velocityY*(-1);
object2.velocityY = object2.velocityY*(-1);
}

}