class Paper{
    constructor(x,y,r){
      var options={
          isStatic:false,
          restituition:0.3,
          friction:0,
          density:1.2
        }
        this.body=Bodies.circle(x,y,r,options);
        this.r=r;
        this.image=loadImage("paper.png");
        
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        
        imageMode(CENTER);
        image(this.image, 0,0, this.width=50, this.height=50);
        pop();
    }
}