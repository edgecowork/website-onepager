//var indirizzo = "http://app.edgecowork.com/";
var indirizzo = "http://127.0.0.1:8000/"


var l_button_newsletter;
$("#subscribe_main").on('submit', function(e){
	e.preventDefault();

	email = $("#email_footer").val();

	if(email) {
		btn = $("#button_newsletter")[0];
		l_button_newsletter = Ladda.create(btn);
		l_button_newsletter.start();  
		
		
		$.ajax({
			url : indirizzo + "add_newsletter", 
			type : "POST", 
			data: {
				"email" : email
			},
			success : success_newsletter,
			error : success_newsletter
		});		
	}
	
});

function success_newsletter() {
	l_button_newsletter.stop();
	$("#button_newsletter").html("Gracias!").attr("disabled", "disabled");
}