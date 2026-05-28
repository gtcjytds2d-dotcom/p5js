function setup() {
  
  createCanvas(600, 400);
  background('#33FFFF');
  
  noStroke();
  circle(50, 50, 200);
  circle(350, 350, 200);
  circle(520, 50, 200);
  triangle(180, 200, 300, 250, 30, 350);  
  triangle(220, 150, 300, 200, 400, 30);
  triangle(500, 300, 650, 450, 700, 800);
  
  
  strokeWeight(5); // 줄기 1
  stroke('#00CC00');
  line(300, 200, 300, 400);

  noStroke();
  fill('#FFFF00')
  circle(300,150,40); // 꽃잎 1
  circle(300,250,40);
  circle(250,200,40);
  circle(350,200,40);
  circle(335,235,40);
  circle(335,165,40);
  circle(265,235,40);
  circle(265,165,40);
  
  fill('#FF8000') // 꽃 중심 1
  circle(300,200,100); 
  
  
  strokeWeight(5); // 줄기 2
  stroke('#00CC00');
  line(150, 250, 150, 400);
  
  noStroke();
  fill('#FF0000'); // 꽃잎 2
  circle(150, 200, 40);  
  circle(150, 300, 40);   
  circle(100, 250, 40);   
  circle(200, 250, 40);   
  circle(185, 285, 40);   
  circle(185, 215, 40);   
  circle(115, 285, 40);   
  circle(115, 215, 40);   
  
  fill('#FFFF00'); // 꽃 중심 2
  circle(150, 250, 90);
  
  
  strokeWeight(5); // 줄기 3
  stroke('#00CC00');
  line(450, 250, 450, 400);
  
  noStroke();
  fill('#0080FF'); // 꽃잎 3
  circle(450, 200, 40);  
  circle(450, 300, 40);  
  circle(400, 250, 40);   
  circle(500, 250, 40);   
  circle(485, 285, 40);   
  circle(485, 215, 40);   
  circle(415, 285, 40);   
  circle(415, 215, 40);  
  
  fill('#FFA0FF'); // 꽃 중심 3
  circle(450, 250, 90);
  
  
  fill('#804000'); // 땅
  rect(0, 370, 600, 30);
  
}
