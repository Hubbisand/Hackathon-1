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
    this.node.style.height = "50px";
    this.node.style.position = "absolute";
    const currentScoreEle = document.querySelector("#current");
    this.currentScore = 1;
    const body = document.querySelector("body");
    let leftPosition = this.slimePositioner();
    let topPosition = this.slimePositioner();
    currentScoreEle.innerHTML = `Current Score:  ${this.currentScore}`; 

    this.node.style.left = `${leftPosition}px`;
    this.node.style.top = `${topPosition}px`;
    body.appendChild(this.node);

    this.SPEED = 2000;
    this.boundAppear = this.clickReappear.bind(this);
    this.timeoutID = setTimeout(this.boundAppear, 2000);
    this.isHidden = false;
  }

  slimePositioner() {
    return Math.floor(Math.random() * 450) + 50;
  }

  checkClicked (){
    // if (currentScore++)  ? this.clickReappear() : this.noClick();
  }

  clickReappear() {
    clearTimeout(this.timeoutID);
    this.timeoutID = setTimeout(this.boundAppear, this.SPEED);
    const currentScoreEle = document.querySelector("#current");
    const theSlime = this.node;
    const body = document.querySelector('body');
    theSlime.addEventListener('click', () => {
        body.removeChild(theSlime);
        new Slime();
        this.currentScore ++;
        currentScoreEle.innerHTML = `Current Score: ${this.currentScore}`
        clearTimeout(this.timeoutID);
        return setTimeout(this.boundAppear, 0);
    })
  }
  
  noClick() {

  }
}