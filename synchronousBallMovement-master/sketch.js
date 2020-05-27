var canvas,backgroundImg;
var distance = 0;
var gameState = 0;
var playerCount;
var allPlayers;
var database;
var cars, car1,car2,car,car4;
var form,player,game;
var trackImg,car1Img,car2Img,car3Img,car4Img,groundImg;

function preload(){
  trackImg = loadImage("../images/track.png");
  car1Img = loadImage("../images/car1.png");
  car2Img = loadImage("../images/car2.png");
  car3Img = loadImage("../images/car3.png");
  car4Img = loadImage("../images/car4.png");
  groundImg = loadImage("../images/ground.png");
}
function setup(){
  createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  console.log(database);
  
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  
}

