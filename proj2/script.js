function setup () {
  createCanvas(window.innerWidth * 0.7, window.innerHeight * 0.8)

}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function draw () {
    for(let i=0;i<300;i++) {
        stroke(86, 121, 135);
        strokeWeight(getRandomArbitrary(1, 15));
        point(getRandomArbitrary(0, 1500), getRandomArbitrary(0, 1500));
    }
}

function mousePressed(){
    noLoop();
}
