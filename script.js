'use strict'


$(document).mousemove(function(evento) {
	let X = evento.pageX;
	let Y = evento.pageY;
		$('.light').css('background','radial-gradient(circle at '+X+'px '+Y+'px, transparent, #000 30% )')
		
		console.log(evento);
})
	