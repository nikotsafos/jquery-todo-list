$( document ).ready(function() {
    console.log( "ready!" );
    $( function() {
      $( "#sortable" ).sortable();
    } );

$('#submit').on("click", function() {
  console.log("clicked")
  $('#submit').click(
      function(){
          $("#text").val('');
      });

var text = $('#text').val();

$('ul').append("<li class='ui-state-default'>" + text + "<input type='button' class='delete' value='delete' id='delete' /></li>");
$('.input').value = '';
$(document).on('click', '.delete', function() {
  $(this).parent().remove();
});

});

});
