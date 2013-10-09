$(document).ready(function(){
    $("#btn_ok").click(function(){
        var name = $("#name").val();
        var email = $("#email").val();
        var add = $("#address").val();
        var note = $("#note").val();
        var email_regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        if(name == ""){
        $("#nameError").slideDown('fast').delay(1000).slideUp('fast');
        $("#name").focus();
        return false;
        }
        if(!email_regex.test(email) || email == ""){
            $("#emailError").slideDown('fast').delay(1000).slideUp('fast');
            $("#email").focus();
            return false;
        }
        if(add == ""){
            $("#addError").slideDown('fast').delay(1000).slideUp('fast');
            $("#address").focus();
            return false;
        }
        if(note == ""){
            $("#noteError").slideDown('fast').delay(1000).slideUp('fast');
            $("#note").focus();
            return false;
        }
        if(name && email && add && note){
            alert("Mail của bạn đã được gửi . Cảm ơn đã liên hệ với chúng tôi");
        }
    })
})