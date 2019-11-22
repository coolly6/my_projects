const canvas=document.querySelector('canvas');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let c=canvas.getContext('2d');

function Circle(x,y,dx,dy,radius){
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius;

    this.draw=()=>{
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI,false);
        c.fill();
        c.fillStyle='rgba('+Math.random()*255+','+Math.random()*255+','+Math.random()*255+','+Math.random()+')';
        c.stroke() 

        
    }

    this.update=()=>{
        if(this.x + this.radius > innerWidth || this.x -this.radius < 0){
            this.dx= -this.dx;
        }
        if(this.y + this.radius > innerHeight || this.y -this.radius < 0){
            this.dy= -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw();

    }
}

let circleArray=[];


for(i=0;i<200;i++){
    let radius=10;
    let x=Math.random() * (innerWidth-radius * 5) + radius;
    let y=Math.random() * (innerHeight-radius * 10) + radius;
    let dx=(Math.random()+3);
    let dy=(Math.random()+3);

    circleArray.push(new Circle(x,y,dx,dy,radius));
}

    function animate(){
        requestAnimationFrame(animate);
        c.clearRect(0,0,innerWidth,innerHeight);

        for(i=0;i<circleArray.length;i++){
            circleArray[i].update();
        }
    }
    animate();