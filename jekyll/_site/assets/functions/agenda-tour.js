apy_key = "AIzaSyD55J5wYbZvOMez4YgFOOJj4fbbFX59jkc"

var slot_to_book;
var button_agendar;

$(document).ready(function() {

	location_str = sessionStorage.location;


	option_calendar = {
		header: {
			right: 'prev,next today',
			left: ''
		},
		defaultView: 'agendaWeek',
		navLinks: true,
		editable: false,
		eventLimit: false,
		allDaySlot: false,
		minTime: "09:00:00",
		maxTime: "18:00:00",
		firstDay: 1,
		timezone: "local",
		locale: "es",
		weekends: false,
		height: 470,
		selectable: true,
		googleCalendarApiKey: apy_key,

		eventSources: [
			{
				url : indirizzo + "all_tours?location="+location_str
			},
			{
				googleCalendarId: "es.cl#holiday@group.v.calendar.google.com"
			}
		],
		dayClick: on_click_day
	}

	$('#calendar').fullCalendar(option_calendar);

});

function on_click_day(slot) {
	now = moment();

	if(now < slot) {
		book_a_tour(slot);
	}
	else {
		alert("No puedes agendar un tour en el pasado");
	}
}

function book_a_tour(slot) {
	format_slot = slot.format("dddd, MMMM Do YYYY, h:mm:ss a");
	slot_to_book = slot;
	$("#book_tour_span").html(format_slot);
	$("#calendar_book_modal").modal();
	$("#slot_to_book").val(slot_to_book);
}


$('#calendar_book_modal').on('submit', function(e){
	e.preventDefault();

	email = sessionStorage.email;
	first_name = sessionStorage.first_name;
	last_name = sessionStorage.last_name;
	cellphone = sessionStorage.cellphone;
	location_id = sessionStorage.location_id;
	slot_to_book = $("#slot_to_book").val();

	btn = $("#button_agendar")[0];
	button_agendar = Ladda.create(btn);
	button_agendar.start();

	$.ajax({
		type: "POST",
		url: indirizzo + "agenda_tour_ajax",
		data: {
			"email" : email,
			"first_name" : first_name,
			"last_name" : last_name,
			"cellphone" : cellphone,
			"location" : location_id,
			"slot_to_book" : slot_to_book
		},
		success: success_agenda_tour,
		error: error_agenda_tour
	});

});

function success_agenda_tour(data) {
	button_agendar.stop();
	if(data == "exists") {
		$("#email_exists").show();
	}
	else {
		//$("#calendar_book_modal").modal('hide');
		//("#agenda_tour_container").hide();
		//$("#success_tour_container").show();
		$("#button_agendar").html("Gracias!").attr("disabled", "disabled");
	}
}

function error_agenda_tour() {
	button_agendar.stop()
	$("#calendar_book_modal").modal('hide');
	$("#error_modal").modal();
}
