$(document).ready(function() {
    $('#contact-form').submit(function(e) {
        if(validFunc()){
            e.preventDefault();
            location.href="user-page.html";
        } else {
            return false;
        }
    });
    function validFunc(){
        let email = $('#email').val();
        let password = $('#pass').val();
        let valid = true;
        $(".error").remove();
     
        if (email.length< 1) {
          $('#email').after('<span class="error">This field is required</span>');
          return false;
        } 
        if (password.length< 1) {
          $('#pass').after('<span class="error">This field is required</span>');
          return false;
        }
        return valid;
    }       
});

