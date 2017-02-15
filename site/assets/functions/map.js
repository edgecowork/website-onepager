function initMap() {
	var uluru = {lat: -33.4147823, lng: -70.6003};
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