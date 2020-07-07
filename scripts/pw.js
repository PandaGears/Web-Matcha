function serverEmailValid(email) {
    return new Promise((resolve, reject) => {
        let emailTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email === undefined || email == "")
            reject('Email empty.');
        if (!(emailTest.test(String(email).toLowerCase())))
            reject('Invalid email.');
        resolve('Valid');
    });
}

function resetPass(code) {

    let form = {
        userCode: code,
        newPassword: document.getElementById('userPassword').value
    }
    checkPass(form.newPassword).then(() => {
        $.ajax({
            type: "POST",
            url: '/user/pass_change',
            data: JSON.stringify(form),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(ret) {
                document.location.href = ("/changed");
            }
        })
    }, (err) => {
        swal({
            title: 'Error!',
            text: `${err}`,
            imageUrl: 'https://res.cloudinary.com/ddrrwygt1/image/upload/v1594047930/alerts/bad_ehbqfc.jpg',
            imageWidth: 400,
            imageHeight: 400,
            imageAlt: 'error',
        })
    })
}

function sendEmail() {
    let form = {
        userEmail: document.getElementById('userEmail').value,
    }
    let valid = serverEmailValid(form.userEmail);
    valid.then(function(ret) {
        $.ajax({
            type: "POST",
            url: '/user/forgot_pass',
            data: JSON.stringify(form),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(ret) {
                swal({
                    title: 'Something Happened',
                    text: `${ret}`,
                    imageUrl: 'https://res.cloudinary.com/ddrrwygt1/image/upload/v1594031139/alerts/email_sent_my4lt0.jpg',
                    imageWidth: 400,
                    imageHeight: 400,
                    imageAlt: 'something',
                })
            }
        })
    }, function(err) {
        swal({
            title: 'Error!',
            text: `${err}`,
            imageUrl: 'https://res.cloudinary.com/ddrrwygt1/image/upload/v1594047930/alerts/bad_ehbqfc.jpg',
            imageWidth: 400,
            imageHeight: 400,
            imageAlt: 'error',
        })
    })
}

$("#userEmail").keyup(function(event) {
    if (event.keyCode === 13) {
        sendEmail();
    }
});

$("#userPassword").keyup(function(event) {
    if (event.keyCode === 13) {
        resetPass($('#userPassword').val());
    }
});

$("input[type='email']").on("keyup", function() {
    $(".errorMsg").text("");
    $("#submit").prop("disabled", true);
    serverEmailValid($('#userEmail').val()).then(() => {
        $("#submit").prop("disabled", false);
    }, (err) => {
        $('#emailError').text(err);
    });
});

$("input[type='text']").on("keyup", function() {
    $(".errorMsg").text("");
    $("#submit").prop("disabled", true);
    checkPass($("#userPassword").val()).then((ret) => {
        $("#submit").prop("disabled", false);
    }, (err) => {
        $('#passError').text(err);
    });
});

function checkPass(password) {
    return new Promise((resolve, reject) => {
        if (password === undefined || password == "")
            reject('Password empty.');
        if (password.length < 8)
            reject('Password too short');
        if ((/[^A-Za-z0-9]+/.test(password)))
            reject('STOP BEING OVER FANCY, NUMBERS OR LETTERS ONLY');
        if (!(/.*[1-9].*/.test(password)))
            reject('I SEE A SEVERE LACK OF NUMBERS');
        if (!(/.*[a-zA-Z].*/.test(password)))
            reject('Oh my... no word... well... no word, there are no letters here');
        resolve('Valid');
    });
}