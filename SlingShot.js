class SlingShot{
    constructor(bodyA, point){
        var options = {
            bodyA: bodyA,
            pointB: point,
            stiffness: 0.04,
            length: 2
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    console.log(this.sling.bodyA.position)
    }
    attach(body){
        this.sling.bodyA = body
        }

    fly(){
this.sling.bodyA = null
    }
    display(){                                              
       if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        fill ("seaBlue")
        //strokeWeight();
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    } 
    }
    



}