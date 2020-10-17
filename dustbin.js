class Dustbin{
 constructor(x,y,w,h){
  var options={
      density:1.2,
      friction:0.5,
      restitution:0.3,
      isStatic:true
  }
  this.body=Bodies.rectangle(x,y,w,h,options)
  this.width=w;
  this.height=h;
  World.add(myWorld,this.body);
 }

 display(){
  var pos=this.body.position;
  var angle=this.body.angle;
  //var width=this.width;
  //var height=this.height;
  push();
  translate(pos.x,pos.y);
  rotate(angle);
  rectMode(CENTER);
  fill("red");
  rect(0,0,this.width,this.height);
  pop();
 }

}