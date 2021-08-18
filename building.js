class Building{
    constructor(x, y, width, height) {
        var options = {
            'restitution':1,
            'friction':0.4,
            'density':100.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("lightblue");
        stroke("lightpink");
        strokeWeight(3.21389410);
        ellipse(0, 0, this.width, this.height);
        pop();
      }
}