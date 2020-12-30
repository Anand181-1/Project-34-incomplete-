
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var rope1, rope2, rope3, rope4, rope5;
var bobDiameter = 100;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,200);

	bobObject1 = new Bob(300, 400, 55);
	rope1 = new Rope(bobObject1.bob, roof.body, bobDiameter- 210,0);

	bobObject2 = new Bob(350, 400, 55);
	rope2 = new Rope(bobObject2.bob, roof.body, bobDiameter- 155,0);

	bobObject3 = new Bob(400, 400, 55);
	rope3 = new Rope(bobObject3.bob, roof.body, bobDiameter- 100,0);

	bobObject4 = new Bob(450, 400, 55);
	rope4 = new Rope(bobObject4.bob, roof.body, bobDiameter- 45,0);

	bobObject5 = new Bob(500, 400, 55);
	rope5 = new Rope(bobObject5.bob, roof.body, bobDiameter+ 10,0);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	    Matter.Body.applyForce(bobObject1.bob, bobObject1.bob.position, {x: -60, y: -80});
	}
}
