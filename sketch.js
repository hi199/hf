var wall,thickness
  var bullet,speed , weight
  function setup() {
 createCanvas(800,400);
  speed=random(30,52)
  thickness=random(22,83)
  weight=random(223,321)

  bullet=createSprite(50, 200, 50, 50);
  bullet.velocityX=speed
  wall=createSprite(400,200,thickness, height/2);
}

function draw() {8953724
if (hasColided(bullet,wall)){
  bullet.velocityX=0
var damage=0.5*weight*speed*speed/(thickness,thickness,thickness)
if (damage>10)
wall.shapeColor=color(255,0,0)
}
if (damage<10){
  wall.shapeColor=color(0,255,0)
}
  
  background(255,255,255);  
  drawSprites()
   }
   
   function hasColided (lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }
return false
}