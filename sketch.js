const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var obj,ball,ball1;
function setup(){
    var canvas = createCanvas(600,400);
  engine = Engine.create();
  world = engine.world;
  var obj_options = {
      isStatic:true
  }
  obj = Bodies.rectangle(300,380,600,20,obj_options);
  World.add(world,obj);
  var ball_options = {
restitution:1
  }
  var ball1_options = {
restitution:2      
  }
  ball = Bodies.circle(200,200,20,ball_options);

  World.add(world,ball);

  ball1 = Bodies.circle(180,200,20,ball1_options);

  World.add(world,ball1);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill ("green");
    rect(obj.position.x,obj.position.y,600,20);
    fill("red");
  ellipse(ball.position.x,ball.position.y,20);
  fill("blue");
  ellipse(ball1.position.x,ball1.position.y,20);
}