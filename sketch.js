
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1365, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground = new Box(width/2,590,1365,20)
   base = new Box(800,260,400,15)
   //level1
   box1 = new Box(790,155,30,30)   
   //level3
   box2 = new Box(730,235,30,30)  
   box3 = new Box(760,235,30,30)  
   box4 = new Box(790,235,30,30)  
   box5 = new Box(820,235,30,30)  
   box6 = new Box(850,235,30,30)  
   //level2
   box7 = new Box(760,195,30,30)  
   box8 = new Box(790,195,30,30)  
   box9 = new Box(820,195,30,30)  
  //  polygon
  polygon = new Polygon(50,200,60)
  // slingshot
 slingshot = new SlingShot(polygon.body,{x:50,y:200})
  Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(12,229,210);
  ground.display();
  base.display();  
  box1.display();   
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  slingshot.display();
  polygon.display();
  drawSprites();
 
}

function keyPressed (){
  if(keyCode === 32){
      slingshot.attach(polygon.body);
  }
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    slingshot.fly();
    
}