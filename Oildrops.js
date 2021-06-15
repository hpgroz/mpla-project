class Oil {
    constructor(x, y, width, height){ //because we have different obstacles with different positions and widths and heights
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw() {
        const image5 = new Image();
        image5.src = "./images/oil-drop-icon.png";
        context.drawImage(image5, this.x, this.y, this.width, this.height);
    } 
}