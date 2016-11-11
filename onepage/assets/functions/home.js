function mas_info_modal(rental_choice) {
	$("#rental_choice").val(rental_choice);
	$("#modal_mas_info").modal();
}

$('#modal_mas_info').on('submit', function(e){
	e.preventDefault();

	email = $("#email").val();
	first_name = $("#first_name").val();
	last_name = $("#last_name").val();
	cellphone = $("#cellphone").val();
	location_str = $("#location").val();
	rental_choice = $("#rental_choice").val();

	alert("")
	/*
	$.ajax({
		type: "POST",
		url: indirizzo + "mas_info",
		data: {
			"email" : email,
			"first_name" : first_name,
			"last_name" : last_name,
			"cellphone" : cellphone,
			"location" : location_str,
			"slot_to_book" : slot_to_book,
			"rental_choice" : rental_choice
		},
		success: success_mas_info,
		error: error_mas_info
	});	
	*/
});

function success_mas_info() {
	alert("OK")
}

function error_mas_info() {
	alert("Err")
}

$("#subscribe_main").on('submit', function(e){
	e.preventDefault();

	nombre = $("#nombre").val();
	email = $("#email").val();
	apellido = $("#apellido").val();

/*
	$.ajax({
		url : "http://app.edgecowork.com/add_newsletter", 
		type : "POST", 
		data: {
			"nombre" : nombre,
			"apellido" : apellido,
			"email" : email
		},
		success : success_newsletter
	});
	*/
});

function success_newsletter() {
	$("#response_newsletter").html("¡Gracias por tu interés!");
}