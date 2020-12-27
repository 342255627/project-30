const Engine= Matter.Engine;
const World= Matter.World;
const Events= Matter.Events;
const Bodies= Matter.Bodies;

var particles=[];
var plinkos= [];
var divisions= [];
var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  
  
  engine = Engine.create();
    world = engine.world;

  ground = new Ground(240,800,480,20);
  for(var k = 0; k<=width; k = k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
}
for(var j = 50; j<=width-10; j = j+200){
  plinkos.push(new Plinko(j,75))
}
}
function draw() {
  background(255,255,255);
  
    background("black");  
    Engine.update(engine)
    ground.display();
  
    for(var i = 0; i<plinkos.length; i++){
      plinkos[i].display();
    }
    if(frameCount%50=== 0 ){
      particles.push(new Particle(random(width/2-400,width/2+400),10,10))
    }
    for(var j = 0; j<particles.length; j++){
      particles[j].display();
    }
    for(var k = 0; k<divisions.length; k++){
      divisions[k].display();
    }
    drawSprites();
    textSize(200);
    strokeWeight(6);
    stroke("red");
    fill("white");
    text("PLINKO",200,850);
    textSize(50);
    strokeWeight(0);
   
  
  drawSprites();
}