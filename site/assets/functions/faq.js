$('#accordion > .panel').on('show.bs.collapse', function (e) {
	$(".active-panel").removeClass("active-panel");
    $(this).find('.panel-heading').addClass("active-panel");
});

var substringMatcher = function(strs) {
  	return function findMatches(q, cb) {
    	var matches, substringRegex;
	    // an array that will be populated with substring matches
	    matches = [];

	    // regex used to determine if a string contains the substring `q`
	    substrRegex = new RegExp(q, 'i');

	    // iterate through the pool of strings and for any string that
	    // contains the substring `q`, add it to the `matches` array
	    $.each(strs, function(i, str) {
	      	if (substrRegex.test(str)) {
	        	matches.push(str);
	      	}
	    });

	    cb(matches);
  	};
};

var questions = [];
var map_questions_id = {};

$(document).ready(function() {
	$("#accordion").children("div").each(function () {
	    this_div = $(this);
	    a_this = this_div.find("a");
	    question_text = a_this.text();
	    href_question = a_this.attr('href');

	    questions.push(question_text);

	    map_questions_id[question_text] = href_question;

	});
});


$('.typeahead').typeahead({
  	hint: true,
  	highlight: true,
  	minLength: 1
},
{
  	name: 'questions',
  	source: substringMatcher(questions)
}).bind("typeahead:selected", function(obj, datum, name) {
	id_faq = map_questions_id[datum];

	$(id_faq).collapse({"toggle": true, 'parent': '#accordion' });

	val_scroll = $(id_faq).offset().top - 300;

	$('html, body').animate({
		'scrollTop': val_scroll
    }, 1500);
});


