const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld;
var bg;
var ground;
var tank1,tank2;
var turret1,turret2;
var rotatedDegrees;
var rocket;
var rockets=[];
function preload(){
bg=loadImage("Images/background.png")

}
function setup(){
    createCanvas(innerWidth,innerHeight);
myEngine=Engine.create();
myWorld=myEngine.world;


ground=new Ground(innerWidth/2,innerHeight-80,innerWidth,10)
tank1=new Tank(innerWidth/3-130,innerHeight-120)
tank2=new Tank2(innerWidth-420,innerHeight-120)
turret1=new Turret(890,495,130,100,-PI/4)
turret2=new Turret2(250,430,20,30,PI/4)
rotatedDegrees=0;
}
function draw(){
background(bg);


tank1.display();
tank2.display();
ground.display();
turret1.display();
turret2.display();
for(var x=0;x<rockets.length;x++)
{
  rockets[x].display();
}
;
 //rotating the turret
 if(keyDown(UP_ARROW) && rotatedDegrees<15){
    console.log("pressed up");
    turret1.rotateUp();
    rotatedDegrees++;
  }

  if(keyDown(DOWN_ARROW)&& rotatedDegrees >-25) {
    //console.log(rotatedDegrees);
    turret1.rotateDown();
    rotatedDegrees--;
  }

 if(keyDown(RIGHT_ARROW) && rotatedDegrees<-15){
  console.log("pressed up");
     turret2.rotateUp();
     rotatedDegrees++;
 }
if(keyDown(LEFT_ARROW) && rotatedDegrees >25){
  turret2.rotateDown();
  rotatedDegrees--;
}

//text(mouseX+" "+mouseY,mouseX,mouseY);

}
function keyPressed(){
  if(keyCode===32){
    console.log("key pressed");
    rocket=new Rocket(0,0,50,70,rotatedDegrees);

Matter.Body.setPosition(rocket.body, {x: turret1.body.position.x - 50, y: turret1.body.position.y - rotatedDegrees/3});
        
rockets.push(rocket);
  }
}
