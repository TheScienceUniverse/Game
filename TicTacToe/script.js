// PART-0 :: Global Variables
var t = 0;	// player number 0/1
var S = ["", "", "", "", "", "", "", "", ""];	// box state
var c = 0;	// counter
var w = -1;	// winner

function game() {
	// PART-1 :: Initialization
	document.getElementById("g_stat").innerText = "Game Statred";
	document. getElementById("q_game").addEventListener("click", function() {
		// window.close();
		disableCells();
	});
	document. getElementById("p_game"). addEventListener("click", function() {
		location.reload();
	});

	for (i = 0; i < 9; i++) {
		document.getElementById("c_" + i.toString()).addEventListener('click', function() {
			var id = parseInt(this.id.substr(2, 1));
			S[id] = (t == 0) ? "0" : "X";
			this.innerHTML = S[id];
			this.style.pointerEvents = 'none';
			// this.style.pointerEvents = 'auto';
			++c;
			isGameOver(c);
			t = (t + 1) % 2;
			// playOwn();
		});
	}
	document.getElementById("g_stat").readOnly = true;

	// PART-2 :: Game Loop
}

function isGameOver(r) {
	if (r > 0 && r <= 9) {
		if (S[0] == S[1] && S[1] == S[2] && S[0] != "") {
			colorCells([0, 1, 2]);
		} else if (S[3] == S[4] && S[4] == S[5] && S[3] != "") {
			colorCells([3, 4, 5]);
		} else if (S[6] == S[7] && S[7] == S[8] && S[6] != "") {
			colorCells([6, 7, 8]);
		} else if (S[0] == S[3] && S[3] == S[6] && S[0] != "") {
			colorCells([0, 3, 6]);
		} else if (S[1] == S[4] && S[4] == S[7] && S[1] != "") {
			colorCells([1, 4, 7]);
		} else if (S[2] == S[5] && S[5] == S[8] && S[2] != "") {
			colorCells([2, 5, 8]);
		} else if (S[0] == S[4] && S[4] == S[8] && S[0] != "") {
			colorCells([0, 4, 8]);
		} else if (S[2] == S[4] && S[4] == S[6] && S[2] != "") {
			colorCells([2, 4, 6]);
		} else {
			document.getElementById("g_stat").innerText = "Game Unfinished";
		}
	} else {
		document.getElementById("g_stat").innerText = "Winner :: NONE";
	}
}

function colorCells(C) {
	var i;
	for (i = 0; i < C.length; i++) {
		document.getElementById("c_" + C[i].toString()).style.background = "#ff8f8f";
	}
	document.getElementById("g_stat").innerText = "Winner :: " + t;
	disableCells();
}
function disableCells() {
	var i;
	for (i = 0; i < 9; i++) {
		document.getElementById("c_" + i.toString()).style.pointerEvents = 'none';
	}
}

function playOwn() {
	var r;
	while (1) {
		r = getRandInt(9);
		if (S[r] == "") {
			break;
		}
	}
	S[r] = "X";
	var el = document.getElementById("c_" + r.toString());
	el.innerHTML = S[r];
	el.style.pointerEvents = 'none';
	t = (t + 1) % 2;
	++c;
}

function getRandInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}