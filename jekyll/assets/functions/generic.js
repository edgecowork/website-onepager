//var indirizzo = "http://app.edgecowork.com/";
var indirizzo = "http://127.0.0.1:8000/"

var l_button_newsletter;
var l_button_contanct;

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

$("#modal_contacto").on('submit', function(e){
	e.preventDefault();

	email = $("#email_contact_form").val();
	mensaje_contact_form = $("#mensaje_contact_form").val();

	if(email && mensaje_contact_form) {
		btn = $("#l_button_contanct")[0];
		l_button_contanct = Ladda.create(btn);
		l_button_contanct.start();  
		
		$.ajax({
			url : indirizzo + "contact_msg", 
			type : "POST", 
			data: {
				"email" : email,
				"message" : mensaje_contact_form
			},
			success : success_contact,
			error : success_contact
		});		
	}
});

function success_contact() {
	l_button_contanct.stop();
	$("#l_button_contanct").html("Gracias!").attr("disabled", "disabled");
}