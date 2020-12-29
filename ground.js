class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var loc=this.body.position;
        rectMode(CENTER);
        rect(loc.x,loc.y,this.width,this.height);
    }
}