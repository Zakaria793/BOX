class Box{

    constructor(){
        var options ={
        'restitution': 1
    }
        this.body=Bodies.rectangle(200,100,50,50,options)
            World.add(world,this.body);
    }
    
display(){
//var pos=this.body.position;
rectMode(CENTER);
fill("lightblue")
rect(this.body.position.x,this.body.posit.y,this.width,this.height);

}




}