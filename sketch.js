var chao = 300;
var hpIni = chao-23; 
var hp = hpIni;
var hCactus = chao - 15;
var xCactus = 700;
var vtXCactus = []; 
var qtCactus = 3;
var xJogador = 60;
var vidas = 3; 

var velocidaPuloIni = 24;
var aceleracao = 3;
var velocidaPulo = velocidaPuloIni;
var pulo = false; 

var tela = 0; 

function setup() {
  frameRate(30)
  createCanvas(600, 500);
  for ( i=0; i<qtCactus; i++){
    vtXCactus[i] = random(1000, 1700); 
  }
}

function telaJogo () {
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
  // vidas 
  textSize(16); 
  text("Vidas: "+vidas, 450,50); 


  line(0,chao,600,chao);
  // jogador 
  ellipse(xJogador,hp,30,50);
   
  // obstáculo 
  for (i=0; i<qtCactus; i++){
    vtXCactus[i] = vtXCactus[i] - 7;
    if (vtXCactus[i] < 0){
      vtXCactus[i] = random(700, 1000); 
    }
    if (dist(xJogador, hp, vtXCactus[i], hCactus) < 40 ){
      console.log("Colisão!"); 
      vidas = vidas - 1; 
      if (vidas === 0){
        tela = 1; // game over 
      }
      // reinicia posição dos obstáculos
      for (j=0; j<qtCactus; j++){ 
        vtXCactus[j] = random(700, 1000);
      }
    }

    circle(vtXCactus[i],hCactus,30);

  }

}

function telaFimJogo () {
  background(220);
  textSize(40);
  textAlign(CENTER);
  text("Acabou o Jogo!",300,200); 
}

function draw() {
  if (tela === 0){ 
    telaJogo(); 
  }
  else if (tela === 1){
    telaFimJogo(); 
  }
}

function keyPressed() {
  if ( keyCode === UP_ARROW ){
    console.log("Pula!"); 
    pulo = true; 
  }
}