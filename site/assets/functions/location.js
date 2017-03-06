$("#form_cta").on('submit', function(e){
	e.preventDefault();

	nombre_1 = $("#nombre_1").val();
	apellido_1 = $("#apellido_1").val();
	email_1 = $("#email_1").val();
	celular_1 = $("#celular_1").val();

	go_to_agenda(nombre_1, apellido_1, email_1, celular_1);

});

$("#form_cta2").on('submit', function(e){
	e.preventDefault();

	nombre_2 = $("#nombre_2").val();
	apellido_2 = $("#apellido_2").val();
	email_2 = $("#email_2").val();
	celular_2 = $("#celular_2").val();

	go_to_agenda(nombre_2, apellido_2, email_2, celular_2);
});


function go_to_agenda(nombre, apellido, email, celular) {
	sessionStorage.email = email;
	sessionStorage.first_name = nombre;
	sessionStorage.last_name = apellido;
	sessionStorage.cellphone = celular;
	sessionStorage.location = location_name;

	if(location_name == "El Golf") {
		window.location = "el-golf-agenda-tour.html";
	}
	
}