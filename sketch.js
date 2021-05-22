var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(826,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "OrangeRed";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "Cyan";

    block3 = createSprite(510,580,200,30);
    block3.shapeColor = "Lime";
    
    block4 = createSprite(725,580,200,30);
    block4.shapeColor = "Gold";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball. velocityX = 5;
    ball.velocityY = 5;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(block1.isTouching(ball)){
        ball.shapeColor = "orangered";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }
    
    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "cyan";
        music.play();
    }
    
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "lime";
        music.play();
    }
    
    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "gold";
        music.play();
    }
    
    drawSprites();
}