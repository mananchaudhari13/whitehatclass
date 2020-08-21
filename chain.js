class Chain  { 
constructor(a,b){
var options ={
    bodyA : a,
    bodyB :b,
    length : 10,
    stiffness : 0.5,
}
this.chain=Matter.Constraint.create(options)
World.add(world,this.chain)

}
display(){
var A = this.chain.bodyA.position
var B= this.chain.bodyB.position
line(A.x,A.y,B.x,B.y)

}



}