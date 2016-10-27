$(document).on('submit','#form_email', function(event) { 
	event.preventDefault();

	nombre = $("#nombre").val();
	email = $("#email").val();
	apellido = $("#apellido").val();

	$.ajax({
		url : "http://app.edgecowork.com/add_newsletter", 
		//url : "http://127.0.0.1:8000/add_newsletter",
		type : "POST", 
		data: {
			"nombre" : nombre,
			"apellido" : apellido,
			"email" : email
		},
		success : success_newsletter,
		fail: success_newsletter
	});	
});

function success_newsletter() {
	$("#form_email").hide();
	$("#text_pre").hide();
	$("#gracias_div").show();
}