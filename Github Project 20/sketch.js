var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var points = 0;
var cashG,diamondsG,jwelleryG,swordGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(400,400);

//creating boy running
boy = createSprite(70,580,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.70;
  
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  boy.y = World.mouseY;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  
    createCash();
    createDiamonds();
    createJwellery();
    createSword();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      points=points+5;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      points=points+10;
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      points= points + 15;
      
    }else{
      if(swordGroup.isTouching(boy)) {
        gameState=END;
        
        boy.addAnimation("SahilRunning",endImg);
        boy.x=200;
        boy.y=300;
        boy.scale=0.6;
        
        cashG.destroyEach();
        diamondsG.destroyEach();
        jwelleryG.destroyEach();
        swordGroup.destroyEach();
        
        cashG.setVelocityYEach(0);
        diamondsG.setVelocityYEach(0);
        jwelleryG.setVelocityYEach(0);
        swordGroup.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("points: "+ points,150,30);
  }

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 100, 100));
  cash.addImage(cashImg);
  cash.scale=.70;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 100, 100));
  diamonds.addImage(diamondsImg);
  diamonds.scale= .70;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 410 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 100, 100));
  jwellery.addImage(jwelleryImg);
  jwellery.scale= .70;
  jwellery.velocityY = 3;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 100, 100));
  sword.addImage(swordImg);
  sword.scale= .70;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}