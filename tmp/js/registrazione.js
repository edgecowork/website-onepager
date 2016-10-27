$(document).ready(function() {
	$.fn.bootstrapSwitch.defaults.onText = 'SI';
	$.fn.bootstrapSwitch.defaults.offText = 'NO';

	//$("[name='my-checkbox'], [name='checkbox-tos'], [name='checkbox-newsletter']").bootstrapSwitch();
	$("[name='checkbox_tospp'], [name='checkbox_newsletter']").bootstrapSwitch();
});