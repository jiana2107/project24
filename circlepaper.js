class Circlepaper{
    constructor(x,y,r){
     var options={
         density:1.2,
         friction:0.2,
         restitution:0.3,
         //isStatic:true
     }
     this.body=Bodies.circle(x,y,r,options)
     //this.width=w;
     this.radius=r;
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
     ellipseMode(RADIUS);
     fill("white");
     ellipse(0,0,this.radius);
     pop();
    }
   
   }