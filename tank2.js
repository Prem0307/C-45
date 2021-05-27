class Tank2{
    constructor(x,y){
     var options={
         restitution:0.8,
         friction:1.0,
          density:0.04,
     }
     this.body=Bodies.rectangle(x,y,100,100,options)
     this.width=100;
     this.height=100;
     
     
     this.image=loadImage("Images/tank2.png")
     World.add(myWorld,this.body)
    }
    display(){
        push();
     translate(this.body.position.x,this.body.position.y)
     rotate(this.body.angle)
     imageMode(CENTER)
     
    image(this.image,0,0,this.width,this.height);
    pop();
    }
}