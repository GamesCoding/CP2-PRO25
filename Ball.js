class Ball {

    constructor (x,y,r) {
        var options = {
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.r=r;
        this.x=x;
        this.y=y;
        this.image = loadImage("paper.png");
        this.body=Bodies.circle(this.x,this.y,this.r/2,options);

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        //rotate(angle);
        //rectMode(RADIUS);
        //fill("blue");
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}