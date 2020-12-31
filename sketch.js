
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = matter.constraint;

var bobOject1,bobOject2,bobOject3,bobOject4,bobOject5;
var roof,rope1,rope2,rope3,rope4,rope5;
var bobDiameter;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobDiameter = 40;


	roof = new roof(400,200,250,20);
	bobOject1 = new bob(300,400,bobDiameter);
	bobOject2 = new bob(350,400,bobDiameter);
	bobOject3 = new bob(400,400,bobDiameter);
	bobOject4 = new bob(450,400,bobDiameter);
	bobOject5 = new bob(500,400,bobDiameter);

	
	rope1 = new rope(bobOject1.body,roof.body,bobDiameter * 2.5,0);
	rope2 = new rope(bobOject2.body,roof.body,bobDiameter * 1.3,0);
	rope3 = new rope(bobOject3.body,roof.body,bobDiameter * 0.1,0);
	rope4 = new rope(bobOject4.body,roof.body,bobDiameter * -1.2,0);
	rope5 = new rope(bobOject5.body,roof.body,bobDiameter * -2.4,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  roof.display();
  bobOject1.display();
  bobOject2.display();
  bobOject3.display();
  bobOject4.display();
  bobOject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  force();
  drawSprites();
  
 
}


function force(){
	if (keyPress === LEFT_ARROW){
		matter.body.applyForce(bobObject1.body,bobObject1.body.position,{
			x: -1000,
			y: -45,
		});

	
	}
}



