/**
 * Created with Canvas.
 * User: Novark3
 * Date: 2015-04-27
 * Time: 09:42 PM
 * To change this template use Tools | Templates.
 */
var keyUp = false;
var keyLeft = false;
var keyRight = false;
var keyDown = false;
var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var horizontal = 95;
var vertical = 50;
ctx.strokeRect(0, 0, 500, 500);

function setFalse(event) {
    var key = event.which;
    if(key == 37) {
        keyLeft = false
    }
    if(key == 38) {
        keyUp = false
    }
    if(key == 39) {
        keyRight = false
    }
    if(key == 40) {
        keyDown = false
    }};

function keyDownHandler(event) {
    var key = event.which;
    if(key == 37) {
        keyLeft = true
    }
    if(key == 38) {
        keyUp = true
    }
    if(key == 39) {
        keyRight = true
    }
    if(key == 40) {
        keyDown = true
    }
};
window.addEventListener("keydown", keyDownHandler, true);
window.addEventListener("keyup", setFalse, true)

function moveBall() {
    if(keyLeft == true) {
        horizontal -= 5
    }
    if(keyUp == true) {
        vertical -= 5
    } 
    if(keyRight == true) {
        horizontal += 5
    }
    if(keyDown == true) {
        vertical += 5
    }
}
// window.addEventListener("click", function() {
//     horizontal++;
//     vertical++;
// });
// 	ctx.beginPath();
// 	ctx.strokeStyle = '#ee0000';
// 	ctx.lineWidth = 1;
// 	var x = -x_max;
// 	var y = 2 * Math.sin(x * Math.PI); // the equation
// 	ctx.moveTo(offsetX(x), offsetY(y));
// 	while (x < x_max) { 
// 		x += 0.1;
// 		y = 2 * Math.sin(x * Math.PI); 
// 		ctx.lineTo(offsetX(x), offsetY(y));
// 	}
// 	ctx.stroke();
// 	ctx.closePath();
// var myX = 20;
// window.addEventListener("click", function(){
// var img = document.getElementById("vanGogh");
// ctx.clearRect(0, 0, 500, 500)
//     //ctx.drawImage(img, );
// })

function gameLoop() {
    ctx.clearRect(0, 0, 500, 500);
    ctx.beginPath();
    moveBall();
    ctx.arc(horizontal, vertical, 40, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    window.requestAnimationFrame(gameLoop)
};
gameLoop();