class launcher{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            lenght:10

        }
        this.pointB = pointB;
        this.launcher=Constraint.create(options);
        World.add(world,this.launcher);
    }

    display(){
        var pointA= this.sling.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }

    fly(){
        this.launcher.body=null;
    }
}