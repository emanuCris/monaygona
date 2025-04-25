function setup() {
  createCanvas(400, 400);
}
let olhoX;
let olhoY;

function draw() {
  
  background('rgb(101,101,232)');
  fill('rgb(93,222,236)');
circle(200,200,300);// rosto
  fill('#70E774');
circle(150, 150, 70); // olho esquerdo
circle(250,150, 50 ); // olho direito
line(154,288,300,250); // boca
  fill('rgb(239,72,101)');
triangle(188,207,178,220,215,210); // nariz
  line(166,94,116,101); // sombrancelha
  line(264,122,229,115); // sombrancelha direita
  // circle(146,140,20); // pupila esquerda
 // circle(250,146,10); //pupila direita
 
  olhoX = map(mouseX,0,400,130,175);// pupila esquerda
  olhoY = map(mouseY,0,400,120,175);// pupila direita
 
  circle(olhoX,olhoY,10);
  circle(olhoX+100,olhoY,10);
  if(mouseIsPressed){
console.log(mouseX,mouseY);
  }
}
  
  