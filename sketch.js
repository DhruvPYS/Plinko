const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var ground

var particles = []
var plinkos = []
var divisions = []
var divisionheight = 300

function setup() {
  createCanvas(400,700);
  engine = Engine.create()
  world = engine.world
   for (var k = 0; k <= width; k = k + 65)
  {
    divisions.push(new Divider(k, height - divisionheight/2, 10, divisionheight))
  }

  for(var p = 30; p <= width -30; p = p + 40)
  {
  plinkos.push(new Plinko(p, 50))
  }

  for(var p = 10; p <= width ; p = p + 42)
  {
  plinkos.push(new Plinko(p, 130))
  }

  for(var p = 30; p <= width- 30; p = p + 40)
  {
  plinkos.push(new Plinko(p, 210))
  }

  for(var p = 10; p <= width; p = p + 42)
  {
  plinkos.push(new Plinko(p, 290))
  }

  ground = new Ground(200, 670, 400, 10 )
  barrierr = new Barrier(400, 400 , 10, 800)
 
  barrierl = new Barrier(0, 0, 10, 800)

  barrierd = new Barrier(0, 700, 800, 10)

  barrieru = new Barrier(0, 0, 800, 10)


}

function draw() {
  Engine.update(engine)
 
  background(0,0,0);  
  ground.display()
  barrierr.display()
  barrierl.display()
  barrierd.display()
  barrieru.display()

 for (var l = 0; l<divisions.length; l = l + 1)
 {
   divisions[l].display()
 }

if(frameCount%60 === 0)
{
 particles.push(new Particles(random(width/2-10, width/2+10), 10, 10))
}

for (var x = 0; x<particles.length; x = x + 1)
 {
   particles[x].display()
 }


 for (var k = 0; k<plinkos.length; k = k + 1)
 {
   plinkos[k].display()
 }




  drawSprites();


}