/*

  Instructions:
  Include gamelet.js in an HTML document containing
  an element with an id of 'ball'.
  The script will detect when the left or right
  arrow key is pressed and will move the ball
  element accordingly.

*/

const ball = document.getElementById("ball"); // get the ball

document.addEventListener("keydown", handleKeyPress); // listen for keys
let position = 0;

/*
handleKeyPress
responds to certain key presses by updating position.
*/
function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    position -= 10;
  }
  if (e.code === "ArrowRight") {
    position += 10;
  }
  if (position < 0) {
    position = 0;
  }
  refresh(); // reposition the ball
}

/*
refresh
updates the position of the ball
*/
function refresh() {
  ball.style.left = position + "px";
}
