$("#form_cta").on('submit', function(e){
	e.preventDefault();

	first_name = $("#first_name").val();
	last_name = $("#last_name").val();
	email = $("#email").val();
	text = $("#text").val();

	location_name = $("#location_select option:selected").val();
	sessionStorage.location  = location_name;

	go_to_agenda(first_name, last_name, email, text);
});


function go_to_agenda(nombre, apellido, email, celular) {
	sessionStorage.email = email;
	sessionStorage.first_name = nombre;
	sessionStorage.last_name = apellido;
	sessionStorage.cellphone = celular;
	sessionStorage.location = location_name;

	if(location_name == "El Golf") {
		window.location = "../agenda-tour.html";
	}
	
}