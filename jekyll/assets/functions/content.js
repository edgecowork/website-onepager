$(document).ready(function(){
	var scroll_start = 0;
	var startchange = $('#mini_fold');
	var offset = startchange.offset();

	if(startchange.length) {
		$(document).scroll(function() {
			scroll_start = $(this).scrollTop();
			if(scroll_start > offset.top) {
				$("#menu.navbar-default").css("background-color" , "#3F4444");
			} else {		
				$("#menu.navbar-default").css("background-color" , "transparent");
			}
		});
	}
});
