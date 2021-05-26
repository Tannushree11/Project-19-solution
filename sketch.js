var car , wall;
var speed , weight;


function setup() {
  createCanvas(1600,400);
  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));
  car = createSprite(100, 200, 50, 50);
  //createSprite(100, 200, 50, 50);
  car.shapeColor = (80 , 80 , 80);
  wall=createSprite(900,200,60,height/2)
  car.velocityX = speed;
  
}

function draw() {
  background(0); 
  
  if(wall.x - car.x < (car.width + wall.width)/2)
  {
    car.velocityX = 0;
    var deformation=0.5 * weight * speed* speed/22500;
    if(deformation>180)
	{
		car.shapeColor=color(255,0,0);
	}

	if(deformation<180 && deformation>100)
	{
		car.shapeColor=color(230,230,0);
	}

	if(deformation<100)
	{
		car.shapeColor=color(0,255,0);
	}

  }

  drawSprites();
}