// -------------LINK DO VÍDEO ------------//
// https://www.youtube.com/watch?v=aog2_ZX6Rq8
// --------------------------------------------//



var xb1, yb1, xb2, yb2 , xb3, yb3, xpassaro, ypassaro, xc , yc, xf, yf;
var xcursor , ycursor, k = 0;
var est;

var fundo_menu, ceu, chao, passaro , cano;
var alt, colisao;
var vida;

//variáveis do quadrado
var xq,yq,lq,xq2,yq2,lq2, xq3,yq3,lq3;
var vitoria = 0, pontos;
var dano,fase,tela, fim,vitoria, s;


//IMAGENS
function preload ()
{

  fundo_menu = loadImage("https://raw.githubusercontent.com/Gesliedson/imagens-/master/fundo.png");
  ceu = loadImage ("https://raw.githubusercontent.com/Gesliedson/imagens-/master/c%C3%A9u.png");
  chao = loadImage ("https://raw.githubusercontent.com/Gesliedson/imagens-/master/ch%C3%A3o.png");
  passaro = loadImage ("https://raw.githubusercontent.com/Gesliedson/imagens-/master/bird_crop.png")
  cano = loadImage ("https://raw.githubusercontent.com/Gesliedson/imagens-/master/p1.png")
   aluno = loadImage ("https://raw.githubusercontent.com/Gesliedson/imagens-/master/foto%20print.png")
  professor = loadImage ("https://raw.githubusercontent.com/Gesliedson/imagens-/master/rummenigge.JPG")
  dano = loadSound("https://raw.githubusercontent.com/Gesliedson/imagens-/master/dano.mp3")
  fase = loadSound("https://raw.githubusercontent.com/Gesliedson/imagens-/master/fase.mp3")
    fim = loadSound("https://raw.githubusercontent.com/Gesliedson/imagens-/master/fim%20de%20jogo.mp3")
   win= loadSound("https://raw.githubusercontent.com/Gesliedson/imagens-/master/vitoria.mp3")
}


function setup() {
  
  createCanvas(600,600);
  
  // coordenadas do JOGAR  
  xb1 = 230;
  yb1 = 140;
  
  // coordenadas das INSTRUÇÕES
  xb2 = 230;
  yb2 = 250;
  
  // coordenadas dos CRÉDITOS
  xb3 = 230;
  yb3 = 360;
  
  // coordenadas do CURSOR
  xcursor = 230;
  ycursor = 140;
  
  //coordenadas do PÁSSARO
  xpassaro = 0;
  ypassaro = 300;
  
  xc = 20;
  yc = 320;
  r = 38;
  
  //variável de estado
  est = 1;
  
  //posição do cursor
  p_cursor = 1;
  
  alt = 0;
  //QUADRADO AZUL
  xq = random (120,250)
  yq = 0;
  lq = 30
  //QUADRADO VERMELHO
  xq2 = random (300,500)
  yq2 = 0;
  lq2 = 30
  
  //QUADRADO VERDE
  xq3 = 70
  yq3 = 0;
  lq3 = 30
  
  colisao1 = false;
  
  colisao2 = false;
  
  colisao3 = false;
  
  vida = 3;
  xf = 560;
  yf = 450;
  rf = 40;
  pontos = 0;
  tela = 0;
  s = 0;
  
}

function draw() 
{
  
  
  //TELA DO MENU
  if (est ==1)
    {
      menu ();
    }
  
  
  //TELA DO JOGO
  else if (est == 2)
    {
      jogar ();
    }
  
  
  //TELA DAS INSTRUÇÕES
  else if (est == 3)
    {
      instrucoes ();
    }

  
  //TELA DOS CRÉDITOS
  else if (est == 4)
    {
      creditos ();
    }
}

// FUNÇÕES DO MENU
function menu ()
{
  s = 0
  tela = 0
  pontos = 0
  vitoria = 0;
  vida = 3;
  background(220);
  image (fundo_menu, 0,-30,600);
  

  //menu 
  stroke(0);
  strokeWeight(2);
  fill ("#615753");
  rect (150,60,300,500);
  
  
  // botão 1 : jogar
  strokeWeight(2)
  fill("#56D6BD");
  rect (xb1, yb1, 140, 50);
  
  strokeWeight(1);
  fill(0);
  textSize(12);
  text("Jogar", xb1 + 50, yb1 + 25);
  
  
  // botão2 : instruções
  strokeWeight(2);
  fill("#56D6BD");
  rect (xb2, yb2, 140, 50);
  strokeWeight(1);
  fill(0);
  textSize(12);
  text ("Instruções" , xb2 + 40, yb2+ 25);
  
  
  // botão3 : créditos 
  strokeWeight(2);
  fill("#56D6BD");
  rect (xb3, yb3, 140, 50);
  strokeWeight(1);
  fill(0);
  textSize(12);
  text ("Créditos", xb3 + 50, yb3 + 25);
  
  
  // CURSOR
  
  noFill();
  stroke("#DB440D")
  strokeWeight(4)
  rect (xcursor, ycursor, 140, 50)
  
  stroke(255)
  strokeWeight(2)
  textSize(35)
  fill("#5D1BD2")
  text ("Jogo do pássaro",170 ,100)
  
  stroke(0)
  strokeWeight(1)
  textSize(12)
  fill("#E3CF0C")
  text ("A teoria da evolução diz que as espécies" +"\n" + "descendem de ancestrais comuns que" +"\n" + " ao longo do tempo geológico foram" +"\n" + " sofrendo alterações",190 ,460)
  
}

