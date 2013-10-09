$message_delay_time = 2000;
$(document).ready(function(){
	$("#btn_ok").click(function(){
		var name=$("#name").val();
		var pass = $("#pass").val();
		var pass2 = $("#pass2").val();
		var email = $("#email").val();
		var add = $("#address").val();
		var note = $("#note").val();
		var email_regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
		if( name == ""){
			$("#nameError").slideDown('fast').delay($message_delay_time).slideUp('fast');
			$("#name").focus();
			return false;
			}
		if(pass == ""){
			$("#passError").slideDown('fast').delay($message_delay_time).slideUp('fast');
			$("#pass").focus();
			return false;
			}
		if(pass2 != pass){
			$("#pass2Error").slideDown('fast').delay($message_delay_time).slideUp('fast');
			$("#pass2").focus();
			return false;
			}
		if(!email_regex.test(email) || email == ""){
			$("#emailError").slideDown('fast').delay($message_delay_time).slideUp('fast');
			$("#email").focus();
			return false;
			}
		if(add == ""){
			$("#addError").slideDown('fast').delay($message_delay_time).slideUp('fast');
			$("#address").focus();
			return false;
			}
		if(name && pass && email && add){
			alert("Bạn đã đăng ký thành công với Username : "+ name +" Password: "+pass);
			}					
		})
	})