class Obstacle {
    constructor(x, y, width, height){ //because we have different obstacles with different positions and widths and heights
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

    }

    draw() {
        context.fillStyle = 'black';
        context.fillRect(this.x, this.y, this.width, this.height);
        
    }
}