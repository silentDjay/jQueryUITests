$("#drag").draggable();

$("#drop").droppable({
  drop: function (event, ui) {
		$(this).css("background-color","red");
	}
  // in: function (event, ui) {
	// 	$(this).css("background-color","red");
	// }
});


$("#drop").droppable({
	out: function( event, ui ) {
	  $(this).css("background-color","green");
	}
});
