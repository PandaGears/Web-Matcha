const { text } = require("body-parser");

function postPublicDetails() {
    let form = {
        userName: document.getElementById('userName').value,
        userSurname: document.getElementById('userSurname').value,
        userGender: document.getElementById('userGender').value,
        userSexPref: document.getElementById('userSexPref').value,
        userBio: document.getElementById('userBio').value,
    }
    if (form.userName && form.userSurname && form.userGender && form.userSexPref) {
        if (form.userGender !== 'Male' && form.userGender !== 'Female' && form.userGender !== 'NB') {
            swal({
                title: 'Error!',
                text: `Invalid gender... to the site at least`,
                imageUrl: 'https://res.cloudinary.com/ddrrwygt1/image/upload/v1594047930/alerts/bad_ehbqfc.jpg',
                imageWidth: 400,
                imageHeight: 400,
                imageAlt: 'invalid gender',
            }).then(function() {
                window.location.reload();
            })
        } else {
            $.ajax({
                type: "POST",
                url: '/user/account/public',
                data: JSON.stringify(form),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function(data) {
                    location.reload();
                }
            });
        }
    }
}

function changeUsername() {
    let form = {
        userLogin: document.getElementById('userLogin').value
    }
    if (form.userLogin < 4) {
        swal({
            title: 'Error!',
            text: `Username must contain at least 4 characters.`,
            imageUrl: 'https://res.cloudinary.com/ddrrwygt1/image/upload/v1594047930/alerts/bad_ehbqfc.jpg',
            imageWidth: 400,
            imageHeight: 400,
            imageAlt: 'short username',
        }).then(function() {
            window.location.reload();
        })
    } else if (!form.userLogin) {
        swal({
            title: 'Error!',
            text: `Username can't be blank.`,
            imageUrl: 'https://res.cloudinary.com/ddrrwygt1/image/upload/v1594047930/alerts/bad_ehbqfc.jpg',
            imageWidth: 400,
            imageHeight: 400,
            imageAlt: 'blank username',
        }).then(function() {
            window.location.reload();
        })
    } else {
        $.ajax({
            type: "POST",
            url: '/user/account/username',
            data: JSON.stringify(form),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(data) {

                if (data === 'Success') {
                    swal({
                        title: 'Success!',
                        text: `Username has been updated!`,
                        imageUrl: 'https://res.cloudinary.com/ddrrwygt1/image/upload/v1594048146/alerts/good_ywbwx1.jpg',
                        imageWidth: 400,
                        imageHeight: 400,
                        imageAlt: 'Username updated',
                    }).then(function() {
                        window.location.reload();
                    })
                } else {
                    swal({
                        title: 'Error!',
                        test: `${data}`,
                        imageUrl: 'https://res.cloudinary.com/ddrrwygt1/image/upload/v1594047930/alerts/bad_ehbqfc.jpg',
                        imageWidth: 400,
                        imageHeight: 400,
                        imageAlt: 'Nope',
                    }).then(function() {
                        window.location.reload();
                    })
                }
            }
        });
    }
}

function changeEmail() {
    let form = {
        Email: document.getElementById('Email').value
    }
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!(re.test(String(form.Email).toLowerCase()))) {
        swal({
            title: 'Error!',
            text: `Invalid email.`,
            imageUrl: 'https://res.cloudinary.com/ddrrwygt1/image/upload/v1594047930/alerts/bad_ehbqfc.jpg',
            imageWidth: 400,
            imageHeight: 400,
            imageAlt: 'bad email',
        }).then(function() {
            window.location.reload();
        })
    } else if (!form.Email) {
        swal({
            title: 'Error!',
            text: `Email can't be blank.`,
            imageUrl: 'https://res.cloudinary.com/ddrrwygt1/image/upload/v1594047930/alerts/bad_ehbqfc.jpg',
            imageWidth: 400,
            imageHeight: 400,
            imageAlt: 'blank email',
        }).then(function() {
            window.location.reload();
        })
    } else {
        $.ajax({
            type: "POST",
            url: '/user/account/email',
            data: JSON.stringify(form),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(data) {
                document.getElementById('emailPara').innerHTML = data;
                setTimeout(() => {
                    $('#emailPara').text('');
                }, 2000);
            }
        });
    }
}

function updateDoB() {
    if (!(document.getElementById('userDOB').value)) {
        swal({
            title: 'Error!',
            text: `Date input incomplete`,
            imageUrl: 'https://res.cloudinary.com/ddrrwygt1/image/upload/v1594047930/alerts/bad_ehbqfc.jpg',
            imageWidth: 400,
            imageHeight: 400,
            imageAlt: 'bad date',
        }).then(function() {
            window.location.reload();
        })
        return;
    }
    var entered = new Date(document.getElementById('userDOB').value);
    let ageDifMs = Date.now() - entered.getTime();
    let ageDate = new Date(ageDifMs);
    var age = Math.abs(ageDate.getUTCFullYear() - 1970);
    if (age < 18) {
        swal({
            title: 'Error!',
            text: `little child... no, go away`,
            imageUrl: 'https://res.cloudinary.com/ddrrwygt1/image/upload/v1594031136/alerts/2young_iopm4h.jpg',
            imageWidth: 400,
            imageHeight: 400,
            imageAlt: 'TOO YOUNG',
        }).then(function() {
            window.location.reload();
        })
    } else {
        let form = {
            age: age,
            birthDate: entered.toISOString().slice(0, 19).replace('T', ' ')
        }
        $.ajax({
            type: "POST",
            url: '/user/account/age',
            data: JSON.stringify(form),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(data) {
                location.reload();
            }
        });
    }
}

