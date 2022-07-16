var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");

}



function setup() {
  createCanvas(400, 400);
  
  //criar um plano de fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criar um arco para a flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
 background(0);
 
 
 // mover o chão
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //mover o arco
  bow.y = World.mouseY
  
   // soltar a flecha quando a tecla espaço for pressionada
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //mude o valor do balão aleatório para 4
  var select_balloon = Math.round(random(1,1));
  
  if (World.frameCount % 100 == 0) {
   switch(select_balloon){
    case 1: red
    break;
    case 2: blue_balloon0
    break;
    case 3: green_balloon0
    break;
    case 4: pink_balloon0
break;

  }}
  
  pinkBalloon();
  greenBalloon();
  redBalloon();
  blueBalloon(); 
  drawSprites();
}


// criar flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}



function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)),);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 50;
  red.scale = 0.05;

}

function blueBalloon() {
  var blue_balloon0 = createSprite(0,Math.round(random(20, 370)),);
   blue_balloon0.addImage(blue_balloonImage)
  blue_balloon0.velocityX = 3
  blue_balloon0.scale = 0.05
 blue_balloon0.lifetime = 50
}
function greenBalloon() {
  var green_balloon0 = createSprite(0,Math.round(random(20, 370)),);
   green_balloon0.addImage(green_balloonImage)
  green_balloon0.velocityX = 3
  green_balloon0.scale = 0.05
 green_balloon0.lifetime = 50
}
function pinkBalloon() {
  var pink_balloon0 = createSprite(0,Math.round(random(20, 370)),);
   pink_balloon0.addImage(pink_balloonImage)
  pink_balloon0.velocityX = 3
  pink_balloon0.scale = 0.05
 pink_balloon0.lifetime = 50
}