
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,box1,box2,box3;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(600,490,1200,20);
	box1=new Box(1050,470,200,20);
	box2=new Box(1140,410,20,100);
	box3=new Box(960,410,20,100);
	paper=new Paper(40,450,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  paper.display();
  drawSprites();
 
}



