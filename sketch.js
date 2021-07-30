var canvas, backgroundImage;
var allplayers;
var gameState = 0;
var playerCount;
var cars,car1,car2,car3,car4;
var distance=0;
var database;

var form, player, game;


function setup(){
  canvas = createCanvas(displayWidth-20 , displayHeight-20);
  database = firebase.database();

 game=new Game();
 game.getState();
 game.start();

}


function draw(){
if(playerCount===4){
game.update();
}
if (gameState===1){
clear();
}
}
