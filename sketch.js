const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine,world;
var ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8;
var rope1, rope2, rope3, rope4, rope5;
var ground1, ground2, ground3, ground4, ground5, ground6, ground7;
var playButton, buttonImage;

function preload(){
  buttonImage = loadImage("button.jpg");
}

function setup() {
  createCanvas(2000,2000);

   engine = Engine.create();
   world = engine.world;


   //Creating balls
   ball1 = new Ball(400,700,100,100);
   ball2 = new Ball(500,700,100,100);
   ball3 = new Ball(600,700,100,100);
   ball4 = new Ball(700,700,100,100);
   ball5 = new Ball(800,700,100,100);


   //Creating ground
   ground1 = new Base(10,410,20,1000);
  // ground2 = new Base(60,610,1000,20);
   ground3 = new Base(1040, 610, 20, 1400);
   ground4 = new Base(0,0,2000,20);
   ground5 = new Base(100,910,2000,20);
   ground6 = new Base(0,910,20,1000);

   //Creating constraints
   rope1 = new Rope(ball1.body,{x:300,y:500});
   rope2 = new Rope(ball2.body,{x:400,y:500});
   rope3 = new Rope(ball3.body,{x:500,y:500});
   rope4 = new Rope(ball4.body,{x:600,y:500});
   rope5 = new Rope(ball5.body,{x:700,y:500});

   //Creating button sprite
   playButton = createSprite(100,100,10,10);
   playButton.addImage(buttonImage);
}

function draw() {
  background("lightblue");
  Engine.update(engine);

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();


  ground1.display();
  //ground2.display();
  ground3.display();
  ground4.display();
  ground5.display();
  ground6.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-0.1,y:0});
if(mousePressedOver(playButton)){
 	keyPressed();
}
  drawSprites();


}

function keyPressed(){


  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:1,y:0});
}

