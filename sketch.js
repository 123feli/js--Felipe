let colidiu= false;
  let pontosDoOponente=10
  let raquetada;
  sons do jogo
  variaveis do oponente;
 let meuspontos =0 ;
 let xCentroBolacampo = 5;
 let xRaquete= 5;
 let yCentro = 0;
 placar do jogo
 variaveis da raquete
 variaveis do centro
 variaveis do centrode  do campo
 velocidade da bolinha
function preload 
let chanceDeErrar = 0;
let diametro=13;
let meioAltura = 400;
let meioComprimento = 3;
let pontos;
let raio = diametro 2 ;
let raqueteAltura=90;
let raqueteComprimento=10;
let trilha;
let velocidadeXBolinha=6;
let velocidadeYBolinha=6;
let velocidadeYOponente;
let xCentro = 300;
let xRaqueteOponente =585;
let xbolinha=300;
let yRaquete= 150;
let yRaqueteOponente=150;
let ybolinha=200;
let ycentroBolaCampo 
function preload(){
  tlha = loadSound( trilha,mp3);
ponto = loadSound(pontos.mp3);
 raquetada = loadSound(raquete.mp3)
}

 function setup() 
createCanvas(600,400);
  trilha. loop();
}

function draw(){
  background(34.139,34);
  mostrarCentroCampo(xCentroBolaCampo, yCentroBolaCampo);
  mostrarCentroCampo(xCentroBolaCampo, yCentroBolacampo);
  mostrarBolinha();
  movimentaBolinha();