
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,myWorld;

var paper1;
var brick1,brick2,brick3;
var ground1;


function preload()
{}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	myWorld = engine.world;

	paper1=new Circlepaper(200,580,26);
	brick1=new Dustbin(400,550,7,125);
	brick2=new Dustbin(600,550,7,125);
	brick3=new Dustbin(500,600,200,7);
	ground=new Ground(400,610,800,10);


	//Create the Bodies Here.
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);

  paper1.display();
  brick1.display();
  brick2.display();
  brick3.display();
  ground.display();
  
  //keyPressed();
  drawSprites();
 
}

function keyPressed(){
 if(keyCode===UP_ARROW){
	 Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
 }

}



