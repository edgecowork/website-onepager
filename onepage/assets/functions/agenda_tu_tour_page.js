apy_key = "AIzaSyD55J5wYbZvOMez4YgFOOJj4fbbFX59jkc"
//var indirizzo = "http://127.0.0.1:8000/"
var indirizzo = "http://app.edgecowork.com/"
var slot_to_book;

$(document).ready(function() {

	location_str = "San Sebastian";

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
	clear_field();

	now = moment();

	console.log("NOW")
	console.log(now)
	console.log("SLOT")
	console.log(slot)

	if(now < slot) {
		book_a_tour(slot);		
	}
	else {
		alert("No puedes agendar un tour en el pasado")
	}
}

function book_a_tour(slot) {
	format_slot = slot.format("dddd, MMMM Do YYYY, h:mm:ss a");
	slot_to_book = slot;
	$("#book_tour_span").html(format_slot);
	$("#calendar_book_modal").modal();
	$("#slot_to_book").val(slot_to_book);
}

function clear_field() {
	$("#email").val("");
	$("#first_name").val("");
	$("#last_name").val("");
	$("#company").val("");
	$("#cellphone").val("");
}


$('#calendar_book_modal').on('submit', function(e){
	e.preventDefault();

	email = $("#email").val();
	first_name = $("#first_name").val();
	last_name = $("#last_name").val();
	cellphone = $("#cellphone").val();
	location_str = $("#location").val();
	slot_to_book = $("#slot_to_book").val();

	$.ajax({
		type: "POST",
		url: indirizzo + "agenda_tour_ajax",
		data: {
			"email" : email,
			"first_name" : first_name,
			"last_name" : last_name,
			"cellphone" : cellphone,
			"location" : location_str,
			"slot_to_book" : slot_to_book
		},
		success: success_agenda_tour,
		error: error_agenda_tour
	});	

});

function success_agenda_tour(data) {
	if(data == "exists") {
		$("#email_exists").show();
	}
	else {
		$("#agenda_tour_container").hide();
		$("#success_tour_container").show();
	}
}

function error_agenda_tour() {
	$("#calendar_book_modal").modal('hide');
	$("#error_modal").modal();
}