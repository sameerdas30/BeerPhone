 $(document).ready(function(){
        $('#send_message').click(function(e){
            
            //Stop form submission & check the validation
            e.preventDefault();
            
            // Variable declaration
            var error = false;
            var name = $('#name').val();
			var address = $('#address').val();
			var city = $('#city').val();
            var email = $('#email').val();
            var phone = $('#phone').val();
            var roundedTwo = $('#roundedTwo').val();
         	// Form field validation
            if(name.length == 0){
                var error = true;
				name.addClass('error');
               
            }else{
				name.removeClass('error');
               
            }
			if(address.length == 0){
                var error = true;
                $('#address_error').fadeIn(500);
            }else{
                $('#address_error').fadeOut(500);
            }
			if(city.length == 0){
                var error = true;
                $('#city_error').fadeIn(500);
            }else{
                $('#city_error').fadeOut(500);
            }
            if(email.length == 0 || email.indexOf('@') == '-1'){
                var error = true;
                $('#email_error').fadeIn(500);
            }else{
                $('#email_error').fadeOut(500);
            }
            
            if(phone.length == 0){
                var error = true;
                $('#phone_error').fadeIn(500);
            }else{
                $('#phone_error').fadeOut(500);
            }
			if (jQuery("#roundedTwo").is(":checked")) {
				var error = true;
				$('#chk_error').fadeOut(500);
			}
			else {
				$('#chk_error').fadeIn(500);
			}

            // If there is no validation error, next to process the mail function
            if(error == false){
               // Disable submit button just after the form processed 1st time successfully.
                $('#send_message').attr({'disabled' : 'true', 'value' : 'Sending...' });
                
				/* Post Ajax function of jQuery to get all the data from the submission of the form as soon as the form sends the values to email.php*/
                $.post("email.php", $("#contact_form").serialize(),function(result){
                    //Check the result set from email.php file.
                    if(result == 'sent'){
                        //If the email is sent successfully, remove the submit button
                         $('#contact_form').hide();
                        //Display the success message
                        $('#mail_success').fadeIn(500);
                    }else{
                        //Display the error message
                        $('#mail_fail').fadeIn(500);
                        // Enable the submit button again
                        $('#send_message').removeAttr('disabled').attr('value', 'Send The Message');
                    }
                });
            }
        });    
    });