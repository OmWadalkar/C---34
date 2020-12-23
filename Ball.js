class Ball
{
    constructor(x,y,widht,height,angle)
    {
        var options = 
        { 
        density: 1,
         frictionAir: 0.005
        };
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = widht;
    this.height = height;
    World.add(world,this.body)
    }
    display()
    {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle)
    ellipseMode(CENTER);
    fill("red");
    ellipse(0,0,this.width,this.height);
    pop();
    }
}