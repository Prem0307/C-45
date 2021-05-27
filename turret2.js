class Turret2
{
    constructor(x, y, width, height)
     {
  var turret2_options={
      isStatic:true,
  }
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, width, height, turret2_options);

      this.turret2_image = loadImage("Images/turret.png");
      World.add(myWorld, this.body);
    }
    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER);
        image(this.turret2_image,0,0,30,60)
    }
    rotateUp(){
        Matter.Body.setAngle(this.body, this.body.angle - PI/5);
        Matter.Body.translate(this.body, {x: 0.00, y: 0.35});
    }

    rotateDown(){
        Matter.Body.setAngle(this.body, this.body.angle + PI/5);
        Matter.Body.translate(this.body, {x: 0.00, y: -0.35});
    }
}