class PR {
    constructor(x, image) {  //create constructor with 3 paramenter x y and image then pass a new player object with those parameters
        this.x = x;
        this.y = 475;
        this.width = 75;
        this.height = 75;
        this.image = image;
    }
    draw(){
        const image = new Image();
        image.src = this.image;
        context.drawImage(image, this.x, this.y, this.width, this.height);
        /* context.strokeStyle="black";
        context.strokeRect(this.x, this.y, this.width, this.height); */
    }
    // draw2(){
    //     const image10 =new Image();
    //     image10.src=
    //     context.drawImage(image10, this.x, this.y, this.width, this.height); 
    // }
    /*draw2(){
        const player2Img = new Image();  "./images/player1.png";  "./images/Jlo.png";
        player2Img.src = "./images/player2.png";
        context.drawImage(player2Img, this.x, this.y, this.width, this.height);
    }*/
movePR(key) {
        context.clearRect(this.x, this.y, this.width, this.height);
        switch (key) {
            case "ArrowLeft":
                if (this.x > 20) {
                    this.x -= 20;
                }
                    break;
            case "ArrowRight":
                if (this.x < 1270) {
                    this.x += 20;
                }
                    break;
                case "ArrowUp":
                if (this.y > 20) {
                    this.y -= 20;
                }
                    break;
                case "ArrowDown":
                if (this.y < 643) {
                    this.y += 20;
                }
                    break;
        }
    }
    movePR2(key) {
        context.clearRect(this.x, this.y, this.width, this.height);
        switch (key) {
            case 'a':
                if(this.x >20){
                    this.x -= 20;
                }
                break;
            case 'd':
                if (this.x < 1270) {
                    this.x += 20;
                }
                break;
            case 'w':
                if (this.y > 20){
                    this.y -= 20;
                }
                break;
            case 's':
                if (this.y < 643){
                    this.y += 20;
                }
                break;
        }
    }
}