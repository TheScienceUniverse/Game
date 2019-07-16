// Setting up Canvas
var cnv = null, ctx = null;
const unit = 32;
// Setting up Food Apple
const foodImg = new Image();
foodImg.src = "./img/apple.png";
// Setting up Snake
let snake = [];
snake[0] = {
	x : 5 * unit,
	y : 5 * unit
};

let food = {
	x : Math.floor(Math.random() * 16) * unit,
	y : Math.floor(Math.random() * 16) * unit
};

// score by eating
let score = 0;

// game variable
// var game = "";

function init() {
	cnv = document.getElementById("cnv");
	ctx = cnv.getContext("2d");
	// draw();
	let game = setInterval(draw, 300);
}

function draw() {
	console.log("Hello");
	ctx.clearRect(0, 0, innerWidth, innerHeight);
	ctx.beginPath();
	ctx.strokeStyle = "#ff0000";

	var i, j, col = ["#00ff00", "#88ff88"];	// iterators, unit
	// Ground
	for (i = 0; i < 16; i++) {
		for (j = 0; j < 16; j++) {
			ctx.fillStyle = col[(i + j) % 2];
			ctx.fillRect(i * unit, j * unit, unit, unit);
		}
	}

	// Snake
	for (i = 0; i < snake.length; i++) {
		ctx.fillStyle = (i == 0) ? "#0000ff" : "#ffffff";
		ctx.fillRect(snake[i].x, snake[i].y, unit, unit);
		ctx.strokeStyle = "#ff0000";
		ctx.strokeRect(snake[i].x, snake[i].y, unit, unit);
		ctx.stroke();
	}

	// Apple
	ctx.drawImage(foodImg, 0, 0, foodImg.width, foodImg.height, food.x, food.y, unit, unit);
	
	// get old head
	let snakeX = snake[0].x;
	let snakeY = snake[0].y;
	// change direction
	if (d == "L") snakeX -= unit;
	if (d == "R") snakeX += unit;
	if (d == "U") snakeY -= unit;
	if (d == "D") snakeY += unit;
	// create new head
	let newHead = {
		x : snakeX,
		y : snakeY
	}

	// eating event
	if (newHead.x == food.x && newHead.y == food.y) {
		++score;
		food = {
			x : Math.floor(Math.random() * 16) * unit,
			y : Math.floor(Math.random() * 16) * unit
		};
	} else {
		snake.pop();
	}

	// game over
	/*if (newHead.x < unit || newHead.x > 16 * unit || newHead.y < unit || newHead.y > 16) {
		clearInterval(game);
	}*/

	snake.unshift(newHead);
	// console.log(snake);
}

document.addEventListener("keydown", direction);
let d = "";
function direction(event) {
	if (event.key == "w" && d != "D") {
		d = "U";
	} else if (event.key == "a" && d != "R") {
		d = "L";
	} else if (event.key == "s" && d != "U") {
		d = "D";
	} else if (event.key == "d" && d != "L") {
		d = "R";
	}
}