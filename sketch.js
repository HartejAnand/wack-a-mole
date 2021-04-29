var score=0;

function setup() {
  createCanvas(700,700);
  
}

function draw() {
  background(random(200,255),0,255);
  fill(255,255,255);
  noStroke();
  rect(50,50,600,600);

  Mole1(150,150);
  Mole2(350,150);
  Mole3(550,150);
  Mole4(150,350);
  Mole5(350,350);
  Mole6(550,350);
  Mole7(150,550);
  Mole8(350,550);
  Mole9(550,550);

  fill(0,0,0);
  noStroke();
  textSize(30);
  text("score:"+score,275,35);
  text("Wack-A-Mole",250,685);

  drawSprites();
  
  cursor('none');
  fill(255,0,0);
  for(var c=15;c>0;c-=2){
    strokeWeight(1);
    stroke(random(200,255),0,0);
    rect(mouseX-c,mouseY-c,c*2,c*2);
  }
}

var mole1=false;
var time1=0;

var Mole1=function(x,y){
  stroke(200,200,200);
      strokeWeight(10);
      fill(0,0,0);
      ellipse(x,y,150,150);
      
      
      var m=floor(random(0,160));
      if(m===3){
        mole1=true;
        time1=30;
      }
      
      time1--;
      var mole=createSprite(x,y,100,100);
      if(time1>0){
        mole.shapeColor=rgb(150,90,0);
      }
      else{
        mole.shapeColor=rgb(0,0,0);
        mole1=false;
      }
      if(mouseIsPressed && mouseX>mole.x-50 && mouseX<mole.x+50 && mouseY>mole.y-50 && mouseY<mole.y+50 && mole1===true){
        score++;
        time1=0;
      }
};
var mole2=false;
var time2=0;

var Mole2=function(x,y){
  stroke(200,200,200);
      strokeWeight(10);
      fill(0,0,0);
      ellipse(x,y,150,150);
      
      var m=floor(random(0,160));
      if(m===3){
        mole2=true;
        time2=30;
      }
      
      time2--;
      
      var mole=createSprite(x,y,100,100);
      if(time2>0){
        mole.shapeColor=rgb(150,90,0);
      }
      else{
        mole.shapeColor=rgb(0,0,0);
        mole2=false;
      }
      if(mouseIsPressed && mouseX>mole.x-50 && mouseX<mole.x+50 && mouseY>mole.y-50 && mouseY<mole.y+50 && mole2===true){
        score++;
        time2=0;
      }
};
var mole3=false;
var time3=0;

var Mole3=function(x,y){
  stroke(200,200,200);
      strokeWeight(10);
      fill(0,0,0);
      ellipse(x,y,150,150);
      
      
      var m=floor(random(0,160));
      if(m===3){
        mole3=true;
        time3=30;
      }
      
      time3--;
      var mole=createSprite(x,y,100,100);
      if(time3>0){
        mole.shapeColor=rgb(150,90,0);
      }
      else{
        mole.shapeColor=rgb(0,0,0);
        mole3=false;
      }
      if(mouseIsPressed && mouseX>mole.x-50 && mouseX<mole.x+50 && mouseY>mole.y-50 && mouseY<mole.y+50 && mole3===true){
        score++;
        time3=0;
      }
};
var mole4=false;
var time4=0;

var Mole4=function(x,y){
  stroke(200,200,200);
      strokeWeight(10);
      fill(0,0,0);
      ellipse(x,y,150,150);
      
      
      var m=floor(random(0,160));
      if(m===3){
        mole4=true;
        time4=30;
      }
      
      time4--;
      var mole=createSprite(x,y,100,100);
      if(time4>0){
        mole.shapeColor=rgb(150,90,0);
      }
      else{
        mole.shapeColor=rgb(0,0,0);
        mole4=false;
      }
      if(mouseIsPressed && mouseX>mole.x-50 && mouseX<mole.x+50 && mouseY>mole.y-50 && mouseY<mole.y+50 && mole4===true){
        score++;
        time4=0;
      }
};
var mole5=false;
var time5=0;

