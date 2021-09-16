class Rope{
    constructor(body1,body2,offsetx,offsety){
    
    this.offsetx=offsetx,
    this.offsety=offsety
var options={
    bodyA:body1,
    bodyB:body2,
    pointB:{x:this.offsetx,y:this.offsety}
}

this.rope=Constraint.create(options);
World.add(world,this.rope);
    }

display(){
var pointA=this.rope.bodyA.position;
var pointB=this.rope.bodyB.position;

strokeWeight(2);

var Anchor1x=pointA.x;
var Anchor1y=pointA.y;

var Anchor2x=pointB.x+this.offsetx;
var Anchor2y=pointB.y+this.offsety;

line(Anchor1x,Anchor1y,Anchor2x,Anchor2y);
}

}
