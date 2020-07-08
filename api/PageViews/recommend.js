const express = require('express');
const router = express.Router();
const app = express();
const database = require('../../api/backend/database');

app.use(express.static('/../../styles'));
app.use(express.static('/../../scripts'));

var DB = new database;

function toRad(Value) {
    return Value * Math.PI / 180;
}

function appendDistance(user1, user2) {
    if (!user2.userLocationlat || !user2.userLocationlng)
        return (9999);
    var R = 6371;
    var dLat = toRad(user2.userLocationlat - user1.userLocationlat);
    var dLon = toRad(user2.userLocationlng - user1.userLocationlng);
    var lat1 = toRad(user1.userLocationlat);
    var lat2 = toRad(user2.userLocationlat);

    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;

    return d.toFixed(2);
}

router.get('/', (req, res, next) => {
    if (req.session.user === undefined) {
        res.redirect('/user/login');
        return;
    }
    let complete = DB.verified(req.session.user);
    complete.then(function(data) {
        var current_user = DB.get_user(req.session.user);
        current_user.then(function(data) {
            var userOrientation = data[0].userOrientation;
            var userGender = data[0].userGender;
            var arrayExists = 1;
            var userAge = data[0].userAge;

            if (!userOrientation || !userGender)
                res.redirect('/user/account/incomplete');
            var userArray = DB.get_matches(userOrientation, userGender, req.session.user, userAge, req.session.ageDiff, req.session.minPop);
            userArray.then(function(data1) {
                if (!data1[0])
                    arrayExists = 0;
                else
                    data1.forEach(element => {
                        element.distance = appendDistance(data[0], element);
                        element.fame = element.Likes - element.userDislikes;
                    });
                if (req.session.sortType) {
                    if (req.session.sortType == 'AgeUp') {
                        data1 = data1.sort(function(a, b) {
                            return a.userAge - b.userAge;
                        });
                    } else if ((req.session.sortType == 'AgeDown')) {
                        data1 = data1.sort(function(a, b) {
                            return b.userAge - a.userAge;
                        });
                    } else if ((req.session.sortType == 'FameUp')) {
                        data1 = data1.sort(function(a, b) {
                            return a.Popularity - b.Popularity;
                        });
                    } else if ((req.session.sortType == 'FameDown')) {
                        data1 = data1.sort(function(a, b) {
                            return b.Popularity - a.Popularity;
                        });
                    } else if ((req.session.sortType == 'Closer')) {
                        data1 = data1.sort(function(a, b) {
                            return a.distance - b.distance;
                        });
                    } else if ((req.session.sortType == 'Further')) {
                        data1 = data1.sort(function(a, b) {
                            return b.distance - a.distance;
                        });
                    }
                }
                let unseeBlockeds = DB.query(`SELECT * FROM blocks WHERE blocker = '${req.session.user}'`);
                unseeBlockeds.then(function(blockedUsers) {
                    blockedUsers.forEach(element1 => {
                        data1.forEach(function(element2, index) {
                            if (element1.blocked == element2.username)
                                data1.splice(index, 1);
                        });
                    });
                    var testArr = new Array();
                    if (req.session.interest) {
                        let interestedUsers = DB.get_interested(req.session.interest);
                        interestedUsers.then(function(interested) {
                            interested.forEach(element1 => {
                                data1.forEach(function(element2, index) {
                                    if (element1.user == element2.username)
                                        testArr.push(element2);
                                });
                            });
                            if (req.session.sortType) {
                                if (req.session.sortType == 'AgeUp') {
                                    testArr = testArr.sort(function(a, b) {
                                        return a.userAge - b.userAge;
                                    });
                                } else if ((req.session.sortType == 'AgeDown')) {
                                    testArr = testArr.sort(function(a, b) {
                                        return b.userAge - a.userAge;
                                    });
                                } else if ((req.session.sortType == 'FameUp')) {
                                    testArr = testArr.sort(function(a, b) {
                                        return a.Popularity - b.Popularity;
                                    });
                                } else if ((req.session.sortType == 'FameDown')) {
                                    testArr = testArr.sort(function(a, b) {
                                        return b.Popularity - a.Popularity;
                                    });
                                } else if ((req.session.sortType == 'Closer')) {
                                    testArr = testArr.sort(function(a, b) {
                                        return a.distance - b.distance;
                                    });
                                } else if ((req.session.sortType == 'Further')) {
                                    testArr = testArr.sort(function(a, b) {
                                        return b.distance - a.distance;
                                    });
                                }
                            }
                            res.render('recommendations', {
                                title: 'Recommendations',
                                user: (req.session.user === undefined ? "Username" : req.session.user),
                                userArray: testArr,
                                userLogged: (req.session.user === undefined ? false : true),
                                arrayExists: arrayExists,
                                maxDist: +req.session.maxDist,
                                maxDistEntered: req.session.maxDist ? 1 : 0
                            });
                        })
                    } else {
                        res.render('recommendations', {
                            title: 'Recommendations',
                            user: (req.session.user === undefined ? "Username" : req.session.user),
                            userArray: data1,
                            userLogged: (req.session.user === undefined ? false : true),
                            arrayExists: arrayExists,
                            maxDist: +req.session.maxDist,
                            maxDistEntered: req.session.maxDist ? 1 : 0
                        });
                    }
                })
            })
        })
    }, function(err) {
        res.redirect('/incomplete');
        return;
    })
});

router.post('/', (req, res) => {
    if (req.body.sortType)
        req.session.sortType = req.body.sortType;
    if (req.body.ageDiff)
        req.session.ageDiff = req.body.ageDiff;
    else
        req.session.ageDiff = undefined;
    if (req.body.minPop)
        req.session.minPop = req.body.minPop;
    else
        req.session.minPop = undefined;
    if (req.body.maxDist)
        req.session.maxDist = req.body.maxDist;
    else
        req.session.maxDist = undefined;
    if (req.body.interest)
        req.session.interest = req.body.interest
    else
        req.session.interest = undefined;
    res.json('success');
});

module.exports = router;