    var human,human_moving;

    var ground,groundImage,invisibleGround,invisibleGround2;

function preload(){

    //pre-load images

    human_moving = loadAnimation("Runner-1.png","Runner-2.png");

    groundImage=loadImage("path.png");
}

function setup(){

    createCanvas(400,400);

    //create sprites here
    
    ground = createSprite(190,200);
    ground.addImage("ground",groundImage);
    ground.velocityY = 4;
    ground.scale=1.3;

    human = createSprite(200,200);
    human.addAnimation("moving",human_moving);
    human.scale=0.058;

    invisibleGround=createSprite(400,0,75,800);
    invisibleGround.visible=false;
    invisibleGround2=createSprite(0,10,50,800);
    invisibleGround2.visible=false;

}

function draw() {
    background("white");
 
    human.x = World.mouseX;

    edges=createEdgeSprites();
    human.collide(invisibleGround2);
    human.collide(invisibleGround);
    
 

    


    
    if(keyDown("mouse")){
    
    }
    
    if (ground.y > 400){
        ground.y = height/2;
      }

    



     drawSprites();
}
