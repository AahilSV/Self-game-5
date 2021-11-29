const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground, ground2, ground4, ground3;
var fishNPC1, fishNPC2, fishNPC3;
var world, engine;
var playerFish;
var playerFishImg;
var backgroundimg;
var fishNPCimg;
var pizza1, pizza2, pizza3, pizza4, pizzaImg;

function preload(){
  fishNPCimg = loadImage("./assets/Evilfish.png");
  backgroundimg = loadImage("./assets/Ocean.png");
  playerFishImg = loadImage("./assets/goodfish.png");
  pizzaImg = loadImage("./assets/download.png");

}

function setup() {
 
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create(); 
  world = engine.world;
  playerFish = createSprite(100,100,20,20);
  playerFish.addImage(playerFishImg);
  playerFish.scale = 0.1;
ground = new Ground(0,200,windowWidth,20);
ground2 = new Ground(0,450,windowWidth,20);
ground3 = new Ground(0,700,windowWidth,20);
ground4 = new Ground(0,920,windowWidth,20);


fishNPC1 = new FishAI(70,300);
fishNPC2 = new FishAI(70,600);
fishNPC3 = new FishAI(70,800);

pizza1 = new Pizza(1800,100);
pizza2 = new Pizza(100,300);
pizza3 = new Pizza(100,600);
pizza4 = new Pizza(100,800);
}

function draw() {
  background(0); 
  image(backgroundimg,0,0,windowWidth,windowHeight);
  Engine.update(engine);

if(playerFish.x >= 1800)
{
World.remove(world, pizza1.body);
pizza1.visible = false;
console.log("touched");

}
  ground.display();
  ground2.display();
  ground3.display();
  ground4.display();

  pizza1.display();
  pizza2.display();
  pizza3.display();
  pizza4.display();

  fishNPC1.display();
  fishNPC2.display();
  fishNPC3.display();

  handlePlayerControls();
  drawSprites();
}

function handlePlayerControls() {
  if(keyIsDown(LEFT_ARROW)) {
    playerFish.position.x -= 5;
  }

  if(keyIsDown(RIGHT_ARROW)) {
    playerFish.position.x += 5;
  }
}

