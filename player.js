class PR {
    constructor() {  //create constructor with 3 paramenter x y and image then pass a new player object with those parameters
        this.x = 1000;
        this.y = 500;
        this.width = 50;
        this.height = 50;
    }
    draw() {
        const image = new Image();
        image.src = "https://assets.stickpng.com/images/580b57fcd9996e24bc43c316.png";
        context.drawImage(image, this.x, this.y, this.width, this.height);
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

