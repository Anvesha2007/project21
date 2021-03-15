var canvas;
var music;
var block1,block2,block4,block3;
var ball,edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(0,580,360,30);
    block2 = createSprite(295,580,200,30);
    block3 = createSprite(515,580,200,30);
    block4 = createSprite(740,580,220,30);
    block1.shapeColor = rgb(0,0,255);
    block2.shapeColor = rgb(255,128,0);
    block3.shapeColor = rgb(153,0,76);
    block4.shapeColor = rgb(0,100,0);
    ball = createSprite(200,100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //create box sprite and give velocity
    ball.velocityX=3
    ball.velocityY=6
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
     edges=createEdgeSprites()
      ball.bounceOff(edges)
   

    //add condition to check if box touching surface and make it box
    if(ball.isTouching(block3)) 
    {
       ball.shapeColor= rgb(153,0,76);
       ball.bounceOff(block3)
       music.play()
    }
    if(ball.isTouching(block1)|| ball.isTouching(block2)|| ball.isTouching(block4))
    {
       ball.velocityX=0
       ball.velocityY=0    
       ball.shapeColor = rgb(255,255,255);
       music.stop()

    }

    drawSprites();
}
