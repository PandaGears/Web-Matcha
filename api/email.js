const nodemailer = require('nodemailer');
const mysql = require('mysql');

var mailman = nodemailer.createTransport({
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
            from: 'noreply.matchwtca@gmail.com',
            to: `${email}`,
            subject: 'verify your email',
            text: ` Suuuuuuuuup ${user},
                    Please verify your email using this link: 
                    http://localhost:8080/${code}`
        };

        mailman.sendMail(mailOptions, function(error, info) {
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
            from: 'noreply.matchawtc@gmail.com',
            to: `${email}`,
            subject: 'Forgotten password',
            text: `     OKAY I LIED ABOUT JUDGING YOU, ${user},
                    please follow this link to fix your... "problem": 
                 http://localhost:8080/user/pass_reset/${code}`
        };
        mailman.sendMail(mailOptions, function(error, info) {
            if (error)
                reject(error);
            else
                resolve(info.response);
        });
    })
}

module.exports.confirm_email = confirm_email;
module.exports.reset_password = reset_password;