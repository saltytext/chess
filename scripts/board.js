//game board
function initPage(){
	$('#chess').append('<h1>Welcome to Chess</h1><button id="New Game"type="button" onclick="newGame();">New Game</button><br><div id="board"></div><div id="pieces"></div>');
	initGame();
}
function initBoard(){
	$('#board').append('<br><img id="a8" src="images/s1.png" /><img id="b8" src="images/s2.png" /><img id="c8" src="images/s1.png" /><img id="d8" src="images/s2.png" /><img id="e8" src="images/s1.png" /><img id="f8" src="images/s2.png" /><img id="g8" src="images/s1.png" /><img id="h8" src="images/s2.png" />');
	$('#board').append('<br><img id="a7" src="images/s2.png" /><img id="b7" src="images/s1.png" /><img id="c7" src="images/s2.png" /><img id="d7" src="images/s1.png" /><img id="e7" src="images/s2.png" /><img id="f7" src="images/s1.png" /><img id="g7" src="images/s2.png" /><img id="h7" src="images/s1.png" />');
	$('#board').append('<br><img id="a6" src="images/s1.png" /><img id="b6" src="images/s2.png" /><img id="c6" src="images/s1.png" /><img id="d6" src="images/s2.png" /><img id="e6" src="images/s1.png" /><img id="f6" src="images/s2.png" /><img id="g6" src="images/s1.png" /><img id="h6" src="images/s2.png" />');
	$('#board').append('<br><img id="a5" src="images/s2.png" /><img id="b5" src="images/s1.png" /><img id="c5" src="images/s2.png" /><img id="d5" src="images/s1.png" /><img id="e5" src="images/s2.png" /><img id="f5" src="images/s1.png" /><img id="g5" src="images/s2.png" /><img id="h5" src="images/s1.png" />');
	$('#board').append('<br><img id="a4" src="images/s1.png" /><img id="b4" src="images/s2.png" /><img id="c4" src="images/s1.png" /><img id="d4" src="images/s2.png" /><img id="e4" src="images/s1.png" /><img id="f4" src="images/s2.png" /><img id="g4" src="images/s1.png" /><img id="h4" src="images/s2.png" />');
	$('#board').append('<br><img id="a3" src="images/s2.png" /><img id="b3" src="images/s1.png" /><img id="c3" src="images/s2.png" /><img id="d3" src="images/s1.png" /><img id="e3" src="images/s2.png" /><img id="f3" src="images/s1.png" /><img id="g3" src="images/s2.png" /><img id="h3" src="images/s1.png" />');
	$('#board').append('<br><img id="a2" src="images/s1.png" /><img id="b2" src="images/s2.png" /><img id="c2" src="images/s1.png" /><img id="d2" src="images/s2.png" /><img id="e2" src="images/s1.png" /><img id="f2" src="images/s2.png" /><img id="g2" src="images/s1.png" /><img id="h2" src="images/s2.png" />');
	$('#board').append('<br><img id="a1" src="images/s2.png" /><img id="b1" src="images/s1.png" /><img id="c1" src="images/s2.png" /><img id="d1" src="images/s1.png" /><img id="e1" src="images/s2.png" /><img id="f1" src="images/s1.png" /><img id="g1" src="images/s2.png" /><img id="h1" src="images/s1.png" />');
}

function initPieces(){
	$("#pieces").offset($("#board").offset());
	$('#pieces').append('<br><img class="piece" id="a8piece" src="images/blanky.png" /><img class="piece" id="b8piece" src="images/blanky.png" /><img class="piece" id="c8piece" src="images/blanky.png" /><img class="piece" id="d8piece" src="images/blanky.png" /><img class="piece" id="e8piece" src="images/blanky.png" /><img class="piece" id="f8piece" src="images/blanky.png" /><img class="piece" id="g8piece" src="images/blanky.png" /><img class="piece" id="h8piece" src="images/blanky.png" />');
	$('#pieces').append('<br><img class="piece" id="a7piece" src="images/blanky.png" /><img class="piece" id="b7piece" src="images/blanky.png" /><img class="piece" id="c7piece" src="images/blanky.png" /><img class="piece" id="d7piece" src="images/blanky.png" /><img class="piece" id="e7piece" src="images/blanky.png" /><img class="piece" id="f7piece" src="images/blanky.png" /><img class="piece" id="g7piece" src="images/blanky.png" /><img class="piece" id="h7piece" src="images/blanky.png" />');
	$('#pieces').append('<br><img class="piece" id="a6piece" src="images/blanky.png" /><img class="piece" id="b6piece" src="images/blanky.png" /><img class="piece" id="c6piece" src="images/blanky.png" /><img class="piece" id="d6piece" src="images/blanky.png" /><img class="piece" id="e6piece" src="images/blanky.png" /><img class="piece" id="f6piece" src="images/blanky.png" /><img class="piece" id="g6piece" src="images/blanky.png" /><img class="piece" id="h6piece" src="images/blanky.png" />');
	$('#pieces').append('<br><img class="piece" id="a5piece" src="images/blanky.png" /><img class="piece" id="b5piece" src="images/blanky.png" /><img class="piece" id="c5piece" src="images/blanky.png" /><img class="piece" id="d5piece" src="images/blanky.png" /><img class="piece" id="e5piece" src="images/blanky.png" /><img class="piece" id="f5piece" src="images/blanky.png" /><img class="piece" id="g5piece" src="images/blanky.png" /><img class="piece" id="h5piece" src="images/blanky.png" />');
	$('#pieces').append('<br><img class="piece" id="a4piece" src="images/blanky.png" /><img class="piece" id="b4piece" src="images/blanky.png" /><img class="piece" id="c4piece" src="images/blanky.png" /><img class="piece" id="d4piece" src="images/blanky.png" /><img class="piece" id="e4piece" src="images/blanky.png" /><img class="piece" id="f4piece" src="images/blanky.png" /><img class="piece" id="g4piece" src="images/blanky.png" /><img class="piece" id="h4piece" src="images/blanky.png" />');
	$('#pieces').append('<br><img class="piece" id="a3piece" src="images/blanky.png" /><img class="piece" id="b3piece" src="images/blanky.png" /><img class="piece" id="c3piece" src="images/blanky.png" /><img class="piece" id="d3piece" src="images/blanky.png" /><img class="piece" id="e3piece" src="images/blanky.png" /><img class="piece" id="f3piece" src="images/blanky.png" /><img class="piece" id="g3piece" src="images/blanky.png" /><img class="piece" id="h3piece" src="images/blanky.png" />');
	$('#pieces').append('<br><img class="piece" id="a2piece" src="images/blanky.png" /><img class="piece" id="b2piece" src="images/blanky.png" /><img class="piece" id="c2piece" src="images/blanky.png" /><img class="piece" id="d2piece" src="images/blanky.png" /><img class="piece" id="e2piece" src="images/blanky.png" /><img class="piece" id="f2piece" src="images/blanky.png" /><img class="piece" id="g2piece" src="images/blanky.png" /><img class="piece" id="h2piece" src="images/blanky.png" />');
	$('#pieces').append('<br><img class="piece" id="a1piece" src="images/blanky.png" /><img class="piece" id="b1piece" src="images/blanky.png" /><img class="piece" id="c1piece" src="images/blanky.png" /><img class="piece" id="d1piece" src="images/blanky.png" /><img class="piece" id="e1piece" src="images/blanky.png" /><img class="piece" id="f1piece" src="images/blanky.png" /><img class="piece" id="g1piece" src="images/blanky.png" /><img class="piece" id="h1piece" src="images/blanky.png" />');
}

