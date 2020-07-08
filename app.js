const express = require('express');
var session = require('express-session');
const app = express();
const database = require('./api/backend/database');

const chatRoutes = require('./api/pageViews/chat');
const userRoutes = require('./api/pageViews/users');
const searchRoutes = require('./api/pageViews/search');
const recommendRoutes = require('./api/pageViews/recommend');
const locationRoutes = require('./api/pageViews/location');
const notificationRoutes = require('./api/pageViews/notifications');
const accountRoutes = require('./api/pageViews/account');
const emailinator = require('./api/email');

app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000000
    }
}));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'pug');
app.use(express.static('styles'));
app.use(express.static('images'));
app.use(express.static('scripts'));

app.use('/chat', chatRoutes);
app.use('/user/account', accountRoutes);
app.use('/user', userRoutes);
app.use('/search', searchRoutes);
app.use('/recommendations', recommendRoutes);
app.use('/location', locationRoutes);
app.use('/notifications', notificationRoutes);


app.get("/:code?", (req, res) => {
    var userNotification;
    let db = new database;

    if (req.params.code) {
        if (req.params.code == 'incomplete') {
            res.render('index', {
                title: 'Home',
                user: (req.session.user === undefined ? "Username" : req.session.user),
                notification: 'incomplete',
                userLogged: (req.session.user === undefined ? false : true)
            });
        } else if (req.params.code == 'emailed') {
            res.render('index', {
                title: 'Home',
                user: (req.session.user === undefined ? "Username" : req.session.user),
                notification: 'emailed',
                userLogged: (req.session.user === undefined ? false : true)
            });
        } else if (req.params.code == 'changed') {
            userNotification = 'changed';
            res.render('index', {
                title: 'Home',
                user: (req.session.user === undefined ? "Username" : req.session.user),
                notification: userNotification,
                userLogged: (req.session.user === undefined ? false : true)
            });
        } else {
            var activation = db.activate_account(req.params.code);
            activation.then(function(data) {
                userNotification = 'valid';
                res.render('index', {
                    title: 'Home',
                    user: (req.session.user === undefined ? "Username" : req.session.user),
                    notification: userNotification,
                    userLogged: (req.session.user === undefined ? false : true)
                });
            }, function(err) {
                userNotification = 'invalid';
                res.render('index', {
                    title: 'Home',
                    user: (req.session.user === undefined ? "Username" : req.session.user),
                    notification: userNotification,
                    userLogged: (req.session.user === undefined ? false : true)
                });
            })
        }
    } else {
        res.render('index', {
            title: 'Home',
            user: (req.session.user === undefined ? "Username" : req.session.user),
            userLogged: (req.session.user === undefined ? false : true)
        });
    }
});

app.post('/', (req, res) => {
    var res2 = res;
    var req2 = req;
    let db = new database;

    let loginAttempt = db.login(req.body.userLogin, req.body.userPass);
    loginAttempt.then(function(res) {
            req2.session.user = req.body.userLogin;
            res2.redirect('/');
        },
        function(err) {
            console.log(`Failed log in attempt.\nReason: ${err}`);
            db.close();
            res.status(204).end();
        })
});

app.get('*', function(req, res) {
    res.render('error', {
        title: 'Error',
        user: (req.session.user === undefined ? "Username" : req.session.user)
    });
});

module.exports = app;