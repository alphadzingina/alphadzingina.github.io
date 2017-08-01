jQuery(document).ready(function($) {


  $('#contactForm').validate({
    messages: { },
    submitHandler: function(form) {
      $.ajax({
        url: "//formspree.io/alphaadx6@gmail.com",
        method: "POST",
        data: $(form).serialize(),
        dataType: "json",
        success: function(data) {
            $("#contactForm :input").prop("disabled", true);
            $('#thanks').show();
        }
      });
      return false;
    }
  });


});