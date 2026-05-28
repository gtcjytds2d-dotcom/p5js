let color1, color2;

function setup() {
  createCanvas(600, 400);
  color1 = color('#33FFFF');
  color2 = color('#FF99CC');
}

function draw() {
  let currentAngle = frameCount * 0.05;
  let wave = sin(currentAngle);

  let bgColorAmt = map(wave, -1, 1, 0, 1);
  let currentBg = lerpColor(color1, color2, bgColorAmt);
  background(currentBg);

  let dynamicSize = map(wave, -1, 1, 150, 250);

  noStroke();
  fill(255, 255, 255, 150);
  circle(50, 50, dynamicSize);
  circle(350, 350, dynamicSize);
  circle(520, 50, dynamicSize);

  fill(255, 255, 255, 100);
  triangle(180, 200, 300, 250, 30, 350);
  triangle(220, 150, 300, 200, 400, 30);
  triangle(500, 300, 650, 450, 700, 800);

  let sway1 = map(sin(currentAngle), -1, 1, -20, 20);
  let sway2 = map(sin(currentAngle + 1), -1, 1, -15, 15);
  let sway3 = map(sin(currentAngle + 2), -1, 1, -25, 25);

  strokeWeight(5);
  stroke('#00CC00');
  line(300 + sway1, 200, 300, 400);

  push();
  translate(sway1, 0);
  noStroke();
  fill('#FFFF00');
  circle(300, 150, 40);
  circle(300, 250, 40);
  circle(250, 200, 40);
  circle(350, 200, 40);
  circle(335, 235, 40);
  circle(335, 165, 40);
  circle(265, 235, 40);
  circle(265, 165, 40);
  
  let f1Color = lerpColor(color('#FF8000'), color('#FF0000'), map(cos(currentAngle), -1, 1, 0, 1));
  fill(f1Color);
  circle(300, 200, 100);
  pop();

  strokeWeight(5);
  stroke('#00CC00');
  line(150 + sway2, 250, 150, 400);

  push();
  translate(sway2, 0);
  noStroke();
  fill('#FF0000');
  circle(150, 200, 40);
  circle(150, 300, 40);
  circle(100, 250, 40);
  circle(200, 250, 40);
  circle(185, 285, 40);
  circle(185, 215, 40);
  circle(115, 285, 40);
  circle(115, 215, 40);
  fill('#FFFF00');
  circle(150, 250, 90);
  pop();

  strokeWeight(5);
  stroke('#00CC00');
  line(450 + sway3, 250, 450, 400);

  push();
  translate(sway3, 0);
  noStroke();
  fill('#0080FF');
  circle(450, 200, 40);
  circle(450, 300, 40);
  circle(400, 250, 40);
  circle(500, 250, 40);
  circle(485, 285, 40);
  circle(485, 215, 40);
  circle(415, 285, 40);
  circle(415, 215, 40);
  fill('#FFA0FF');
  circle(450, 250, 90);
  pop();

  fill('#804000');
  rect(0, 370, 600, 30);

  
}
