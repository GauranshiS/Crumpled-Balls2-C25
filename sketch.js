
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject,box1,box2,box3,groundObj;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	
	dustbin1=new Dustbin(400,670,200,20);
	
	dustbin2=new Dustbin(300,620,20,100);

	dustbin3=new Dustbin(500,620,20,100);

	  paperObject1=new Paper(200,650,20);
	 
	  groundObj=new Ground(800,675,200,10);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
 
  paperObject1.display();
  
dustbin1.display();
dustbin2.display();
dustbin3.display();

 groundObj.display();
 
 Dustbin(dustbinImage);
 Paper(crumpledPaperImage);
}



	
	function keyPressed(){
 
		if(keyCode===UP_ARROW){
		 Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
		}




	}
	


	