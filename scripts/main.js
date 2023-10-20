document.addEventListener("DOMContentLoaded", (event) => {
    const body = document.querySelector('body');
    body.style.height = "550px";
    body.style.width = '550px';
    const overture = new Audio("audio/01 Overture.mp3");
    overture.volume = .1;
    overture.play();
    new Slime();
});

class Slime {
    constructor() {
        this.node = document.createElement("img");
        this.node.setAttribute("id", "slime");
        this.node.setAttribute("src", "images/Slime_Artwork.png");
        this.node.style.height = '50px';
        const body = document.querySelector('body');
        let leftPosition = this.slimePositioner();
        let topPosition = this.slimePositioner();


        this.node.style.left = `${leftPosition}px`;
        this.node.style.top = `${topPosition}px`;
        body.appendChild(this.node);
        
    }
    slimePositioner() {
        return Math.floor(Math.random() * 550)
    }
}