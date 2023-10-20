document.addEventListener("DOMContentLoaded", (event) => {
    const body = document.querySelector('body');
    body.style.height = "550px";
    body.style.width = '550px';
    const overture = document.querySelector("#overture");
    const curse = document.querySelector("#curse");
    curse.volume = .1;
    overture.volume = .1;
    const currentScoreEle = document.querySelector("#current");
    const slimeClass = new Slime();
    let timeoutID = setTimeout(slimeClass.boundAppear, slimeClass.SPEED)
    const slime = document.querySelector("#slime")
    slime.addEventListener('click', () => {
        clearTimeout(slimeClass.timeoutID);
        slime.style.left = `${slimeClass.slimePositioner()}`;
        slime.style.top = `${slimeClass.slimePositioner()}`;
        slimeClass.currentScore ++;
        console.log(slimeClass.currentScore);
        currentScoreEle.innerHTML = `Current Score: ${slimeClass.currentScore}`
        clearTimeout(timeoutID);
        timeoutID = setTimeout(slimeClass.boundAppear, slimeClass.SPEED)
    })
});

class Slime {
  constructor() {
    this.node = document.createElement("img");
    this.node.setAttribute("id", "slime");
    this.node.setAttribute("src", "images/Slime_Artwork.png");
    this.node.style.height = "50px";
    this.node.style.position = "absolute";
    const currentScoreEle = document.querySelector("#current");
    this.currentScore = 0;
    const body = document.querySelector("body");
    let leftPosition = this.slimePositioner();
    let topPosition = this.slimePositioner();
    currentScoreEle.innerHTML = `Current Score:  ${this.currentScore}`; 
    this.node.lives = 3;
    this.node.style.left = `${leftPosition}px`;
    this.node.style.top = `${topPosition}px`;
    body.appendChild(this.node);

    this.SPEED = 2000;
    this.boundAppear = this.clickReappear.bind(this);
    this.isHidden = false;
  }

  slimePositioner() {
    return Math.floor(Math.random() * 450) + 100;
  }

  clickReappear() {
    this.node.lives --;
    if (this.node.lives === 0) {
        const overture = document.querySelector("#overture");
        const curse = document.querySelector("#curse");
        overture.pause();
        curse.play();
        setTimeout(function() {throw alert("Game Over! Try again some slime!")}, 1);
    } else {
        this.timeoutID = setTimeout(this.boundAppear, this.SPEED);
        clearTimeout(this.timeoutID);
        const theSlime = this.node;
        theSlime.style.left = `${this.slimePositioner()}`;
        theSlime.style.top = `${this.slimePositioner()}`;
        this.timeoutID = setTimeout(this.boundAppear, this.SPEED)
    }
    }
}