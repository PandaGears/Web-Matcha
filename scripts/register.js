function registrationValidation(username, name, surname, email, password, confpassword) {
    return new Promise((resolve, reject) => {
        let emailTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (username === undefined || username == "")
            reject('Username empty.');
        if (username.length < 4)
            reject('Username too short.');
        if (!(/^[A-Za-z0-9-_. ]+$/.test(username)))
            reject('Username contains special characters.');
        if (name === undefined || name == "")
            reject('Name empty.');
        if (!(/^[\w'\-,.]*[^_!¡?÷?¿\/\\+=@#$%ˆ&*(){}|~<>;:[\]]*$/.test(name)))
            reject('Illegal chars in name, and yes, for this project, Elon Musk\'s kid is invalid ');
        if (surname === undefined || surname == "")
            reject('Surname empty.');
        if ((/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(surname)))
            reject('Illegal chars in surname');
        if (email === undefined || email == "")
            reject('Email empty.');
        if (!(emailTest.test(String(email).toLowerCase())))
            reject('Invalid email.');
        if (password === undefined || password == "")
            reject('Password empty.');
        if (password.length < 12)
            reject('password is too short');
        if ((/[^A-Za-z0-9]+/.test(password)))
            reject('Password contains something other than numbers and letters. READ THE INSTRUCTIONS');
        if (!(/.*[1-9].*/.test(password)))
            reject('Password MUST contain AT LEAST ONE number');
        if (!(/.*[a-zA-Z].*/.test(password)))
            reject('Password does not contain letters');
        if (confpassword === undefined || confpassword == "")
            reject('Confirm Password empty');
        if (password != confpassword)
            reject('Password mismatch');
        resolve('Valid');
    });
}

function ErrorHandler(data) {
    if (data !== 'success') {
        swal(
            'Error!',
            `Username already in use`,
            'error'
        )
    } else {
        window.location.href = "/user/login/postRegistration";
    }
}

function registerPost() {
    let form = {
        userLogin: document.getElementById('userLogin').value.toLowerCase(),
        userName: document.getElementById('userName').value,
        userSurname: document.getElementById('userSurname').value,
        Email: document.getElementById('Email').value,
        userPass: document.getElementById('userPass').value,
        userConfPass: document.getElementById('userConfPass').value,
    }
    let valid = registrationValidation(form.userLogin, form.userName, form.userSurname, form.Email, form.userPass, form.userConfPass);
    valid.then(function(ret) {
        $.ajax({
            type: "POST",
            url: '/user/registration',
            data: JSON.stringify(form),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(ret) {
                if (ret == 'success') {
                    ErrorHandler(ret);
                } else {
                    swal(
                        'Error!',
                        `${ret}`,
                        'error'
                    )
                }
            }
        })
    }, function(err) {
        swal(
            'Error!',
            `${err}`,
            'error'
        )
    })
}

$("input[type='text'], input[type='password'], input[type='email']").keyup((event) => {
    $(".errorMsg").text("");
    $("#submit").prop("disabled", true);
    registrationValidation($('#userLogin').val(), $('#userName').val(), $('#userSurname').val(), $('#Email').val(), $('#userPass').val(), $('#userConfPass').val()).then(() => {
        $("#submit").prop("disabled", false);
    }, (err) => {
        $(event.target).siblings(".errorMsg").text(err);
    });
});

$("#userConfPass").keyup(function(event) {
    if (event.keyCode === 13) {
        registerPost();
    }
});