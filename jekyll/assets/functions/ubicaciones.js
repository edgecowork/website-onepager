var button_ubicaciones;

function modal_ubicaciones(location) {
	$("#location_input").val(location);
	$("#name_location").html(location);
	$("#modal_ubicaciones").modal();
}


$('#form_ubicaciones').on('submit', function (e) {
	e.preventDefault();

	nombre = $("#nombre").val();
	apellido = $("#apellido").val();
	email = $("#email").val();
	celular = $("#telephone").val();
	lugar = $("#location_input").val();

	btn = $("#button_ubicaciones")[0];
	button_ubicaciones = Ladda.create(btn);
	button_ubicaciones.start(); 

	$.ajax({
		type: "POST",
		url: indirizzo + "info_ubicacione/",
		data: {
			"nombre" : nombre,
			"apellido" : apellido,
			"email" : email,
			"lugar" : lugar,
			"celular" : celular
		},
		success: success_info_ubicacione,
		error: success_info_ubicacione
	});	

});

function success_info_ubicacione() {
	$("#button_ubicaciones").html("Gracias!").attr("disabled", "disabled");
}