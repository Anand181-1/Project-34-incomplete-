class Roof {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,300,35,options);
      this.width = 260;
      this.height = 25;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("grey");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };