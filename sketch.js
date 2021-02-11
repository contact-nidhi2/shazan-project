var gino;
var ground;
var Health=100;
var gameState=0;
var villian;
function preload(){
   heroImg = loadAnimation("idle/idle01.png");
   bgImg = loadImage("bg.jpeg");
   gino_running = loadAnimation("running/run01.png","running/run02.png","running/run03.png",
             "running/run04.png", "running/run05.png","running/run06.png",
              "running/run07.png","running/run08.png");

  batFly = loadAnimation("batso/fly01.png","batso/fly02.png","batso/fly03.png","batso/fly04.png",
  "batso/fly05.png","batso/fly06.png","batso/fly07.png",)
  
  healthImg = loadImage("28.png");

  diggerImg = loadAnimation("digger/idle01.png");
  diggerHit = loadAnimation("digger/hit01.png","digger/hit02.png","digger/hit03.png");

  auntBatonImg = loadImage("aunt baton/idle01.png");

  batig = loadImage("batso/fly01.png");
  diggerig = loadImage("digger/idle01.png");
  groundImage = loadImage("ground2.png")

}

function setup(){
  createCanvas(displayWidth,700);
  
  ground = createSprite(displayWidth/2,630,displayWidth,20);
  ground.addImage("ground",groundImage);

  gino = createSprite(220,590,50,50);
  gino.addAnimation("idle",heroImg);
  gino.addAnimation("running",gino_running);
  gino.scale = 2;
  gino.setCollider("circle",-5,10,20)
    
   console.log(displayWidth)
 
  
  // invisibleGround = createSprite(displayWidth/2,displayHeight-150,displayWidth,10);
  // invisibleGround = createSprite(00,630,1200,10);
  // invisibleGround.addImage(ground);
  
 
  bat = createSprite(100,300,50,50);
  bat.addAnimation("fly",batFly);
  //bat.debug=true;

    health = createSprite(90,370,10,10);
    health.addImage(healthImg);
    health.scale = 0.5;

    digger = createSprite(50,360,50,50);
    digger.addAnimation("idle",diggerImg);
    digger.addAnimation("hat",diggerHit);


    auntbaton = createSprite(290,590,50,50);
    auntbaton.addImage(auntBatonImg);
}




function draw(){
  if(gameState===0){
    background(255);
    textSize(30);
    text("I am the king of palmor, I request you to save ",400,325)
    text("my daughter from Draco, The monster who lives",400,365);
    text("in the forest",400,410);
    text("press S to start",900,500);
    if(keyDown("S")){
      gameState=1;
    }
  }
  if(gameState===1){
  background(bgImg); 
  text("Health:"+ Health,gino.x,30);
  camera.x=gino.x;
  
  //invisibleGround.visible = false;

  ground.velocityX = -2;   
  console.log("ground.x" +ground.x);
  console.log("displayWidth/2"+ displayWidth/2 )
  
  if (ground.x < displayWidth/2){
     ground.x = displayWidth/2;
   }
  if(keyDown("RIGHT_ARROW")){
    gino.x+=10;
   gino.changeAnimation("running",gino_running);
    // gino.changeAnimation("idle",heroImg);
  }
    if(keyDown("LEFT_ARROW")){
    gino.x-=10;
   gino.changeAnimation("idle",heroImg);
  }

      if(keyDown("space")&& gino.y >= 350) {
        gino.velocityY = -12;
    }

    if(keyDown("F")){
     gino.changeAnimation("throw",throwAnim);
     daggersprt.visible = true;
     daggersprt.velocityX=3;
    }

    spawnVillians();
  // if(gino.isTouching(villian)){
  //   Health=Health-10;
  //   gameState=2;
  // }
      gino.velocityY = gino.velocityY + 1

      if(Health<0){
      textSize=80;
      bat.destroy();
      }

   if(gino.isTouching(health)){
     Health+=30
     health.destroy();
   }  
  // if(gino.velocityX===5){
  //    runningsound.play();
  //   runningsound.setVolume(0.1);
  // } 
  //console.log(displayWidth/2);  

  // invisibleGround.velocityX =4;    
  // invisibleGround.height=10;
  // if(invisibleGround.x < invisibleGround.width/2){
  //   invisibleGround.x=invisibleGround.width/2;
  // }

  
  
  gino.collide(ground);
  drawSprites();   
}
if (gameState===2){
  background(0);
  textSize()
  fill("red");
  text("Game Over",400,325);
}
}

function spawnVillians(){
  if(frameCount%60===0){
    villian=createSprite(600,590,50,50);
    villian.velocityX=-6;
    villian.x=(Math.round(random(gino.x-100,gino.x+100)));
    var rand=Math.round(random(1,3));
    switch(rand){
      case 1: villian.addAnimation("fly",batFly);break;

      case 2: villian.addAnimation("idle",diggerImg);break;

      case 3: villian.addImage("label",auntBatonImg);break;
    }
  }
}

// function batfcn(){
//   bat1=createSprite(600,590,50,50);
//   bat1.addAnimation("fly",batFly);
//   bat1.velocityX=-6;
// }
// function diggerfcn(){
//   digger1 = createSprite(600,590,50,50);
//   digger1.addImage(diggerig);
//   digger1.velocityX=-6;
// }
// function auntbatonfcn(){
//   auntbaton1=createSprite(600,590,50,50);
//   auntbaton1.addImage(auntBatonImg);
//   auntbaton1.velocityX=-6;
// }