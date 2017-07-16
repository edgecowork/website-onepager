function initMap() {
	var uluru = MAP_COORDS;
	var map = new google.maps.Map(document.getElementById('map_location'), {
		zoom: 18,
		center: uluru,
		scrollwheel: false,
	});

	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});
}