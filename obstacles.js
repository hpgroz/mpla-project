class Obstacle {
    constructor(x, y, width, height){ //because we have different obstacles with different positions and widths and heights
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

    }

   
    draw() {
        const image2 = new Image();
        image2.src = "./images/bomb-icon.jpg";
        context.drawImage(image2, this.x, this.y, this.width, this.height);
    } 
}