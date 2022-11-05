 

//variables// 
let cloud1;
let cloud2;
let seven_eleven; 
let second_shop;
let vending;
let fence;
let bush1;
let bush3;
let bussign;
let train;
let x; 
let drop = [] 



function preload() {
  seven_eleven = loadImage('7:11.png')
  second_shop = loadImage('Tokyo’s Konbini in Pixel Form.png') 
  vending = loadImage('vendingmachine.png')
  locker = loadImage('Lockers.png')
  cloud1 = loadImage('PIXCLOUD1.png');
  cloud2 = loadImage('PIXCLPUD2.png'); 
  fence = loadImage('fence.png');
  light_pole = loadImage('lightpole.png')
  bush1 = loadImage('BUSH1.png')
  bush3 = loadImage('BUSH3.png')
  bench = loadImage('bench.png') 
  bussign = loadImage('bus sign.png')
  train = loadImage('train.png')
}   



function setup() { 
  noStroke() 
  createCanvas(800, 550); 
  
  
  
  for(var i = 0; i < 200; i++) {
    drop[i] = new Drop(); 
    
    
    
    //resize the imported images//   
cloud1.resize(0, 140);
  cloud2.resize(0, 140);
  seven_eleven.resize(0, 450)
  second_shop.resize(0, 450)
  vending.resize(0, 75)
  fence.resize(0, 80)
  bush1.resize(0, 35)
  bush3.resize(0, 45) 
  bench.resize(0, 40)
  bussign.resize(0, 85) 
  train.resize(0, 37) 
    
    x = 0 
  
}
}



function draw() {  


noStroke()
  //background//
  if (mouseIsPressed == true) {
    background(3, 5, 115); // night time - dark blue //
  }
  else {
    background(176, 230, 255); // day time - light blue // 
  }   
  
  //rain//
  for(var i = 0; i < 200; i++) {
  drop[i].show();
  drop[i].update() 
    
  }

  
  //buildings// 

if (mouseIsPressed == true) {

//bg building// 
  fill(2, 3, 92); 
rect(60, 200, 110, 300)
rect(450, 70, 75, 500)
  
//window 1//
 fill(247, 229, 111)
rect(66, 210, 100, 20)
rect(66, 240, 100, 20) 
rect(66, 280, 100, 20) 
rect(66, 310, 100, 20)
rect(66, 340, 100, 20) 
rect(66, 380, 100, 20) 

//window 2// 
rect(456, 85, 62, 20)
rect(456, 125, 62, 20)
rect(456, 165, 62, 20)
rect(456, 205, 62, 20)
rect(456, 245, 62, 20)
rect(456, 285, 62, 20)
rect(456, 325, 62, 20)
  
} 
  
else {
  
//bg buildings//
   fill(154, 221, 252); 
rect(60, 200, 110, 300)
rect(450, 70, 75, 500)

//windows 1// 
  fill(189, 233, 252)
rect(66, 210, 100, 20)
rect(66, 240, 100, 20) 
rect(66, 280, 100, 20) 
rect(66, 310, 100, 20)
rect(66, 340, 100, 20) 
rect(66, 380, 100, 20)  

//window 2//

rect(456, 85, 62, 20)
rect(456, 125, 62, 20)
rect(456, 165, 62, 20)
rect(456, 205, 62, 20)
rect(456, 245, 62, 20)
rect(456, 285, 62, 20)
rect(456, 325, 62, 20)
  

  
}
  
//front building//
  
if (mouseIsPressed == true) { fill(0, 1, 61)
rect(0, 290, 100, 200);
rect(200, 20, 120, 500);
rect(680, 330, 150, 500) 
}
  
else {
fill(120, 179, 207)
rect(5, 290, 120, 200);
rect(200, 20, 120, 500);
rect(680, 330, 150, 500) 
  
}


  
  
  //pavement// 
  {
   if (mouseIsPressed == true) {
    fill(146, 150, 156); //dark grey // 
  }
  else {
    fill(177, 179, 181);// light grey //
  } 
    stroke(0)
    rect(0, 440, 800, 440);
  } 

  
  //road// 
  fill(90, 92, 94)
  noStroke()
  rect(0, 480, 800, 500) 
  
  
  //divider//
  fill(130, 137, 143)
  rect(0, 480, 800, 10)
  stroke(111, 117, 122)
  line(80, 490, 80, 480)
  line(160, 490, 160, 480)
  line(240, 490, 240, 480)
  line(320, 490, 320, 480)
  line(400, 490, 400, 480)
  line(480, 490, 480, 480)
  line(560, 490, 560, 480) 
  line(640, 490, 640, 480)
  line(720, 490, 720, 480)
  
  
  //clouds//
  {image(cloud1, mouseX, 16); 
  image(cloud2, mouseX/2, 50);
}  
  
   //train tracks// 
  stroke(82, 82, 82) 
  fill (215, 215, 217)
  rect(0, 260, 800, 7) //top//
  fill(189, 189, 191)
  rect(0, 267, 800, 10) //bottom// 
  
  
  // train pillars //  
  fill(107, 105, 105)
  rect(90, 277, 25, 164) 
  rect(180, 277, 25, 164)    
  rect(630, 277, 25, 164)  
  rect(720, 277, 25, 164)  
  
  
  //train// 
  x = x + 4 
  image(train, x+800, 230) 
  
  if(x > 500) {
    x = -1000
  }
  

  //bush//
   
  {image(bush1, 700, 410)
   image(bush1, 720, 410)
   image(bush1, 650, 410)
   image(bush3, 765, 402)
   image(bush3, 680, 402)
   image(bush3, 740, 402)
   
  }  
  

  //buildings// 
  {image(seven_eleven, 200, 65);
   image(fence, 630, 365);
   image(second_shop, 400, 63);
   image(vending, 210, 380);
    
  } 
  
  //bus stop// 
  noStroke()
  fill(41, 51, 115) 
  rect(38, 364, 7, 86)
  rect(185, 364, 7, 86)
  rect(62, 370, 4.5, 70)
  rect(167, 370, 4.5, 70)
  rect(62, 410, 107, 4) 
  rect(34, 363, 162, 7) 
  rect(37, 358, 155, 7) 
  stroke(41, 51, 115)
  line(45, 422, 62, 412)
  line(185,422, 171, 412)  
  
  
  //bench// 
  image(bench, 110, 410) 
  
  
  //bus sign// 
  image(bussign, 1, 370)  
  
  //street gate//  
  
  fill(211, 212, 222)
  rect(790, 455, 2, 26)
  rect(690, 455, 2, 26)
  rect(590, 455, 2, 26)
  rect(490, 455, 2, 26)
  rect(390, 455, 2, 26) 
  rect(290, 455, 2, 26)  
  rect(290, 455, 510, 7) 
  
  
}  



//snow fall//

function Drop() {
  this.x = random(0, width);
  this.y = random(0, -height);
  
  this.show = function() 
  
  { 
    if (mouseIsPressed == true) { 
    noStroke(); 
    fill(255);
      
    ellipse(this.x, this.y, random(1, 5), random(1, 5));   
  }
  this.update = function() {
    this.speed = random(5, 10);
    this.gravity = 1.05;
    this.y = this.y + this.speed*this.gravity;  
    
    if (this.y > height) {
      this.y = random(0, -height);
      this.gravity = 0; 
}
}
} 
}  


