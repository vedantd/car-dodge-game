var car
var obstacle1
//====================================================================================


//================================================================================================
function Car(){
  this.x=120;
  this.y=530;
  this.right=function(){
    this.x=260;

  }
  this.forward=function(){
    this.y=this.y-4;
  }
  this.backward=function(){
    this.y=this.y+4;
  }

  this.left=function(){
    this.x=120;
  }


  this.show=function(){
    image(img1,this.x,this.y,80,150);


    // fill(255);
    // ellipse(this.x, this.y, 70, 70);
  }


}

//=======================================================================================================
function leftObstacles(){
  this.x= 180;
  this.y= 30;
  speed=10;
  this.hit=function(car){
    if(car.y===530 && car.x===120 && this.x===180 && (this.y>510&& this.y<730)){
      return true;
    }
  }
  this.show=function(){
    ellipse(this.x, this.y,60, 60);
    fill(255);
  }

  this.update=function(){
    this.y=this.y+Math.random()*3;
  }

}

//=========================================================================================================
function rightObstacles(){
  this.x=270;
  this.y= 30;
  speed=10;
  this.show=function(){
    ellipse(this.x, this.y,60, 60);
    fill(255);
  }

  this.hit=function(car){
    if(car.y===530 && car.x===120 && this.x===180 && (this.y>510&& this.y<730)){
      return true;
    }
  }

  this.update=function(){
    this.y=this.y+2+Math.random()*3;
  }

}

//=========================================================================================================
var obstacleArray= []
var obstacleArray1=[]
function setup() {
  createCanvas(480,680);
  imgRoad = loadImage("road.png");
  car= new Car();
  //obstacle1=new leftObstacles();
  //obstacle2=new rightObstacles();
  obstacleArray.push(new leftObstacles());
  obstacleArray1.push(new rightObstacles());
}
//============================================================================================================

function draw(){
  var d=(car.y%10000);
  e=String(d);
  // console.log(d);
  s="YOU LOST THE GAME"

  text(e,20,30,200,290);
  background(imgRoad);

  car.show();

    for(var i=obstacleArray.length-1;i>=0;i--){
      obstacleArray[i].show();
      obstacleArray[i].update();
      if(obstacleArray[i].hit(car)){

        textSize(100);
        fill(255, 0, 0);
        text(s, 10, 10, 370, 580);

      }

    }

    if(frameCount %  (Math.floor(Math.random() * 700)+300)  ==0){
      obstacleArray.push(new leftObstacles());
    }

    for(var j=obstacleArray1.length-1;j>=0;j--){
      obstacleArray1[j].show();
      obstacleArray1[j].update();
      if(obstacleArray1[j].hit(car)){

        // textSize(100);
        // fill(255, 0, 0);
        // text(s, 10, 10, 370, 580);

      }

    }

    if(frameCount %  (Math.floor(Math.random() * 500)+300)  ==0){
      obstacleArray1.push(new rightObstacles());
    }



}
function preload() {
img1 = loadImage("merc.png");
}


function keyPressed(){
	if (keyCode=== RIGHT_ARROW){
		car.right();
    console.log("pressedRight");
		}

  else if (keyCode===LEFT_ARROW) {
    car.left();
    console.log("left");
  }
  else if(keyCode=== UP_ARROW){
    car.forward();
  }

  else if(keyCode=== DOWN_ARROW){
    car.backward();
  }


}
