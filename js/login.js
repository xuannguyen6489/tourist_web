$(document).ready(function(){
    $('#login_btn').click(function(event){
        event.preventDefault();

        var $in_username = $('#in_username').val();
        var $in_password = $('#in_password').val();
        var $message = '';
        var $error = false;
        
        if($in_username == '') {
            $message += "Please enter your username <br/>";
            $error = true;
        }

        if($in_password == '') {
            $message += "Please enter your password <br/>";   
            $error = true;
        }

        if(!$error && !($in_username == 'admin' && $in_password == '123456')) {
             $message += "Username and password you entered are not correct";
            $error = true;
        } 

        if($error) {
            $('#error_message').removeClass('alert-success').addClass('alert-error');
            $('#error_message').html($message);
            $('#error_message').show();   
        } else {
            $('#error_message').html("You login successfully!");
            $('#error_message').removeClass('alert-error').addClass('alert-success');
            $('#error_message').show();
			
            
			setTimeout(function(){

                if(typeof $is_parent_page != 'undefined' && $is_parent_page == true) {
                    window.location.href = "index.html";    
                } else {
                    window.location.href = "../index.html";
                }
                
            }, 1500);
            
        }        


    });

});