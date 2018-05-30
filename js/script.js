
$(document).ready(function() {
	$('form').submit(addItem)
});

function addItem(e){
	e.preventDefault();
	var formData = $('form').serializeArray();
	$('.list').append("<li>" + formData[0].value + "</li>" + "<button type='submit' id='delete'>Delete</button>");
	$('input')[0].value = '';

}


$(document).on('click', '#delete', function() {
	$(this).parent().remove();
	});
