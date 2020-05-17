class Log{
    constructor(x,y,width,height,angle){
this.body = Bodies.rectangle(x,y,width,height,angle)
this.width = width;
this.height = height;
Matter.Body.setAngle(this.body,angle);
    }
    display(){
        var angle = this.body.angle
    }
}
