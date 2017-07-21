$("#form_cta").on('submit', function(e){
	e.preventDefault();
	location_name = $("#location_select option:selected").val();

	if(location_name == "El Golf") {
		gdocs_link = "https://docs.google.com/forms/d/e/1FAIpQLSfqFb02OGERvrTYqJ3KU3XWcR9BdBnoF-vPbO5vtRJ4J54jjw/viewform"
	}
	else if(location_name == "Bellavista") {
		gdocs_link = ""
	}
	else if(location_name == "Ochagavia") {
		gdocs_link = ""
	}

	window.location = gdocs_link;

});