//FUNÇÃO DO CURSOR 
function keyPressed()
{
  
  // jogar -- instruções
  if (keyCode == DOWN_ARROW && k == 0 && est == 1)
    {
      ycursor = yb2;
      k=1;
     // p_cursor = 2;

    }
  
  //intruções -- créditos
   else if (keyCode == DOWN_ARROW && k == 1 && est == 1 )
    {
      ycursor = yb3;
     // p_cursor = 3;
     k = 2;
    }
  
  //créditos -- instruções
   else if (keyCode == UP_ARROW && k ==2 && est == 1)
    {

      k=1;
      ycursor = yb2;
      //p_cursor = 2;

    }
  
    //intruções -- jogar
   else if (keyCode == UP_ARROW && k == 1&& est == 1)
    {
      k=0;
      ycursor = yb1;
     // p_cursor = 1;

    }
  
   else if (keyCode == ENTER)
     {
       
       
       //JOGAR
      if(k == 0 && est == 1)
         {
           est = 2
         }
       
       //INSTRUÇÕES
        if( k == 1 && est == 1)
         {
           est = 3
         }
       //CRÉDITOS
       
        if(k == 2 && est == 1)
         {
           est = 4
         }
     }
  
    else if (keyCode == ESCAPE)
      {
        if (est == 2 || est == 3 || est == 4)
          {
            est = 1;
            ycursor = yb1
            k=0
            
          }
      }
}

// FUNÇÃO DO BOTÃO JOGAR
function jogar ()
{
  
  limite();
  movePassaro();
  noStroke();
  background ("#55EAED"); // #56D665
  
  //------------------------------------//
  //AMBIENTE
  image(ceu, 0,0, 600);
  image(ceu, 0,250, 600);
  image(chao, 0, 245, 600)
  image(chao, 0, 276, 600)
  image (cano, 515 ,430 , 90 )
    //------------------------------------//
  //personagem 
  image (passaro , xpassaro , ypassaro , 40)  
  
   //------------------------------------// 
  
  noFill();
  stroke(0);
  strokeWeight(0.01)
  
  
  
  //------------------------------------// 
  
  //// COLISÃO COM O PÁSSARO
  circle (xc,yc,r)
  
  //distância do azul
  c = dist(xc,yc,xq,yq)
  
  //distância do azul
  if (c > 0 && c  < r)
    {
      colisao1 = true;
     vida--;
    }
  
  //distância do vermelho
  c2 = dist(xc,yc,xq2,yq2)
  if (c2 > 0 && c2 < r)
    {
      colisao2 = true;
      vida--;
    }
  
  //distância do verde
  c3 = dist(xc,yc,xq3,yq3)

   if (c3 > 0 && c3 <r)
    {
      colisao3 = true;
      vida--;

    }
  
    if ((colisao3 == true ||colisao2 == true || colisao1 == true) && tela == 0)
    {

      dano1()
    }
    //------------------------------------//
  
    //MOSTRAR VIDA
    textSize(40);
    fill(0);
    text("Vida: " + vida , 20,35 )
  
  
    //MOSTRAR FASE 1
    textSize(20);
    fill(0);
    text("FASE 1" , 510,35 )     
  
    //MOSTRAR PONTOS FASE 1
    textSize(20);
    fill(0);
    text("PONTOS: " + pontos , 250,35 )     
  
    //------------------------------------//
  
  //QUADRADO 1
  fill("blue")
  stroke(0)
  strokeWeight(1);
  square (xq,yq,lq)
  
  
  
  //QUADRADO 2
  fill("red")
  square (xq2,yq2,lq2)
  
  
  
  //QUADRADO 3
  fill ("green")
  square (xq3,yq3,lq3)
  
  //------------------------------------//  
  
  yq = yq + 5;
  yq2 = yq2 + 5;
  yq3 = yq3 + 5;

  
  //QUADRADO AZUL E PÁSSARO
  if ( yq > 600  )
    {
      yq = 0;
      xq = random (120,250)
      
    }
  
    if ( vida == 0 &&  (colisao3 == true || colisao2 == true || colisao1==true))
    {
      perdeu()
  
    }
  
  else if (colisao1 == true)
    {
      yq = 0
      colisao1 = false
      xpassaro = 0
      ypassaro = 300
      xc = 20
      yc = 320
    }
  
  
  //QUADRADO VERMELHO E PASSARO
  else if ( yq2 > 600 )
    {
      yq2 = 0;
      xq2 = random (290,500)
    }
  
  else if (colisao2 == true)
    {
      yq2 = 0;
      colisao2 = false;
      xpassaro = 0;
      ypassaro = 300;
      xc = 20;
      yc = 320;
    }
  
  //QUADRADO VERDE E PÁSSARO
   else if (yq3 > 600)
    {
      yq3 = 0;
    }
  
    else if (colisao3 == true)
    {
      yq3 = 0;
      colisao3 = false;
      xpassaro = 0;
      ypassaro = 300;
      xc = 20;
      yc = 320;
    }
     
  // TELA DO PERDEDOR
  if ( vida < 1)
    {
      
      tela = 1
      perdedor()
      
      
    }
    

          //PRÓXIMA FASE
  //------------------------------------//
  
  noFill()
  strokeWeight(0.01);
  circle(xf,yf,rf)
  
   //distância do azul
  cf = dist(xc,yc,xf,yf)
  
  //distância do azul
  if (cf > 0 && cf  < rf)
    {
      fase1();
      vitoria = 1 + vitoria
      vida = 3;
      xpassaro = 0;
      ypassaro = 300;
      xc = 20;
      yc = 320;
      pontos = 100 + pontos
      
    }
    
  if (vitoria == 1)
    {
      fase2()

      
    }
  
  if (vitoria == 2)
    { 
      //s = 1
      vencedor()
    }
  
  if  ( vitoria == 2 && s == 0)
    {
      ganhou ()
      s = 1
    }
}



