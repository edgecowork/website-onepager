var l;

$('#bellavista_form').on('submit', function(e){
	e.preventDefault();

	start_button();

	email = $("#email").val();
	first_name = $("#first_name").val();
	last_name = $("#last_name").val();
	cellphone = $("#cellphone").val();

	location_str = "Bellavista"
	quebuscas = $("#quebuscas option:selected").val();


	$.ajax({
		type: "POST",
		url: indirizzo + "info_ubicacione/",
		data: {
			"nombre" : first_name,
			"apellido" : last_name,
			"email" : email,
			"lugar" : location_str,
			"celular" : cellphone,
			"plan" : quebuscas
		},
		success: stop_button,
		error: stop_button
	});	

});

function start_button() {
	btn = $("#button_enviar")[0];
	l = Ladda.create(btn);
	l.start();  	
}

function stop_button() {
	l.stop();
	$("#success_alert").removeClass("hidden");
}