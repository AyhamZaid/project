// $(document).ready(function () {
//     $("#myForm").validate({
//         rules:{
//             username:{
//         required: true,
//             minlength:3
//     },
//         password:{
//             required: true,
//             minlength:6
//             },
//             messages:{
//                 username:{
//                 required:alert("required")
//             }
//         }
//     })
// });
$(document).ready(function(){
    $("#userCheck").hide();
    $("#passwordCheck").hide();
    $("#user2Check").hide();
    $("#password2Check").hide();
    $("#repasswordCheck").hide();
    $("#emailCheck").hide();

    var user_err = true;
    var password_err = true;
    var user2_err = true;
    var password_err = true;
    var repassword_err = true;
    var email_err = true;


$("#user").onclick(function(){
alert("hello")});

function user_check(){
    var user_val = $("#user").val();

};




});