
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var dustbin1;
var paper;

function setup() {
	createCanvas(1200, 700);
 engine = Engine.create();
 world = engine.world;



  dustbin1 = new Dustbin(800,638,200,height+110);
  ground = new Ground (width/2, 695, width,10);
  paper = new Paper(300,500,10,10);
  dustbin2 = new Dustbin(700,1,120,height+20);
  dustbin3 =  new Dustbin(851,1,120,height+20);

  



  Engine.run(engine);

 
  
}


function draw() {
  background(0);
  Engine.update(engine);
  dustbin1.display();
  ground.display();
  paper.display();
  dustbin2.display();
  dustbin3.display();
 
}


function keyPressed(){
  if (keyCode === UP_ARROW) {
   Matter.Body.applyForce(paper.body,paper.body.position,{x:12,y:-18});
  }
  
  }



