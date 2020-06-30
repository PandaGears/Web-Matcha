const Database = require('../backend/database');
const mysql = require('mysql');

var db = new Database;

class Profile {
    change_email(username, change_email) {
        return new Promise((resolve, reject) => {
            if (!username || !change_email)
                reject("Blank input passed to function.");

            let sql = "UPDATE users SET Email=? WHERE username=?";
            let inserts = [change_email, username];
            sql = mysql.format(sql, inserts);
            let update = db.query(sql);
            update.then(function(ret) {
                resolve("Email updated.");
            }, function(err) {
                reject("Failed to update email.");
            })
        })
    }

    activate_account(code) {
        return new Promise((resolve, reject) => {
            let sql = `SELECT COUNT(*) AS codeExists FROM users WHERE userCode=?`;
            let inserts = [code];
            sql = mysql.format(sql, inserts);
            let rowCount = db.query(sql);
            rowCount.then(function(data) {
                if (data[0].codeExists == 1) {
                    let sql = `UPDATE users SET userVerified=1 WHERE userCode='${code}'`
                    db.query(sql);
                    resolve();
                } else
                    reject();
            }, function(err) {
                reject(err);
            })
        })
    }

    view_profile(viewed, viewer) {
        let sql = "SELECT * FROM blocks WHERE blocked = ? AND blocker = ?";
        let inserts = [viewer, viewed];
        sql = mysql.format(sql, inserts);
        let blocked = db.query(sql);
        blocked.then(function(data) {
            if (data[0])
                return;
            else {
                sql = 'SELECT * FROM views WHERE viewer = ? AND viewed = ?'
                inserts = [viewer, viewed];
                sql = mysql.format(sql, inserts);
                let checked = db.query(sql);
                checked.then(function(data) {
                    if (!data[0]) {
                        let sql = `INSERT into views (viewed, viewer, isunread) VALUES (?, ?, 1)`
                        let inserts = [viewed, viewer];
                        sql = mysql.format(sql, inserts);
                        db.query(sql);
                    }
                })
            }
        })
    }

    change_username(username, newUsername) {
        return new Promise((resolve, reject) => {
            if (!username || !newUsername) {
                reject("Blank input passed to function.");
            }
            let userTaken = db.get_user(newUsername);
            userTaken.then(function(ret) {
                if (!ret[0]) {
                    reject(`Error: "Username already taken"`);
                }
            }, function(err) {
                let update = db.update_username(username, newUsername);
                update.then(function(data) {
                    resolve('Success');
                }, function(err) {
                    reject('Error in updating username.');
                })
            })
        })
    }

