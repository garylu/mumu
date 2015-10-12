$(document).ready(function(){
  	$("#face-btn").click(function(){
    	
  	});
  	$("#send-btn").click(function(){
  		if (firstFlag) {
	      	main();
	    } else {
	      	sendMsg();
	      	$.scrollTo('#dialog-list', printWall.scrollHeight);
	    }
	});

});

$(document).keydown(function (event) {
    if (event.keyCode == 13) {
        if (firstFlag) {
	      	main();
	    } else {
	      	sendMsg();

	    }
    };
});