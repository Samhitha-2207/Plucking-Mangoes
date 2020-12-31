class Ground{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height);
        World.add(this.body, world);
    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        fill(255);
        pop();
    }
}