function postProfileImage() {
    $.ajax({
        type: "POST",
        url: '/user/account',
        data: JSON.stringify(image),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data) {}
    });
}

function changePassword() {
    let form = {
        password: document.getElementById("userNewPass").value
    }
    checkPass($("#userNewPass").val()).then(() => {

        $.ajax({
            type: "POST",
            url: '/user/account/password',
            data: JSON.stringify(form),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(data) {
                swal({
                    title: 'Updated!',
                    text: `Your password has been updated.`,
                    imageUrl: 'https://res.cloudinary.com/ddrrwygt1/image/upload/v1594048146/alerts/good_ywbwx1.jpg',
                    imageWidth: 400,
                    imageHeight: 400,
                    imageAlt: 'password updated',
                }).then(function() {
                    window.location.reload();
                })
            }
        });
    }, (err) => {
        swal({
            title: 'Error!',
            text: `${err}`,
            imageUrl: 'https://res.cloudinary.com/ddrrwygt1/image/upload/v1594047930/alerts/bad_ehbqfc.jpg',
            imageWidth: 400,
            imageHeight: 400,
            imageAlt: 'Nope',
        })
    }).then(function() {
        window.location.reload();
    })
    $("#userNewPass").val("");
}

function validInterest(interest) {
    var re = /^#[A-Za-z0-9-_.]+$/;
    if (re.test(interest))
        return true;
    return false;
}

function add_interest() {
    var interests = document.getElementById('userInterests').value;

    interests = interests.split(" ");
    interests.forEach(function(data) {
        if (!validInterest(data)) {
            swal({
                title: 'Error!',
                text: `${data} is not a correctly formatted interest, don't forget the '#'`,
                imageUrl: 'https://res.cloudinary.com/ddrrwygt1/image/upload/v1594047930/alerts/bad_ehbqfc.jpg',
                imageWidth: 400,
                imageHeight: 400,
                imageAlt: 'bad interest',
            }).then(function() {
                window.location.reload();
            })
            return;
        }
    });
    interests.forEach(function(data) {
        if (validInterest(data)) {
            let form = {
                interest: data
            }
            $.ajax({
                type: "POST",
                url: '/user/account/addinterest',
                data: JSON.stringify(form),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
            });
        }
    });
    document.getElementById("interestsPara").innerHTML = "Updated your interests";
    setTimeout(() => {
        $('#interestsPara').text('');
    }, 2000);
    $('#userInterests').val('');
}

function remove_interest() {
    var interests = document.getElementById('removedInterests').value;

    interests = interests.split(" ");
    interests.forEach(function(data) {
        if (!validInterest(data)) {
            swal({
                title: 'Error!',
                text: `${data} is not a correctly formatted interest, don't forget the '#'`,
                imageUrl: 'https://res.cloudinary.com/ddrrwygt1/image/upload/v1594047930/alerts/bad_ehbqfc.jpg',
                imageWidth: 400,
                imageHeight: 400,
                imageAlt: 'bad interest',
            }).then(function() {
                window.location.reload();
            })
            return;
        }
    });
    interests.forEach(function(data) {
        if (validInterest(data)) {
            let form = {
                interest: data
            }
            $.ajax({
                type: "POST",
                url: '/user/account/removeinterest',
                data: JSON.stringify(form),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
            });
        }
    });
    document.getElementById("interestsRemovedPara").innerHTML = "Removed any matching interests";
    setTimeout(() => {
        $('#interestsRemovedPara').text('');
    }, 2000);
    $('#removedInterests').val('');
}

$("#userInterests").keyup(function(event) {
    if (event.keyCode === 13) {
        add_interest();
    }
});

$("#removedInterests").keyup(function(event) {
    if (event.keyCode === 13) {
        remove_interest();
    }
});

$("#userLogin").keyup(function(event) {
    if (event.keyCode === 13) {
        changeUsername();
    }
});

$("#Email").keyup(function(event) {
    if (event.keyCode === 13) {
        changeEmail();
    }
});

$("#userNewPass").keyup(function(event) {
    if (event.keyCode === 13) {
        changePassword();
    }
});

$("#userNewPass").on("keyup", function() {
    $("#pwParaE").text("");
    $("#updatePassword").prop("disabled", true);
    checkPass($("#userNewPass").val()).then((ret) => {
        $("#updatePassword").prop("disabled", false);
    }, (err) => {
        $('#pwParaE').text(err);
    });
});