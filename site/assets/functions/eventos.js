String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

$(function () {
    $('#fecha').datetimepicker({
        locale: 'es',
        sideBySide : true
    });

    url_get_events = "http://127.0.0.1:8000/ajax/get_events";
    $.getJSON(url_get_events, success_get_events)
});

function success_get_events(data) {
	$.each(data, function(index, value) {
		url = value.url;
		start = value.start.local;
		end = value.end.local;

		description = value.description;
		description_html = description.html;
		description_text = description.text;

		name = value.name.text;
		
		start = moment(start).format('MMM DD, YYYY h:mm a');
		start = start.capitalizeFirstLetter();
		start = start.replace("pm", "PM").replace("am", "AM");

		event_html = '\
			<div class="col-md-4">\
				<a href="'+url+'" target="_blank">\
					<h4>\
						'+name+'<br>\
						<small>'+start+'</small>\
					</h4>\
				</a>\
			</div>';

		$("#event_list").append(event_html);
	});
}




