class Snow {
    constructor(x, y, r) {
        var options = {
            restitution: 1,
            friction: 0,
            speed:8
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r=r;
        this.color= color((255,255,255));
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};