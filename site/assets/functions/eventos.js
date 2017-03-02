String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

$(function () {
    $('#fecha').datetimepicker({
        locale: 'es',
        sideBySide : true
    });

    url_get_events = indirizzo + "get_events";
    
    if(eventos_pasados) {
    	url_get_events = indirizzo + "get_events?status=ended";
    }

    $.getJSON(url_get_events, success_get_events)
});


function success_get_events(data) {
	if(data.length > 0) {
		$.each(data, function(index, value) {
			url = value.url;
			start = value.start.local;
			end = value.end.local;

			description = value.description;
			description_text = description.text;

			name = value.name.text;

			logo = value.logo.url;

			venue_id = value.venue_id;
			if(venue_id == "18261816") {
				venue = "El Golf"
				venue_html = '\
					<div itemprop="location" itemscope itemtype="http://schema.org/Place">\
						<a href="https://goo.gl/maps/ggARQAzyE8C2" target="_blank">\
							<small><i class="fa fa-map-marker"></i>\
								<span itemprop="name">Edge Cowork El Golf</span>\
								<span itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">\
									<meta itemprop="addressLocality" content="Las Condes">\
									<meta itemprop="addressRegion" content="Región Metropolitana de Santiago">\
									<meta itemprop="streetAddress" content="San Sebastian # 2909">\
									<meta itemprop="postalCode" content="7550118">\
									<meta itemprop="addressCountry" content="Chile">\
								</span>\
							</small>\
						</a><br>\
					</div>';
			}
		
			start = moment(start).format('MMM DD, YYYY h:mm a');
			start = start.capitalizeFirstLetter();
			start = start.replace("pm", "PM").replace("am", "AM");

			end = moment(end).format('MMM DD, YYYY h:mm a');
			end = end.capitalizeFirstLetter();
			end = end.replace("pm", "PM").replace("am", "AM");

			event_html = '\
				<div class="col-md-4" itemscope itemtype="http://schema.org/Event">\
					<a itemprop="url" href="'+url+'">\
						<h4>\
							<span itemprop="name">'+name+'</span><br>\
							<small itemprop="startDate">'+start+'</small>\
							<meta itemprop="endDate" content="'+end+'">\
							<meta itemprop="description" content="'+description_text+'">\
						</h4>\
					</a>\
					'+venue_html+'\
				<img itemprop="image" src="'+logo+'" width="300">\
			</div>';

			$("#event_list").append(event_html);
		});
	}
	else {
		$(".no_hay_eventos").removeClass("hidden");
	}
}

var button_solicita;
var button_newsletter;

$('#solicita_un_espacio').validator().on('submit', function (e) {
	if(!e.isDefaultPrevented()) {
		
		e.preventDefault();

		btn = $("#button_solicita")[0];
		button_solicita = Ladda.create(btn);
		button_solicita.start(); 

		nombre = $("#nombre").val();
		email = $("#email").val();
		lugar = $("#lugar option:selected").text();
		celular = $("#celular").val();
		fecha = $("#fecha").val();
		tipo_evento = $("#tipo_evento option:selected").text(); 
		cuentanos = $("#cuentanos").val();

		$.ajax({
			type: "POST",
			url: indirizzo + "solicita_un_espacio/",
			data: {
				"nombre" : nombre,
				"email" : email,
				"lugar" : lugar,
				"celular" : celular,
				"fecha" : fecha,
				"tipo_evento" : tipo_evento,
				"cuentanos" : cuentanos
			},
			success: success_solicita
		});	

	}
});

function success_solicita() {
	$("#success_solicita").removeClass("hidden");
	$("#button_solicita").html("Solicitud enviada.").attr("disabled","true");
}

$("#form_newsletter").on('submit', function (e) {
	e.preventDefault();
	email_newsletter = $("#email_newsletter").val();

	btn = $("#button_newsletter")[0];
	button_newsletter = Ladda.create(btn);
	button_newsletter.start(); 	

	$.ajax({
		type: "POST",
		url: indirizzo + "newsletter_event/",
		data: {
			"email" : email_newsletter
		},
		success: success_newsletter
	});	
});

function success_newsletter() {
	$("#button_newsletter").html("¡Gracias!").attr("disabled","true");
}
