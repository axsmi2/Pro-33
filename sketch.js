var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var snow = [];

var bgMusic;

function preload(){
  bgImg= loadImage("Snowworld.png")
  bgMusic=loadSound("zenMusic.mp3");
}

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
    
}

function draw() {
  background(bgImg);
  textSize(20)

  bgMusic.play();

  Engine.update(engine);

  //display the paricles 
  if(frameCount%30==0){
   snow.push(new Snow(random(width/2-400,width/2+400),10,10));
  }

  for(var j=0; j< snow.length; j++){
   snow[j].display()
  }
}
