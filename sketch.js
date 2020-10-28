const World= Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const Constraint= Matter.Constraint;

var ground;
var block8,block9,block10,block11,block12,block13,block14,block15,block16;
var polygon, polygon_Img;
var engine,world;
var bodies;
var slingshot;

function preload(){

}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
    world = engine.world;
polygon = new Polygon(100,200);

  //polygon.addImage("polygon_img.jpg")

  //ImageMode(CENTER)
  //Image(polygon_img.jpg, polygon.position.x,polygon.position.y,40,40);

// level two
  block8= new Box(330, 235, 30, 40);
  block9= new Box(360, 235, 30, 40);
  block10= new Box(390, 235, 30, 40);
  block11= new Box(420, 235, 30, 40);
  block12= new Box(450, 235, 30, 40);
  //level three 
  block13= new Box(360, 195, 30, 40);
  block14= new Box(390, 195, 30, 40);
  block15= new Box(420, 195, 30, 40);
//top
block16= new Box(390, 155, 30, 40);

ground= new Ground(600,height,1200,20)

// polygon holder with slings 
//polygon=Bodies.circle(50,200,20);
//World.add(world,polygon);

slingshot= new SlingShot(polygon.body,{x:100,y:200});

}

function draw() {
  background(255,255,255);  
Engine.update(engine)
  

  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()
  polygon.display()
  
//image(polygon_img,polygon.position.x,polygon.position.y,50,50)

  //drawSprites();

}

function mouseDragged() {
 
  Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})
  
}

function mouseReleased() {
  slingshot.fly()
}

function keyPressed(){
  if (keyCode===32){
    slingShot.attach(this.polygon);
  }
}
