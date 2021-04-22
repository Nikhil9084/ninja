var knife0;
var f10;
var f20;
var f30;
var f40;
var a10;
var a20;
var play=0;
var end=1;
var gameState=play;
var over0;
var score=0
var sound;

function preload(){
  knife=loadImage("knife.png");
  f1=loadImage("fruit1.png");
  f2=loadImage("fruit2.png");
  f3=loadImage("fruit3.png");
  f4=loadImage("fruit4.png");
  a1=loadImage("alien1.png");
  a2=loadImage("alien2.png");
  over=loadImage("gameover.png");
  sound=loadSound("gameover.mp3");
  
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  
  knife1();
  
  F1G=new Group();
  F2G=new Group();
  F3G=new Group();
  F4G=new Group();
  A1G=new Group();
  A2G=new Group();

  Over();
  
  score=0;
}

function draw(){
  background("skyblue");
  

  if(gameState===play){
    
    
        knife0.x=mouseX;
  knife0.y=mouseY;
    
  F1();
    
    if(knife0.isTouching(F1G)){
      F1G.destroyEach();
      score=score+10;
    }
    
  F2();
    
    if(knife0.isTouching(F2G)){
      F2G.destroyEach();
      score=score+20;
    }
    
  F3();
    
    if(knife0.isTouching(F3G)){
      F3G.destroyEach();
      score=score+30
    }
    
  F4();
    
    if(knife0.isTouching(F4G)){
      F4G.destroyEach();
      score=score+15;
    }
  
  A1();
  A2();
    
    over0.visible=false;
    
    if(knife0.isTouching(A1G)||knife0.isTouching(A2G)){
      gameState=end;
      sound.play();
    }
    
  }

  if(gameState===end){
    F1G.setVelocityXEach(0);
    F1G.setLifetimeEach(-1);
    
    F2G .setVelocityXEach(0);
    F2G.setLifetimeEach(-1);
    
    F3G.setVelocityXEach(0);
    F3G.setLifetimeEach(-1);
    
    F4G.setVelocityXEach(0);
    F4G.setLifetimeEach(-1);
    
    A1G.setVelocityXEach(0);
    A1G.setLifetimeEach(-1);
    
    A2G.setVelocityXEach(0);
    A2G.setLifetimeEach(0);
    
    over0.visible=true;
    
  }
  
  drawSprites();
  
    textFont("algerian");
  text("score: "+score,width/2,height-420);
}


function knife1(){
  knife0=createSprite(width/2,height/2,20,20);
  knife0.addImage("k",knife);
  

}

function F1(){
  if(frameCount%60===0){
  f10=createSprite(width,random(height),20,20);
  f10.addImage("f",f1);
  f10.velocityX=-5;
    f10.lifetime=200;
    f10.scale=0.2;
    f10.depth=knife0.depth-1;
    
    
    F1G.add(f10);
}
} 

function F2(){
  if(frameCount%80===0){
  f20=createSprite(width,100,20,20);
  f20.addImage("f0",f2);
  f20.scale=0.2;
  f20.y=Math.round(random(height));
  f20.velocityX=-5;
  f20.lifetime=200;
  f20.depth=f10.depth;
    F2G.add(f20);
}
}

function F3(){
  if(frameCount%120===0){
  f30=createSprite(width-500,random(height),20,20);
  f30.addImage("f9",f3);
  f30.scale=0.2;
  f30.velocityX=5;
  f30.lifetime=200;
  f30.depth=knife0.depth-1;
    
  F3G.add(f30);
}
}

function F4(){
  if(frameCount%140===0){
  f40=createSprite(width-500,20,20,20);
  f40.addImage("f8",f4);
  f40.scale=0.1;
  f40.velocityX=5;
  f40.y=Math.round(random(height));
  f40.lifetime=200;
  f40.depth=f20.depth;
    
    F4G.add(f40);
}
}

function A1(){
  if(frameCount%160===0){
  a10=createSprite(width,random(height),20,20);
  a10.addImage("a",a1);
  a10.velocityX=-5;
  a10.sclae=0.6;
  a10.lifetime=200;
    
    A1G.add(a10);
}
}

function A2(){
  if(frameCount%180===0){
  a20=createSprite(width-500,20,20,20);
  a20.addImage("a0",a2);
  a20.velocityX=5;
  a20.lifetime=200;
  a20.scale=0.6;
  a20.y=Math.round(random(height));
  
  A2G.add(a20);
}
}

function Over(){
  over0=createSprite(width/2,height/2,20,20);
  over0.addImage("o",over);
}