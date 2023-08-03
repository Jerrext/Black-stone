jQuery(document).ready(function($) {
  var form = $('#call-form');
  var action = form.attr('action');

  form.on('submit', function(event) {
    var formData = {
      contactName: $('#popup-name').val(),
      contactTel: $('#popup-telephone').val(),
    }

    $.ajax({
      url: action,
      type: 'POST',
      data: formData,
      error: function (request, txtstatus, errorThrow) {
        console.log(request);
        console.log(txtstatus);
        console.log(errorThrow);
      },
      success: function() {
        form.html("Спасибо! Ваша заявка принята");
      }
    })

    event.preventDefault();
  })
})