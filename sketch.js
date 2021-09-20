
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var peach1,peach2,peach3,peach4,peach5,peach6,peach7,peach8,peach9,peach10,peach11,peach12;
var world,boy;
var launchingForce=100;

function preload(){
	boy=loadImage("images/person.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new stone(235,420,30); 

	peach1=new Peach(1100,100,30);
  peach2=new Peach(1170,130,30);
	peach3=new Peach(1010,140,30);
	peach4=new Peach(1000,70,30);
	peach5=new Peach(1100,70,30);
	peach6=new Peach(1000,230,30);
	peach7=new Peach(900,230,25);
	peach8=new Peach(1140,150,25);
	peach9=new Peach(1100,230,25);
	peach10=new Peach(1200,200,25);
	peach11=new Peach(1120,50,25);
	peach12=new Peach(900,160,25);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	launcherObject=new launcher(stoneObj.body,{x:235,y:420})
  // var render = Render.create({
  //   element: document.body,
  //   engine: engine,
  //   options: {
  //     width: 1300,
  //     height: 600,
  //     wireframes: false
  //   }
  // });
	
	Engine.run(engine);
 // Render.run(render);
}

function draw() {

  background(230);
  //frameRate(2)
 // Engine.update(engine)
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,200,300,200,300);
  //Engine.update(engine)
  

  treeObj.display();
  stoneObj.display();
  peach1.display();
  peach2.display();
  peach3.display();
  peach4.display();
  peach6.display();
 peach7.display();
  peach8.display();
  peach9.display();
  peach10.display();
  peach11.display();
  peach12.display();
  stoneObj.display();

  groundObject.display();
  launcherObject.display();
  detectollision(stoneObj,peach1);
  detectollision(stoneObj,peach2);
  detectollision(stoneObj,peach3);
  detectollision(stoneObj,peach4);
  detectollision(stoneObj,peach5);
  detectollision(stoneObj,peach6);
  detectollision(stoneObj,peach7);
  detectollision(stoneObj,peach8);
  detectollision(stoneObj,peach9);
  detectollision(stoneObj,peach10);
  detectollision(stoneObj,peach11);
  detectollision(stoneObj,peach12);
}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,peach1.x,peach1.y));
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  launcherObject.attach(stoneObj.body);
	}
  }

  function detectollision(lstone,lpeach){
	/*var collision = Matter.SAT.collides(lstone,lpeach);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lpeach,false);	
	}*/
  peachBodyPosition=lpeach.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, peachBodyPosition.x, peachBodyPosition.y)
  //console.log(distance)
 // console.log(lpeach.r+lstone.r)
  	if(distance<=lpeach.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lpeach.body,false);
    }

  }