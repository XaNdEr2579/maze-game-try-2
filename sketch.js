var player;
var playerImage;

function preload(){
playerImage = loadImage("images\sprite among us .png")
}

function setup() {
    //This runs once
    createCanvas(400,400);
    player = createSprite (200,200,10,10)
    
}

function draw() {
    //This runs again and again
if(keydown("W")){
    background("white");
    
    player.x = player.x + 0.5
}

    drawSprites();
}