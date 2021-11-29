class Pizza {
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        var options = {
          //  restitution:1.0
          isStatic:true
        }
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world, this.body);
        }
        display(){
    var pos = this.body.position;
    push();
     image(pizzaImg, pos.x, pos.y,this.width, this.height);
     
    //rect(pos.x, pos.y, this.width, this.height);
    pop();
    
    }
}