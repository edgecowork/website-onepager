$("#gallery .row img").on("click", function() {
	big_picture = $(this).data("bigpicture");
	$("#gallery-body").attr("src", big_picture)
	$("#modal_gallery").modal();
});