$(document).ready(function() {
    //if submit button is clicked
    $('#submit').click(function () {
        //Get the data from all the fields
        var name = $('input[name=name]');
        var email = $('input[name=email]');
        var city = $('input[name=city]');
		var phone = $('input[name=phone]');
        var address = $('input[name=address]');
		var roundedTwo = $('#roundedTwo').val();
        var returnError = false;
        //Simple validation to make sure user entered something
        //Add your own error checking here with JS, but also do some error checking with PHP.
        //If error found, add hightlight class to the text field
        if (name.val()=='') {
            name.addClass('error');
            returnError = true;
        } else name.removeClass('error');
        if (email.val()=='') {
            email.addClass('error');
            returnError = true;
        } else email.removeClass('error');
        if (address.val()=='') {
            address.addClass('error');
            returnError = true;
        } else address.removeClass('error');
		if (city.val()=='') {
            city.addClass('error');
            returnError = true;
        } else city.removeClass('error');
		if (phone.val()=='') {
            phone.addClass('error');
            returnError = true;
        } else phone.removeClass('error');
		if (jQuery("#roundedTwo").is(":checked")) {
				$('#chk_error').fadeOut(500);
				returnError = false;
			}
			else {
				returnError = true;
				$('#chk_error').fadeIn(500);
			}
		
        // Highlight all error fields, then quit.
        if(returnError == true){
            return false;
        }
        //organize the data
        var data = 'name=' + name.val() + '&email=' + email.val() + '&city=' + city.val() + '&address=' + address.val() + '&phone='  + phone.val();
        //disabled all the text fields
        $('.text').attr('disabled','true');
        //show the loading sign
        $('.loading').show();
        //start the ajax
        $.ajax({
            //this is the php file that processes the data and sends email
            url: "http://www.webzin.in/email.php",
            //GET method is used
            type: "GET",
            //pass the data
            data: data,
            //Do not cache the page
            cache: false,
            //success
            success: function (html) {
                //if process.php returned 1/true (send mail success)
                if (html==1) {
                    //hide the form
                    $('.form').fadeOut('slow');
                    //show the success message
                    $('.done').fadeIn('slow');
                //if process.php returned 0/false (send mail failed)
                } else alert('Sorry, unexpected error. Please try again later.');
            }
        });
        //cancel the submit button default behaviours
        return false;
    });
});