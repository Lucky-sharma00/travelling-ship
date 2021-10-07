
function preload(){
seaImg=loadImage("sea.png")
shipImg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,50,400,400)
  sea.addImage(seaImg)
  sea.velocityX=-2
  ship=createSprite(200,200,20,20)
  ship.addAnimation("shipmoving",shipImg)
  ship.scale=0.3
}

function draw() {
  background(seaImg);
  if(sea.x<0){
    sea.x=sea.width/2
  }
 drawSprites()
}