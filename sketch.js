
var background,backgroundImg;
var tom,tomImg1,tomImg2,tomImg3,tomImg4;
var mouse,mouseImg1,mouseImg2,mouseImg3,mouseImg4;

function preload() {
    //load the images here
    tomImg1 = loadAnimation("images/cat1.png");
    tomImg2 = loadAnimation("images/cat2.png");
    tomImg3 = loadAnimation("images/cat3.png");
    tomImg4 = loadAnimation("images/cat4.png");
    backgroundImg = loadImage("images/garden.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png");
    mouseImg3 = loadAnimation("images/mouse3.png");
    mouseImg4 = loadAnimation("images/mouse4.png");



}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  
    
    tom = createSprite(800,600,20,200);
    tom.addAnimation("running",tomImg1);
    tom.scale=0.2;
    
    
    mouse = createSprite(200,600,20,50);
    mouse.addAnimation("standing",mouseImg1);
    mouse.scale=0.2;


    
}

function draw() {

    background(backgroundImg);

    edges=createEdgeSprites();
    tom.collide(edges);
    //Write condition here to evalute if tom and jerry collide
    if (tom.x - mouse.x <(tom.width - mouse.width)/2 ) {
        tom.velocityX=0;
        tom.addAnimation("lastImg",tomImg4);
        tom.changeAnimation("lastImg")
        &&
        mouse.addAnimation("lastImg1",mouseImg4);
        mouse.changeAnimation("lastImg1");

        }
   
        if (tom.x - mouse.x <(tom.width - mouse.width)/2 ) {
            mouse.addAnimation("lastImg1",mouseImg4);
            mouse.changeAnimation("lastImg1");
    
            }   
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    tom.velocityX=-5;
   tom.addAnimation("catRunning",tomImg2);
   tom.changeAnimation("catRunning")
   &&
   tom.addAnimation("catRunning1",tomImg3);
   tom.changeAnimation("catRunning1");
  }
 
  if(keyCode === LEFT_ARROW){
   
   mouse.addAnimation("mouseRunning",mouseImg2);
   mouse.changeAnimation("mouseRunning")
   &&
   mouse.addAnimation("mouseRunning1",mouseImg3);
   mouse.changeAnimation("mouseRunning1");
  }

}
