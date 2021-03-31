
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,150,30);
	mango3=new mango(1150,160,30);
	mango4=new mango(1070,180,30);
	Stone =new stone(240,450,20)
	launcher = new Launcher(Stone.body, { x: 240, y: 440 });

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,365,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  Stone.display();
  launcher.display();
  
    detectColission1(Stone, mango1);
	detectColission2(Stone, mango2);
	detectColission3(Stone, mango3);
	detectColission4(Stone, mango4);
	


  groundObject.display();
}

function keyPressed() {
	if (key == ' ') {
		Body.setPosition(Stone.body, { x: 150, y: 510 });
		launcher.attach(Stone.body);
	}
}


function mouseDragged() {
	if (launcher.constraint.bodyA)
		Body.setPosition(Stone.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
	launcher.fly();
}
function detectColission1(Stone, mango1) {
	let distance = dist(Stone.body.position.x, Stone.body.position.y, mango1.body.position.x, mango1.body.position.y);
	console.log(Stone.radius);
	if (distance <= Stone.radius + mango1.radius) {
		Body.setStatic(mango1.body, false);
	}
}

function detectColission2(Stone, mango2) {
	let distance = dist(Stone.body.position.x, Stone.body.position.y, mango2.body.position.x, mango2.body.position.y);
	console.log(Stone.radius);
	if (distance <= Stone.radius + mango2.radius) {
		Body.setStatic(mango2.body, false);
	}
}
function detectColission3(Stone, mango3) {
	let distance = dist(Stone.body.position.x, Stone.body.position.y, mango3.body.position.x, mango3.body.position.y);
	console.log(Stone.radius);
	if (distance <= Stone.radius + mango3.radius) {
		Body.setStatic(mango3.body, false);
	}
}
function detectColission4(Stone, mango4) {
	let distance = dist(Stone.body.position.x, Stone.body.position.y, mango4.body.position.x, mango4.body.position.y);
	console.log(Stone.radius);
	if (distance <= Stone.radius + mango4.radius) {
		Body.setStatic(mango4.body, false);
	}
}