//MOVIMENTOS DO PERSONAGEM 
function movePassaro()
{
    // MOVER PARA DIREITA
    if (keyIsDown(RIGHT_ARROW))
      {
        xpassaro= xpassaro + 3;
        xc = xc + 3
        
      }
  
      // MOVER PARA ESQUERDA
    if (keyIsDown(LEFT_ARROW))
      {
        xpassaro= xpassaro - 5;
        xc = xc - 5;
      }
  
      // MOVER PARA CIMA
    if (keyIsDown(UP_ARROW))
      {
        ypassaro= ypassaro - 5
        yc = yc - 5;
      }
  
      // MOVER PARA BAIXO
    if (keyIsDown(DOWN_ARROW))
      {
        ypassaro= ypassaro + 5
        yc = yc + 5;
      }
  
}

//LIMITES DO PERSONAGEM 
function limite()
{
  //limite lado esquerdo
  if (xpassaro < 0)
    {
      xpassaro = 1;
      xc = 20
    }
  
  //limite lado direito
  if (xpassaro > 560)
    {
      xpassaro = 560;
      xc = 580;
    }
  
  //limite cima 
  if (ypassaro < 0)
    {
      ypassaro = 1;
      yc = 20;
    }
  
  //limite baixo 
  if (ypassaro > 450)
    {
      ypassaro = 450;
      yc = 470
    }
    
}


// TELA DA SEGUNDA FASE
function fase2()
{
  
  noFill()
  background(220)
  image(ceu, 0,0, 600);
  image(ceu, 0,250, 600);
  image(chao, 0, 245, 600)
  image(chao, 0, 276, 600)
  image (cano, 515 ,430 , 90 )
  image (passaro , xpassaro , ypassaro , 40) 
  
  //QUADRADO 1
  fill("blue")
  stroke(0)
  strokeWeight(1);
  square (xq,yq,lq)
  
  
  
  //QUADRADO 2
  fill("red")
  square (xq2,yq2,lq2)
  
  
  
  //QUADRADO 3
  fill ("green")
  square (xq3,yq3,lq3)
  
  
  yq = yq + 5;
  yq2 = yq2 + 5;
  yq3 = yq3 + 5;
    
  //// COLISÃO COM O PÁSSARO
  strokeWeight(0.01);
  noFill()
  circle (xc,yc,r)
  
  
  circle(xf,yf,rf)
  
  //distância do azul
  c = dist(xc,yc,xq,yq)
  
    //------------------------------------//
  
    //MOSTRAR VIDA
    textSize(40);
    fill(0);
    text("Vida: " + vida , 20,35 )
  
    //MOSTRAR FASE 2
    textSize(20);
    fill(0);
    text("FASE 2" , 510,35 )  
  
    //MOSTRAR PONTOS FASE 1
    textSize(20);
    fill(0);
    text("PONTOS: " + pontos, 250,35 )  
  
   //distância do azul
  cf = dist(xc,yc,xf,yf)
  
   if ( vida < 1)
    {
      stroke(0)
      strokeWeight(1);
      perdedor()
      
    }
   
}

