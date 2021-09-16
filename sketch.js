
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

var bob1;
var bob2;
var bob3;
var bob4;
var bob5;

var roof;

var bobdiametre;

var startbobposx;
var startbobposy;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

  bobdiametre = 40;
  startbobposx = width/2;
  startbobposy = height/4+300;

	engine = Engine.create();
	world = engine.world;
    roof = new Roof(width/2 , height/4 , width/5 , 20);
	//Create the Bodies Here.
	bob1= new Bob(startbobposx-bobdiametre*2 , startbobposy,bobdiametre);
  bob2 = new Bob(startbobposx-bobdiametre , startbobposy,bobdiametre);
  bob3 = new Bob(startbobposx , startbobposy,bobdiametre);
  bob4 = new Bob(startbobposx+bobdiametre , startbobposy,bobdiametre);
  bob5 = new Bob(startbobposx+bobdiametre*2 , startbobposy,bobdiametre);

	rope1= new Rope(bob1.body , roof.body,-bobdiametre*2,0);
  rope2= new Rope(bob2.body , roof.body,-bobdiametre*1,0);
  rope3= new Rope(bob3.body , roof.body,0,0);
  rope4= new Rope(bob4.body , roof.body,bobdiametre*1,0);
  rope5= new Rope(bob5.body , roof.body,bobdiametre*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("turquoise");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();

  Engine.update(engine);
  
  drawSprites();
 
}

function keyPressed(){
  if(keyDown("up")){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-10});
  }
}