function initGame(){
	initBoard();
	initPieces();
}

function showPiece(id){
	$("#"+id.square+"piece").attr("src", id.image);
}
function blankSquare(square){
	$("#"+square+"piece").attr("src", "images/blanky.png");
}
function piece(id, color, type, image, square){
	this.id = id;
	this.color = color;
	this.type = type;
	this.image = "images/"+ image;
	this.square = square;
	this.clicked = false;
	this.captured = false;
	this.move = function(newSquare){
		blankSquare(this.square);
		this.square = newSquare;
		showPiece(this);
	}
	showPiece(this);
	
}

function newGame(){
//black pieces
var b1 = new piece("b1","Black","Pawn","bp.png", "a7");
var b2 = new piece("b2","Black","Pawn","bp.png", "b7");
var b3 = new piece("b3","Black","Pawn","bp.png", "c7");
var b4 = new piece("b4","Black","Pawn","bp.png", "d7");
var b5 = new piece("b5","Black","Pawn","bp.png", "e7");
var b6 = new piece("b6","Black","Pawn","bp.png", "f7");
var b7 = new piece("b7","Black","Pawn","bp.png", "g7");
var b8 = new piece("b8","Black","Pawn","bp.png", "h7");
var b9 = new piece("b9","Black","Rook","br.png", "a8");
var b10 = new piece("b10","Black","Knight","bn.png", "b8");
var b11 = new piece("b11","Black","Bishop","bb.png", "c8");
var b12 = new piece("b12","Black","Queen","bq.png", "d8");
var b13 = new piece("b13","Black","King","bk.png", "e8");
var b14 = new piece("b14","Black","Bishop","bb.png", "f8");
var b15 = new piece("b15","Black","Knight","bn.png", "g8");
var b16 = new piece("b16","Black","Rook","br.png", "h8");

//white pieces
var w1 = new piece("w1","White","Pawn","wp.png", "a2");
var w2 = new piece("w2","White","Pawn","wp.png", "b2");
var w3 = new piece("w3","White","Pawn","wp.png", "c2");
var w4 = new piece("w4","White","Pawn","wp.png", "d2");
var w5 = new piece("w5","White","Pawn","wp.png", "e2");
var w6 = new piece("w6","White","Pawn","wp.png", "f2");
var w7 = new piece("w7","White","Pawn","wp.png", "g2");
var w8 = new piece("w8","White","Pawn","wp.png", "h2");
var w9 = new piece("w9","White","Rook","wr.png", "a1");
var w10 = new piece("w10","White","Knight","wn.png", "b1");
var w11 = new piece("w11","White","Bishop","wb.png", "c1");
var w12 = new piece("w12","White","Queen","wq.png", "d1");
var w13 = new piece("w13","White","King","wk.png", "e1");
var w14 = new piece("w14","White","Bishop","wb.png", "f1");
var w15 = new piece("w15","White","Knight","wn.png", "g1");
var w16 = new piece("w16","White","Rook","wr.png", "h1");
};

//testing things
/*game controls

//board hovering
$(".square").hover(function(e){
	console.log("hovernig" + this.id);
	
});

$("*piece").click(function(){if(this.clicked ==true){this.clicked = false;}else{this.clicked=true;}});

*/
/*
<h1>Chess</h1>
		<button id="New Game"type="button" onclick="initGame(); newGame();">New Game</button>
		<br>
		<div id="board"></div>
		<div id="pieces"></div>
*/