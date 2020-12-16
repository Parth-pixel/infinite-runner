var car, carimage;
var road, roadimage;
var obsatcle, obstaclesimage, obstaclesgroup;
var ground;
var gamestate = "play";

function preload(){
carimage = loadImage("cars.jpeg");
  roadimage = loadImage("road1.png");
  obstaclesimage = loadImage("obstacles.png");
}

function setup() {
 
  road = createSprite(250,250,20,20);
  road.addImage(roadimage);
  road.scale = 4;
  car = createSprite(300,300,20,20);
  car.addImage(carimage);
  car.scale = 0.3;
 road.x = road.width/2;
  road.velocityX = -10;
  obstaclesgroup = new Group();
}

function draw() {
  background("white");
  if(gamestate === "play"){
  
  createCanvas(1600,600);
  background("white");
    
   if (keyDown("down_arrow")){
    car.y = car.y+5;
  }
  if (keyDown("up_arrow")){
    car.y = car.y-5;
  }
 // car.velocityX = 4;
  if (road.x< 0){
      road.x = road.width/2;
    }
  if (frameCount % 80 === 0) { 
    obstacle = createSprite(600,300,20,20);
    obstacle.addImage(obstaclesimage);
    obstacle.scale = 0.3;
    obstacle.y = Math.round(random(100,500));
    obstacle.velocityX = -3;
    obstaclesgroup.add(obstacle);
  }
  }
  
  if (car.isTouching(obstaclesgroup)){
    gamestate = "End";
  }
  if (gamestate === "End"){
    //roadimage.visible = false;
   // roadimage.scale = 0.0;
    car.destroy();
    car.velocityX = 0;
    obstaclesgroup.destroyEach();
    obstaclesgroup.velocityX = 0;
   // road.velocityX = 0;
     background("black");
    fill("yellow");
    textSize(100);
    text("GameOver",200,200);
  }
 drawSprites();
}
//function obstacles23(){
  
//}