var Mole5=function(x,y){
  stroke(200,200,200);
      strokeWeight(10);
      fill(0,0,0);
      ellipse(x,y,150,150);
      
      
      var m=floor(random(0,160));
      if(m===3){
        mole5=true;
        time5=30;
      }
      
      time5--;
      var mole=createSprite(x,y,100,100);
      if(time5>0){
        mole.shapeColor=rgb(150,90,0);
      }
      else{
        mole.shapeColor=rgb(0,0,0);
        mole5=false;
      }
      if(mouseIsPressed && mouseX>mole.x-50 && mouseX<mole.x+50 && mouseY>mole.y-50 && mouseY<mole.y+50 && mole5===true){
        score++;
        time5=0;
      }
};
var mole6=false;
var time6=0;

var Mole6=function(x,y){
  stroke(200,200,200);
      strokeWeight(10);
      fill(0,0,0);
      ellipse(x,y,150,150);
      
      
      var m=floor(random(0,160));
      if(m===3){
        mole6=true;
        time6=30;
      }
      
      time6--;
      var mole=createSprite(x,y,100,100);
      if(time6>0){
        mole.shapeColor=rgb(150,90,0);
      }
      else{
        mole.shapeColor=rgb(0,0,0);
        mole6=false;
      }
      if(mouseIsPressed && mouseX>mole.x-50 && mouseX<mole.x+50 && mouseY>mole.y-50 && mouseY<mole.y+50 && mole6===true){
        score++;
        time6=0;
      }
};
var mole7=false;
var time7=0;

var Mole7=function(x,y){
  stroke(200,200,200);
      strokeWeight(10);
      fill(0,0,0);
      ellipse(x,y,150,150);
      
      
      var m=floor(random(0,160));
      if(m===3){
        mole7=true;
        time7=30;
      }
      
      time7--;
      var mole=createSprite(x,y,100,100);
      if(time7>0){
        mole.shapeColor=rgb(150,90,0);
      }
      else{
        mole.shapeColor=rgb(0,0,0);
        mole7=false;
      }
      if(mouseIsPressed && mouseX>mole.x-50 && mouseX<mole.x+50 && mouseY>mole.y-50 && mouseY<mole.y+50 && mole7===true){
        score++;
        time7=0;
      }
};
var mole8=false;
var time8=0;

var Mole8=function(x,y){
  stroke(200,200,200);
      strokeWeight(10);
      fill(0,0,0);
      ellipse(x,y,150,150);
      
      
      var m=floor(random(0,160));
      if(m===3){
        mole8=true;
        time8=30;
      }
      
      time8--;
      var mole=createSprite(x,y,100,100);
      if(time8>0){
        mole.shapeColor=rgb(150,90,0);
      }
      else{
        mole.shapeColor=rgb(0,0,0);
        mole8=false;
      }
      if(mouseIsPressed && mouseX>mole.x-50 && mouseX<mole.x+50 && mouseY>mole.y-50 && mouseY<mole.y+50 && mole8===true){
        score++;
        time8=0;
      }
};
var mole9=false;
var time9=0;

var Mole9=function(x,y){
  stroke(200,200,200);
      strokeWeight(10);
      fill(0,0,0);
      ellipse(x,y,150,150);
      
      
      var m=floor(random(0,160));
      if(m===3){
        mole9=true;
        time9=30;
      }
      
      time9--;
      var mole=createSprite(x,y,100,100);
      if(time9>0){
        mole.shapeColor=rgb(150,90,0);
      }
      else{
        mole.shapeColor=rgb(0,0,0);
        mole9=false;
      }
      if(mouseIsPressed && mouseX>mole.x-50 && mouseX<mole.x+50 && mouseY>mole.y-50 && mouseY<mole.y+50 && mole9===true){
        score++;
        time9=0;
      }
};