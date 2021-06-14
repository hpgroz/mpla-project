class Pr1 {
    constructor() {
        this.x = 600;
        this.y = 650;
        this.width = 50;
        this.height = 50;
    }
    draw() {
        const image = new Image();
        image.src = "Some image of Zedu to be placed";
        context.drawImage(image, this.x, this.y, this.width, this.height);
    }

    movePR1(key) {
        context.clearRect(this.x, this.y, this.width, this.height);
        switch (key) {
            case "ArrowLeft":
                if (this.x > 20) {
                    this.x -= 20;
                    break;
                }
            case "ArrowRight":
                if (this.x < 630) {
                    this.x += 20;
                    break;
                }
                case "ArrowUp":
                if (this.y < 20) {
                    this.y -= 20;
                    break;
                }
                case "ArrowDown":
                if (this.y < 630) {
                    this.y += 20;
                    break;
                }

        }
    }
}

class Pr2 {
    constructor() {
        this.x = 100;
        this.y = 650;
        this.width = 50;
        this.height = 50;
    }
    draw() {
        const image = new Image();
        image.src = "Some image of JLO to be placed";
        context.drawImage(image, this.x, this.y, this.width, this.height);
    }

    movePr2(key) {
        context.clearRect(this.x, this.y, this.width, this.height);
        switch (key) {
            case "A":
                if (this.x > 30) {
                    this.x -= 20;
                    break;
                }
            case "D":
                if (this.x < 630) {
                    this.x += 20;
                    break;
                }
                case "W":
                if (this.y < 30) {
                    this.y -= 20;
                    break;
                }
                case "S":
                if (this.y < 630) {
                    this.y += 20;
                    break;
                }

        }
    }
}

//Or Blinky style

class PR1{
    constructor(x, y){
        this.x=x;
        this.y=y;

        const image=new Image();

        image.src="Some image of Zedu to be put here";
        image.onload=()=>{
            this.image=image;
            this.draw();
        }
    }
    draw(){
        context.drawImage(this.image, this.x, this.y, 50, 50)
    }
    moveUp(){
        this.y-=25;
    }
    moveDown(){
        this.y+=25;
    }
    moveLeft(){
        this.x-=25;
    }
    moveRight(){
        this.x+=25;
    }
}



const Zedu=new PR1(600, 650);
/* const pinky=new Ghost(250, 150); */

document.addEventListener('keydown', (e)=>{
    switch(e.key){
        case 'ArrowUp':     //-> Up cursor key(up arrow) is number 38
            Zedu.moveUp();
        break;
        case 'ArrowDown':
            Zedu.moveDown();
        break;
        case 'ArrowLeft':
            Zedu.moveLeft();
        break;
        case 'ArrowRight':
            Zedu.moveRight();
        break;
    }
}),

function clearCanvas(){
    context.clearRect(0, 0, canvas.width, canvas.height);
}
clearCanvas();
Zedu.draw();
})
    
class PR2{
    constructor(x, y){
        this.x=x;
        this.y=y;

        const image=new Image();

        image.src="Some image of Jlo to be put here";
        image.onload=()=>{
            this.image=image;
            this.draw();
        }
    }
    draw(){
        context.drawImage(this.image, this.x, this.y, 50, 50)
    }
    moveUp(){
        this.y-=25;
    }
    moveDown(){
        this.y+=25;
    }
    moveLeft(){
        this.x-=25;
    }
    moveRight(){
        this.x+=25;
    };
},


/* const pinky=new Ghost(250, 150); */

document.addEventListener('w', (e)=>{
    switch(e.key){
        case 'W':     //-> Up cursor key(up arrow) is number 38
            Jlo.moveUp();
        break;
        case 'S':
            Jlo.moveDown();
        break;
        case 'A':
            Jlo.moveLeft();
        break;
        case 'D':
            Jlo.moveRight();
        break;
    }
})

function clearCanvas(){
    context.clearRect(0, 0, canvas.width, canvas.height);
}
clearCanvas();
Jlo.draw();
})