    get_matches(userOrientation, userGender, username, userAge, ageDiff, minFame) {
        return new Promise((resolve, reject) => {
            var ageMin = 0;
            var ageMax = 100;
            if (ageDiff && userAge) {
                ageMin = userAge - +ageDiff;
                ageMax = userAge + +ageDiff;
            }
            if (!minFame)
                minFame = 0;
            var sql;
            if (userOrientation == 'bi' || userOrientation == 'pan' || userOrientation == 'ace' || userOrientation == 'aro') {
                if (userGender == "Female")
                    sql = `
					SELECT * FROM users
					WHERE
                        userOrientation = 'bi' 
                    AND 
                        accountComplete = 1 AND username != '${username}' 
                    AND 
                        userAge BETWEEN ${ageMin} AND ${ageMax} 
                    AND 
                        popularity >= ${minFame}
                    OR
                        userOrientation = 'pan' 
                    AND 
                        accountComplete = 1 
                    AND 
                        username != '${username}' 
                    AND 
                        userAge BETWEEN ${ageMin} AND ${ageMax} 
                    AND 
                        popularity >= ${minFame}
					OR
                        userOrientation = 'hetero' 
                    AND 
                        userGender = 'Male' 
                    AND 
                        accountComplete = 1 
                    AND 
                        username != '${username}' 
                    AND 
                        userAge BETWEEN ${ageMin} AND ${ageMax} 
                    AND 
                        popularity >= ${minFame}
                    OR
                        userOrientation = 'homo' 
                    AND 
                        userGender = 'NB' 
                    AND 
                        accountComplete = 1 
                    AND 
                        username != '${username}' 
                    AND 
                        userAge BETWEEN ${ageMin} AND ${ageMax} 
                    AND 
                        popularity >= ${minFame}
					OR
                        userOrientation = 'hetero' 
                    AND 
                        userGender = 'NB' 
                    AND 
                        accountComplete = 1 
                    AND 
                        username != '${username}' 
                    AND 
                        userAge BETWEEN ${ageMin} AND ${ageMax} 
                    AND 
                        popularity >= ${minFame}
					OR
                        userOrientation = 'homo' 
                    AND 
                        userGender = 'Female' 
                    AND 
                        accountComplete = 1 
                    AND 
                        username != '${username}' 
                    AND 
                        userAge BETWEEN ${ageMin} AND ${ageMax} 
                    AND 
                        popularity >= ${minFame}
                    OR
                        userOrientation = 'aro' 
                    AND 
                        userGender = 'Male' 
                    AND 
                        accountComplete = 1 
                    AND 
                        username != '${username}' 
                    AND 
                        userAge BETWEEN ${ageMin} AND ${ageMax} 
                    AND 
                        popularity >= ${minFame}					
                    OR
                        userOrientation = 'aro' 
                    AND 
                        userGender = 'Female' 
                    AND 
                        accountComplete = 1 
                    AND 
                        username != '${username}' 
                    AND 
                        userAge BETWEEN ${ageMin} AND ${ageMax} 
                    AND 
                        popularity >= ${minFame}					
                    OR
                        userOrientation = 'aro' 
                    AND 
                        userGender = 'NB' 
                    AND 
                        accountComplete = 1 
                    AND 
                        username != '${username}' 
                    AND 
                        userAge BETWEEN ${ageMin} AND ${ageMax} 
                    AND 
                        popularity >= ${minFame}
                        OR
                        userOrientation = 'ace' 
                    AND 
                        userGender = 'Male' 
                    AND 
                        accountComplete = 1 
                    AND 
                        username != '${username}' 
                    AND 
                        userAge BETWEEN ${ageMin} AND ${ageMax} 
                    AND 
                        popularity >= ${minFame}					
                    OR
                        userOrientation = 'ace' 
                    AND 
                        userGender = 'Female' 
                    AND 
                        accountComplete = 1 
                    AND 
                        username != '${username}' 
                    AND 
                        userAge BETWEEN ${ageMin} AND ${ageMax} 
                    AND 
                        popularity >= ${minFame}					
                    OR
                        userOrientation = 'ace' 
                    AND 
                        userGender = 'NB' 
                    AND 
                        accountComplete = 1 
                    AND 
                        username != '${username}' 
                    AND 
                        userAge BETWEEN ${ageMin} AND ${ageMax} 
                    AND 
                        popularity >= ${minFame}`;
                else if (userGender == "Male")
                    sql = `
					SELECT * FROM users
					WHERE
                        userOrientation = 'bi' 
                    AND 
                        accountComplete = 1 
                    AND 
                        username != '${username}' 
                    AND 
                        userAge BETWEEN ${ageMin} AND ${ageMax} 
                    AND 
                        popularity > ${minFame}
                    OR
                        userOrientation = 'pan' 
                    AND 
                        accountComplete = 1 
                    AND 
                        username != '${username}' 
                    AND 
                        userAge BETWEEN ${ageMin} AND ${ageMax} 
                    AND 
                        popularity >= ${minFame}
					OR
                        userOrientation = 'hetero' 
                    AND 
                        userGender = 'Female' 
                    AND 
                        accountComplete = 1 
                    AND 
                        username != '${username}' 
                    AND 
                        userAge BETWEEN ${ageMin} AND ${ageMax} 
                    AND 
                        popularity >= ${minFame}
                    OR
                        userOrientation = 'hetero' 
                    AND 
                        userGender = 'NB' 
                    AND 
                        accountComplete = 1 
                    AND 
                        username != '${username}' 
                    AND 
                        userAge BETWEEN ${ageMin} AND ${ageMax} 
                    AND 
                        popularity >= ${minFame}
                    OR
                        userOrientation = 'homo' 
                    AND 
                        userGender = 'NB' 
                    AND 
                        accountComplete = 1 
                    AND 
                        username != '${username}' 
                    AND 
                        userAge BETWEEN ${ageMin} AND ${ageMax} 
                    AND 
                        popularity >= ${minFame}
					OR
                        userOrientation = 'homo' 
                    AND 
                        userGender = 'Male' 
                    AND 
                        accountComplete = 1 
                    AND 
                        username != '${username}' 
                    AND 
                        userAge BETWEEN ${ageMin} AND ${ageMax} 
                    AND 
                        popularity >= ${minFame}
                    OR
                        userOrientation = 'aro' 
                    AND 
                        userGender = 'Male' 
                    AND 
                        accountComplete = 1 
                    AND 
                        username != '${username}' 
                    AND 
                        userAge BETWEEN ${ageMin} AND ${ageMax} 
                    AND 
                        popularity >= ${minFame}					
                    OR
                        userOrientation = 'aro' 
                    AND 
                        userGender = 'Female' 
                    AND 
                        accountComplete = 1 
                    AND 
                        username != '${username}' 
                    AND 
                        userAge BETWEEN ${ageMin} AND ${ageMax} 
                    AND 
                        popularity >= ${minFame}					
                    OR
                        userOrientation = 'aro' 
                    AND 
                        userGender = 'NB' 
                    AND 
                        accountComplete = 1 
                    AND 
                        username != '${username}' 
                    AND 
                        userAge BETWEEN ${ageMin} AND ${ageMax} 
                    AND 
                        popularity >= ${minFame}
                    OR
                        userOrientation = 'ace' 
                    AND 
                        userGender = 'Male' 
                    AND 
                        accountComplete = 1 
                    AND 
                        username != '${username}' 
                    AND 
                        userAge BETWEEN ${ageMin} AND ${ageMax} 
                    AND 
                        popularity >= ${minFame}					
                    OR
                        userOrientation = 'ace' 
                    AND 
                        userGender = 'Female' 
                    AND 
                        accountComplete = 1 
                    AND 
                        username != '${username}' 
                    AND 
                        userAge BETWEEN ${ageMin} AND ${ageMax} 
                    AND 
                        popularity >= ${minFame}					
                    OR
                        userOrientation = 'ace' 
                    AND 
                        userGender = 'NB' 
                    AND 
                        accountComplete = 1 
                    AND 
                        username != '${username}' 
                    AND 
                        userAge BETWEEN ${ageMin} AND ${ageMax} 
                    AND 
                        popularity >= ${minFame}`;
                else
                    sql = `
                    SELECT * FROM users
                    WHERE
                        userOrientation = 'bi' 
                    AND 
                        accountComplete = 1 
                    AND 
                        username != '${username}' 
                    AND 
                        userAge BETWEEN ${ageMin} AND ${ageMax} 
                    AND 
                        popularity > ${minFame}
                    OR
                        userOrientation = 'pan' 
                    AND 
                        accountComplete = 1 
                    AND 
                        username != '${username}' 
                    AND 
                        userAge BETWEEN ${ageMin} AND ${ageMax} 
                    AND 
                        popularity >= ${minFame}
                    OR
                        userOrientation = 'homo' 
                    AND 
                        userGender = 'NB' 
                    AND 
                        accountComplete = 1 
                    AND 
                        username != '${username}' 
                    AND 
                        userAge BETWEEN ${ageMin} AND ${ageMax} 
                    AND 
                        popularity >= ${minFame}
                        OR
                        userOrientation = 'aro' 
                    AND 
                        userGender = 'Male' 
                    AND 
                        accountComplete = 1 
                    AND 
                        username != '${username}' 
                    AND 
                        userAge BETWEEN ${ageMin} AND ${ageMax} 
                    AND 
                        popularity >= ${minFame}					
                    OR
                        userOrientation = 'aro' 
                    AND 
                        userGender = 'Female' 
                    AND 
                        accountComplete = 1 
                    AND 
                        username != '${username}' 
                    AND 
                        userAge BETWEEN ${ageMin} AND ${ageMax} 
                    AND 
                        popularity >= ${minFame}					
                    OR
                        userOrientation = 'aro' 
                    AND 
                        userGender = 'NB' 
                    AND 
                        accountComplete = 1 
                    AND 
                        username != '${username}' 
                    AND 
                        userAge BETWEEN ${ageMin} AND ${ageMax} 
                    AND 
                        popularity >= ${minFame}
                    OR
                        userOrientation = 'ace' 
                    AND 
                        userGender = 'Male' 
                    AND 
                        accountComplete = 1 
                    AND 
                        username != '${username}' 
                    AND 
                        userAge BETWEEN ${ageMin} AND ${ageMax} 
                    AND 
                        popularity >= ${minFame}					
                    OR
                        userOrientation = 'ace' 
                    AND 
                        userGender = 'Female' 
                    AND 
                        accountComplete = 1 
                    AND 
                        username != '${username}' 
                    AND 
                        userAge BETWEEN ${ageMin} AND ${ageMax} 
                    AND 
                        popularity >= ${minFame}					
                    OR
                        userOrientation = 'ace' 
                    AND 
                        userGender = 'NB' 
                    AND 
                        accountComplete = 1 
                    AND 
                        username != '${username}' 
                    AND 
                        userAge BETWEEN ${ageMin} AND ${ageMax} 
                    AND 
                        popularity >= ${minFame}`;
            } else if (userOrientation == 'hetero') {
                if (userGender == 'Female')
                    sql = `
                            SELECT * FROM users
                            WHERE
                                userOrientation = 'bi'
                            AND 
                                userGender = 'Male'
                            AND 
                                accountComplete = 1 
                            AND 
                                username != '${username}'
                            AND 
                                userAge BETWEEN ${ageMin} AND ${ageMax}
                            AND 
                                popularity >= ${minFame}
                            OR
                                userOrientation = 'pan'
                            AND 
                                userGender = 'Male'
                            AND 
                                accountComplete = 1 
                            AND 
                                username != '${username}'
                            AND 
                                userAge BETWEEN ${ageMin} AND ${ageMax}
                            AND 
                                popularity >= ${minFame}
                            OR
                                userOrientation = 'hetero'
                            AND 
                                userGender = 'Male'
                            AND 
                                accountComplete = 1 
                            AND 
                                username != '${username}'
                            AND 
                                userAge BETWEEN ${ageMin} AND ${ ageMax }
                            AND 
                                popularity >= ${ minFame }
                            `
                else if (userGender == 'Male')
                    sql = `
                            SELECT * FROM users
                            WHERE
                                userOrientation = 'bi'
                            AND 
                                userGender = 'Female'
                            AND 
                                accountComplete = 1 
                            AND 
                                username != '${username}'
                            AND 
                                userAge BETWEEN ${ageMin} AND ${ageMax}
                            AND 
                                popularity >= ${minFame}
                            OR
                                userOrientation = 'pan'
                            AND 
                                userGender = 'Female'
                            AND 
                                accountComplete = 1 
                            AND 
                                username != '${username}'
                            AND 
                                userAge BETWEEN ${ageMin} AND ${ageMax}
                            AND 
                                popularity >= ${minFame}
                            OR
                                userOrientation = 'hetero'
                            AND 
                                userGender = 'Female'
                            AND 
                                accountComplete = 1 
                            AND 
                                username != '${username}'
                            AND 
                                userAge BETWEEN ${ageMin} AND ${ageMax}
                            AND 
                                popularity >= ${ minFame }
                            `
                else
                    sql = `
                        SELECT * FROM users
                        WHERE
                            userOrientation = 'bi'
                        AND 
                            userGender = 'Female'
                        AND 
                            accountComplete = 1 
                        AND 
                            username != '${username}'
                        AND 
                            userAge BETWEEN ${ageMin} AND ${ageMax}
                        AND 
                            popularity >= ${minFame}
                        OR
                            userOrientation = 'bi'
                        AND 
                            userGender = 'Male'
                        AND 
                            accountComplete = 1 
                        AND 
                            username != '${username}'
                        AND 
                            userAge BETWEEN ${ageMin} AND ${ageMax}
                        AND 
                            popularity >= ${minFame}
                        OR
                            userOrientation = 'pan'
                        AND 
                            userGender = 'Female'
                        AND 
                            accountComplete = 1 
                        AND 
                            username != '${username}'
                        AND 
                            userAge BETWEEN ${ageMin} AND ${ageMax}
                        AND 
                            popularity >= ${minFame}
                        OR
                            userOrientation = 'pan'
                        AND 
                            userGender = 'Male'
                        AND
                            accountComplete = 1
                        AND 
                            username != '${username}'
                        AND 
                            userAge BETWEEN ${ageMin} AND ${ageMax}
                        AND 
                            popularity >= ${minFame}
                        `
            } else if (userOrientation == 'homo') {
                if (userGender == 'Female')
                    sql = `
                            SELECT * FROM users
                            WHERE
                                userOrientation = 'bi'
                            AND 
                                userGender = 'Female'
                            AND 
                                username != '${username}'
                            AND 
                                userAge BETWEEN ${ageMin} AND ${ageMax}
                            AND 
                                popularity >= ${ minFame }
                            OR
                                userOrientation = 'pan'
                            AND 
                                userGender = 'Female'
                            AND 
                                username != '${username}'
                            AND 
                                userAge BETWEEN ${ageMin} AND ${ageMax}
                            AND 
                                popularity >= ${minFame}
                            OR
                                userOrientation = 'homo'
                            AND 
                                userGender = 'Female'
                            AND 
                                username != '${username}'
                            AND 
                                userAge BETWEEN ${ageMin} AND ${ageMax}
                            AND 
                                popularity >= ${minFame}
                            OR
                                userOrientation = 'aro' 
                            AND 
                                userGender = 'Male' 
                            AND 
                                accountComplete = 1 
                            AND 
                                username != '${username}' 
                            AND 
                                userAge BETWEEN ${ageMin} AND ${ageMax} 
                            AND 
                                popularity >= ${minFame}					
                            OR
                                userOrientation = 'aro' 
                            AND 
                                userGender = 'Female' 
                            AND 
                                accountComplete = 1 
                            AND 
                                username != '${username}' 
                            AND 
                                userAge BETWEEN ${ageMin} AND ${ageMax} 
                            AND 
                                popularity >= ${minFame}					
                            OR
                                userOrientation = 'aro' 
                            AND 
                                userGender = 'NB' 
                            AND 
                                accountComplete = 1 
                            AND 
                                username != '${username}' 
                            AND 
                                userAge BETWEEN ${ageMin} AND ${ageMax} 
                            AND 
                                popularity >= ${minFame}
                            OR
                                userOrientation = 'ace' 
                            AND 
                                userGender = 'Male' 
                            AND 
                                accountComplete = 1 
                            AND 
                                username != '${username}' 
                            AND 
                                userAge BETWEEN ${ageMin} AND ${ageMax} 
                            AND 
                                popularity >= ${minFame}					
                            OR
                                userOrientation = 'ace' 
                            AND 
                                userGender = 'Female' 
                            AND 
                                accountComplete = 1 
                            AND 
                                username != '${username}' 
                            AND 
                                userAge BETWEEN ${ageMin} AND ${ageMax} 
                            AND 
                                popularity >= ${minFame}					
                            OR
                                userOrientation = 'ace' 
                            AND 
                                userGender = 'NB' 
                            AND 
                                accountComplete = 1 
                            AND 
                                username != '${username}' 
                            AND 
                                userAge BETWEEN ${ageMin} AND ${ageMax} 
                            AND 
                                popularity >= ${minFame}`
                else if (userGender == 'Male')
                    sql = `
                            SELECT * FROM users
                            WHERE
                                userOrientation = 'bi'
                            AND 
                                userGender = 'Male'
                            AND 
                                username != '${username}'
                            AND 
                                userAge BETWEEN ${ageMin} AND ${ageMax}
                            AND 
                                popularity >= ${minFame}
                            OR
                                userOrientation = 'pan'
                            AND 
                                userGender = 'Male'
                            AND 
                                username != '${username}'
                            AND 
                                userAge BETWEEN ${ageMin} AND ${ageMax}
                            AND 
                                popularity >= ${minFame}
                            OR
                                userOrientation = 'homo'
                            AND 
                                userGender = 'Male'
                            AND 
                                username != '${username}'
                            AND 
                                userAge BETWEEN ${ageMin} AND ${ageMax}
                            AND 
                                popularity >= ${minFame}
                                OR
                                userOrientation = 'aro' 
                            AND 
                                userGender = 'Male' 
                            AND 
                                accountComplete = 1 
                            AND 
                                username != '${username}' 
                            AND 
                                userAge BETWEEN ${ageMin} AND ${ageMax} 
                            AND 
                                popularity >= ${minFame}					
                            OR
                                userOrientation = 'aro' 
                            AND 
                                userGender = 'Female' 
                            AND 
                                accountComplete = 1 
                            AND 
                                username != '${username}' 
                            AND 
                                userAge BETWEEN ${ageMin} AND ${ageMax} 
                            AND 
                                popularity >= ${minFame}					
                            OR
                                userOrientation = 'aro' 
                            AND 
                                userGender = 'NB' 
                            AND 
                                accountComplete = 1 
                            AND 
                                username != '${username}' 
                            AND 
                                userAge BETWEEN ${ageMin} AND ${ageMax} 
                            AND 
                                popularity >= ${minFame}
                            OR
                                userOrientation = 'ace' 
                            AND 
                                userGender = 'Male' 
                            AND 
                                accountComplete = 1 
                            AND 
                                username != '${username}' 
                            AND 
                                userAge BETWEEN ${ageMin} AND ${ageMax} 
                            AND 
                                popularity >= ${minFame}					
                            OR
                                userOrientation = 'ace' 
                            AND 
                                userGender = 'Female' 
                            AND 
                                accountComplete = 1 
                            AND 
                                username != '${username}' 
                            AND 
                                userAge BETWEEN ${ageMin} AND ${ageMax} 
                            AND 
                                popularity >= ${minFame}					
                            OR
                                userOrientation = 'ace' 
                            AND 
                                userGender = 'NB' 
                            AND 
                                accountComplete = 1 
                            AND 
                                username != '${username}' 
                            AND 
                                userAge BETWEEN ${ageMin} AND ${ageMax} 
                            AND 
                                popularity >= ${minFame}`
                else
                    sql = `
                            SELECT * FROM users
                            WHERE
                                userOrientation = 'homo'
                            AND 
                                userGender = 'NB'
                            AND 
                                username != '${username}'
                            AND 
                                userAge BETWEEN ${ageMin} AND ${ageMax}
                            AND 
                                popularity >= ${minFame}
                            OR
                                userOrientation = 'bi'
                            AND 
                                userGender = 'NB'
                            AND 
                                username != '${username}'
                            AND 
                                userAge BETWEEN ${ageMin} AND ${ageMax}
                            AND 
                                popularity >= ${minFame}
                            OR
                                userOrientation = 'pan'
                            AND 
                                userGender = 'NB'
                            AND 
                                username != '${username}'
                            AND 
                                userAge BETWEEN ${ageMin} AND ${ageMax}
                            AND 
                                popularity >= ${minFame}
                                OR
                                userOrientation = 'aro' 
                            AND 
                                userGender = 'Male' 
                            AND 
                                accountComplete = 1 
                            AND 
                                username != '${username}' 
                            AND 
                                userAge BETWEEN ${ageMin} AND ${ageMax} 
                            AND 
                                popularity >= ${minFame}					
                            OR
                                userOrientation = 'aro' 
                            AND 
                                userGender = 'Female' 
                            AND 
                                accountComplete = 1 
                            AND 
                                username != '${username}' 
                            AND 
                                userAge BETWEEN ${ageMin} AND ${ageMax} 
                            AND 
                                popularity >= ${minFame}					
                            OR
                                userOrientation = 'aro' 
                            AND 
                                userGender = 'NB' 
                            AND 
                                accountComplete = 1 
                            AND 
                                username != '${username}' 
                            AND 
                                userAge BETWEEN ${ageMin} AND ${ageMax} 
                            AND 
                                popularity >= ${minFame}
                            OR
                                userOrientation = 'ace' 
                            AND 
                                userGender = 'Male' 
                            AND 
                                accountComplete = 1 
                            AND 
                                username != '${username}' 
                            AND 
                                userAge BETWEEN ${ageMin} AND ${ageMax} 
                            AND 
                                popularity >= ${minFame}					
                            OR
                                userOrientation = 'ace' 
                            AND 
                                userGender = 'Female' 
                            AND 
                                accountComplete = 1 
                            AND 
                                username != '${username}' 
                            AND 
                                userAge BETWEEN ${ageMin} AND ${ageMax} 
                            AND 
                                popularity >= ${minFame}					
                            OR
                                userOrientation = 'ace' 
                            AND 
                                userGender = 'NB' 
                            AND 
                                accountComplete = 1 
                            AND 
                                username != '${username}' 
                            AND 
                                userAge BETWEEN ${ageMin} AND ${ageMax} 
                            AND 
                                popularity >= ${minFame}`
            }
            let result = db.query(sql);
            result.then(function(data) {
                resolve(data);
            }, function(err) {
                reject(err);
            })
        });
    }
}

module.exports = Profile;
module.exports = Profile;
module.exports = Profile;
module.exports = Profile;
module.exports = Profile;