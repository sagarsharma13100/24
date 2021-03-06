class Paper {
    constructor(x, y,width,radius) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.2
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.width = this.width;
      this.height = this.height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //var angle = this.body.angle;
      push();
      //translate(pos.x, pos.y);
      //rotate(angle);
      ellipseMode(RADIUS);

      fill("yellow");
      circle(pos.x,pos.y, this.width, this.height);
      pop();
    }
  };
  