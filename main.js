function preload(){

}
function setup(){
    canvas=createCanvas(400,400)
    canvas.center()
    background(200)
}
function draw(){
    fill(204,101,192,127)
    stroke(127,63,12)
    ellipse(70, 70, 55, 55);
    triangle(300, 200, 320, 200, 310, 10);
    rect(40,120,100,40)
}