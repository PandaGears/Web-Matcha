function loginator(data) {
    if (data !== 'success') {
        swal({
            title: 'Error!',
            text: `${data}`,
            imageUrl: 'https://res.cloudinary.com/ddrrwygt1/image/upload/v1594042795/alerts/confirm_email_og7r3d.jpg',
            imageWidth: 400,
            imageHeight: 400,
            imageAlt: 'So close',
        })
    } else {
        window.location.href = "/";
    }
}

function postLogin() {
    let registrationForm = {
        userLogin: document.getElementById('userLogin').value.toLowerCase(),
        userPass: document.getElementById('userPass').value
    }
    $.ajax({
        type: "POST",
        url: '/user/login',
        data: JSON.stringify(registrationForm),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data) {
            loginator(data);
        }
    })
}


var userLogin, userName, userSurname, userEmail, userPass, userConfPass;

$("input[type='text'], input[type='password'], input[type='email']").on("keyup", function() {
    if (document.getElementById("userLogin").value && document.getElementById("userPass").value)
        $("#submit").prop("disabled", false);
    else
        $("#submit").prop("disabled", true);
});

$("#userPass").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#submit").click();
    }
});