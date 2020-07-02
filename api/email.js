const nodemailer = require('nodemailer');
const mysql = require('mysql');

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'noreply.matchawtc@gmail.com',
        pass: 'CaVJdFLYePnA9GLdrMsJ'
    }
});

var confirm_email = function confirm_email(email, code) {
    return new Promise((resolve, reject) => {
        if (!email || email == undefined)
            reject("No valid email given.");

        var mailOptions = {
            from: 'noreply.matchaWTC@gmail.com',
            to: `${email}`,
            subject: 'Please verify your email',
            text: `verify here... VERIFY: http://localhost:8080/${code}`
        };

        transporter.sendMail(mailOptions, function(error, info) {
            if (error)
                reject(error);
            else
                resolve(info.response);
        })
    });
}

var reset_password = function reset_password(email, code) {
    return new Promise((resolve, reject) => {
        var mailOptions = {
            from: 'noreply.matchaWTC@gmail.com',
            to: `${email}`,
            subject: 'Forgotten password',
            text: `I AM JUDGING YOU SO HARD, please follow this link to fix: http://localhost:8080/user/pass_reset/${code}`
        };
        transporter.sendMail(mailOptions, function(error, info) {
            if (error)
                reject(error);
            else
                resolve(info.response);
        });
    })
}

module.exports.confirm_email = confirm_email;
module.exports.reset_password = reset_password;