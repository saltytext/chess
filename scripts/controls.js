//game controls

//board hovering
$(".square").hover(function(e){
	console.log("hovernig" + this.id);
	
});

$("*piece").click(function(){if(this.clicked ==true){this.clicked = false;}else{this.clicked=true;}});