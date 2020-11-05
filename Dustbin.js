class Dustbin{



    

        constructor(x,y,width,height){
        
            var options={
                isStatic:true
            }
        
           this.body=Bodies.rectangle(x,y,width,height,options);
           World.add(world,this.body);
        
           this.width=width;
           this.height=height;
           this.x=x;
           this.y=y;
           this.image=loadImage("Sprites1/dustbinImage");
           this.image=addImage;
        
        }
        
        display(){
        rectMode(CENTER);
        
        
        push ()
        
        translate(this.body.position.x,this.body.position.y)
        rotate (this.body.angle);
        rectMode(CENTER);
        fill("black");
        
        rect(0,0,this.width,this.height);
        
        pop ();
        
        }
    
    }
