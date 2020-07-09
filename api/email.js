const nodemailer = require('nodemailer');
const mysql = require('mysql');

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'noreply.matchaWTC@gmail.com',
        pass: 'CaVJdFLYePnA9GLdrMsJ'
    }
});

var passResetinator = function passResetinator(email, code) {
    return new Promise((resolve, reject) => {
        var mailOptions = {
            from: 'noreply.matchastuffs@gmail.com',
            to: `${email}`,
            subject: 'Forgotten password',
            html: `<p>okay... I lied a little</p><p><b>BECAUSE I AM JUDGING YOU SO HARD!!!!</b></p> <p>please follow this link to fix this:</p>http://localhost:8080/user/pass_reset/${code}`
        };
        transporter.sendMail(mailOptions, function(error, info) {
            if (error)
                reject(error);
            else
                resolve(info.response);
        });
    })
}

var emailValidifinator = function emailValidifinator(email, code) {
    return new Promise((resolve, reject) => {
        if (!email || email == undefined)
            reject("No valid email given.");

        var mailOptions = {
            from: 'noreply.matchastuffs@gmail.com',
            to: `${email}`,
            subject: 'Please verify your email',
            html: `<p>Greetings cub-to-be</p>verify here please...</br> <p><b>VERIFY IT!!!:</b></p></br> <a href="http://localhost:8080/${code}" style="color: red; font-size: 18px; text-decoration: none; font weight: bold">I AM THE VERIFICATION LINK</a>`
        };

        transporter.sendMail(mailOptions, function(error, info) {
            if (error)
                reject(error);
            else
                resolve(info.response);
        })
    });
}


module.exports.emailValidifinator = emailValidifinator;
module.exports.passResetinator = passResetinator;