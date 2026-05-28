function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(173, 216, 230);
  noStroke(); 
  
  fill(255, 219, 172); //얼굴형
  rect(170, 380, 60, 60); 
  ellipse(200, 300, 180, 220);
  
  stroke(0);
  strokeWeight(1.5);
  fill(255); 
  ellipse(160, 310, 28, 12); 
  ellipse(240, 310, 28, 12); 
  
  fill(30); 
  noStroke();
  circle(160, 310, 10);
  circle(240, 310, 10);
  
  stroke(30); //눈썹
  strokeWeight(3);
  line(145, 290, 175, 290);
  line(225, 290, 255, 290); 

  noFill(); //코
  stroke(180, 150, 130); 
  strokeWeight(1.5);
  arc(200, 355, 15, 8, 0, PI); 

  stroke(0); //입
  strokeWeight(1);
  line(180, 385, 220, 385); 
  line(180, 385, 178, 382);
  line(220, 385, 222, 382);
  
  noStroke(); //주근깨
  fill(160, 120, 90, 150); 
  circle(145, 340, 2); circle(155, 345, 2); circle(150, 335, 1.5); 
  circle(255, 340, 2); circle(245, 345, 2); circle(250, 335, 1.5); 
  
  fill(30); //머리카락
  beginShape();
  vertex(200, 210); 
  vertex(150, 200); 
  vertex(100, 250); 
  vertex(110, 340); 
  vertex(140, 280); 
  vertex(195, 230); 
  endShape(CLOSE);

  beginShape();
  vertex(200, 210); 
  vertex(250, 200); 
  vertex(300, 250); 
  vertex(290, 340);
  vertex(260, 280); 
  vertex(205, 230); 
  endShape(CLOSE);
  ellipse(200, 204, 100, 40);
  
  stroke(0); 
  strokeWeight(2);
  fill(60, 80, 40); 
  rect(60, 440, 280, 350, 20);
  beginShape();
  vertex(200, 440); 
  vertex(160, 410); 
  vertex(120, 440); 
  vertex(180, 480);
  vertex(200, 440); 
  endShape(CLOSE);
  beginShape();
  vertex(200, 440); 
  vertex(240, 410); 
  vertex(280, 440); 
  vertex(220, 480);
  vertex(200, 440); 
  endShape(CLOSE);
  line(110, 490, 110, 600); 
  line(290, 490, 290, 600);
  
  fill(40, 30, 20); //디지털패턴
  rect(80, 470, 30, 15);
  rect(180, 540, 35, 12);
  rect(260, 460, 25, 10); 
  rect(130, 570, 40, 10);
  fill(100, 120, 80);
  rect(240, 490, 20, 25);
  rect(120, 520, 15, 30);
  rect(190, 475, 12, 25); 
  rect(280, 550, 25, 15);
}