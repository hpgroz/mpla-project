class PR {
    constructor() {  //create constructor with 3 paramenter x y and image then pass a new player object with those parameters
        this.x = 1000;
        this.y = 475;
        this.width = 100;
        this.height = 100;
        
    }
    draw() {
        const image = new Image();
        image.src = "./images/Zedu2.png";
        context.drawImage(image, this.x, this.y, this.width, this.height);
        /* const image6 =new Image();
        image.src="./images/Jlo.png";
        context.drawImage(image6, this.x, this.y, this.width, this.height); */
    }
movePR(key) {
        context.clearRect(this.x, this.y, this.width, this.height);
        switch (key) {
            case "ArrowLeft":
                if (this.x > 20) {
                    this.x -= 20;
                }
                    break;
                
            case "ArrowRight":
                if (this.x < 1130) {
                    this.x += 20;
                }
                    break;
                
                case "ArrowUp":
                if (this.y > 20) {
                    this.y -= 20;
                }
                    break;
                
                case "ArrowDown":
                if (this.y < 480) {
                    this.y += 20;
                }
                    break;
                
        }
    }
}

