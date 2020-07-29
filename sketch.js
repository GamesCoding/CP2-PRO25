var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

	//dustbinImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200,700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = new Ball(290,50,50);
	ground = new Ground(900,684,1800,50);
	dustbin = new Dustbin(600,650);
	//dustbin.addImage("dustbin",dustbinImage);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(230);

  Engine.update(engine);

  ball.display();
  ground.display();
  dustbin.display();

  keyPressed();
  
	drawSprites();
}

function keyPressed() {
	if (keyDown(UP_ARROW)) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:12.5,y:-15});
	}
}



