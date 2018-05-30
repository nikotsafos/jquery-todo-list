
$(document).ready(function() {
	$('form').submit(addItem)
});

function addItem(e){
	e.preventDefault();
	var formData = $('form').serializeArray();
	$('.list').append("<li>" + formData[0].value + "<input type='button' class='delete' value='delete' id='delete' /></li>");
	$('input')[0].value = '';
	$(".label").focus();
	$(document).on('click', '.delete', function() {
		$(this).parent().remove();
	});

}


