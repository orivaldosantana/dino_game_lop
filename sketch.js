var chao = 300;
var hpIni = chao-23; 
var hp = hpIni;
var hCactus = chao - 15;
var xCactus = 700;

var velocidaPuloIni = 20;
var aceleracao = 1;
var velocidaPulo = velocidaPuloIni;
var pulo = false; 

function setup() {
  frameRate(30)
  createCanvas(600, 500);
}

function draw() {
  background(220);
  if (pulo){
    hp = hp - velocidaPulo;
    velocidaPulo = velocidaPulo - aceleracao
    if (hp > chao ){
      pulo = false;
      hp = hpIni; 
      velocidaPulo = velocidaPuloIni;
    }
  }
  line(0,chao,600,chao);
  ellipse(60,hp,30,50);
  
  xCactus = xCactus - 5;
  circle(xCactus,hCactus,30);

}

function keyPressed() {
  if ( keyCode === UP_ARROW ){
    console.log("Pula!"); 
    pulo = true; 
  }
}