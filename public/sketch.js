function preload(){
}

var socket;

function setup() {
  createCanvas(windowWidth,windowHeight);

  socket = io();

  background("blue");
}

function draw() {

}

function mouseDragged() {
  fill(255);
  strokeWeight(3);
  ellipse(mouseX, mouseY, 20);

  var sendData = {
    x: mouseX,
    y: mouseY
  }

  socket.emit("mouse", sendData);
  socket.on("mouseBroadcast", newDrawing);

  function newDrawing(receivedData) {
    fill("yellow");
    ellipse(receivedData.x, receivedData.y, 10);
  }
}
