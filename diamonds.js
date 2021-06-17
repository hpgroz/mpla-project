class Diamond {
    constructor(x, y, width, height){ //because we have different obstacles with different positions and widths and heights
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw() {
        const image4 = new Image();
        image4.src = "./images/happy_tree_friends/sugarCane-icon.png";
        context.drawImage(image4, this.x, this.y, this.width, this.height);
        /* context.strokeStyle="black";
        context.strokeRect(this.x, this.y, this.width, this.height); */
    } 
}