const  Engine = Matter.Engine
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var ground;
var box1,box2,box3;
var box4,box5,box6;
var box7,box8,box9,box10;
var box11;
var ball;
var rope;
function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,400,800,10);
  box1 = new Box(500,300,50,50);
  box2 = new Box(500,355,50,50);
  box3 = new Box(500,245,50,50);
  box4 = new Box(500,190,50,50);
  box5 = new Box(500,135,50,50);
  box6 = new Box(555,190,50,50);
  box7 = new Box(615,220,50,50);
  box8 = new Box(555,245,50,50);
  box9 = new Box(555,300,50,50);
  box10 = new Box(615,275,50,50);
  box11 = new Box(675,250,50,50);
   ball = new Ball(300,100,50,50);
   rope = new Rope(ball.body,{x:300,y:50})
}

function draw() {
  background("white");  
  Engine.update(engine);
 ground.display();
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 box10.display();
 box11.display();
 ball.display();
 rope.display();
}
function mouseDagged()
{
  Matter.Body.setPosition(rope.body,{x:mouseX,y:mouseY});
}