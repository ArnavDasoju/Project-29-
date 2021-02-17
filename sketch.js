const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var slingshot, polygon;
var groundObj;
var hex;

function preload() {
}

function setup(){
    var canvas = createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;

    fill("Green");
    block1 = new Block(330,235,30,40);
    block2 = new Block(360,235,30,40);
    block3 = new Block(390,235,30,40);
    block4 = new Block(420,235,30,40);
    block5 = new Block(450,235,30,40);

    block6 = new Block(360,195,30,40);
    block7 = new Block(390,195,30,40);
    block8 = new Block(420,195,30,40);

    block9 = new Block(390,155,30,40);

    groundObj = new Ground(300,275,200,10);

    hex = Bodies.circle(50,200,20);
    World.add(world,hex);
    fill("Pink")

    sling = new Slingshot(this.hex,{x:150, y:160});


}

function draw(){
    background("gray");
    Engine.update(engine);

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();

    groundObj.display();

    sling.display();

}
function mouseDragged(){
    Matter.Body.setPosition(this.hex, {x: mouseX , y: mouseY});
  }
  
  
  function mouseReleased(){
    sling.fly();
  }

function keyPressed(){
  if (keyCode === 32){
  sling.attach(hex.body)    
  }  
}