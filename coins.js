class Coins {
    constructor(x, y, width, height){ //because we have different obstacles with different positions and widths and heights
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

    }

   
    draw() {
        const image3 = new Image();
        image3.src = "./images/coin.png";
        context.drawImage(image3, this.x, this.y, this.width, this.height);
    } 
}