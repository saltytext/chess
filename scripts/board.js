//game board

function drawBoard(){
	$('#board').append('<br><img id="a8" src="images/s1.png" /><img id="b8" src="images/s2.png" /><img id="c8" src="images/s1.png" /><img id="d8" src="images/s2.png" /><img id="e8" src="images/s1.png" /><img id="f8" src="images/s2.png" /><img id="g8" src="images/s1.png" /><img id="h8" src="images/s2.png" />');
	$('#board').append('<br><img id="a7" src="images/s2.png" /><img id="b7" src="images/s1.png" /><img id="c7" src="images/s2.png" /><img id="d7" src="images/s1.png" /><img id="e7" src="images/s2.png" /><img id="f7" src="images/s1.png" /><img id="g7" src="images/s2.png" /><img id="h7" src="images/s1.png" />');
	$('#board').append('<br><img id="a6" src="images/s1.png" /><img id="b6" src="images/s2.png" /><img id="c6" src="images/s1.png" /><img id="d6" src="images/s2.png" /><img id="e6" src="images/s1.png" /><img id="f6" src="images/s2.png" /><img id="g6" src="images/s1.png" /><img id="h6" src="images/s2.png" />');
	$('#board').append('<br><img id="a5" src="images/s2.png" /><img id="b5" src="images/s1.png" /><img id="c5" src="images/s2.png" /><img id="d5" src="images/s1.png" /><img id="e5" src="images/s2.png" /><img id="f5" src="images/s1.png" /><img id="g5" src="images/s2.png" /><img id="h5" src="images/s1.png" />');
	$('#board').append('<br><img id="a4" src="images/s1.png" /><img id="b4" src="images/s2.png" /><img id="c4" src="images/s1.png" /><img id="d4" src="images/s2.png" /><img id="e4" src="images/s1.png" /><img id="f4" src="images/s2.png" /><img id="g4" src="images/s1.png" /><img id="h4" src="images/s2.png" />');
	$('#board').append('<br><img id="a3" src="images/s2.png" /><img id="b3" src="images/s1.png" /><img id="c3" src="images/s2.png" /><img id="d3" src="images/s1.png" /><img id="e3" src="images/s2.png" /><img id="f3" src="images/s1.png" /><img id="g3" src="images/s2.png" /><img id="h3" src="images/s1.png" />');
	$('#board').append('<br><img id="a2" src="images/s1.png" /><img id="b2" src="images/s2.png" /><img id="c2" src="images/s1.png" /><img id="d2" src="images/s2.png" /><img id="e2" src="images/s1.png" /><img id="f2" src="images/s2.png" /><img id="g2" src="images/s1.png" /><img id="h2" src="images/s2.png" />');
	$('#board').append('<br><img id="a1" src="images/s2.png" /><img id="b1" src="images/s1.png" /><img id="c1" src="images/s2.png" /><img id="d1" src="images/s1.png" /><img id="e1" src="images/s2.png" /><img id="f1" src="images/s1.png" /><img id="g1" src="images/s2.png" /><img id="h1" src="images/s1.png" />');
}

function drawPieces(){
	$("#pieces").offset($("#board").offset());
	$('#pieces').append('<br><img id="a8piece" src="images/br.png" /><img id="b8piece" src="images/bn.png" /><img id="c8piece" src="images/bb.png" /><img id="d8piece" src="images/bq.png" /><img id="e8piece" src="images/bk.png" /><img id="f8piece" src="images/bb.png" /><img id="g8piece" src="images/bn.png" /><img id="h8piece" src="images/br.png" />');
	$('#pieces').append('<br><img id="a7piece" src="images/bp.png" /><img id="b7piece" src="images/bp.png" /><img id="c7piece" src="images/bp.png" /><img id="d7piece" src="images/bp.png" /><img id="e7piece" src="images/bp.png" /><img id="f7piece" src="images/bp.png" /><img id="g7piece" src="images/bp.png" /><img id="h7piece" src="images/bp.png" />');
	$('#pieces').append('<br><img id="a6piece" src="images/blanky.png" /><img id="b6piece" src="images/blanky.png" /><img id="c6piece" src="images/blanky.png" /><img id="d6piece" src="images/blanky.png" /><img id="e6piece" src="images/blanky.png" /><img id="f6piece" src="images/blanky.png" /><img id="g6piece" src="images/blanky.png" /><img id="h6piece" src="images/blanky.png" />');
	$('#pieces').append('<br><img id="a5piece" src="images/blanky.png" /><img id="b5piece" src="images/blanky.png" /><img id="c5piece" src="images/blanky.png" /><img id="d5piece" src="images/blanky.png" /><img id="e5piece" src="images/blanky.png" /><img id="f5piece" src="images/blanky.png" /><img id="g5piece" src="images/blanky.png" /><img id="h5piece" src="images/blanky.png" />');
	$('#pieces').append('<br><img id="a4piece" src="images/blanky.png" /><img id="b4piece" src="images/blanky.png" /><img id="c4piece" src="images/blanky.png" /><img id="d4piece" src="images/blanky.png" /><img id="e4piece" src="images/blanky.png" /><img id="f4piece" src="images/blanky.png" /><img id="g4piece" src="images/blanky.png" /><img id="h4piece" src="images/blanky.png" />');
	$('#pieces').append('<br><img id="a3piece" src="images/blanky.png" /><img id="b3piece" src="images/blanky.png" /><img id="c3piece" src="images/blanky.png" /><img id="d3piece" src="images/blanky.png" /><img id="e3piece" src="images/blanky.png" /><img id="f3piece" src="images/blanky.png" /><img id="g3piece" src="images/blanky.png" /><img id="h3piece" src="images/blanky.png" />');
	$('#pieces').append('<br><img id="a2piece" src="images/wp.png" /><img id="b2piece" src="images/wp.png" /><img id="c2piece" src="images/wp.png" /><img id="d2piece" src="images/wp.png" /><img id="e2piece" src="images/wp.png" /><img id="f2piece" src="images/wp.png" /><img id="g2piece" src="images/wp.png" /><img id="h2piece" src="images/wp.png" />');
	$('#pieces').append('<br><img id="a1piece" src="images/wr.png" /><img id="b1piece" src="images/wn.png" /><img id="c1piece" src="images/wb.png" /><img id="d1piece" src="images/wq.png" /><img id="e1piece" src="images/wk.png" /><img id="f1piece" src="images/wb.png" /><img id="g1piece" src="images/wn.png" /><img id="h1piece" src="images/wr.png" />');
}

function drawBoth(){
	drawBoard();
	drawPieces();
}