var canvas;
var music;
var block1, block2, block3, block4;
var box
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
block1 = createSprite(20,575,220,20)
block1.shapeColor = "black"
block2 = createSprite(260,575,220,20)
block2.shapeColor = "blue"
block3 = createSprite(500,575,220,20)
block3.shapeColor = "red"
block4 = createSprite(740,575,220,20)
block4.shapeColor = "green"
    //create box sprite and give velocity
   box = createSprite(random(20,750),100,40,40)
   box.shapeColor = "white"
   box.velocityX = 9
   box.velocityY = 4
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges = createEdgeSprites();
box.bounceOff(edges)
if(block1.isTouching(box)  ||  box.bounceOff(block1)){
    box.shapeColor = "black"
    console.log("Hello")
}
if(block2.isTouching(box)  ||  box.bounceOff(block2)){
    box.shapeColor = "blue"
}
if(block3.isTouching(box)  &&  box.bounceOff(block3)){
    box.shapeColor = "red"
}
if(block4.isTouching(box)  &&  box.bounceOff(block4)){
    box.shapeColor = "green"
}
drawSprites();
    //add condition to check if box touching surface and make it box
}
