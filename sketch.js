var chao = 300;
var hp = chao;

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
      hp = chao; 
      velocidaPulo = velocidaPuloIni;
    }
  }
  ellipse(30,hp,30,50);
}

function keyPressed() {
  if ( keyCode === UP_ARROW ){
    console.log("Pula!"); 
    pulo = true; 
  }
}