//TELA VENCEDOR
function vencedor()
  {

    vitoria = 2
    image(ceu, 0,0, 600);
    image(ceu, 0,250, 600);
    image(chao, 0, 245, 600)
    image(chao, 0, 276, 600)
    
  
    fill(0)
      
    stroke(0)
    strokeWeight(1);
    
    textSize(80)
    text("VITÓRIA" , 140,80,500);
    textSize(40)
    text("PONTUAÇÃO: " + pontos , 120,220,500);
    textSize(12)
    text("Precione ESC para voltar ao menu: ",180,380,500);
    
    
    
    strokeWeight(1)
    textSize(20)
    fill("#E3CF0C")
    text ("  O meio ambiente seleciona os" +"\n"+ "organismos mais aptos a sobreviver," + "\n"+ "     gerando descendentes." ,120 ,420)
  
    xpassaro = 0;
    ypassaro = 300;
    xc = 20;
    yc = 320;
  }

//TELA PEDEDOR
function perdedor()
{
    pontos = 0  
    image(ceu, 0,0, 600);
    image(ceu, 0,250, 600);
    image(chao, 0, 245, 600)
    image(chao, 0, 276, 600)
    
   
    fill(0)
    textSize(80)
    text("PERDEDOR" , 70,80,500);
    textSize(40)
    text("PONTUAÇÃO: " + pontos , 120,220,500);
    textSize(12)
    text("Precione ESC para voltar ao menu ",180,380,500);
    
    stroke(0)
    strokeWeight(1)
    textSize(20)
    fill("#E3CF0C")
    text ("  Os organismos que não se adaptam" +"\n"+"   são eliminados pela seleção natual",100 ,440)
    
  
}

// FUNÇÃO DO BOTÃO INSTRUÇÕES
function instrucoes()
{

  strokeWeight(2);
  background (220)
  image (fundo_menu, 0,-30,600)
  
  fill ("#615753");
  rect (150,60,300,500);
  
  //RECT_INSTRUÇÃO
  fill("#56D6BD");
  rect( 190,125,230,280)  
  
  
  //INSTRUÇÕES
  stroke(0);
  strokeWeight(1)
  textSize(20);
  fill(0);
  text (" INSTRUÇÕES", 220, 40 )
  
  //TXT: CONTROLE  
  stroke(0);
  strokeWeight(1);
  textSize(12);
  fill(0);
  text ("CONTROLES", 260, 100 );
  
  //TXT: SETA DA DIREITA
  stroke(0);
  strokeWeight(0);
  textSize(12);
  fill(0);
  text (" SETA DA DIREITA: FRENTE", 200, 150 );
  
  //TXT: SETA DA ESQUERDA
  stroke(0);
  strokeWeight(0);
  textSize(12);
  fill(0);
  text ("SETA DA ESQUERDA: VOLTA", 200, 200 );
  
  //TXT: SETA DE CIMA
  stroke(0);
  strokeWeight(0);
  textSize(12);
  fill(0);
  text ("SETA DE CIMA: CIMA", 200, 250 );
  
  //TXT: SETA DE BAIXO 
  stroke(0);
  strokeWeight(0);
  textSize(12);
  fill(0);
  text ("SETA DE BAIXO: BAIXO", 200, 300 );
  
  //TXT: TECLA ESC 
  stroke(0);
  strokeWeight(0);
  textSize(12);
  fill(0);
  text ("TECLA ESC: VOLTAR PARA O MENU", 200, 350 );
    
  stroke(0);
  strokeWeight(0);
  textSize(12);
  fill(0);
  text ("OBJETIVO: Entrar no portal sem " + "\n" + "tocar nos objetos que caem.", 200, 380 )

}

// FUNÇÃO DO BOTÃO CRÉDITOS
function creditos ()
{
  noStroke();
  background (220)
  image (fundo_menu, 0,-30,600)
  stroke(0);
  strokeWeight(1)
  textSize(20);
  fill(0);
  text ("CRÉDITOS", 250, 50) 
  
  
  
  image (aluno, 40,40,140,180);
  image (professor, 440,40,140,180);
  
  noStroke()
  fill("#55EAED")
  rect ( 40, 220, 140, 50)
  rect ( 440, 220, 140, 50)
  
  fill(0)
  textSize(12)
  text ( "Programador: Gesledson" + " \n"+ " Guilherme da Silva", 40, 230)
  text ( "Professor: Rummenigge" + " \n"+ " Rudson Dantas", 440, 230)
}

function dano1()
{
  dano.play()
}

function fase1()
{
  fase.play()
}

function perdeu()
{
  fim.play()
}

function ganhou()
{
  win.play()
}