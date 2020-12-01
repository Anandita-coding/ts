class Polygon{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.image =loadImage("unnamed.png")

    //attach(body){

    //}

    this.x=x;
    this.y=y;
    this.r=r;
    this.body = Bodies.circle(this.x,this.y,this.r/2,options)    
    World.add(world,this.body)
    }
    display(){
        var polygonPos = this.body.position;
               
        imageMode(CENTER)
        fill ("skyBlue")
        image(this.image,50,200,this.r,this.r)
        
    }
}