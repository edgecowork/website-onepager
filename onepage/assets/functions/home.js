var l_button_mas;
var l_button_newsletter;

function mas_info_modal(rental_choice) {
	$("#rental_choice").val(rental_choice);
	$("#modal_mas_info").modal();
}

$('#modal_mas_info').on('submit', function(e){
	e.preventDefault();

	email = $("#email_mas_info").val();
	first_name = $("#first_name").val();
	last_name = $("#last_name").val();
	cellphone = $("#cellphone").val();
	location_str = $("#location").val();
	rental_choice = $("#rental_choice").val();

	
	btn = $("#button_mas")[0];

	l_button_mas = Ladda.create(btn);
	l_button_mas.start();  

	$.ajax({
		type: "POST",
		url: indirizzo + "mas_info",
		data: {
			"email" : email,
			"first_name" : first_name,
			"last_name" : last_name,
			"cellphone" : cellphone,
			"location" : location_str,
			"rental_choice" : rental_choice
		},
		success: success_mas_info,
		error: error_mas_info
	});	
});

function success_mas_info() {
	l_button_mas.stop();
	$("#button_mas").hide();
	$("#footer_mas").html("<center><h5>¡Gracias por tu interés!</h5></center>");
}

function error_mas_info() {
	l_button_mas.stop();
}

$("#subscribe_main").on('submit', function(e){
	e.preventDefault();

	nombre = $("#nombre").val();
	email = $("#email").val();
	apellido = $("#apellido").val();

	btn = $("#button_newsletter")[0];
	l_button_newsletter = Ladda.create(btn);
	l_button_newsletter.start();  
	
	$.ajax({
		url : indirizzo + "add_newsletter", 
		type : "POST", 
		data: {
			"nombre" : nombre,
			"apellido" : apellido,
			"email" : email
		},
		success : success_newsletter
	});
});

function success_newsletter() {
	$("#response_newsletter").html("¡Gracias por tu interés!");
}