const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bobObject1=new Bob(100,600,40);
bobObject2=new Bob(150,600,40);
bobObject3=new Bob(200,600,40);
bobObject4=new Bob(250,600,40);
bobObject5=new Bob(300,600,40);
roof1=new Roof(200,300,300,20)
chain1= new Chain(bobObject1.body,roof1.body,-99,10);
chain3=new Chain(bobObject3.body,roof1.body,25,10);
chain4=new Chain(bobObject4.body,roof1.body,40,10);
chain5=new Chain(bobObject5.body,roof1.body,90,10);
chain2=new Chain(bobObject2.body,roof1.body,-35,10);

Engine.run(engine); 
   Engine.update(engine)
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  console.log(bobObject1.body.position.x)
  console.log(bobObject1.body.position.y)
  console.log(bobObject1.body.angle)
 
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display()
  bobObject5.display()
  roof1.display();
  chain1.display();
  chain2.display();
  chain3.display()
  chain4.display();
  chain5.display()

  drawSprites();
 
}
function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x: 250, y: -250})
	}
}


