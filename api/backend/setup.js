const db = require('./config');
var mysql = require('mysql');
const database = require('../backend/database');

// user: 02
// pass: f

var DB = new database();

var setupDB = function setupDB() {
    var conn = mysql.createConnection({
        host: `${db.servername}`,
        user: `${db.dbusername}`,
        password: `${db.dbpassword}`
    });

    conn.connect(function(err) {
        if (err)
            throw (err);
        conn.query("CREATE DATABASE IF NOT EXISTS matcha", function(err, result) {
            if (err)
                throw (err);
            else {
                setupTables();
            }
        });
    });
}
var setupTables = function setupTables() {
    var conn = mysql.createConnection({
        host: `${db.servername}`,
        user: `${db.dbusername}`,
        password: `${db.dbpassword}`,
        database: `${db.dbname}`
    });
    conn.connect(function(err) {
        if (err) throw err;
        conn.query(`SELECT * FROM information_schema.tables
					WHERE table_schema = 'matcha'
					AND table_name = 'users'`,
            function(err, result) {
                if (err) throw err;
                if (result.length > 0) {

                } else {
                    console.log('user table not found.');
                    var sql = `CREATE TABLE IF NOT EXISTS users (
					userID int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
					username TINYTEXT NOT NULL,
					userEmail LONGTEXT NOT NULL,
					userPassword LONGTEXT NOT NULL,
					userFirstName LONGTEXT,
					userLastName LONGTEXT,
					userGender LONGTEXT,
					userImage LONGTEXT,
					userAge int(11),
					userBirthday DATETIME,
					Likes int(11) default 1,
					userDislikes int(11) default 0,
					userOrientation LONGTEXT,
					userBiography LONGTEXT,
					userLocationlat FLOAT,
					userLocationlng FLOAT,
					Popularity int(11) default 0,
					userCode LONGTEXT,
					userVerified BOOLEAN default 0,
					accountComplete BOOLEAN default 0,
					isOnline BOOLEAN default 0,
					lastOnline LONGTEXT
					);`
                    conn.query(sql, function(err, result) {
                        if (err) throw err;

                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("ectobiologist","ectobiologist@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591010882/Moar%20Profiles/john_qjtze9.jpg", "$2b$10$bMG3yMTNIzvWzNC8zgiwkOOjGYjB0hVbBW5ec0F00z.mtR.r/Up8m", "John", "Egbert", 'hetero', 'Male', 17, 1, 1, 16, 3, 14, "i don't know if i'm ready for every single 'deep' conversation we can squeeze into this wacky rapid fire session of fun pal-talk!", -33.9413, 18.4128, '2020-09-13 23:40', 'f2ce2daa60191398521de69ad5610409')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("tentacletherapist","tentacletherapist@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591010889/Moar%20Profiles/rose_pdfy7r.jpg", "$2b$10$bMG3yMTNIzvWzNC8zgiwkOOjGYjB0hVbBW5ec0F00z.mtR.r/Up8m", "Rose", "Lalonde", 'homo', 'Female', 17, 1, 1, 16, 3, 14, "Consider this your first lesson in showmanship", -33.9413, 18.4128, '2020-09-13 23:40', 'f2ce2daa60191398521de69ad5610409')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("turntechgodhead","turntechgodhead@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591010879/Moar%20Profiles/Dave_ymnv58.jpg", "$2b$10$bMG3yMTNIzvWzNC8zgiwkOOjGYjB0hVbBW5ec0F00z.mtR.r/Up8m", "Dave", "Strider", 'bi', 'Male', 17, 1, 1, 16, 3, 14, "go apeshit i guess", -33.9413, 18.4128, '2020-09-13 23:40', 'f2ce2daa60191398521de69ad5610409')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("gardengnostic","gardengnostic@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591010883/Moar%20Profiles/Jade_om8mzw.png", "$2b$10$bMG3yMTNIzvWzNC8zgiwkOOjGYjB0hVbBW5ec0F00z.mtR.r/Up8m", "Jade", "Harley", 'bi', 'Female', 17, 1, 1, 16, 3, 14, "there is still something worth fighting for!", -33.9413, 18.4128, '2020-09-13 23:40', 'f2ce2daa60191398521de69ad5610409')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("gutsygumshoe","gutsygumshoe@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591010886/Moar%20Profiles/Jane_vgybi1.png", "$2b$10$bMG3yMTNIzvWzNC8zgiwkOOjGYjB0hVbBW5ec0F00z.mtR.r/Up8m", "Jane", "Crocker", 'hetero', 'Female', 17, 1, 1, 16, 3, 14, "I began to wonder why I ever had the audacity to think I know much of anything about the world we live in or the journey we're about to take.", -33.9413, 18.4128, '2020-09-13 23:40', 'f2ce2daa60191398521de69ad5610409')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("tipsygnostalgic","tipsygnostalgic@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591010884/Moar%20Profiles/roxy_zanwix.png", "$2b$10$bMG3yMTNIzvWzNC8zgiwkOOjGYjB0hVbBW5ec0F00z.mtR.r/Up8m", "Roxy", "Lalonde", 'bi', 'Female', 17, 1, 1, 16, 3, 14, "i cant hit on anybody and appaprently i can entertain nary a frisky THOUGHT about anyboby because apparentley evrybodies OFF LIMITS!!!!!", -33.9413, 18.4128, '2020-09-13 23:40', 'f2ce2daa60191398521de69ad5610409')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("timaeustestified","timaeustestified@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591010886/Moar%20Profiles/Dirk_ydyxgj.png", "$2b$10$bMG3yMTNIzvWzNC8zgiwkOOjGYjB0hVbBW5ec0F00z.mtR.r/Up8m", "Dirk", "Strider", 'homo', 'Male', 17, 1, 1, 16, 3, 14, "If it puts your mind at ease, I will be the one pulling the strings here", -33.9413, 18.4128, '2020-09-13 23:40', 'f2ce2daa60191398521de69ad5610409')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("golgothasterror","golgothasterrore@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591010882/Moar%20Profiles/Jake_q0kgge.jpg", "$2b$10$bMG3yMTNIzvWzNC8zgiwkOOjGYjB0hVbBW5ec0F00z.mtR.r/Up8m", "Jake", "English", 'bi', 'Male', 17, 1, 1, 16, 3, 14, "Leave your bookish malarkey in a dusty old library somewhere. I have an adventure to get on with!", -33.9413, 18.4128, '2020-09-13 23:40', 'f2ce2daa60191398521de69ad5610409')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("uranianumbra","uranianumbra@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591010878/Moar%20Profiles/Calliope_kgxbpj.png", "$2b$10$bMG3yMTNIzvWzNC8zgiwkOOjGYjB0hVbBW5ec0F00z.mtR.r/Up8m", "Calliope", "", 'ace', 'NB', 17, 1, 1, 88, 3, 14, "by skaias gUiding light, yoU may leave behind its tUrning arms of bright coloUrs and mayhem, and secUre peace for yoUr cosmic progeny for all dUration.", -33.9413, 18.4128, '2020-09-13 23:40', 'f2ce2daa60191398521de69ad5610409')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("undyingumbrage","undyingumbrage@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591010883/Moar%20Profiles/Calliborn_lo0qrd.jpg", "$2b$10$bMG3yMTNIzvWzNC8zgiwkOOjGYjB0hVbBW5ec0F00z.mtR.r/Up8m", "Calliborn", "", 'ace', 'NB', 17, 1, 1, 88, 3, 14, "I HAVE FOuND MANY KEYS. AND uNLOCKED MANY HOLES. AND NOW I CAN SEE MORE. AND LEARN MORE. THAN YOu COULD EVER FuCKING DREAM!", -33.9413, 18.4128, '2020-09-13 23:40', 'f2ce2daa60191398521de69ad5610409')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("apocalypsearisen","apocalypsearisen@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591353562/Moar%20Profiles/aradia_v2tlo5.png", "$2b$10$bMG3yMTNIzvWzNC8zgiwkOOjGYjB0hVbBW5ec0F00z.mtR.r/Up8m", "Aradia", "Megido", 'bi', 'Female', 17, 1, 1, 19, 3, 14, "i think i mostly want to see what happens when this whole place breaks apart", -33.9413, 18.4128, '2020-09-13 23:40', 'f2ce2daa60191398521de69ad5610409')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("adiostoreador","adiostoreador@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591010235/Moar%20Profiles/Tavros_cdoocb.png", "$2b$10$bMG3yMTNIzvWzNC8zgiwkOOjGYjB0hVbBW5ec0F00z.mtR.r/Up8m", "Tavros", "Nitram", 'hetero', 'Male', 17, 1, 1, 19, 3, 14, "wOW, i'M SURE THERE WAS A BETTER WAY TO SAY THAT,", -33.9413, 18.4128, '2020-09-13 23:40', 'f2ce2daa60191398521de69ad5610409')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("twinarmageddons","twinarmageddons@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591353567/Moar%20Profiles/sollux_sq1uf3.png", "$2b$10$bMG3yMTNIzvWzNC8zgiwkOOjGYjB0hVbBW5ec0F00z.mtR.r/Up8m", "Sollux", "Captor", 'hetero', 'Male', 17, 1, 1, 19, 3, 14, "iit wa2 liike the handle wa2 a bald guy goiing really fa2t, and ii wa2 hii2 twoupee.", -33.9413, 18.4128, '2020-09-13 23:40', 'f2ce2daa60191398521de69ad5610409')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("carcinogeneticist","carcinogeneticist@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591010250/Moar%20Profiles/Dave_and_Karkat_watching_movie_v4ijiy.png", "$2b$10$bMG3yMTNIzvWzNC8zgiwkOOjGYjB0hVbBW5ec0F00z.mtR.r/Up8m", "Karkat", "Vantas", 'bi', 'Male', 17, 1, 1, 19, 3, 14, "MY HATE IS THE LIFEBLOOD THAT PULSES THROUGH THE VEINS OF YOUR UNIVERSE. IT IS MY GIFT TO YOU. YOU'RE WELCOME FOR THAT. YOU UNGRATEFUL PIECE OF SHIT", -33.9413, 18.4128, '2020-09-13 23:40', 'f2ce2daa60191398521de69ad5610409')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("arseniccatnip","arseniccatnip@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591011549/Moar%20Profiles/nepeta_rjea8g.png", "$2b$10$bMG3yMTNIzvWzNC8zgiwkOOjGYjB0hVbBW5ec0F00z.mtR.r/Up8m", "Nepeta", "Leijon", 'bi', 'Female', 17, 1, 1, 19, 3, 14, ":33 < *ac saunters from her dark cave a little bit sl33py from the recent kill*", -33.9413, 18.4128, '2020-09-13 23:40', 'f2ce2daa60191398521de69ad5610409')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("grimauxillatrix","grimauxillatrix@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591353567/Moar%20Profiles/kanaya_qhvtlt.png", "$2b$10$bMG3yMTNIzvWzNC8zgiwkOOjGYjB0hVbBW5ec0F00z.mtR.r/Up8m", "Kanaya", "Maryam", 'homo', 'Female', 17, 1, 1, 19, 3, 14, "Your Idle Moments Seem To Invite Interruption The Least", -33.9413, 18.4128, '2020-09-13 23:40', 'f2ce2daa60191398521de69ad5610409')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("gallowscallibrator","gallowscallibrator@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591353567/Moar%20Profiles/terezi_jw2agf.png", "$2b$10$bMG3yMTNIzvWzNC8zgiwkOOjGYjB0hVbBW5ec0F00z.mtR.r/Up8m", "Terezi", "Pyrope", 'bi', 'Female', 17, 1, 1, 19, 3, 14, "W3 M4K3 OUR OWN LUCK, 4ND YOU'R3 4BOUT TO PROV3 TH4T", -33.9413, 18.4128, '2020-09-13 23:40', 'f2ce2daa60191398521de69ad5610409')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("arachnidsgrip","arachnidsgrip@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591010238/Moar%20Profiles/Vris_wegnih.jpg", "$2b$10$bMG3yMTNIzvWzNC8zgiwkOOjGYjB0hVbBW5ec0F00z.mtR.r/Up8m", "Vriska", "Serket", 'bi', 'Female', 17, 1, 1, 19, 3, 14, "And you don't have to 8e a good person to 8e a hero.", -33.9413, 18.4128, '2020-09-13 23:40', 'f2ce2daa60191398521de69ad5610409')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("centaurstesticle","centaurstesticle@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591010234/Moar%20Profiles/Equius_gnekgy.jpg", "$2b$10$bMG3yMTNIzvWzNC8zgiwkOOjGYjB0hVbBW5ec0F00z.mtR.r/Up8m", "Equius", "Zahhak", 'hetero', 'Male', 17, 1, 1, 19, 3, 14, "D --> This is f001ishness upon one hundred thousand prior, equally unsolicited f001ishnesses", -33.9413, 18.4128, '2020-09-13 23:40', 'f2ce2daa60191398521de69ad5610409')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("terminallycapricious","terminallycapricious@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591010234/Moar%20Profiles/Gamzee_sprite_pacified_subfhd.png", "$2b$10$bMG3yMTNIzvWzNC8zgiwkOOjGYjB0hVbBW5ec0F00z.mtR.r/Up8m", "Gamzee", "Makara", 'bi', 'Male', 17, 1, 1, 19, 3, 14, "i'M dOwN tO mY lAsT bOtTlE aNd I dOn'T fUcKiN kNoW iF i CaN gEt AnYmOrE iN tHiS mOtHeRfUcKiN mAgIc LaNd So I dOn'T kNoW.", -33.9413, 18.4128, '2020-09-13 23:40', 'f2ce2daa60191398521de69ad5610409')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("caligulasaquarium","caligulasaquarium@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591010233/Moar%20Profiles/Eridian_hkexsa.jpg", "$2b$10$bMG3yMTNIzvWzNC8zgiwkOOjGYjB0hVbBW5ec0F00z.mtR.r/Up8m", "Eridian", "Ampora", 'hetero', 'Male', 17, 1, 1, 19, 3, 14, "all of her FRAUDULENT MAGICS cannot come close to posin threat to my mastery ovver the TRUEST SCIENCES", -33.9413, 18.4128, '2020-09-13 23:40', 'f2ce2daa60191398521de69ad5610409')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("cuttlefishculler","cuttlefishculler@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591010239/Moar%20Profiles/feferi_dyfomd.png", "$2b$10$bMG3yMTNIzvWzNC8zgiwkOOjGYjB0hVbBW5ec0F00z.mtR.r/Up8m", "Feferi", "Peixes", 'hetero', 'Female', 17, 1, 1, 19, 3, 14, "Glub glub glub glub glub glub glub! I AM -EXCIT-ED!", -33.9413, 18.4128, '2020-09-13 23:40', 'f2ce2daa60191398521de69ad5610409')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("YourFace","yourface@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592917291/Moar%20Profiles/generics/Rosena_Calzada_yovgbq.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Rosena", "Calzada", 'hetero', 'Female', 5, 1, 1, 22, 0, 5, "That's a clown question, bro. - Bryce Harper", -33.9353, 18.4083, '2020-03-05 13:37', 'bf779e0933a882808585d19425cd7937')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("NotYourFace","notyourface@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592917269/Moar%20Profiles/generics/Booker_Siniard_obia44.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Booker", "Siniard", 'bi', 'Male', 69, 1, 1, 20, 42, 27, "You miss 100 percent of the shots you don't take. - Wayne Gretzky - Michael Scott", -33.8943, 18.6294, '2020-01-29 04:20', '166ee015c0e0934a8781e0c86a197c6e')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("OkayIlied","okilied@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592917316/Moar%20Profiles/generics/Clementina_Karter_jfxc8c.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Clementina", "Karter", 'bi', 'Female', 42, 1, 1, 24, 21, 21, "jet fuel can't melt steel beams - Hillary Clinton.", -33.8333, 18.649, '2020-06-12 00:07', 'bf8fbb366e7dfe389c6fbb8e39ef532b')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("IsYourFace","isyourface@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592917262/Moar%20Profiles/generics/Rudolph_Gouge_xrapcc.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Rudolph", "Gouge", 'hetero', 'Male', 17, 1, 1, 21, 3, 14, "If you can't handle me at my best, you don't deserve me at my worst. - Marilyn Manson", -33.9413, 18.4128, '2020-09-13 23:40', 'f2ce2daa60191398521de69ad5610409')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("throatbillies","throatbillies@Gmail.com", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424863/Moar%20Profiles/generics/Bob_Musk_tsg3m1.jpg", "$2b$10$bMG3yMTNIzvWzNC8zgiwkOOjGYjB0hVbBW5ec0F00z.mtR.r/Up8m", "Bob", "Musk", 'hetero', 'Male', 44, 1, 1, 23, 3, 41, "you're mom goes to college - Abraham Lincoln", -33.9513, 18.3831, '2019-05-12 21:04', '70efdf2ec9b086079795c442636b25fb')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("wallowarollup","wallowarollup@Gmail.com", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424906/Moar%20Profiles/generics/David_Rivera_gndn7i.jpg", "$2b$10$bMG3yMTNIzvWzNC8zgiwkOOjGYjB0hVbBW5ec0F00z.mtR.r/Up8m", "David", "Rivera", 'hetero', 'Male', 44, 1, 1, 23, 3, 41, "I dream of a better tomorrow, where chickens can cross the road and not be questioned about their motives", -33.9513, 18.3831, '2019-05-12 21:04', '70efdf2ec9b086079795c442636b25fb')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("headingshannon","headingshannon@Gmail.com", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424853/Moar%20Profiles/generics/Adrian_Welsh_whxsem.jpg", "$2b$10$bMG3yMTNIzvWzNC8zgiwkOOjGYjB0hVbBW5ec0F00z.mtR.r/Up8m", "Adrian", "Welsh", 'bi', 'NB', 44, 1, 1, 23, 3, 41, "I changed all my userPasswords to 'incorrect'. So my computer just tells me when I forgot", -33.9513, 18.3831, '2019-05-12 21:04', '70efdf2ec9b086079795c442636b25fb')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("pamphletbuckle","pamphletbuckle@Gmail.com", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424918/Moar%20Profiles/generics/Affan_Yates_g9fkzr.jpg", "$2b$10$bMG3yMTNIzvWzNC8zgiwkOOjGYjB0hVbBW5ec0F00z.mtR.r/Up8m", "Affan", "Yates", 'pan', 'Male', 44, 1, 1, 23, 3, 41, "The dictionary is the only place where success comes before work", -33.9513, 18.3831, '2019-05-12 21:04', '70efdf2ec9b086079795c442636b25fb')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("0-2","ZeroTwo@Gmail.com", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591263131/002_ktwt2k.jpg", "$2b$10$bMG3yMTNIzvWzNC8zgiwkOOjGYjB0hVbBW5ec0F00z.mtR.r/Up8m", "Zero", "Two", 'pan', 'Female', 16, 1, 1, 24, 1, 15, "Whatever you do in life give 100%.....unless you're giving blood", -33.917, 18.3875, '2020-01-03 04:20', 'a2ef406e2c2351e0b9e80029c909242d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("termiteshaxwell","termiteshaxwell@Gmail.com", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424864/Moar%20Profiles/generics/Anne_Norris_lvaas2.jpg", "$2b$10$bMG3yMTNIzvWzNC8zgiwkOOjGYjB0hVbBW5ec0F00z.mtR.r/Up8m", "Anne", "Norris", 'homo', 'Female', 4, 1, 1, 27, 0, 4, "YOLO", -33.9411, 18.4232, '2020-01-22 12:22', 'e45ee7ce7e88149af8dd32b27f9512ce')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("lomondknaped","lomondknaped@Gmail.com", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424882/Moar%20Profiles/generics/Carolina_Sainz_v1esfy.jpg", "$2b$10$bMG3yMTNIzvWzNC8zgiwkOOjGYjB0hVbBW5ec0F00z.mtR.r/Up8m", "Carolina", "Sainz", 'hetero', 'Female', 42, 1, 1, 20, 9, 31, "I was planning to do something today, but I haven't finished doing nothing from yesterday", -33.8275, 18.6527, '2019-12-30 15:39', '7d0665438e81d8eceb98c1e31fca80c1')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("controllerbanknotes","controllerbanknotes@Gmail.com", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424917/Moar%20Profiles/generics/Natali_Dormer_oxoimb.jpg", "$2b$10$bMG3yMTNIzvWzNC8zgiwkOOjGYjB0hVbBW5ec0F00z.mtR.r/Up8m", "Natalie", "Dormer", 'bi', 'Female', 1, 1, 1, 18, 0, 1, "I really like ceilings......I guess you could call me a ceiling fan", -33.9249, 18.4241, '2019-12-25 18:44', '751d31dd6b56b26b29dac2c0e1839e34')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("lampreymanor","lampreymanor@Gmail.com", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593425410/Moar%20Profiles/generics/Samantha_Russell_tumb6o.jpg", "$2b$10$bMG3yMTNIzvWzNC8zgiwkOOjGYjB0hVbBW5ec0F00z.mtR.r/Up8m", "Samantha", "Russell", 'homo', 'Female', 69, 1, 1, 25, 12, 57, "I cant taste my lips could you do it for me", -33.866, 18.5344, '2020-01-11 13:59', 'faeac4e1eef307c2ab7b0a3821e6c667')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("objectivechunks","objectivechunks@Gmail.com", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424842/Moar%20Profiles/generics/Abigail_Smith_uo9run.jpg", "$2b$10$bMG3yMTNIzvWzNC8zgiwkOOjGYjB0hVbBW5ec0F00z.mtR.r/Up8m", "Abigail", "Smith", 'hetero', 'Female', 9, 1, 1, 23, 2, 7, "I was complimented on my driving. Someone left a note on my windshield that said, Parking Fine", -34.0257, 20.4381, '2020-01-07 23:04', 'd72d187df41e10ea7d9fcdc7f5909205')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("diffusersligh","diffusersligh@Gmail.com", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424874/Moar%20Profiles/generics/John_Wolf_dmjf8t.jpg", "$2b$10$bMG3yMTNIzvWzNC8zgiwkOOjGYjB0hVbBW5ec0F00z.mtR.r/Up8m", "John", "Wolf", 'bi', 'Male', 20, 1, 1, 50, 1, 19, "Why do banks lock their pens to the desk? If I'm trusting you with my money, don't you think you can trust me with a pen?", -33.8975, 19.1523, '2019-11-14 19:27', 'c20ad4d76fe97759aa27a0c99bff6710')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("jumbourology","jumbourology@Gmail.com", "http://res.cloudinary.com/matchawtc/image/upload/v1579359425/userImages/l3ryh11wsflhjiqlutdg.jpg", "$2b$10$bMG3yMTNIzvWzNC8zgiwkOOjGYjB0hVbBW5ec0F00z.mtR.r/Up8m", "Max", "Lopez", 'bi', 'NB', 3, 1, 1, 25, 0, 3, "That FuFu Lame Shit I Aint With It, I send some shots at your fitted, GRATATA", -34.0258, 18.4231, '2020-01-04 18:45', 'c51ce410c124a10e0db5e4b97fc2af39')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("tubskimpy","tubskimpy@Gmail.com", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424825/Moar%20Profiles/generics/Mark_Franks_giapsu.jpg", "$2b$10$bMG3yMTNIzvWzNC8zgiwkOOjGYjB0hVbBW5ec0F00z.mtR.r/Up8m", "Mark", "Franks", 'homo', 'Male', 25, 1, 1, 32, 5, 20, "Go shawty, it’s your birthday We gon party like it’s your birthday", -34.0209, 18.3683, '2020-01-20 13:37', 'aab3238922bcc25a6f606eb525ffdc56')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("mockerspectacles","mockerspectacles@Gmail.com", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424846/Moar%20Profiles/generics/Peter_Carson_la7uap.jpg", "$2b$10$bMG3yMTNIzvWzNC8zgiwkOOjGYjB0hVbBW5ec0F00z.mtR.r/Up8m", "Peter", "Carson", 'homo', 'Male', 30, 1, 1, 27, 12, 18, "You say a goon but what’s a goon to a goblin?", -33.9321, 18.8602, '2020-01-24 14:43', '9bf31c7ff062936a96d3c8bd1f8f2ff3')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("repeatlondon","repeatlondon@Gmail.com", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424802/Moar%20Profiles/generics/Fred_Miller_sbmnwl.jpg", "$2b$10$bMG3yMTNIzvWzNC8zgiwkOOjGYjB0hVbBW5ec0F00z.mtR.r/Up8m", "Fred", "Miller", 'hetero', 'Male', 0, 1, 1, 40, 0, 0, "Nice pants can i test the zipper", -33.9036, 18.4205, '2020-01-18 01:39', 'c74d97b01eae257e44aa9d5bade97baf')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("flutweezers","flutweezers@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424834/Moar%20Profiles/generics/Jamelia_Delarosa_spwzsx.jpg", "$2b$10$bMG3yMTNIzvWzNC8zgiwkOOjGYjB0hVbBW5ec0F00z.mtR.r/Up8m", "Jamelia", "Delarosa", 'bi', 'Female', 23, 1, 1, 29, 3, 20, "I stepped on a Corn Flake, now I'm a Cereal Killer", -33.9625, 18.4783, '2019-11-9 21:12', '8eb7fbd816cdf187605bbb3c9a9ae14e')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("pishrewind","pishrewind@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424847/Moar%20Profiles/generics/Thamid_Bates_luix4e.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Tahmid", "Bates", 'hetero', 'Female', 30, 1, 1, 30, 12, 18, "I just dropped my laptop off the boat.....It's a Dell, rolling in the deep", -33.9518, 18.3825, '2019-12-17 10:09', '4341dfaa7259082022147afd371b69c3')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("trumpetdog","trumpetdog@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424811/Moar%20Profiles/generics/Alina_Barr_dfjlrd.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Alina", "Barr", 'homo', 'Female', 15, 1, 1, 43, 4, 11, "Light travels faster then sound. This is why some people appear bright ,until you hear them talk", -34.0538, 24.923, '2020-01-02 01:12', 'f0dd736148864cbfadf0841c7f1b86ca')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("passportidentical","passportidentical@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424784/Moar%20Profiles/generics/Euan_Love_v36hsq.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Euan", "Love", 'bi', 'Male', 26, 1, 1, 17, 26, 0, "If you having girl problems I feel bad for you son.", -34.0502, 18.5036, '2020-01-15 03:40', '6fd72a631eae188cbf8b9b767a6b8a8b')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("kyloren","force@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424781/Moar%20Profiles/generics/Not_John_Wick_x16hr2.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Not John", "Wick", 'hetero', 'Male', 50, 1, 1, 26, 23, 37, "My dentist tells me that chewing bricks is very bad for your teeth.", -33.8908, 18.5100, '2020-09-17 00:01', 'eb56c37a7f2efe27652d3ea6c16182e7')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("glassmandrill","bossman@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424816/Moar%20Profiles/generics/Ritchie_Le_kdj28g.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Ritchie", "Le", 'pan', 'NB', 18, 1, 1, 41, 38, -20, "There can never be too many cherries on an ice cream sundae.", 25.1179, 25.1333, '2020-01-29 09:21', '747bda46b83d0f642ccb846d9a8c1cbe')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("anguishedfrin","anguishedfrin@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424798/Moar%20Profiles/generics/James_Fredericks_yhyvbt.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "James", "Fredericks", 'homo', 'Male', 2, 1, 1, 21, 9, -7, "The pet shop stocks everything you need to keep your anaconda happy.", -33.8209, 18.4866, '2020-01-09 13:19', 'ee81ea764a4f36df36ebbd82778cf238')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("goldiemetrics","goldiemetrics@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424849/Moar%20Profiles/generics/Patricia_Jade_eue9mb.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Patricia", "Jade", 'hetero', 'Female', 69, 1, 1, 42, 66, 3, "Everybody should read Chaucer to improve their everyday vocabulary.", -33.9384, 18.4522, '2019-12-29 11:29', 'd8578edf8458ce06fbc5bb76a58c5ca4')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode)                       VALUES
                        ("sandsendtope","sandsendtope@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424799/Moar%20Profiles/generics/Sally_Johnson_kvn2zq.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Sally", "Johnson", 'pan', 'Female', 10, 1, 1, 30, 5, 5, "As he entered the church he could hear the soft voice of someone whispering into a cell phone.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("Add432","Add@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472709/Moar%20Profiles/generics/Adelaide_Baynard_icjpmc.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Adelaide", "Baynard", 'bi', 'Female', 10, 1, 1, 23, 5, 5, "He figured a few sticks of dynamite were easier than a fishing pole to catch fish.", -33.8641, 18.6245, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("Adel","Ade45@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469108/Moar%20Profiles/generics/Adelle_Sitton_hnffzf.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Adelle", "Sitton", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "The body piercing didn't go exactly as he expected.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("AWoodhouse","Ahme@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592476640/Moar%20Profiles/generics/Ahmed_Woodhouse_ycyqim.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Ahmed", "Woodhouse", 'hetero', 'Male', 10, 1, 1, 27, 5, 5, "Weather is not trivial - it's especially important when you're standing in it.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("ARisch","AiRisch@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469251/Moar%20Profiles/generics/Ailene_Risch_zu2xjf.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Ailene", "Risch", 'homo', 'Female', 10, 1, 1, 25, 5, 5, "The small white buoys marked the location of hundreds of crab pots.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("AOlson","AOlson@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469292/Moar%20Profiles/generics/Alaine_Olson_fa6zru.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Alaine", "Olson", 'hetero', 'Female', 10, 1, 1, 17, 5, 5, "You've been eyeing me all day and waiting for your move like a lion stalking a gazelle in a savannah.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("AGleason","AGleason@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469169/Moar%20Profiles/generics/Aldo_Gleason_sint3x.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Aldo", "Gleason", 'hetero', 'Male', 10, 1, 1, 25, 5, 5, "He had a hidden stash underneath the floorboards in the back room of the house.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("AKalinowski","AKalinowski@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469124/Moar%20Profiles/generics/Aleshia_Kalinowski_dvloei.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Aleshia", "Kalinowski", 'bi', 'Female', 10, 1, 1, 18, 5, 5, "Her hair was windswept as she rode in the black convertible.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("ALauderdale","ALauderdale@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469179/Moar%20Profiles/generics/Allen_Lauderdale_xhu0yo.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Allen", "Lauderdale", 'hetero', 'male', 10, 1, 1, 35, 5, 5, "For the 216th time, he said he would quit drinking soda after this last Coke.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("AGerry","AGerry@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469164/Moar%20Profiles/generics/Alphonse_Gerry_tsdp39.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Alphonse", "Gerry", 'hetero', 'Male', 10, 1, 1, 25, 5, 5, "He wondered why at 18 he was old enough to go to war, but not old enough to buy cigarettes.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("ASyring","ASyring@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469170/Moar%20Profiles/generics/Alvera_Syring_swq7dw.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Alvera", "Syring", 'hetero', 'Female', 10, 1, 1, 24, 5, 5, "Had he known what was going to happen, he would have never stepped into the shower.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("AHackworth","AHackworth@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469199/Moar%20Profiles/generics/Amee_Hackworth_sdn4ug.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Amee", "Hackworth", 'bi', 'Female', 10, 1, 1, 35, 5, 5, "I'm confused: when people ask me what's up, and I point, they groan.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("AMoreland","AMoreland@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469194/Moar%20Profiles/generics/Amira_Moreland_o3fmf6.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Amira", "Moreland", 'hetero', 'Female', 10, 1, 1, 17, 5, 5, "He looked behind the door and didn't like what he saw.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("AMantilla","AMantilla@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469234/Moar%20Profiles/generics/Angila_Mantilla_hevgja.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Angila", "Mantilla", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There's an art to getting your way, and spitting olive pits across the table isn't it.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("ABrandstetter","ABrandstetter@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469208/Moar%20Profiles/generics/Anika_Brandstetter_fq4bvf.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Anika", "Brandstetter", 'hetero', 'Female', 10, 1, 1, 27, 5, 5, "Please wait outside of the house.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("ALafontant","ALafontant@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469244/Moar%20Profiles/generics/Anita_Lafontant_p2puyk.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Anita", "Lafontant", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "She lived on Monkey Jungle Road and that seemed to explain all of her strangeness.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("AWooldridge","AWooldridge@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469219/Moar%20Profiles/generics/Annamarie_Wooldridge_z0usll.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Annamarie", "Wooldridge", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "The beauty of the African sunset disguised the danger lurking nearby.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("AOwsley","AOwsley@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469221/Moar%20Profiles/generics/Annie_Owsley_lzmw6o.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Annie", "Owsley", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "Truth in advertising and dinosaurs with skateboards have much in common.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("ALindstrom","ALindstrom@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469244/Moar%20Profiles/generics/Annika_Lindstrom_pou3hn.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Annika", "Lindstrom", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "He would only survive if he kept the fire going and he could hear thunder in the distance.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("AOoten","AOoten@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469333/Moar%20Profiles/generics/Antione_Ooten_ubbeiy.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Antione", "Ooten", 'hetero', 'Male', 10, 1, 1, 25, 5, 5, "It doesn't sound like that will ever be on my travel list.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("ARigg","ARigg@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469246/Moar%20Profiles/generics/Antonetta_Rigg_hloiq2.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Antonetta", "Rigg", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "Yeah, I think it's a good environment for learning English.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("ACeja","ACeja@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469277/Moar%20Profiles/generics/Aracelis_Ceja_uj7z5p.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Aracelis", "Ceja", 'homo', 'Female', 10, 1, 1, 22, 5, 5, "When he encountered maize for the first time, he thought it incredibly corny.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("APurington","APurington@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469257/Moar%20Profiles/generics/Arcelia_Purington_iyj2s9.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Arcelia", "Purington", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was no telling what thoughts would come from the machine.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("ABlanc","ABlanc@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469330/Moar%20Profiles/generics/Ardella_Blanc_idfagx.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Ardella", "Blanc", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "He went back to the video to see what had been recorded and was shocked at what he saw.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("ARaker","ARaker@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469347/Moar%20Profiles/generics/Ardelle_Raker_jnz11i.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Ardelle", "Raker", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "Her daily goal was to improve on yesterday.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("ArCep67","ArCep67@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469298/Moar%20Profiles/generics/Argelia_Cepeda_bhnabv.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Argelia", "Cepeda", 'bi', 'Female', 10, 1, 1, 67, 5, 5, "He learned the important lesson that a picnic at the beach on a windy day is a bad idea.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("AShoemaker","AShoemaker@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469325/Moar%20Profiles/generics/Arla_Shoemaker_yg8vyc.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Arla", "Shoemaker", 'homo', 'Female', 10, 1, 1, 25, 5, 5, "He poured rocks in the dungeon of his mind.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("AGrauer","AGrauer@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469340/Moar%20Profiles/generics/Arnoldo_Grauer_glad6q.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Arnoldo", "Grauer", 'homo', 'Male', 10, 1, 1, 25, 5, 5, "Lucifer was surprised at the amount of life at Death Valley.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("ArLarocco","ArLarocco@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469340/Moar%20Profiles/generics/Arnulfo_Larocco_wuzwoh.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Arnulfo", "Larocco", 'hetero', 'Male', 10, 1, 1, 25, 5, 5, "There was no telling what thoughts would come from the machine.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("ArMundell","ArMundell@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469336/Moar%20Profiles/generics/Arvilla_Mundell_zh3tkk.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Arvilla", "Mundell", 'homo', 'Female', 10, 1, 1, 25, 5, 5, "The rusty nail stood erect, angled at a 45-degree angle, just waiting for the perfect barefoot to come along.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("AGroman","AGroman@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469383/Moar%20Profiles/generics/Ashleigh_Groman_pz1nmp.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Ashleigh", "Groman", 'bi', 'Female', 10, 1, 1, 23, 5, 5, "So long and thanks for the fish.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("AsuKovar","AsuKovar@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469394/Moar%20Profiles/generics/Asuncion_Kovar_melwuv.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Asuncion", "Kovar", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "He decided to live his life by the big beats manifesto.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("ABichrest","ABichrest@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469369/Moar%20Profiles/generics/Aubrey_Bichrest_pfme6x.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Aubrey", "Bichrest", 'hetero', 'Male', 10, 1, 1, 25, 5, 5, "We need to rent a room for our party.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("AOlney","AOlney@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469409/Moar%20Profiles/generics/Audie_Olney_jx1yyn.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Audie", "Olney", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "Peanuts don't grow on trees, but cashews do.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("AuBrickman","AuBrickman@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469466/Moar%20Profiles/generics/Aurelio_Brickman_cevmee.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Aurelio", "Brickman", 'bi', 'Male', 10, 1, 1, 25, 5, 5, "It caught him off guard that space smelled of seared steak.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("AyMccotter","AyMccotter@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469393/Moar%20Profiles/generics/Ayako_Mccotter_e5pkti.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Ayako", "Mccotter", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "I come from a tribe of head-hunters, so I will never need a shrink.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("BArn","BArn@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469386/Moar%20Profiles/generics/Babara_Arn_cvilek.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Babara", "Arn", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "No matter how beautiful the sunset, it saddened her knowing she was one day older.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("BabaTovey","BabaTovey@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469410/Moar%20Profiles/generics/Babara_Tovey_np3hjh.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Babara", "Tovey", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "He didn't understand why the bird wanted to ride the bicycle.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("BayMo","BayMo@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469441/Moar%20Profiles/generics/Barney_Morison_fyap5a.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Barney", "Morison", 'homo', 'Male', 10, 1, 1, 25, 5, 5, "It was a really good Monday for being a Saturday.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("BaWiechmann","BaWiechmann@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469413/Moar%20Profiles/generics/Barney_Wiechmann_ts0yvk.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Barney", "Wiechmann", 'bi', 'Male', 10, 1, 1, 25, 5, 5, "If my calculator had a history, it would be more embarrassing than my browser history.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("BeFaison","BeFaison@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469424/Moar%20Profiles/generics/Bee_Faison_fvvqrg.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Bee", "Faison", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "He turned in the research paper on Friday; otherwise, he would have not passed the class.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("BerJoynt","BerJoynt@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469448/Moar%20Profiles/generics/Bernarda_Joynt_jgdyih.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Bernarda", "Joynt", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "She did a happy dance because all of the socks from the dryer matched.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("BoJurgensen","BoJurgensen@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469607/Moar%20Profiles/generics/Bobette_Jurgensen_mmsp25.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Bobette", "Jurgensen", 'homo', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("Gargle","Gargle@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469455/Moar%20Profiles/generics/Brady_Garg_eiqlo5.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Brady", "Garg", 'homo', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("BreThi","BreThi@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469481/Moar%20Profiles/generics/Breanne_Thibodeau_x7hfnj.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Breanne", "Thibodeau", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("BriHaugen","BriHaugen@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469451/Moar%20Profiles/generics/Brice_Haugen_aonhhm.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Brice", "Haugen", 'bi', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("BridgConey","BridgConey@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469503/Moar%20Profiles/generics/Bridgett_Coney_vwzctd.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Bridgett", "Coney", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("Budubb","Budubb@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469483/Moar%20Profiles/generics/Bud_Tubb_kpxmex.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Bud", "Tubb", 'bi', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("Bulfox","Bulfox@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469491/Moar%20Profiles/generics/Bula_Palafox_afztlm.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Bula", "Palafox", 'homo', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("BurMirabito","BurMirabito@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469518/Moar%20Profiles/generics/Burt_Mirabito_eydkzx.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Burt", "Mirabito", 'hetero', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("CamiVera","CamiVera@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469548/Moar%20Profiles/generics/Camille_Vera_dvjlam.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Camille", "Vera", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("CaraFilson","CaraFilson@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469506/Moar%20Profiles/generics/Cara_Filson_q3i1ad.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Cara", "Filson", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("Carlazel","Carlazel@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469511/Moar%20Profiles/generics/Carli_Hazel_c8uvr4.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Carli", "Hazel", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("CarloSturtz","CarloSturtz@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469513/Moar%20Profiles/generics/Carlota_Sturtz_xdctve.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Carlota", "Sturtz", 'homo', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("Carmelguin","Carmelguin@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469516/Moar%20Profiles/generics/Carmel_Holguin_rt4zyi.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Carmela", "Holguin", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("Carld","Carld@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469547/Moar%20Profiles/generics/Caroyln_Bradfield_ejkosh.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Caroyln", "Bradfield", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("Caaham","Caaham@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469574/Moar%20Profiles/generics/Casandra_Baham_cvwksz.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Casandra", "Baham", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("harrywider","harrywider@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469548/Moar%20Profiles/generics/Cathern_Kneip_nxmp0f.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Cathern", "Kneip", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("saddleemmy","saddleemmy@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469601/Moar%20Profiles/generics/Catina_Woolford_mx0hft.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Catina", "Woolford", 'homo', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("computingconvent","computingconvent@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469606/Moar%20Profiles/generics/Catrina_Mariscal_msixrq.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Catrina", "Mariscal", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("foldfall","foldfall@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469574/Moar%20Profiles/generics/Cecila_Reeder_fgzsuy.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Cecila", "Reeder", 'homo', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("tyburnweighing","tyburnweighing@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469564/Moar%20Profiles/generics/Cecille_Luo_wlfcco.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Cecille", "Luo", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("rainyclanking","rainyclanking@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469590/Moar%20Profiles/generics/Celestina_Hauer_xqfhxr.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Celestina", "Hauer", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("ungentlewabbit","ungentlewabbit@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469597/Moar%20Profiles/generics/Ceola_Rothenberg_csukzq.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Ceola", "Rothenberg", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("Chalvedpalm","halvedpalm@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469597/Moar%20Profiles/generics/Chance_Beckley_y4zkxp.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Chance", "Beckley", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("pandaboxing","pandaboxing@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469687/Moar%20Profiles/generics/Chantel_Felberbaum_exg9lt.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Chantel", "Felberbaum", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("impishscorn","impishscorn@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469668/Moar%20Profiles/generics/Chantell_Wootton_bcpx8i.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Chantell", "Wootton", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("confusionoverview","confusionoverview@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469714/Moar%20Profiles/generics/Charlena_Spangler_fqiiud.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Charlena", "Spangler", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("lliweddcrabbing","lliweddcrabbing@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469632/Moar%20Profiles/generics/Chaya_Clemens_d3j4t8.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Chaya", "Clemens", 'homo', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("trachytewhimbrel","trachytewhimbrel@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469698/Moar%20Profiles/generics/Chaya_Dunning_k7vrud.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Chaya", "Dunning", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("nipprotector","nipprotector@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469621/Moar%20Profiles/generics/Cheri_Feltmann_hbjfxg.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Cheri", "Feltmann", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("trotwoodzing","trotwoodzing@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469669/Moar%20Profiles/generics/Cherish_Krahn_ugdt61.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Cherish", "Krahn", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("wiltshirefruity","wiltshirefruity@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469733/Moar%20Profiles/generics/Cherly_Nastasi_llpydf.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Cherly", "Nastasi", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("ardentlyaggressive","ardentlyaggressive@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469688/Moar%20Profiles/generics/Cheryl_Pinnix_q55jg3.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Cheryl", "Pinnix", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("rorsewolf","rorsewolf@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469682/Moar%20Profiles/generics/Chia_Clermont_ifv1bb.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Chia", "Clermont", 'bi', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("simplicitykuskokwim","simplicitykuskokwim@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469702/Moar%20Profiles/generics/Chin_Gateley_ldcgbv.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Chin", "Gateley", 'pan', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("remhybrid","remhybrid@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469744/Moar%20Profiles/generics/Christal_Parrilla_xrj05p.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Christal", "Parrilla", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("shadowypacha","shadowypacha@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469750/Moar%20Profiles/generics/Christene_Greeley_ulfjn3.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Christene", "Greeley", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("aromamate69","aromamate@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469733/Moar%20Profiles/generics/Christi_Kempker_kfkaaf.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Christi", "Kempker", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("awesomechirping","awesomechirping@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469738/Moar%20Profiles/generics/Christian_Degeorge_nvdaqm.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Christian", "Degeorge", 'hetero', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("blinkingruined","blinkingruined@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469749/Moar%20Profiles/generics/Ciara_Broadfoot_qx4mvt.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Ciara", "Broadfoot", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("preacherquagga","preacherquagga@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469761/Moar%20Profiles/generics/Ciera_Oquin_wvns27.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Ciera", "Oquin", 'homo', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("eponaarticulate","eponaarticulate@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469741/Moar%20Profiles/generics/Cindie_Fruchter_qsnbqc.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Cindie", "Fruchter", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("oakfigures","oakfigures@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469778/Moar%20Profiles/generics/Claribel_Abrego_taoasr.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Claribel", "Abrego", 'hetero', 'Female', 10, 1, 1, 23, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("mactorzillion","mactorzillion@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469794/Moar%20Profiles/generics/Claudine_Carstens_hf5pd3.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Claudine", "Carstens", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("landlordbirting","landlordbirting@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469783/Moar%20Profiles/generics/Claudine_Lucus_w00vah.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Claudine", "Lucus", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("modxgatineau","modxgatineau@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469773/Moar%20Profiles/generics/Clemencia_Saavedra_nmzrub.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Clemencia", "Saavedra", 'bi', 'Female', 10, 1, 1, 21, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("canopysneezing","canopysneezing@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469813/Moar%20Profiles/generics/Clora_Cleary_q3xyrd.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Clora", "Cleary", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("strungdoodilmore","strungdoodilmore@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469790/Moar%20Profiles/generics/Coleen_Pineau_yxnocn.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Coleen", "Pineau", 'homo', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("ciscobrownnose","ciscobrownnose@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469838/Moar%20Profiles/generics/Coleman_Klumpp_fqkfks.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Coleman", "Klumpp", 'bi', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("tomscaly","tomscaly@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469838/Moar%20Profiles/generics/Collen_Montaluo_dqtapz.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Collen", "Montaluo", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("changoveteran","changoveteran@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469799/Moar%20Profiles/generics/Conception_Pastorius_spr2by.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Conception", "Pastorius", 'hetero', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("flatclippers","flatclippers@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469830/Moar%20Profiles/generics/Conchita_Willcutt_mprrpo.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Conchita", "Willcutt", 'aro', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("gainfullywarden","gainfullywarden@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469847/Moar%20Profiles/generics/Cortney_Mancia_rfuipd.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Cortney", "Mancia", 'ace', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("stormnacho","stormnacho@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469859/Moar%20Profiles/generics/Craig_Randall_vxh1uh.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Craig", "Randall", 'hetero', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("catalystshuffling","catalystshuffling@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469839/Moar%20Profiles/generics/Daine_Zoeller_t6fv1t.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Daine", "Zoeller", 'hetero', 'NB', 10, 1, 1, 28, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("associatedlived","associatedlived@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469878/Moar%20Profiles/generics/Daisey_Colucci_qprud9.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Daisey", "Colucci", 'ace', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("clewdisgusting","clewdisgusting@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469911/Moar%20Profiles/generics/Dane_Criner_c9o7zy.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Dane", "Criner", 'aro', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("roundinggloss","roundinggloss@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469870/Moar%20Profiles/generics/Danielle_Bogan_p1mhbw.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Danielle", "Bogan", 'homo', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("godblooded","godblooded@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469870/Moar%20Profiles/generics/Dara_Ellsworth_h1muf8.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Dara", "Ellsworth", 'hetero', 'Female', 10, 1, 1, 31, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("kingemail","kingemail@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469914/Moar%20Profiles/generics/Darrell_Kellerhouse_ew4d01.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Darrell", "Kellerhouse", 'ace', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("coltribbon","coltribbon@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469870/Moar%20Profiles/generics/Darrick_Midkiff_th6dob.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Darrick", "Midkiff", 'homo', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("causestogo","causestogo@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469971/Moar%20Profiles/generics/Dayle_Chadwell_huzzsr.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Dayle", "Chadwell", 'hetero', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("hartleyplonk","hartleyplonk@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469910/Moar%20Profiles/generics/Deane_Rabon_qvlmqw.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Deane", "Rabon", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("antiherocheap","antiherocheap@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469901/Moar%20Profiles/generics/Del_Callihan_zdq3ll.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Del", "Callihan", 'homo', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("wimpchot","wimpchot@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469910/Moar%20Profiles/generics/Delisa_Stansberry_y9lzgm.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Delisa", "Stansberry", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("favorabledebit","favorabledebit@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469910/Moar%20Profiles/generics/Delma_Bentler_xnwr9z.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Delma", "Bentler", 'aro', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("unwashedbarium","unwashedbarium@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470024/Moar%20Profiles/generics/Deloise_Wingo_lnlywf.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Deloise", "Wingo", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("varnishjumbo","varnishjumbo@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469953/Moar%20Profiles/generics/Deloras_Yancey_mzrsgm.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Deloras", "Yancey", 'pan', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("daysbrush","daysbrush@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469938/Moar%20Profiles/generics/Denisha_Torgeson_bumwsv.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Denisha", "Torgeson", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("atombrislington","atombrislington@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469931/Moar%20Profiles/generics/Detra_Caughey_fwotdn.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Detra", "Caughey", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("alphabetgloater","alphabetgloater@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469957/Moar%20Profiles/generics/Diamond_Abron_b3ltcg.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Diamond", "Abron", 'bi', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("druieparity","druieparity@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469944/Moar%20Profiles/generics/Dian_Maysonet_e225er.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Dian", "Maysonet", 'hetero', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("halideabseil","halideabseil@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469993/Moar%20Profiles/generics/Dick_Grubb_yovbmo.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Dick", "Grubb", 'hetero', 'NB', 10, 1, 1, 35, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("climbingpoppy","climbingpoppy@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470027/Moar%20Profiles/generics/Dirk_Kirby_f8pt6k.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Dirk", "Kirby", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("whimbrelmosedale","whimbrelmosedale@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470034/Moar%20Profiles/generics/Donnetta_Tomaselli_ak4nzu.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Donnetta", "Tomaselli", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("teawasp","teawasp@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470050/Moar%20Profiles/generics/Doreatha_Barros_fhvv0y.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Doreatha", "Barros", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("murdercadmium","murdercadmium@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469997/Moar%20Profiles/generics/Dorsey_Coachman_xsvtsd.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Dorsey", "Coachman", 'pan', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("lolliesterrified","lolliesterrified@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469998/Moar%20Profiles/generics/Dovie_Cann_yelwcj.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Dovie", "Cann", 'bi', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("reentrymale","reentrymale@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470010/Moar%20Profiles/generics/Doyle_Hepburn_our82c.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Doyle", "Hepburn", 'pan', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("presencerefinery","presencerefinery@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470039/Moar%20Profiles/generics/Elbert_Sansom_ddmiwg.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Elbert", "Sansom", 'homo', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("batmantony","batmantony@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470061/Moar%20Profiles/generics/Eleanor_Rhode_lxzuvg.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Eleanor", "Rhode", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("baffinbummy","baffinbummy@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470039/Moar%20Profiles/generics/Elfreda_Pepper_aqg2hn.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Elfreda", "Pepper", 'hetero', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("unnaturaljuicy","unnaturaljuicy@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470128/Moar%20Profiles/generics/Eliana_Stidham_e2joxn.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Eliana", "Stidham", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("scandiumjoys","scandiumjoys@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470037/Moar%20Profiles/generics/Elke_Bergstrom_fbgzw3.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Elke", "Bergstrom", 'pan', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("lovablestrut","lovablestrut@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470047/Moar%20Profiles/generics/Elliot_Battaglia_fvlu4d.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Elliot", "Battaglia", 'pan', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("bedburnanimal","bedburnanimal@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470048/Moar%20Profiles/generics/Elton_Grammer_uid3gd.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Elton", "Grammer", 'homo', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("playerspuree","playerspuree@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470065/Moar%20Profiles/generics/Elva_Gehringer_wprwf6.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Elva", "Gehringer", 'hetero', 'NB', 10, 1, 1, 25, 5, 5, "I am Elf", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("fencelibyan","fencelibyan@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470052/Moar%20Profiles/generics/Emanuel_Boysen_byhqxb.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Emanuel", "Boysen", 'hetero', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("venusbradley","venusbradley@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470095/Moar%20Profiles/generics/Emily_Winberg_jarifx.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Emily", "Winberg", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("jimmywheelchair","jimmywheelchair@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470130/Moar%20Profiles/generics/Emogene_Pottinger_erzzmw.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Emogene", "Pottinger", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("robincredible","robincredible@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470162/Moar%20Profiles/generics/Emory_Rask_r1z4sd.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Emory", "Rask", 'bi', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("clawkinetic","clawkinetic@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470079/Moar%20Profiles/generics/Ernie_Running_mqvzrd.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Ernie", "Running", 'hetero', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("stuporstomach","stuporstomach@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470135/Moar%20Profiles/generics/Estrella_Lesperance_sptg8e.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Estrella", "Lesperance", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("bankstoning","bankstoning@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470116/Moar%20Profiles/generics/Eugene_Haller_nyp2n6.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Eugene", "Haller", 'hetero', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("maebile","maebile@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470259/Moar%20Profiles/generics/Evelina_Zweifel_bna8tc.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Evelina", "Zweifel", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("snowfieldmissouri","snowfieldmissouri@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470173/Moar%20Profiles/generics/Evon_Ralston_q1tfqk.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Evon", "Ralston", 'pan', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("cruelreceptive","cruelreceptive@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470196/Moar%20Profiles/generics/Fabian_Gilfillan_iofyam.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Fabian", "Gilfillan", 'pan', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("pursebovine","pursebovine@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470184/Moar%20Profiles/generics/Faith_Shadduck_korjcm.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Faith", "Shadduck", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("haughingprinciple","haughingprinciple@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470175/Moar%20Profiles/generics/Federico_Hawthorne_zpa7ga.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Federico", "Hawthorne", 'hetero', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("chewingstrategy","chewingstrategy@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470183/Moar%20Profiles/generics/Filomena_Acosta_bpzuel.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Filomena", "Acosta", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("hertztough","hertztough@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470218/Moar%20Profiles/generics/Flavia_Seabury_tbfvzt.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Flavia", "Seabury", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("unlacedcrane","unlacedcrane@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470197/Moar%20Profiles/generics/Florene_Sandridge_wfbcxh.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Florene", "Sandridge", 'pan', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("eavesdroppedant","eavesdroppedant@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470245/Moar%20Profiles/generics/Gema_Casler_bis27j.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Gema", "Casler", 'bi', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("wagonerlenmeyer","wagonerlenmeyer@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470227/Moar%20Profiles/generics/Genie_Boston_ugavin.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Genie", "Boston", 'bi', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("luineagprogramme","luineagprogramme@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470269/Moar%20Profiles/generics/Georgeann_Bargo_raznkl.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Georgeann", "Bargo", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("physicalbuzzing","physicalbuzzing@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470232/Moar%20Profiles/generics/Georgianne_Gaspar_wjzt9m.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Georgianne", "Gaspar", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("sameetsy","sameetsy@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470238/Moar%20Profiles/generics/Gerry_Valdes_ueevjr.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Gerry", "Valdes", 'hetero', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("bovelylinguini","bovelylinguini@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470238/Moar%20Profiles/generics/Gertude_Meacham_cn6pxp.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Gertude", "Meacham", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "I MAKE THE GOOOD SHITE", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("cavitybobbin","cavitybobbin@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470291/Moar%20Profiles/generics/Gia_Vanbuskirk_q3eup1.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Gia", "Vanbuskirk", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("startlingjunk","startlingjunk@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470264/Moar%20Profiles/generics/Gilberte_Salvas_uomi3z.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Gilberte", "Salvas", 'pan', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("decayabnormal","decayabnormal@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470253/Moar%20Profiles/generics/Gilma_Frese_g3wrzd.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Gilma", "Frese", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("smubefartlek","smubefartlek@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470352/Moar%20Profiles/generics/Gina_Yellowhair_nyebrx.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Gina", "Yellowhair", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("drainpipewhimple","drainpipewhimple@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470318/Moar%20Profiles/generics/Ginny_Krieg_sbnmlm.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Ginny", "Krieg", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("bongueoverload","bongueoverload@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470308/Moar%20Profiles/generics/Gisela_Alfred_dwu9hq.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Gisela", "Alfred", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("paraffinlock","paraffinlock@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470298/Moar%20Profiles/generics/Glinda_Raggs_h4pkc0.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Glinda", "Raggs", 'hetero', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("valuesgild","valuesgild@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470346/Moar%20Profiles/generics/Glynis_Spaulding_u1bozi.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Glynis", "Spaulding", 'pan', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("hingerazor","hingerazor@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470345/Moar%20Profiles/generics/Grant_Fludd_ogedyk.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Grant", "Fludd", 'bi', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("kodarefreshing","kodarefreshing@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470347/Moar%20Profiles/generics/Granville_Caple_e7rcns.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Granville", "Caple", 'pan', 'NB', 10, 1, 1, 45, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("yetwellington","yetwellington@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470344/Moar%20Profiles/generics/Hai_Bias_ftyxzc.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Hai", "Bias", 'hetero', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("sparkterm","sparkterm@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470345/Moar%20Profiles/generics/Hassan_Revel_boutdw.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Hassan", "Revel", 'hetero', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("gunnerpouch","gunnerpouch@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470367/Moar%20Profiles/generics/Herma_Wetherbee_q0wpjw.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Herma", "Wetherbee", 'hetero', 'Female', 10, 1, 1, 45, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("roamerstreets","roamerstreets@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470365/Moar%20Profiles/generics/Hildegarde_Louie_hat5jz.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Hildegarde", "Louie", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("hollocombenorthern","hollocombenorthern@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470425/Moar%20Profiles/generics/Holley_Malave_uwlgvd.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Holley", "Malave", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("snobbyenrick","snobbyenrick@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470432/Moar%20Profiles/generics/Homer_Rezentes_lijk72.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Homer", "Rezentes", 'pan', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("fadelying","fadelying@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470370/Moar%20Profiles/generics/Hosea_Millican_i2oohd.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Hosea", "Millican", 'pan', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("mortgagesoftware","mortgagesoftware@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470443/Moar%20Profiles/generics/Houston_Shockey_ymibum.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Houston", "Shockey", 'hetero', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("cheetahgleeful","cheetahgleeful@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470381/Moar%20Profiles/generics/Hung_Fuentez_jp52m8.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Hung", "Fuentez", 'pan', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("dishclothentry","dishclothentry@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470385/Moar%20Profiles/generics/Hwa_Duff_n59w9e.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Hwa", "Duff", 'hetero', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("maintenancepulworthy","maintenancepulworthy@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470439/Moar%20Profiles/generics/Hyo_Herter_pzbwqz.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Hyo", "Herter", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("maintenancepulworthy","maintenancepulworthy@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470399/Moar%20Profiles/generics/Ian_Lavallie_b2rxzj.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Ian", "Lavallie", 'bi', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("handbooklichfield","handbooklichfield@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470451/Moar%20Profiles/generics/Ignacia_Ehrlich_dp2k1q.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Ignacia", "Ehrlich", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("voguecheck","voguecheck@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470481/Moar%20Profiles/generics/Iliana_Leslie_sej9wd.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Iliana", "Leslie", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("kickinggranitic","kickinggranitic@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470456/Moar%20Profiles/generics/Inga_Shope_fyfha5.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Inga", "Shope", 'pan', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("gainsboroughpharmacy","gainsboroughpharmacy@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470558/Moar%20Profiles/generics/Ingrid_Dunton_vqwrmn.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Ingrid", "Dunton", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("gafferreactor","gafferreactor@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470476/Moar%20Profiles/generics/Isa_Vella_sgicbr.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Isa", "Vella", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("lionessbenign","lionessbenign@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470463/Moar%20Profiles/generics/Isaura_Bicknell_irqeti.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Isaura", "Bicknell", 'bi', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("messengerromeo","messengerromeo@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470501/Moar%20Profiles/generics/Isela_Milstead_pkr8y6.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Isela", "Milstead", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("dronesgrandfather","dronesgrandfather@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470484/Moar%20Profiles/generics/Isidra_Valone_aq5p0d.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Isidra", "Valone", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("wispywish","wispywish@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470490/Moar%20Profiles/generics/Isis_Mcconnel_jf5qgg.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Isis", "Mcconnel", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("dotingmanicure","dotingmanicure@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470511/Moar%20Profiles/generics/Isobel_Roy_qiqtub.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Isobel", "Roy", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("cottonshopefinham","cottonshopefinham@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470489/Moar%20Profiles/generics/Ivan_Redner_gho9ug.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Ivan", "Redner", 'pan', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("angelfishclarify","angelfishclarify@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470529/Moar%20Profiles/generics/Jacob_Boeke_hzyhrx.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Jacob", "Boeke", 'hetero', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("admonishfetal","admonishfetal@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470500/Moar%20Profiles/generics/Jaimie_Linzey_dxyakg.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Jaimie", "Linzey", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("jennyskillful","jennyskillful@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470523/Moar%20Profiles/generics/Jaleesa_Malott_t5cunp.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Jaleesa", "Malott", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("exuberantcapillary","exuberantcapillary@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470543/Moar%20Profiles/generics/Janeen_Mangan_tg4xaw.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Janeen", "Mangan", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("lincolnshireridlees","lincolnshireridlees@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470583/Moar%20Profiles/generics/Janel_Earle_prerks.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Janel", "Earle", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("earnestcolonist","earnestcolonist@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470564/Moar%20Profiles/generics/Janeth_Ulloa_y0onwj.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Janeth", "Ulloa", 'bi', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("alfalfaunsavory","alfalfaunsavory@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470595/Moar%20Profiles/generics/Jannette_Hauger_c8r4kw.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Jannette", "Hauger", 'homo', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("infusedgang","infusedgang@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470553/Moar%20Profiles/generics/Jarod_Kottke_il43gf.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Jarod", "Kottke", 'homo', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("polishmud","polishmud@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470561/Moar%20Profiles/generics/Jean_Hoar_yxiq8k.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Jean", "Hoar", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("bungurging","bungurging@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470596/Moar%20Profiles/generics/Jeana_Dickson_reqp9j.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Jeana", "Dickson", 'hetero', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("blisterquarrel","blisterquarrel@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470601/Moar%20Profiles/generics/Jefferey_Conlee_refkmf.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Jefferey", "Conlee", 'homo', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("supermancarless","supermancarless@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470584/Moar%20Profiles/generics/Jefferson_Donald_yw96z8.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Jefferson", "Donald", 'pan', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("bustlingdigby","bustlingdigby@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470667/Moar%20Profiles/generics/Jere_Vassallo_jjyvwo.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Jere", "Vassallo", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("groundagehodge","groundagehodge@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470623/Moar%20Profiles/generics/Jerome_Fairless_exzqhc.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Jerome", "Fairless", 'hetero', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("purelyears","purelyears@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470666/Moar%20Profiles/generics/Jessenia_Dusek_jusydp.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Jessenia", "Dusek", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("luncheontraveler","luncheontraveler@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470639/Moar%20Profiles/generics/Jessi_Whitlow_aym05x.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Jessi", "Whitlow", 'homo', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("mosquetiting","mosquetiting@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470672/Moar%20Profiles/generics/Jesusa_Houchins_g67xht.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Jesusa", "Houchins", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("dowryarea","dowryarea@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470655/Moar%20Profiles/generics/Joeann_Bochenek_amqgtx.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Joeann", "Bochenek", 'homo', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("sleightligament","sleightligament@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470651/Moar%20Profiles/generics/Johna_Dunnington_rslxgv.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Johna", "Dunnington", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("helperleading","helperleading@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470732/Moar%20Profiles/generics/Jolanda_Calixte_urbnnl.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Jolanda", "Calixte", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("ejectdictate","ejectdictate@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470661/Moar%20Profiles/generics/Joline_Barkett_q2cntn.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Joline", "Barkett", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("washingattempt","washingattempt@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470713/Moar%20Profiles/generics/Jonah_Brazil_dsygnf.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Jonah", "Brazil", 'hetero', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("demandinghaggard","demandinghaggard@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470738/Moar%20Profiles/generics/Josh_Shibley_odppf4.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Josh", "Shibley", 'pan', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("overcookcatching","overcookcatching@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470679/Moar%20Profiles/generics/Jovan_Sutphin_tlv44t.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Jovan", "Sutphin", 'hetero', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("creasefracture","creasefracture@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470678/Moar%20Profiles/generics/Joy_Jorgensen_ffna7w.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Joy", "Jorgensen", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("yearflock","yearflock@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470702/Moar%20Profiles/generics/Judson_Swanberg_qttuk8.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Judson", "Swanberg", 'hetero', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("berenicesinertia","berenicesinertia@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470721/Moar%20Profiles/generics/June_Wisneski_rxvoq5.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "June", "Wisneski", 'pan', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("likelyacorn","likelyacorn@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470717/Moar%20Profiles/generics/Justa_Eugene_ubhjkr.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Justa", "Eugene", 'hetero', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("chromerough","chromerough@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470710/Moar%20Profiles/generics/Jutta_Cuthbert_ahwape.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Jutta", "Cuthbert", 'pan', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("gligweights","gligweights@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470734/Moar%20Profiles/generics/Kaila_Weiser_nmdxjp.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Kaila", "Weiser", 'homo', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("surgerypyromania","surgerypyromania@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470770/Moar%20Profiles/generics/Karla_Morley_nmdfpc.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Karla", "Morley", 'homo', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("windingevacuate","windingevacuate@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470771/Moar%20Profiles/generics/Karleen_Frazee_rlsmnt.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Karleen", "Frazee", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("harmonyoccur","harmonyoccur@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470812/Moar%20Profiles/generics/Kasandra_Janicki_bfgbsg.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Kasandra", "Janicki", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("sawyerwinkle","sawyerwinkle@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470769/Moar%20Profiles/generics/Katelin_Dallman_aldw3p.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Katelin", "Dallman", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("gloriousnide","gloriousnide@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470760/Moar%20Profiles/generics/Katelin_Mosser_nfrvnw.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Katelin", "Mosser", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("unwrittensurmise","unwrittensurmise@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470765/Moar%20Profiles/generics/Katharyn_Devaul_d5o8af.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Katharyn", "Devaul", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("defensewalk","defensewalk@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470792/Moar%20Profiles/generics/Kay_Rohman_lsgcdk.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Kay", "Rohman", 'pan', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("deansnattle","deansnattle@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470850/Moar%20Profiles/generics/Kaylee_Smock_snsdku.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Kaylee", "Smock", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("amountprenatal","amountprenatal@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470833/Moar%20Profiles/generics/Keila_Bowie_eeojgn.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Keila", "Bowie", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("jeansnasal","jeansnasal@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470835/Moar%20Profiles/generics/Keila_Reddell_shoeaq.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Keila", "Reddell", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("enlargedtelrad","enlargedtelrad@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470780/Moar%20Profiles/generics/Keitha_Freeburg_lw3pca.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Keitha", "Freeburg", 'bi', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("thankstiny","thankstiny@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470826/Moar%20Profiles/generics/Kelly_Groom_pfkeih.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Kelly", "Groom", 'homo', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("squadshencil","squadshencil@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470852/Moar%20Profiles/generics/Kemberly_Knerr_c4mc9n.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Kemberly", "Knerr", 'pan', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("vinneyblueberry","vinneyblueberry@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470827/Moar%20Profiles/generics/Kenya_Wnuk_q1sia4.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Kenya", "Wnuk", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("judiciarythaging","judiciarythaging@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470870/Moar%20Profiles/generics/Kiesha_Moorman_molvwg.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Kiesha", "Moorman", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "TICK TOCK", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("suffixtrenton","suffixtrenton@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470912/Moar%20Profiles/generics/Kimber_Forehand_iqrd7z.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Kimber", "Forehand", 'hetero', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("mortalitybackwash","mortalitybackwash@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470856/Moar%20Profiles/generics/Kisha_Bates_f0ed9k.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Kisha", "Bates", 'homo', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("alarmedglove","alarmedglove@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470844/Moar%20Profiles/generics/Kitty_Stfleur_aihlqb.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Kitty", "Stfleur", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("highjumpbarking","highjumpbarking@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470873/Moar%20Profiles/generics/Kourtney_Tapp_c32ekj.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Kourtney", "Tapp", 'homo', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("hunterbench","hunterbench@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470915/Moar%20Profiles/generics/Kristle_Faulkenberry_n2iuob.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Kristle", "Faulkenberry", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("snowballjittery","snowballjittery@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470913/Moar%20Profiles/generics/Kyle_Priolo_yh2k8n.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Kyle", "Priolo", 'hetero', 'Male', 10, 1, 1, 25, 5, 5, "RAID AREA 51", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("lowtendroplet","lowtendroplet@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470941/Moar%20Profiles/generics/Lael_Delara_o9x7cs.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Lael", "Delara", 'hetero', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("dejectedcrib","dejectedcrib@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470919/Moar%20Profiles/generics/Lajuana_Palmer_j86rkk.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Lajuana", "Palmer", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("confidencecrescent","confidencecrescent@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470903/Moar%20Profiles/generics/Lakendra_Saffer_b8hrbm.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Lakendra", "Saffer", 'homo', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("cursebesmirch","cursebesmirch@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470932/Moar%20Profiles/generics/Lan_Montagna_d1e2wy.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Lan", "Montagna", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("drenchratline","drenchratline@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471001/Moar%20Profiles/generics/Lane_Silvestre_tmzhrr.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Lane", "Silvestre", 'bi', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("icypumpion","icypumpion@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470980/Moar%20Profiles/generics/Latashia_Dacanay_yjku90.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Latashia", "Dacanay", 'homo', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("singleoverview","singleoverview@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470931/Moar%20Profiles/generics/Latoria_Settles_law0t1.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Latoria", "Settles", 'pan', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("shedcowboys","shedcowboys@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470941/Moar%20Profiles/generics/Latoya_Robson_wjtxvb.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Latoya", "Robson", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("gregariouslaffinch","gregariouslaffinch@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470957/Moar%20Profiles/generics/Laurene_Karp_pzq8sg.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Laurene", "Karp", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("sustainweevle","sustainweevle@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470942/Moar%20Profiles/generics/Laverne_Bianchi_uppj01.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Laverne", "Bianchi", 'pan', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("quirkfit","quirkfit@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470977/Moar%20Profiles/generics/Lawrence_Buckles_dl6zcm.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Lawrence", "Buckles", 'hetero', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("cheeseswag","cheeseswag@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470970/Moar%20Profiles/generics/Layla_Harding_g1nct3.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Layla", "Harding", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("bournehoat","bournehoat@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470970/Moar%20Profiles/generics/Leigh_Ratchford_h74dka.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Leigh", "Ratchford", 'hetero', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("nightinfluenced","nightinfluenced@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470978/Moar%20Profiles/generics/Lena_Desiderio_uix4qs.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Lena", "Desiderio", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("shortwavepenalty","shortwavepenalty@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470980/Moar%20Profiles/generics/Leona_Hornback_gpfsbq.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Leona", "Hornback", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("petercloe","petercloe@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471069/Moar%20Profiles/generics/Leonardo_Philip_b3godc.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Leonardo", "Philip", 'hetero', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("permitrobe","permitrobe@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471011/Moar%20Profiles/generics/Leonel_Munn_wfyxvk.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Leonel", "Munn", 'homo', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("shipmustang","shipmustang@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471007/Moar%20Profiles/generics/Lessie_Whisenhunt_tfj7oz.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Lessie", "Whisenhunt", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("patchesworthy","patchesworthy@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471011/Moar%20Profiles/generics/Lester_Marling_tnzvf4.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Lester", "Marling", 'hetero', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("closeniatross","closeniatross@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470987/Moar%20Profiles/generics/Lindsey_Tolentino_uwofay.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Lindsey", "Tolentino", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("hawdonpuppy","hawdonpuppy@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471102/Moar%20Profiles/generics/Linette_Howey_dw6uni.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Linette", "Howey", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("florsesleat","florsesleat@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471037/Moar%20Profiles/generics/Linnie_Sperling_pdxtti.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Linnie", "Sperling", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("sorebottle","sorebottle@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471038/Moar%20Profiles/generics/Lizbeth_Confer_svzqz4.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Lizbeth", "Confer", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("kuskokwimdrippy","kuskokwimdrippy@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471117/Moar%20Profiles/generics/Lona_Richeson_lj6zlo.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Lona", "Richeson", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("huskavocado","huskavocado@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471159/Moar%20Profiles/generics/Loren_Sidler_l8n3eo.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Loren", "Sidler", 'pan', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("bradyinner","bradyinner@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471076/Moar%20Profiles/generics/Loretta_Angell_aivz5q.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Loretta", "Angell", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("surfacebobble","surfacebobble@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471057/Moar%20Profiles/generics/Loria_Duer_e2mvxm.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Loria", "Duer", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("surfingzoilist","surfingzoilist@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471092/Moar%20Profiles/generics/Lovetta_Caya_a6uqba.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Lovetta", "Caya", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("unhealthyplanca","unhealthyplanca@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471075/Moar%20Profiles/generics/Lucius_Mehta_yaj6dr.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Lucius", "Mehta", 'hetero', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("teenytinybackache","teenytinybackache@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471188/Moar%20Profiles/generics/Lura_Hyde_pkvbeq.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Lura", "Hyde", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("watercountry","watercountry@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471191/Moar%20Profiles/generics/Lurlene_Marko_dphehn.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Lurlene", "Marko", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("coodcrumble","coodcrumble@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471110/Moar%20Profiles/generics/Luther_Cumbie_riab89.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Luther", "Cumbie", 'hetero', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("phrasinggabby","phrasinggabby@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471119/Moar%20Profiles/generics/Luvenia_Magnuson_j5591b.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Luvenia", "Magnuson", 'homo', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("declinerestroom","declinerestroom@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471161/Moar%20Profiles/generics/Lyndon_Benavides_jyrilp.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Lyndon", "Benavides", 'aro', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("praseodymiumprenton","praseodymiumprenton@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471216/Moar%20Profiles/generics/Madaline_Ayotte_mw4g8i.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Madaline", "Ayotte", 'ace', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("leopardpocket","leopardpocket@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471136/Moar%20Profiles/generics/Magali_Genna_lwt0jf.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Magali", "Genna", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("oilmens","oilmens@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471146/Moar%20Profiles/generics/Magan_Durbin_xzcoxp.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Magan", "Durbin", 'ace', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("confideappraiser","confideappraiser@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471194/Moar%20Profiles/generics/Magen_Seago_xanduv.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Magen", "Seago", 'ace', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("nativeubiquity","nativeubiquity@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471181/Moar%20Profiles/generics/Maida_Longley_mjmhto.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Maida", "Longley", 'aro', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("stubbleyine","stubbleyine@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471194/Moar%20Profiles/generics/Malisa_Ledoux_ugisjq.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Malisa", "Ledoux", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("loopyhooligan","loopyhooligan@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471222/Moar%20Profiles/generics/Malorie_Rinehart_sfspgk.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Malorie", "Rinehart", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("bubbleunsolved","bubbleunsolved@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471260/Moar%20Profiles/generics/Malvina_Reber_rhv1mt.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Malvina", "Reber", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("untwistbabies","untwistbabies@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471219/Moar%20Profiles/generics/Mana_Man_dbaynz.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Mana", "Man", 'ace', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("chivehoneythunder","chivehoneythunder@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471214/Moar%20Profiles/generics/Marco_Hewes_ib5d4e.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Marco", "Hewes", 'homo', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("sedanhertfordshire","sedanhertfordshire@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471220/Moar%20Profiles/generics/Marco_Raso_dxgdjx.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Marco", "Raso", 'bi', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("bullockspamphlet","bullockspamphlet@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471269/Moar%20Profiles/generics/Marg_Dedmon_iqthx0.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Marg", "Dedmon", 'homo', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("jessoambush","jessoambush@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471252/Moar%20Profiles/generics/Margarita_Haas_pg2umw.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Margarita", "Haas", 'ace', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("stoeride","stoeride@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471346/Moar%20Profiles/generics/Margrett_Frenkel_fw4dm1.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Margrett", "Frenkel", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("amberharvey","amberharvey@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471276/Moar%20Profiles/generics/Mariana_Sessoms_jn5eyf.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Mariana", "Sessoms", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("regallyvictor","regallyvictor@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471276/Moar%20Profiles/generics/Mariana_Sessoms_jn5eyf.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Maribeth", "Bellman", 'aro', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("sulknoken","sulknoken@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471243/Moar%20Profiles/generics/Mariel_Valentin_npcxy3.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Mariel", "Valentin", 'aro', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("cobaltlifted","cobaltlifted@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471266/Moar%20Profiles/generics/Marissa_Taillon_vidla3.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Marissa", "Taillon", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("marthapanoramic","marthapanoramic@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471304/Moar%20Profiles/generics/Marlena_Lone_twdsre.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Marlena", "Lone", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("kneeshoopoe","kneeshoopoe@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471322/Moar%20Profiles/generics/Marni_Dupont_fg5z9l.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Marni", "Dupont", 'bi', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("unbakedpleasure","unbakedpleasure@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471354/Moar%20Profiles/generics/Marsha_Boehmer_kxg8cj.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Marsha", "Boomer", 'hetero', 'Female', 10, 1, 1, 45, 5, 5, "OK ME", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("leadenhive","leadenhive@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471356/Moar%20Profiles/generics/Martin_Blewett_sjjado.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Martin", "Blewett", 'pan', 'Male', 10, 1, 1, 25, 5, 5, "I blewett", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("breezelaggan","breezelaggan@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471313/Moar%20Profiles/generics/Marybeth_Dy_teohfn.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Marybeth", "Dy", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("erasekiln","erasekiln@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471315/Moar%20Profiles/generics/Mayme_Jaques_glu2ob.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Mayme", "Jaques", 'ace', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("slammingsolids","slammingsolids@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471371/Moar%20Profiles/generics/Meaghan_Melo_q8jzba.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Meaghan", "Melo", 'aro', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("fuelsquid","fuelsquid@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471434/Moar%20Profiles/generics/Melania_Duda_ftr4zb.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Melania", "Duda", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("hardenerkalio","hardenerkalio@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471342/Moar%20Profiles/generics/Melissa_Levario_qw0r28.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Melissa", "Levario", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("flopsnowfield","flopsnowfield@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471396/Moar%20Profiles/generics/Melodie_Vangundy_ckuw23.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Melodie", "Vangundy", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("paddleeleazar","paddleeleazar@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471543/Moar%20Profiles/generics/Mercy_Liverman_h9c5pf.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Mercy", "Liverman", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("roguebeer","roguebeer@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471377/Moar%20Profiles/generics/Merilyn_Yarnell_vlufxp.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Merilyn", "Yarnell", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("estrogenfootball","estrogenfootball@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471384/Moar%20Profiles/generics/Michiko_Wunderlich_bvkbyl.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Michiko", "Wunderlich", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("crumbedlanguage","crumbedlanguage@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471377/Moar%20Profiles/generics/Micki_Rone_k0l2op.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Micki", "Rone", 'pan', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("flusteredunroll","flusteredunroll@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471392/Moar%20Profiles/generics/Mika_Sanford_pvqrvk.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Mika", "Sanford", 'ace', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("colitisbaps","colitisbaps@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471395/Moar%20Profiles/generics/Milton_Eddleman_fx2kkm.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Milton", "Eddleman", 'hetero', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("annoyingfan","annoyingfan@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471448/Moar%20Profiles/generics/Mireya_Spells_spsttl.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Mireya", "Spells", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("chaseconfucius","chaseconfucius@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471421/Moar%20Profiles/generics/Mirtha_Sackrider_px9qyt.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Mirtha", "Sackrider", 'hetero', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("fizzlejoyride","fizzlejoyride@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471592/Moar%20Profiles/generics/Misty_Loyola_qpjted.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Misty", "Loyola", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("laryngitisblackboard","laryngitisblackboard@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471440/Moar%20Profiles/generics/Morgan_Stoval_pqlgae.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Morgan", "Stoval", 'bi', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("sheyennepig","sheyennepig@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471525/Moar%20Profiles/generics/Nakita_Mathes_tzqick.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Nakita", "Mathes", 'ace', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("limeiberico","limeiberico@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471465/Moar%20Profiles/generics/Nakita_Ofarrell_vvbc2x.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Nakita", "Ofarrell", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("canonspongy","canonspongy@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471465/Moar%20Profiles/generics/Nakita_Ofarrell_vvbc2x.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Nannie", "Kaup", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("Napoleon Kroon","Herma@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471476/Moar%20Profiles/generics/Napoleon_Kroon_y7y6fb.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Napoleon", "Kroon", 'hetero', 'NB', 10, 1, 1, 58, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("generousracehorse","generousracehorse@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471548/Moar%20Profiles/generics/Nathan_Sleeth_qrdgei.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Nathan", "Sleeth", 'bi', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("peanutproducer","peanutproducer@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471468/Moar%20Profiles/generics/Nathanial_Sinn_gf4yzt.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Nathanial", "Sinn", 'homo', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("podprompting","podprompting@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471538/Moar%20Profiles/generics/Newton_Zigler_yh35vy.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Newton", "Zigler", 'bi', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("triplecolourless","triplecolourless@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471522/Moar%20Profiles/generics/Nichol_Zacharias_ulexb4.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Nichol", "Zacharias", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("shintamazon","shintamazon@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471537/Moar%20Profiles/generics/Nickie_Kravitz_laqspu.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Nickie", "Kravitz", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("phenomenonhypnotist","phenomenonhypnotist@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471563/Moar%20Profiles/generics/Nicky_Slama_sbglpk.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Nicky", "Slama", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("medalrockwell","medalrockwell@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471586/Moar%20Profiles/generics/Nicol_Coker_jsnjrn.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Nicol", "Coker", 'ace', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("berthafinding","berthafinding@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471599/Moar%20Profiles/generics/Niesha_Mele_xhogvv.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Niesha", "Mele", 'aro', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("rexjeets","rexjeets@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471635/Moar%20Profiles/generics/Nina_Falls_vual3d.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Nina", "Falls", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("precessiondocument","precessiondocument@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471610/Moar%20Profiles/generics/Nina_Ogles_uahzei.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Nina", "Ogles", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "My name preceeds me", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("rummagesuch","rummagesuch@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471592/Moar%20Profiles/generics/Noelle_Mcnish_cebsqg.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Noelle", "Mcnish", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("lambharem","lambharem@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471635/Moar%20Profiles/generics/Obdulia_Labat_qx7f3n.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Obdulia", "Labat", 'ace', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("chromeintended","chromeintended@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471599/Moar%20Profiles/generics/Odell_Trussell_q2yfkv.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Odell", "Trussell", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("avenuenimbleness","avenuenimbleness@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471663/Moar%20Profiles/generics/Ofelia_Varga_zulkh6.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Ofelia", "Varga", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("fladdockcoherence","fladdockcoherence@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471640/Moar%20Profiles/generics/Oliver_Platz_gaectq.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Oliver", "Platz", 'hetero', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("tabbycaress","tabbycaress@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471646/Moar%20Profiles/generics/Oswaldo_River_xtdxto.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Oswaldo", "River", 'hetero', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("custardgrus","custardgrus@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471640/Moar%20Profiles/generics/Pamula_Riser_xpcrxw.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Pamula", "Riser", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("saxophonecadillac","saxophonecadillac@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471697/Moar%20Profiles/generics/Pandora_Weekley_cvn0ac.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Pandora", "Weekley", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("areaclastic","areaclastic@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471651/Moar%20Profiles/generics/Paulene_Cardoso_a8icuw.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Paulene", "Cardoso", 'aro', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("undockedtoll","undockedtoll@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471681/Moar%20Profiles/generics/Peggie_Slone_xbepa3.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Peggie", "Slone", 'ace', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("onwardglamour","onwardglamour@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471692/Moar%20Profiles/generics/Pei_Hoffert_ytkqy7.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Pei", "Hoffert", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("livelyprotector","livelyprotector@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471748/Moar%20Profiles/generics/Peter_Whang_b5puuy.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Peter", "Wang", 'ace', 'Male', 10, 1, 1, 25, 5, 5, "Don't touch me", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("rewardtrifle","rewardtrifle@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471724/Moar%20Profiles/generics/Piedad_Laiche_ewfv2k.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Piedad", "Laiche", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("oiksubstance","oiksubstance@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471694/Moar%20Profiles/generics/Porter_Farris_xyh8sy.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Porter", "Farris", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("parentcola","parentcola@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471727/Moar%20Profiles/generics/Pura_Mcglothlen_x0rkth.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Pura", "Mcglothlen", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("Rachel Patino","Herma@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471726/Moar%20Profiles/generics/Rachel_Patino_o6q0no.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Rachel", "Patino", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("salamiclicker","salamiclicker@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471765/Moar%20Profiles/generics/Raelene_Mcguirk_w6axb8.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Raelene", "Mcguirk", 'aro', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("optionbreast","optionbreast@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471765/Moar%20Profiles/generics/Raelene_Mcguirk_w6axb8.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Rafael", "Delosh", 'bi', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("alcoholschematic","alcoholschematic@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471748/Moar%20Profiles/generics/Raleigh_Perino_kqgzy0.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Raleigh", "Perino", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("mckinleyfled","mckinleyfled@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471787/Moar%20Profiles/generics/Renetta_Whitaker_vgyuu5.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Renetta", "Whitaker", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("ecologisthalyard","ecologisthalyard@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471743/Moar%20Profiles/generics/Rhiannon_Moench_jbplmo.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Rhiannon", "Moench", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("residenthotters","residenthotters@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471754/Moar%20Profiles/generics/Rodney_Cate_m4loa6.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Rodney", "Cate", 'bi', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("medkitsprung","medkitsprung@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471761/Moar%20Profiles/generics/Rodolfo_Scurry_c1txdl.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Rodolfo", "Scurry", 'homo', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("housecloset","housecloset@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471766/Moar%20Profiles/generics/Rodrigo_Hau_alemxl.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Rodrigo", "Hau", 'hetero', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("refluxcustard","refluxcustard@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471764/Moar%20Profiles/generics/Rolando_Christenberry_lywl2u.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Rolando", "Christenberry", 'hetero', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("boarstephra","boarstephra@nomail.co.za", "hhttps://res.cloudinary.com/ddrrwygt1/image/upload/v1592471759/Moar%20Profiles/generics/Ron_Eyler_bjetbl.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Ron", "Eyler", 'bi', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("trustabletorch","trustabletorch@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471780/Moar%20Profiles/generics/Ronald_Rader_at0frr.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Ronald", "Rader", 'homo', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("mobbssetting","mobbssetting@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471830/Moar%20Profiles/generics/Rosalinda_Barras_forxdn.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Rosalinda", "Barras", 'ace', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("weamycongress","Herma@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471786/Moar%20Profiles/generics/Rosalinda_Hein_q3g1is.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Rosalinda", "Hein", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("gelatinsandpit","gelatinsandpit@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471845/Moar%20Profiles/generics/Roseline_Bak_mjv9tt.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Roseline", "Bak", 'aro', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("measuringunkind","measuringunkind@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471821/Moar%20Profiles/generics/Rosendo_Broxton_lcfuyl.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Rosendo", "Broxton", 'bi', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("lokodowdle","lokodowdle@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471837/Moar%20Profiles/generics/Roxy_Gonsales_brg7lt.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Roxy", "Gonsales", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("blacklunacy","blacklunacy@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471818/Moar%20Profiles/generics/Rubie_Garlock_pfon5q.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Rubie", "Garlock", 'aro', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("tynesnouted","tynesnouted@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471802/Moar%20Profiles/generics/Rudolph_Wilburn_mrjgtn.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Rudolph", "Wilburn", 'aro', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("dishnubbles","dishnubbles@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471808/Moar%20Profiles/generics/Russ_Westberg_rj1adc.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Russ", "Westberg", 'aro', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("ejectshegs","ejectshegs@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471942/Moar%20Profiles/generics/Rusty_Hosch_pphbbo.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Rusty", "Hosch", 'hetero', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("johnsterling","johnsterling@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471905/Moar%20Profiles/generics/Ruthie_Vargo_m3zmnw.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Ruthie", "Vargo", 'ace', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("siennaskin","siennaskin@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471834/Moar%20Profiles/generics/Sabra_Reddick_gemwms.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Sabra", "Reddick", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("oblivionoverfeed","oblivionoverfeed@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471848/Moar%20Profiles/generics/Samara_Paschke_puvh65.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Samara", "Paschke", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("anatexisblind","anatexisblind@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471852/Moar%20Profiles/generics/Samual_Semien_sj6cll.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Samual", "Semien", 'bi', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("underdogcleo","underdogcleo@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471845/Moar%20Profiles/generics/Sandee_Lipson_jqft4s.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Sandee", "Lipson", 'ace', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("vocallyskale","vocallyskale@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471884/Moar%20Profiles/generics/Sanford_Signorelli_wx5uyd.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Sanford", "Signorelli", 'pan', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("deadlineabseil","deadlineabseil@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471884/Moar%20Profiles/generics/Santiago_Lesko_k2wllo.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Santiago", "Lesko", 'bi', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("excretiondude","excretiondude@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471894/Moar%20Profiles/generics/Santiago_Mccusker_yhl54e.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Santiago", "Mccusker", 'pan', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("magnetizeshimy","magnetizeshimy@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471920/Moar%20Profiles/generics/Sasha_Fregoso_dpmaq1.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Sasha", "Fregoso", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("belatedbet","belatedbet@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471922/Moar%20Profiles/generics/Saundra_Berube_adonoi.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Saundra", "Berube", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("peacefulnicki","peacefulnicki@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471905/Moar%20Profiles/generics/Saundra_Womer_eakp9u.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Saundra", "Womer", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("Schillsandpiper","chillsandpiper@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471952/Moar%20Profiles/generics/Scot_Ledgerwood_pbiltd.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Scot", "Ledgerwood", 'bi', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("THE SHAG","5percentpower@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471994/Moar%20Profiles/generics/Shaggy_Rogers_uokslh.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Shaggy", "Rogers", 'pan', 'NB', 10, 1, 1, 25, 5, 5, "Like, bold of you to assume I wouldn't waste my powers here, man. *ZOINKS*", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("bawdymyeloid","bawdymyeloid@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471921/Moar%20Profiles/generics/Shakita_Ouimet_mwcpjm.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Shakita", "Ouimet", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("cocoascallops","cocoascallops@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471949/Moar%20Profiles/generics/Shaniqua_Isley_jmrtft.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Shaniqua", "Isley", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("mortuarybuck","mortuarybuck@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471943/Moar%20Profiles/generics/Shanta_Brassard_ys3nrz.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Shanta", "Brassard", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("twinsiodize","twinsiodize@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471962/Moar%20Profiles/generics/Shantelle_Stockwell_bb16wj.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Shantelle", "Stockwell", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("miaowsub","miaowsub@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472078/Moar%20Profiles/generics/Shanti_Gloss_lpxhsg.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Shanti", "Gloss", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("unmanagedgeiger","unmanagedgeiger@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471962/Moar%20Profiles/generics/Sharan_Tetzlaff_afou6w.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Sharan", "Tetzlaff", 'hetero', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("tinshydrogen","tinshydrogen@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471980/Moar%20Profiles/generics/Sharlene_Carl_pb6k2o.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Sharlene", "Carl", 'ace', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("puzzlingunion","puzzlingunion@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472012/Moar%20Profiles/generics/Shaunta_Petteway_efgpf5.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Shaunta", "Petteway", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("thirtyolivine","thirtyolivine@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471980/Moar%20Profiles/generics/Shawnda_Roudebush_drzksz.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Shawnda", "Roudebush", 'ace', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("suaveashamed","suaveashamed@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471975/Moar%20Profiles/generics/Shelli_Humbertson_gliddr.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Shelli", "Humbertson", 'aro', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("thinlysteak","thinlysteak@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471992/Moar%20Profiles/generics/Shena_Stetler_dkivxb.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Shena", "Stetler", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("cranehamlet","cranehamlet@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472089/Moar%20Profiles/generics/Sherise_Schur_harwku.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Sherise", "Schur", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("instagramstair","instagramstair@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472028/Moar%20Profiles/generics/Sheron_Wiest_kwjggv.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Sheron", "Wiest", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("rehabpaisley","rehabpaisley@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472055/Moar%20Profiles/generics/Sherrell_Dworkin_kysduu.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Sherrell", "Dworkin", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("jackchicago","jackchicago@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472089/Moar%20Profiles/generics/Sherri_Avery_cdooex.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Sherri", "Avery", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("focusapple","focusapple@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472035/Moar%20Profiles/generics/Sherrie_Lutz_xvgip1.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Sherrie", "Lutz", 'aro', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("cupskirt","cupskirt@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472076/Moar%20Profiles/generics/Shira_Arata_bjcchc.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Shira", "Arata", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("dizzinesstelevision","dizzinesstelevision@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472048/Moar%20Profiles/generics/Shirleen_Payton_zilvfv.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Shirleen", "Payton", 'ace', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("extrassabine","extrassabine@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472125/Moar%20Profiles/generics/Shizue_Jahns_lywpf0.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Shizue", "Jahns", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("curlydropbox","curlydropbox@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472170/Moar%20Profiles/generics/Sigrid_Schacherer_sewjbx.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Sigrid", "Schacherer", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("sturdychewie","sturdychewie@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472098/Moar%20Profiles/generics/Sina_Weide_h9k6u9.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Sina", "Weide", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("boggedbotanical","boggedbotanical@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472083/Moar%20Profiles/generics/Skye_Tatum_govxj5.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Skye", "Tatum", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("gardenbuckinghamshire","gardenbuckinghamshire@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472125/Moar%20Profiles/generics/Song_Sabado_l96oao.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Song", "Sabado", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("latticespacket","latticespacket@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472107/Moar%20Profiles/generics/Sonny_Replogle_kebdka.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Sonny", "Replogle", 'hetero', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("cozinessmalthus","cozinessmalthus@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472146/Moar%20Profiles/generics/Stephani_Lazzaro_hxsd8q.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Stephani", "Lazzaro", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("octobermutal","octobermutal@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472114/Moar%20Profiles/generics/Suzann_Sundquist_nbz55h.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Suzann", "Sundquist", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("blousesisterhood","blousesisterhood@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472131/Moar%20Profiles/generics/Tabetha_Navarro_k5o83r.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Tabetha", "Navarro", 'ace', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("blagictumbleweed","blagictumbleweed@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472145/Moar%20Profiles/generics/Tabetha_Reiter_fea3cg.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Tabetha", "Reiter", 'aro', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("quirkyipad","quirkyipad@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472272/Moar%20Profiles/generics/Tameka_Moses_lyzisp.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Tameka", "Moses", 'aro', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("uranusunfitted","uranusunfitted@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472173/Moar%20Profiles/generics/Tamekia_Sands_lhouig.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Tamekia", "Sands", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("slieldsfrosted","slieldsfrosted@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472150/Moar%20Profiles/generics/Tamra_Cockerham_kbqafj.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Tamra", "Cockerham", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("equuleuspromise","equuleuspromise@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472206/Moar%20Profiles/generics/Tarra_Mallet_sqeluk.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Tarra", "Mallet", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("elevatorthese","elevatorthese@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472226/Moar%20Profiles/generics/Teena_Baucom_rh8t0u.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Teena", "Baucom", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("drivegeek","drivegeek@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472222/Moar%20Profiles/generics/Tegan_Habel_lv3ak9.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Tegan", "Habel", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("oniondinky","oniondinky@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472273/Moar%20Profiles/generics/Teisha_Maxie_rjsjov.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Teisha", "Maxie", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("quarteringpeppering","quarteringpeppering@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472232/Moar%20Profiles/generics/Temeka_Hyndman_kh6ywd.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Temeka", "Hyndman", 'ace', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("kookyinherent","kookyinherent@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472256/Moar%20Profiles/generics/Temika_Salomon_ep5njv.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Temika", "Salomon", 'ace', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("dubbedwax","dubbedwax@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472261/Moar%20Profiles/generics/Tennie_Gargano_unutac.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Tennie", "Gargano", 'homo', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("mowersnowsuit","mowersnowsuit@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472297/Moar%20Profiles/generics/Teresa_Yen_utbhwz.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Teresa", "Yen", 'homo', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("abidjaninver","abidjaninver@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472476/Moar%20Profiles/generics/Terrie_Dreier_jvsiy4.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Terrie", "Dreier", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("choakumchildmars","choakumchildmars@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472283/Moar%20Profiles/generics/Theron_Brimmer_brpgzx.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Theron", "Brimmer", 'bi', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("crookesrepent","crookesrepent@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472385/Moar%20Profiles/generics/Thomasena_Rios_qgwrer.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Thomasena", "Rios", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("nopesbeast","nopesbeast@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472305/Moar%20Profiles/generics/Thomasina_Hollaway_v8fvge.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Thomasina", "Hollaway", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("elmoarmoire","elmoarmoire@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472316/Moar%20Profiles/generics/Thomasine_Marc_mwd0pa.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Thomasine", "Marc", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("frashphilips","frashphilips@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472336/Moar%20Profiles/generics/Tierra_Weitzel_ki3ekc.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Tierra", "Weitzel", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("recognizeamuck","recognizeamuck@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472427/Moar%20Profiles/generics/Tiffany_Mccuen_cpog6q.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Tiffany", "Mccuen", 'hetero', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("lyricismelliptical","lyricismelliptical@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472366/Moar%20Profiles/generics/Tish_Vena_i6ofxp.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Tish", "Vena", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("flopham","flopham@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472377/Moar%20Profiles/generics/Tomasa_Brim_fskiuh.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Tomasa", "Brim", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("tuesdayswallower","tuesdayswallower@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472377/Moar%20Profiles/generics/Tomasa_Brim_fskiuh.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Tomasa", "Milbourn", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("monsoonwidgeon","monsoonwidgeon@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472362/Moar%20Profiles/generics/Tomiko_Tulloch_hkpvp9.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Tomiko", "Tulloch", 'pan', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("romapeakshole","romapeakshole@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472399/Moar%20Profiles/generics/Tonia_Beverage_plmc6m.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Tonia", "Beverage", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("cakestaplake","cakestaplake@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472374/Moar%20Profiles/generics/Tosha_Bagnell_ij2q7t.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Tosha", "Bagnell", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("Trent Canela","Herma@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472418/Moar%20Profiles/generics/Trent_Canela_l8410a.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Trent", "Canela", 'pan', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("Unicorn Hunters","some3@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472493/Moar%20Profiles/generics/Unicorn_Hunters_o8dbtk.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Unicorn", "Hunters", 'Pan', 'Female', 10, 1, 1, 23, 5, 5, "That token couple (M27 and F23) looking for a third party", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("queerberkelium","queerberkelium@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472398/Moar%20Profiles/generics/Valda_Linares_ddkg9e.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Valda", "Linares", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "The One True Queen", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("humorlesscuban","humorlesscuban@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472417/Moar%20Profiles/generics/Valerio_Luthy_xjwu2y.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Valeria", "Luthy", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("pridetaste","pridetaste@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472493/Moar%20Profiles/generics/Vallie_Macdonald_uy03yn.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Vallie", "Macdonald", 'homo', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("greenpobster","greenpobster@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472454/Moar%20Profiles/generics/Valorie_Troyer_evwhhi.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Valorie", "Troyer", 'ace', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("extendedtopsawyer","extendedtopsawyer@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472454/Moar%20Profiles/generics/Valrie_Canizales_cfn5cm.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Valrie", "Canizales", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("hollowpointers","hollowpointers@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472479/Moar%20Profiles/generics/Vanna_Soder_zzzz1g.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Vanna", "Soder", 'aro', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("windgloaming","windgloaming@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472471/Moar%20Profiles/generics/Velva_Kalman_ygtmvt.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Velva", "Kalman", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("productiveexpress","productiveexpress@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472492/Moar%20Profiles/generics/Verdell_Rothwell_pkysba.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Verdell", "Rothwell", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("leisureenunciate","leisureenunciate@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472574/Moar%20Profiles/generics/Verdie_Benning_pqwglb.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Verdie", "Benning", 'hetero', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("flatteredatlai","flatteredatlai@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472542/Moar%20Profiles/generics/Vi_Morvant_qvj7gt.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Vi", "Morvant", 'homo', 'NB', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("berateolympics","berateolympics@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472510/Moar%20Profiles/generics/Vickey_Sommerville_ehcolb.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Vickey", "Sommerville", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("rastseabiscuit","rastseabiscuit@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472508/Moar%20Profiles/generics/Virgina_Isaacs_oa1tay.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Virgina", "Isaacs", 'bi', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("goldsmithgold","goldsmithgold@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472628/Moar%20Profiles/generics/Vinnie_Houchins_qhw9c8.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Vinnie", "Houchins", 'ace', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("psifeather","psifeather@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472527/Moar%20Profiles/generics/Von_Carmona_ua10cs.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Von", "Carmona", 'bi', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("enjoyablecreets","enjoyablecreets@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472523/Moar%20Profiles/generics/Voncile_Willard_hhnc51.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Voncile", "Willard", 'homo', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("stadiumambulance","stadiumambulance@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472530/Moar%20Profiles/generics/Vonnie_Tito_a4bc9e.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Vonnie", "Tito", 'pan', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("mountpluck","mountpluck@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472581/Moar%20Profiles/generics/Wei_Hemingway_csjcci.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Wei", "Hemingway", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "I know da Wei, is me, I am da queen", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("clamorouszookeeper","clamorouszookeeper@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472542/Moar%20Profiles/generics/Weno_Fujiwara_t7q7xk.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Weno", "Fujiwara", 'bi', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("unhappybuffalo","unhappybuffalo@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472594/Moar%20Profiles/generics/Wilber_Alsobrook_rhrowh.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Wilber", "Alsobrook", 'hetero', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("unsocialserve","unsocialserve@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472576/Moar%20Profiles/generics/Wilford_Whitenack_twenzd.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Wilford", "Whitenack", 'bi', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("anglingjumbo","anglingjumbo@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472660/Moar%20Profiles/generics/Willa_Hathaway_kyuwwv.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Willa", "Hathaway", 'ace', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("wrathjumber","wrathjumber@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472603/Moar%20Profiles/generics/Wilson_Lance_l1u14e.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Wilson", "Lance", 'aro', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("skydinner","skydinner@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472664/Moar%20Profiles/generics/Wilton_Brandstetter_acfzyx.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Wilton", "Brandstetter", 'ace', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("signalunscrewing","signalunscrewing@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472611/Moar%20Profiles/generics/Winter_Smithson_hc4jhr.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Winter", "Smithson", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("indiscreetsuds","indiscreetsuds@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472671/Moar%20Profiles/generics/Xuan_Eubank_fnhrwt.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Xuan", "Eubank", 'bi', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("candysleep","candysleep@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472642/Moar%20Profiles/generics/Yu_Defoor_dhdmpx.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Yu", "Defoor", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("candysleep","candysleep@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472675/Moar%20Profiles/generics/Yuonne_Semmes_gb1eqk.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Yuonne", "Semmes", 'pan', 'Female', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);
                        DB.query(`INSERT INTO users
                        (username, userEmail, userImage, userPassword, userFirstName, userLastName, userOrientation, userGender, Likes, userVerified, accountComplete, userAge, userDislikes, popularity, userBiography, userLocationlat, userLocationlng, lastOnline, userCode) VALUES
                        ("riotplentiful","riotplentiful@nomail.co.za", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472642/Moar%20Profiles/generics/Zachary_Britt_ek8spa.jpg", "$2b$10$m1rtnpvWg.WSXjj3.Z./1uVvcV6rMyRzvtDiOaTrAuBBjvb5Y3XFu", "Zachary", "Britt", 'aro', 'Male', 10, 1, 1, 25, 5, 5, "There was coal in his stocking and he was thrilled.", -33.8951, 18.6294, '2020-01-27 17:34', 'b8bba2baae4c2a08fdff4e223458577d')`);

                        DB.query(`INSERT INTO images VALUES
                        ("ectobiologist","https://res.cloudinary.com/ddrrwygt1/image/upload/v1591010882/john_qjtze9.jpg",  0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("tentacletherapist", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591010889/rose_pdfy7r.jpg", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("turntechgodhead", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591010879/Dave_ymnv58.jpg", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("gardengnostic", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591010883/Jade_om8mzw.png", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("gutsygumshoe", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591010886/Jane_vgybi1.png", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("tipsygnostalgic", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591010884/roxy_zanwix.png", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("timaeustestified", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591010886/Dirk_ydyxgj.png", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("golgothasterror", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591010882/Jake_q0kgge.jpg", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("uranianumbra", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591010878/Calliope_kgxbpj.png", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("undyingumbrage", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591010883/Calliborn_lo0qrd.jpg", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("apocalypsearisen", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591353562/Moar%20Profiles/aradia_v2tlo5.png", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("adiostoreador", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591010235/Tavros_cdoocb.png", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("twinarmageddons", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591353567/Moar%20Profiles/sollux_sq1uf3.png", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("carcinogeneticist", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591010250/Dave_and_Karkat_watching_movie_v4ijiy.png", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("arseniccatnip", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591011549/nepeta_rjea8g.png", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("grimauxillatrix", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591353567/Moar%20Profiles/kanaya_qhvtlt.png", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("gallowscallibrator", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591353567/Moar%20Profiles/terezi_jw2agf.png", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("arachnidsgrip", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591010238/Vris_wegnih.jpg", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("centaurstesticle", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591010234/Equius_gnekgy.jpg", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("terminallycapricious", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591010234/Gamzee_sprite_pacified_subfhd.png", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("caligulasaquarium", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591010233/Eridian_hkexsa.jpg", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("cuttlefishculler", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1591010239/feferi_dyfomd.png", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("YourFace","https://res.cloudinary.com/ddrrwygt1/image/upload/v1592917291/Moar%20Profiles/generics/Rosena_Calzada_yovgbq.jpg", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("IsYourFace","https://res.cloudinary.com/ddrrwygt1/image/upload/v1592917262/Moar%20Profiles/generics/Rudolph_Gouge_xrapcc.jpg", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("OkayILied","https://res.cloudinary.com/ddrrwygt1/image/upload/v1592917316/Moar%20Profiles/generics/Clementina_Karter_jfxc8c.jpg", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("NotYourFace","https://res.cloudinary.com/ddrrwygt1/image/upload/v1592917269/Moar%20Profiles/generics/Booker_Siniard_obia44.jpg", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("throatbillies", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424863/Moar%20Profiles/generics/Bob_Musk_tsg3m1.jpg", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("wallowarollup", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424906/Moar%20Profiles/generics/David_Rivera_gndn7i.jpg", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("headingshannon", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424853/Moar%20Profiles/generics/Adrian_Welsh_whxsem.jpg", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("pamphletbuckle", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424918/Moar%20Profiles/generics/Affan_Yates_g9fkzr.jpg", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("termiteshaxwell", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424864/Moar%20Profiles/generics/Anne_Norris_lvaas2.jpg", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("lomondknaped", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424882/Moar%20Profiles/generics/Carolina_Sainz_v1esfy.jpg", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("controllerbanknotes", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424917/Moar%20Profiles/generics/Natali_Dormer_oxoimb.jpg", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("lampreymanor", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593425410/Moar%20Profiles/generics/Samantha_Russell_tumb6o.jpg", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("objectivechunks", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424842/Moar%20Profiles/generics/Abigail_Smith_uo9run.jpg", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("diffusersligh", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424874/Moar%20Profiles/generics/John_Wolf_dmjf8t.jpg", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("jumbourology", "http://res.cloudinary.com/matchawtc/image/upload/v1579359425/userImages/l3ryh11wsflhjiqlutdg.jpg", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("tubskimpy", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424825/Moar%20Profiles/generics/Mark_Franks_giapsu.jpg", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("mockerspectacles","https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424846/Moar%20Profiles/generics/Peter_Carson_la7uap.jpg", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("repeatlondon", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424802/Moar%20Profiles/generics/Fred_Miller_sbmnwl.jpg", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("flutweezers", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424834/Moar%20Profiles/generics/Jamelia_Delarosa_spwzsx.jpg", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("pishrewind", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424847/Moar%20Profiles/generics/Thamid_Bates_luix4e.jpg", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("trumpetdog", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424811/Moar%20Profiles/generics/Alina_Barr_dfjlrd.jpg", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("passportidentical", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424784/Moar%20Profiles/generics/Euan_Love_v36hsq.jpg", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("kyloren", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424781/Moar%20Profiles/generics/Not_John_Wick_x16hr2.jpg", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("glassmandrill", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424816/Moar%20Profiles/generics/Ritchie_Le_kdj28g.jpg", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("anguishedfrin", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424798/Moar%20Profiles/generics/James_Fredericks_yhyvbt.jpg", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("goldiemetrics", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424849/Moar%20Profiles/generics/Patricia_Jade_eue9mb.jpg", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("sandsendtope", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1593424799/Moar%20Profiles/generics/Sally_Johnson_kvn2zq.jpg", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("Add432", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472709/Moar%20Profiles/generics/Adelaide_Baynard_icjpmc.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("Adel", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469108/Moar%20Profiles/generics/Adelle_Sitton_hnffzf.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("AWoodhouse", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592476640/Moar%20Profiles/generics/Ahmed_Woodhouse_ycyqim.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("ARisch", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469251/Moar%20Profiles/generics/Ailene_Risch_zu2xjf.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("AOlson", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469292/Moar%20Profiles/generics/Alaine_Olson_fa6zru.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("AGleason", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469169/Moar%20Profiles/generics/Aldo_Gleason_sint3x.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("AKalinowski", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469124/Moar%20Profiles/generics/Aleshia_Kalinowski_dvloei.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("ALauderdale", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469179/Moar%20Profiles/generics/Allen_Lauderdale_xhu0yo.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("AGerry", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469164/Moar%20Profiles/generics/Alphonse_Gerry_tsdp39.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("ASyring", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469170/Moar%20Profiles/generics/Alvera_Syring_swqw.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("AHackworth", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469199/Moar%20Profiles/generics/Amee_Hackworth_sdn4ug.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("AMoreland", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469194/Moar%20Profiles/generics/Amira_Moreland_o3fmf6.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("AMantilla", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469234/Moar%20Profiles/generics/Angila_Mantilla_hevgja.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("ABrandstetter", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469208/Moar%20Profiles/generics/Anika_Brandstetter_fq4bvf.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("ALafontant", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469244/Moar%20Profiles/generics/Anita_Lafontant_p2puyk.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("AWooldridge", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469219/Moar%20Profiles/generics/Annamarie_Wooldridge_z0usll.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("AOwsley", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469221/Moar%20Profiles/generics/Annie_Owsley_lzmw6o.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("ALindstrom", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469244/Moar%20Profiles/generics/Annika_Lindstrom_pou3hn.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("AOoten", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469333/Moar%20Profiles/generics/Antione_Ooten_ubbeiy.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("ARigg", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469246/Moar%20Profiles/generics/Antonetta_Rigg_hloiq2.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("ACeja", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469277/Moar%20Profiles/generics/Aracelis_Ceja_uj7z5p.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("APurington", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469257/Moar%20Profiles/generics/Arcelia_Purington_iyj2s9.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("ABlanc", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469330/Moar%20Profiles/generics/Ardella_Blanc_idfagx.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("ARaker", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469347/Moar%20Profiles/generics/Ardelle_Raker_jnz11i.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("ArCep67", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469298/Moar%20Profiles/generics/Argelia_Cepeda_bhnabv.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("AShoemaker", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469325/Moar%20Profiles/generics/Arla_Shoemaker_yg8vyc.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("AGrauer", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469340/Moar%20Profiles/generics/Arnoldo_Grauer_glad6q.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("ArLarocco", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469340/Moar%20Profiles/generics/Arnulfo_Larocco_wuzwoh.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("ArMundell", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469336/Moar%20Profiles/generics/Arvilla_Mundell_zh3tkk.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("AGroman", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469383/Moar%20Profiles/generics/Ashleigh_Groman_pz1nmp.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("AsuKovar", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469394/Moar%20Profiles/generics/Asuncion_Kovar_melwuv.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("ABichrest", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469369/Moar%20Profiles/generics/Aubrey_Bichrest_pfme6x.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("AOlney", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469409/Moar%20Profiles/generics/Audie_Olney_jx1yyn.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("AuBrickman", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469466/Moar%20Profiles/generics/Aurelio_Brickman_cevmee.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("AyMccotter", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469393/Moar%20Profiles/generics/Ayako_Mccotter_e5pkti.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("BArn", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469386/Moar%20Profiles/generics/Babara_Arn_cvilek.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("BabaTovey", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469410/Moar%20Profiles/generics/Babara_Tovey_np3hjh.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("BayMo", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469441/Moar%20Profiles/generics/Barney_Morison_fyap5a.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("BaWiechmann", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469413/Moar%20Profiles/generics/Barney_Wiechmann_ts0yvk.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("BeFaison", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469424/Moar%20Profiles/generics/Bee_Faison_fvvqrg.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("BerJoynt", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469448/Moar%20Profiles/generics/Bernarda_Joynt_jgdyih.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("BoJurgensen", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469607/Moar%20Profiles/generics/Bobette_Jurgensen_mmsp25.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("Gargle", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469455/Moar%20Profiles/generics/Brady_Garg_eiqlo5.jpg", 0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("BreThi", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469481/Moar%20Profiles/generics/Breanne_Thibodeau_x7hfnj.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("BriHaugen", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469451/Moar%20Profiles/generics/Brice_Haugen_aonhhm.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("BridgConey", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469503/Moar%20Profiles/generics/Bridgett_Coney_vwzctd.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("Budubb", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469483/Moar%20Profiles/generics/Bud_Tubb_kpxmex.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("Bulfox", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469491/Moar%20Profiles/generics/Bula_Palafox_afztlm.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("BurMirabito", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469518/Moar%20Profiles/generics/Burt_Mirabito_eydkzx.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("CamiVera", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469548/Moar%20Profiles/generics/Camille_Vera_dvjlam.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("CaraFilson", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469506/Moar%20Profiles/generics/Cara_Filson_q3i1ad.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("Carlazel", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469511/Moar%20Profiles/generics/Carli_Hazel_c8uvr4.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("CarloSturtz", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469513/Moar%20Profiles/generics/Carlota_Sturtz_xdctve.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("Carmelguin", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469516/Moar%20Profiles/generics/Carmel_Holguin_rt4zyi.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("Carld", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469547/Moar%20Profiles/generics/Caroyln_Bradfield_ejkosh.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("Caaham", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469574/Moar%20Profiles/generics/Casandra_Baham_cvwksz.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("harrywider", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469548/Moar%20Profiles/generics/Cathern_Kneip_nxmp0f.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("saddleemmy", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469601/Moar%20Profiles/generics/Catina_Woolford_mx0hft.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("computingconvent", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469606/Moar%20Profiles/generics/Catrina_Mariscal_msixrq.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("foldfall", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469574/Moar%20Profiles/generics/Cecila_Reeder_fgzsuy.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("tyburnweighing", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469564/Moar%20Profiles/generics/Cecille_Luo_wlfcco.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("rainyclanking", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469590/Moar%20Profiles/generics/Celestina_Hauer_xqfhxr.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("ungentlewabbit", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469597/Moar%20Profiles/generics/Ceola_Rothenberg_csukzq.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("Chalvedpalm", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469597/Moar%20Profiles/generics/Chance_Beckley_y4zkxp.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("pandaboxing", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469687/Moar%20Profiles/generics/Chantel_Felberbaum_exg9lt.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("impishscorn", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469668/Moar%20Profiles/generics/Chantell_Wootton_bcpx8i.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("confusionoverview", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469714/Moar%20Profiles/generics/Charlena_Spangler_fqiiud.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("lliweddcrabbing", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469632/Moar%20Profiles/generics/Chaya_Clemens_d3j4t8.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("trachytewhimbrel", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469698/Moar%20Profiles/generics/Chaya_Dunning_k7vrud.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("nipprotector", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469621/Moar%20Profiles/generics/Cheri_Feltmann_hbjfxg.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("trotwoodzing", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469669/Moar%20Profiles/generics/Cherish_Krahn_ugdt61.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("wiltshirefruity", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469733/Moar%20Profiles/generics/Cherly_Nastasi_llpydf.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("ardentlyaggressive", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469688/Moar%20Profiles/generics/Cheryl_Pinnix_q55jg3.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("rorsewolf", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469682/Moar%20Profiles/generics/Chia_Clermont_ifv1bb.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("simplicitykuskokwim", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469702/Moar%20Profiles/generics/Chin_Gateley_ldcgbv.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("remhybrid", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469744/Moar%20Profiles/generics/Christal_Parrilla_xrj05p.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("shadowypacha", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469750/Moar%20Profiles/generics/Christene_Greeley_ulfjn3.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("aromamate69", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469733/Moar%20Profiles/generics/Christi_Kempker_kfkaaf.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("awesomechirping", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469738/Moar%20Profiles/generics/Christian_Degeorge_nvdaqm.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("blinkingruined", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469749/Moar%20Profiles/generics/Ciara_Broadfoot_qx4mvt.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("preacherquagga", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469761/Moar%20Profiles/generics/Ciera_Oquin_wvns27.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("eponaarticulate", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469741/Moar%20Profiles/generics/Cindie_Fruchter_qsnbqc.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("oakfigures", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469778/Moar%20Profiles/generics/Claribel_Abrego_taoasr.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("mactorzillion", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469794/Moar%20Profiles/generics/Claudine_Carstens_hf5pd3.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("landlordbirting", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469783/Moar%20Profiles/generics/Claudine_Lucus_w00vah.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("modxgatineau", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469773/Moar%20Profiles/generics/Clemencia_Saavedra_nmzrub.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("canopysneezing", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469813/Moar%20Profiles/generics/Clora_Cleary_q3xyrd.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("strungdoodilmore", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469790/Moar%20Profiles/generics/Coleen_Pineau_yxnocn.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("ciscobrownnose", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469838/Moar%20Profiles/generics/Coleman_Klumpp_fqkfks.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("tomscaly", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469838/Moar%20Profiles/generics/Collen_Montaluo_dqtapz.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("changoveteran", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469799/Moar%20Profiles/generics/Conception_Pastorius_spr2by.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("flatclippers", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469830/Moar%20Profiles/generics/Conchita_Willcutt_mprrpo.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("gainfullywarden", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469847/Moar%20Profiles/generics/Cortney_Mancia_rfuipd.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("stormnacho", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469859/Moar%20Profiles/generics/Craig_Randall_vxh1uh.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("catalystshuffling", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469839/Moar%20Profiles/generics/Daine_Zoeller_t6fv1t.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("associatedlived", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469878/Moar%20Profiles/generics/Daisey_Colucci_qprud9.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("clewdisgusting", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469911/Moar%20Profiles/generics/Dane_Criner_c9o7zy.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("roundinggloss", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469870/Moar%20Profiles/generics/Danielle_Bogan_p1mhbw.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("godblooded", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469870/Moar%20Profiles/generics/Dara_Ellsworth_h1muf8.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("kingemail", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469914/Moar%20Profiles/generics/Darrell_Kellerhouse_ew4d01.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("coltribbon", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469870/Moar%20Profiles/generics/Darrick_Midkiff_th6dob.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("causestogo", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469971/Moar%20Profiles/generics/Dayle_Chadwell_huzzsr.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("hartleyplonk", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469910/Moar%20Profiles/generics/Deane_Rabon_qvlmqw.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("antiherocheap", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469901/Moar%20Profiles/generics/Del_Callihan_zdq3ll.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("wimpchot", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469910/Moar%20Profiles/generics/Delisa_Stansberry_y9lzgm.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("favorabledebit", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469910/Moar%20Profiles/generics/Delma_Bentler_xnwr9z.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("unwashedbarium", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470024/Moar%20Profiles/generics/Deloise_Wingo_lnlywf.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("varnishjumbo", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469953/Moar%20Profiles/generics/Deloras_Yancey_mzrsgm.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("daysbrush", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469938/Moar%20Profiles/generics/Denisha_Torgeson_bumwsv.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("atombrislington", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469931/Moar%20Profiles/generics/Detra_Caughey_fwotdn.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("alphabetgloater", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469957/Moar%20Profiles/generics/Diamond_Abron_b3ltcg.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("druieparity", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469944/Moar%20Profiles/generics/Dian_Maysonet_e225er.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("halideabseil", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469993/Moar%20Profiles/generics/Dick_Grubb_yovbmo.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("climbingpoppy", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470027/Moar%20Profiles/generics/Dirk_Kirby_f8pt6k.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("whimbrelmosedale", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470034/Moar%20Profiles/generics/Donnetta_Tomaselli_ak4nzu.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("teawasp", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470050/Moar%20Profiles/generics/Doreatha_Barros_fhvv0y.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("murdercadmium", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469997/Moar%20Profiles/generics/Dorsey_Coachman_xsvtsd.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("lolliesterrified", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592469998/Moar%20Profiles/generics/Dovie_Cann_yelwcj.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("reentrymale", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470010/Moar%20Profiles/generics/Doyle_Hepburn_our82c.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("presencerefinery", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470039/Moar%20Profiles/generics/Elbert_Sansom_ddmiwg.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("batmantony", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470061/Moar%20Profiles/generics/Eleanor_Rhode_lxzuvg.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("baffinbummy", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470039/Moar%20Profiles/generics/Elfreda_Pepper_aqg2hn.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("unnaturaljuicy", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470128/Moar%20Profiles/generics/Eliana_Stidham_e2joxn.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("scandiumjoys", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470037/Moar%20Profiles/generics/Elke_Bergstrom_fbgzw3.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("lovablestrut", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470047/Moar%20Profiles/generics/Elliot_Battaglia_fvlu4d.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("bedburnanimal", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470048/Moar%20Profiles/generics/Elton_Grammer_uid3gd.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("playerspuree", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470065/Moar%20Profiles/generics/Elva_Gehringer_wprwf6.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("fencelibyan", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470052/Moar%20Profiles/generics/Emanuel_Boysen_byhqxb.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("venusbradley", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470095/Moar%20Profiles/generics/Emily_Winberg_jarifx.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("jimmywheelchair", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470130/Moar%20Profiles/generics/Emogene_Pottinger_erzzmw.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("robincredible", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470162/Moar%20Profiles/generics/Emory_Rask_r1z4sd.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("clawkinetic", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470079/Moar%20Profiles/generics/Ernie_Running_mqvzrd.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("stuporstomach", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470135/Moar%20Profiles/generics/Estrella_Lesperance_sptg8e.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("bankstoning", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470116/Moar%20Profiles/generics/Eugene_Haller_nyp2n6.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("maebile", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470259/Moar%20Profiles/generics/Evelina_Zweifel_bna8tc.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("snowfieldmissouri", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470173/Moar%20Profiles/generics/Evon_Ralston_q1tfqk.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("cruelreceptive", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470196/Moar%20Profiles/generics/Fabian_Gilfillan_iofyam.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("pursebovine", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470184/Moar%20Profiles/generics/Faith_Shadduck_korjcm.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("haughingprinciple", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470175/Moar%20Profiles/generics/Federico_Hawthorne_zpa7ga.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("chewingstrategy", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470183/Moar%20Profiles/generics/Filomena_Acosta_bpzuel.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("hertztough", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470218/Moar%20Profiles/generics/Flavia_Seabury_tbfvzt.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("unlacedcrane", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470197/Moar%20Profiles/generics/Florene_Sandridge_wfbcxh.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("eavesdroppedant", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470245/Moar%20Profiles/generics/Gema_Casler_bis27j.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("wagonerlenmeyer", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470227/Moar%20Profiles/generics/Genie_Boston_ugavin.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("luineagprogramme", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470269/Moar%20Profiles/generics/Georgeann_Bargo_raznkl.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("physicalbuzzing", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470232/Moar%20Profiles/generics/Georgianne_Gaspar_wjzt9m.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("sameetsy", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470238/Moar%20Profiles/generics/Gerry_Valdes_ueevjr.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("bovelylinguini", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470238/Moar%20Profiles/generics/Gertude_Meacham_cn6pxp.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("cavitybobbin", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470291/Moar%20Profiles/generics/Gia_Vanbuskirk_q3eup1.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("startlingjunk", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470264/Moar%20Profiles/generics/Gilberte_Salvas_uomi3z.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("decayabnormal", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470253/Moar%20Profiles/generics/Gilma_Frese_g3wrzd.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("smubefartlek", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470352/Moar%20Profiles/generics/Gina_Yellowhair_nyebrx.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("drainpipewhimple", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470318/Moar%20Profiles/generics/Ginny_Krieg_sbnmlm.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("bongueoverload", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470308/Moar%20Profiles/generics/Gisela_Alfred_dwu9hq.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("paraffinlock", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470298/Moar%20Profiles/generics/Glinda_Raggs_h4pkc0.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("valuesgild", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470346/Moar%20Profiles/generics/Glynis_Spaulding_u1bozi.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("hingerazor", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470345/Moar%20Profiles/generics/Grant_Fludd_ogedyk.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("kodarefreshing", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470347/Moar%20Profiles/generics/Granville_Caple_e7rcns.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("yetwellington", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470344/Moar%20Profiles/generics/Hai_Bias_ftyxzc.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("sparkterm", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470345/Moar%20Profiles/generics/Hassan_Revel_boutdw.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("gunnerpouch", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470367/Moar%20Profiles/generics/Herma_Wetherbee_q0wpjw.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("roamerstreets", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470365/Moar%20Profiles/generics/Hildegarde_Louie_hat5jz.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("hollocombenorthern", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470425/Moar%20Profiles/generics/Holley_Malave_uwlgvd.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("snobbyenrick", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470432/Moar%20Profiles/generics/Homer_Rezentes_lijk72.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("fadelying", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470370/Moar%20Profiles/generics/Hosea_Millican_i2oohd.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("mortgagesoftware", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470443/Moar%20Profiles/generics/Houston_Shockey_ymibum.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("cheetahgleeful", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470381/Moar%20Profiles/generics/Hung_Fuentez_jp52m8.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("dishclothentry", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470385/Moar%20Profiles/generics/Hwa_Duff_n59w9e.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("maintenancepulworthy", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470439/Moar%20Profiles/generics/Hyo_Herter_pzbwqz.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("maintenancepulworthy", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470399/Moar%20Profiles/generics/Ian_Lavallie_b2rxzj.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("handbooklichfield", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470451/Moar%20Profiles/generics/Ignacia_Ehrlich_dp2k1q.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("voguecheck", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470481/Moar%20Profiles/generics/Iliana_Leslie_sej9wd.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("kickinggranitic", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470456/Moar%20Profiles/generics/Inga_Shope_fyfha5.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("gainsboroughpharmacy", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470558/Moar%20Profiles/generics/Ingrid_Dunton_vqwrmn.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("gafferreactor", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470476/Moar%20Profiles/generics/Isa_Vella_sgicbr.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("lionessbenign", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470463/Moar%20Profiles/generics/Isaura_Bicknell_irqeti.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("messengerromeo", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470501/Moar%20Profiles/generics/Isela_Milstead_pkr8y6.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("dronesgrandfather", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470484/Moar%20Profiles/generics/Isidra_Valone_aq5p0d.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("wispywish", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470490/Moar%20Profiles/generics/Isis_Mcconnel_jf5qgg.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("dotingmanicure", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470511/Moar%20Profiles/generics/Isobel_Roy_qiqtub.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("cottonshopefinham", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470489/Moar%20Profiles/generics/Ivan_Redner_gho9ug.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("angelfishclarify", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470529/Moar%20Profiles/generics/Jacob_Boeke_hzyhrx.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("admonishfetal", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470500/Moar%20Profiles/generics/Jaimie_Linzey_dxyakg.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("jennyskillful", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470523/Moar%20Profiles/generics/Jaleesa_Malott_t5cunp.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("exuberantcapillary", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470543/Moar%20Profiles/generics/Janeen_Mangan_tg4xaw.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("lincolnshireridlees", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470583/Moar%20Profiles/generics/Janel_Earle_prerks.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("earnestcolonist", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470564/Moar%20Profiles/generics/Janeth_Ulloa_y0onwj.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("alfalfaunsavory", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470595/Moar%20Profiles/generics/Jannette_Hauger_c8r4kw.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("infusedgang", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470553/Moar%20Profiles/generics/Jarod_Kottke_il43gf.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("polishmud", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470561/Moar%20Profiles/generics/Jean_Hoar_yxiq8k.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("bungurging", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470596/Moar%20Profiles/generics/Jeana_Dickson_reqp9j.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("blisterquarrel", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470601/Moar%20Profiles/generics/Jefferey_Conlee_refkmf.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("supermancarless", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470584/Moar%20Profiles/generics/Jefferson_Donald_yw96z8.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("bustlingdigby", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470667/Moar%20Profiles/generics/Jere_Vassallo_jjyvwo.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("groundagehodge", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470623/Moar%20Profiles/generics/Jerome_Fairless_exzqhc.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("purelyears", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470666/Moar%20Profiles/generics/Jessenia_Dusek_jusydp.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("luncheontraveler", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470639/Moar%20Profiles/generics/Jessi_Whitlow_aym05x.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("mosquetiting", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470672/Moar%20Profiles/generics/Jesusa_Houchins_g67xht.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("dowryarea", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470655/Moar%20Profiles/generics/Joeann_Bochenek_amqgtx.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("sleightligament", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470651/Moar%20Profiles/generics/Johna_Dunnington_rslxgv.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("helperleading", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470732/Moar%20Profiles/generics/Jolanda_Calixte_urbnnl.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("ejectdictate", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470661/Moar%20Profiles/generics/Joline_Barkett_q2cntn.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("washingattempt", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470713/Moar%20Profiles/generics/Jonah_Brazil_dsygnf.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("demandinghaggard", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470738/Moar%20Profiles/generics/Josh_Shibley_odppf4.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("overcookcatching", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470679/Moar%20Profiles/generics/Jovan_Sutphin_tlv44t.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("creasefracture", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470678/Moar%20Profiles/generics/Joy_Jorgensen_ffna7w.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("yearflock", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470702/Moar%20Profiles/generics/Judson_Swanberg_qttuk8.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("berenicesinertia", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470721/Moar%20Profiles/generics/June_Wisneski_rxvoq5.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("likelyacorn", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470717/Moar%20Profiles/generics/Justa_Eugene_ubhjkr.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("chromerough", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470710/Moar%20Profiles/generics/Jutta_Cuthbert_ahwape.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("gligweights", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470734/Moar%20Profiles/generics/Kaila_Weiser_nmdxjp.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("surgerypyromania", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470770/Moar%20Profiles/generics/Karla_Morley_nmdfpc.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("windingevacuate", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470771/Moar%20Profiles/generics/Karleen_Frazee_rlsmnt.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("harmonyoccur", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470812/Moar%20Profiles/generics/Kasandra_Janicki_bfgbsg.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("sawyerwinkle", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470769/Moar%20Profiles/generics/Katelin_Dallman_aldw3p.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("gloriousnide", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470760/Moar%20Profiles/generics/Katelin_Mosser_nfrvnw.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("unwrittensurmise", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470765/Moar%20Profiles/generics/Katharyn_Devaul_d5o8af.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("defensewalk", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470792/Moar%20Profiles/generics/Kay_Rohman_lsgcdk.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("deansnattle", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470850/Moar%20Profiles/generics/Kaylee_Smock_snsdku.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("amountprenatal", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470833/Moar%20Profiles/generics/Keila_Bowie_eeojgn.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("jeansnasal", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470835/Moar%20Profiles/generics/Keila_Reddell_shoeaq.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("enlargedtelrad", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470780/Moar%20Profiles/generics/Keitha_Freeburg_lw3pca.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("thankstiny", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470826/Moar%20Profiles/generics/Kelly_Groom_pfkeih.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("squadshencil", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470852/Moar%20Profiles/generics/Kemberly_Knerr_c4mc9n.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("vinneyblueberry", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470827/Moar%20Profiles/generics/Kenya_Wnuk_q1sia4.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("judiciarythaging", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470870/Moar%20Profiles/generics/Kiesha_Moorman_molvwg.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("suffixtrenton", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470912/Moar%20Profiles/generics/Kimber_Forehand_iqrd7z.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("mortalitybackwash", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470856/Moar%20Profiles/generics/Kisha_Bates_f0ed9k.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("alarmedglove", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470844/Moar%20Profiles/generics/Kitty_Stfleur_aihlqb.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("highjumpbarking", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470873/Moar%20Profiles/generics/Kourtney_Tapp_c32ekj.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("hunterbench", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470915/Moar%20Profiles/generics/Kristle_Faulkenberry_n2iuob.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("snowballjittery", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470913/Moar%20Profiles/generics/Kyle_Priolo_yh2k8n.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("lowtendroplet", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470941/Moar%20Profiles/generics/Lael_Delara_o9x7cs.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("dejectedcrib", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470919/Moar%20Profiles/generics/Lajuana_Palmer_j86rkk.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("confidencecrescent", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470903/Moar%20Profiles/generics/Lakendra_Saffer_b8hrbm.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("cursebesmirch", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470932/Moar%20Profiles/generics/Lan_Montagna_d1e2wy.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("drenchratline", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471001/Moar%20Profiles/generics/Lane_Silvestre_tmzhrr.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("icypumpion", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470980/Moar%20Profiles/generics/Latashia_Dacanay_yjku90.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("singleoverview", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470931/Moar%20Profiles/generics/Latoria_Settles_law0t1.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("shedcowboys", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470941/Moar%20Profiles/generics/Latoya_Robson_wjtxvb.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("gregariouslaffinch", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470957/Moar%20Profiles/generics/Laurene_Karp_pzq8sg.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("sustainweevle", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470942/Moar%20Profiles/generics/Laverne_Bianchi_uppj01.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("quirkfit", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470977/Moar%20Profiles/generics/Lawrence_Buckles_dl6zcm.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("cheeseswag", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470970/Moar%20Profiles/generics/Layla_Harding_g1nct3.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("bournehoat", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470970/Moar%20Profiles/generics/Leigh_Ratchford_h74dka.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("nightinfluenced", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470978/Moar%20Profiles/generics/Lena_Desiderio_uix4qs.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("shortwavepenalty", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470980/Moar%20Profiles/generics/Leona_Hornback_gpfsbq.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("petercloe", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471069/Moar%20Profiles/generics/Leonardo_Philip_b3godc.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("permitrobe", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471011/Moar%20Profiles/generics/Leonel_Munn_wfyxvk.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("shipmustang", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471007/Moar%20Profiles/generics/Lessie_Whisenhunt_tfj7oz.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("patchesworthy", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471011/Moar%20Profiles/generics/Lester_Marling_tnzvf4.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("closeniatross", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592470987/Moar%20Profiles/generics/Lindsey_Tolentino_uwofay.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("hawdonpuppy", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471102/Moar%20Profiles/generics/Linette_Howey_dw6uni.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("florsesleat", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471037/Moar%20Profiles/generics/Linnie_Sperling_pdxtti.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("sorebottle", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471038/Moar%20Profiles/generics/Lizbeth_Confer_svzqz4.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("kuskokwimdrippy", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471117/Moar%20Profiles/generics/Lona_Richeson_lj6zlo.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("huskavocado", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471159/Moar%20Profiles/generics/Loren_Sidler_l8n3eo.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("bradyinner", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471076/Moar%20Profiles/generics/Loretta_Angell_aivz5q.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("surfacebobble", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471057/Moar%20Profiles/generics/Loria_Duer_e2mvxm.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("surfingzoilist", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471092/Moar%20Profiles/generics/Lovetta_Caya_a6uqba.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("unhealthyplanca", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471075/Moar%20Profiles/generics/Lucius_Mehta_yaj6dr.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("teenytinybackache", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471188/Moar%20Profiles/generics/Lura_Hyde_pkvbeq.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("watercountry", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471191/Moar%20Profiles/generics/Lurlene_Marko_dphehn.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("coodcrumble", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471110/Moar%20Profiles/generics/Luther_Cumbie_riab89.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("phrasinggabby", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471119/Moar%20Profiles/generics/Luvenia_Magnuson_j5591b.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("declinerestroom", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471161/Moar%20Profiles/generics/Lyndon_Benavides_jyrilp.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("praseodymiumprenton", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471216/Moar%20Profiles/generics/Madaline_Ayotte_mw4g8i.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("leopardpocket", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471136/Moar%20Profiles/generics/Magali_Genna_lwt0jf.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("oilmens", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471146/Moar%20Profiles/generics/Magan_Durbin_xzcoxp.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("confideappraiser", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471194/Moar%20Profiles/generics/Magen_Seago_xanduv.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("nativeubiquity", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471181/Moar%20Profiles/generics/Maida_Longley_mjmhto.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("stubbleyine", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471194/Moar%20Profiles/generics/Malisa_Ledoux_ugisjq.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("loopyhooligan", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471222/Moar%20Profiles/generics/Malorie_Rinehart_sfspgk.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("bubbleunsolved", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471260/Moar%20Profiles/generics/Malvina_Reber_rhv1mt.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("untwistbabies", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471219/Moar%20Profiles/generics/Mana_Man_dbaynz.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("chivehoneythunder", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471214/Moar%20Profiles/generics/Marco_Hewes_ib5d4e.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("sedanhertfordshire", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471220/Moar%20Profiles/generics/Marco_Raso_dxgdjx.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("bullockspamphlet", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471269/Moar%20Profiles/generics/Marg_Dedmon_iqthx0.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("jessoambush", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471252/Moar%20Profiles/generics/Margarita_Haas_pg2umw.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("stoeride", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471346/Moar%20Profiles/generics/Margrett_Frenkel_fw4dm1.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("amberharvey", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471276/Moar%20Profiles/generics/Mariana_Sessoms_jn5eyf.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("regallyvictor", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471276/Moar%20Profiles/generics/Mariana_Sessoms_jn5eyf.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("sulknoken", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471243/Moar%20Profiles/generics/Mariel_Valentin_npcxy3.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("cobaltlifted", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471266/Moar%20Profiles/generics/Marissa_Taillon_vidla3.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("marthapanoramic", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471304/Moar%20Profiles/generics/Marlena_Lone_twdsre.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("kneeshoopoe", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471322/Moar%20Profiles/generics/Marni_Dupont_fg5z9l.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("unbakedpleasure", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471354/Moar%20Profiles/generics/Marsha_Boehmer_kxg8cj.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("leadenhive", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471356/Moar%20Profiles/generics/Martin_Blewett_sjjado.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("breezelaggan", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471313/Moar%20Profiles/generics/Marybeth_Dy_teohfn.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("erasekiln", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471315/Moar%20Profiles/generics/Mayme_Jaques_glu2ob.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("slammingsolids", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471371/Moar%20Profiles/generics/Meaghan_Melo_q8jzba.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("fuelsquid", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471434/Moar%20Profiles/generics/Melania_Duda_ftr4zb.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("hardenerkalio", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471342/Moar%20Profiles/generics/Melissa_Levario_qw0r28.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("flopsnowfield", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471396/Moar%20Profiles/generics/Melodie_Vangundy_ckuw23.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("paddleeleazar", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471543/Moar%20Profiles/generics/Mercy_Liverman_h9c5pf.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("roguebeer", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471377/Moar%20Profiles/generics/Merilyn_Yarnell_vlufxp.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("estrogenfootball", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471384/Moar%20Profiles/generics/Michiko_Wunderlich_bvkbyl.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("crumbedlanguage", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471377/Moar%20Profiles/generics/Micki_Rone_k0l2op.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("flusteredunroll", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471392/Moar%20Profiles/generics/Mika_Sanford_pvqrvk.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("colitisbaps", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471395/Moar%20Profiles/generics/Milton_Eddleman_fx2kkm.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("annoyingfan", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471448/Moar%20Profiles/generics/Mireya_Spells_spsttl.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("chaseconfucius", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471421/Moar%20Profiles/generics/Mirtha_Sackrider_px9qyt.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("fizzlejoyride", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471592/Moar%20Profiles/generics/Misty_Loyola_qpjted.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("laryngitisblackboard", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471440/Moar%20Profiles/generics/Morgan_Stoval_pqlgae.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("sheyennepig", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471525/Moar%20Profiles/generics/Nakita_Mathes_tzqick.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("limeiberico", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471465/Moar%20Profiles/generics/Nakita_Ofarrell_vvbc2x.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("canonspongy", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471465/Moar%20Profiles/generics/Nakita_Ofarrell_vvbc2x.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("Napoleon Kroon", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471476/Moar%20Profiles/generics/Napoleon_Kroon_y7y6fb.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("generousracehorse", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471548/Moar%20Profiles/generics/Nathan_Sleeth_qrdgei.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("peanutproducer", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471468/Moar%20Profiles/generics/Nathanial_Sinn_gf4yzt.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("podprompting", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471538/Moar%20Profiles/generics/Newton_Zigler_yh35vy.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("triplecolourless", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471522/Moar%20Profiles/generics/Nichol_Zacharias_ulexb4.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("shintamazon", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471537/Moar%20Profiles/generics/Nickie_Kravitz_laqspu.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("phenomenonhypnotist", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471563/Moar%20Profiles/generics/Nicky_Slama_sbglpk.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("medalrockwell", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471586/Moar%20Profiles/generics/Nicol_Coker_jsnjrn.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("berthafinding", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471599/Moar%20Profiles/generics/Niesha_Mele_xhogvv.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("rexjeets", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471635/Moar%20Profiles/generics/Nina_Falls_vual3d.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("precessiondocument", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471610/Moar%20Profiles/generics/Nina_Ogles_uahzei.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("rummagesuch", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471592/Moar%20Profiles/generics/Noelle_Mcnish_cebsqg.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("lambharem", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471635/Moar%20Profiles/generics/Obdulia_Labat_qx7f3n.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("chromeintended", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471599/Moar%20Profiles/generics/Odell_Trussell_q2yfkv.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("avenuenimbleness", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471663/Moar%20Profiles/generics/Ofelia_Varga_zulkh6.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("fladdockcoherence", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471640/Moar%20Profiles/generics/Oliver_Platz_gaectq.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("tabbycaress", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471646/Moar%20Profiles/generics/Oswaldo_River_xtdxto.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("custardgrus", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471640/Moar%20Profiles/generics/Pamula_Riser_xpcrxw.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("saxophonecadillac", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471697/Moar%20Profiles/generics/Pandora_Weekley_cvn0ac.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("areaclastic", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471651/Moar%20Profiles/generics/Paulene_Cardoso_a8icuw.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("undockedtoll", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471681/Moar%20Profiles/generics/Peggie_Slone_xbepa3.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("onwardglamour", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471692/Moar%20Profiles/generics/Pei_Hoffert_ytkqy7.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("livelyprotector", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471748/Moar%20Profiles/generics/Peter_Whang_b5puuy.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("rewardtrifle", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471724/Moar%20Profiles/generics/Piedad_Laiche_ewfv2k.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("oiksubstance", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471694/Moar%20Profiles/generics/Porter_Farris_xyh8sy.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("parentcola", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471727/Moar%20Profiles/generics/Pura_Mcglothlen_x0rkth.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("Rachel Patino", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471726/Moar%20Profiles/generics/Rachel_Patino_o6q0no.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("salamiclicker", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471765/Moar%20Profiles/generics/Raelene_Mcguirk_w6axb8.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("optionbreast", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471765/Moar%20Profiles/generics/Raelene_Mcguirk_w6axb8.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("alcoholschematic", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471748/Moar%20Profiles/generics/Raleigh_Perino_kqgzy0.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("mckinleyfled", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471787/Moar%20Profiles/generics/Renetta_Whitaker_vgyuu5.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("ecologisthalyard", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471743/Moar%20Profiles/generics/Rhiannon_Moench_jbplmo.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("residenthotters", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471754/Moar%20Profiles/generics/Rodney_Cate_m4loa6.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("medkitsprung", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471761/Moar%20Profiles/generics/Rodolfo_Scurry_c1txdl.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("housecloset", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471766/Moar%20Profiles/generics/Rodrigo_Hau_alemxl.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("refluxcustard", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471764/Moar%20Profiles/generics/Rolando_Christenberry_lywl2u.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("boarstephra", "hhttps://res.cloudinary.com/ddrrwygt1/image/upload/v1592471759/Moar%20Profiles/generics/Ron_Eyler_bjetbl.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("trustabletorch", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471780/Moar%20Profiles/generics/Ronald_Rader_at0frr.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("mobbssetting", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471830/Moar%20Profiles/generics/Rosalinda_Barras_forxdn.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("weamycongress", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471786/Moar%20Profiles/generics/Rosalinda_Hein_q3g1is.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("gelatinsandpit", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471845/Moar%20Profiles/generics/Roseline_Bak_mjv9tt.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("measuringunkind", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471821/Moar%20Profiles/generics/Rosendo_Broxton_lcfuyl.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("lokodowdle", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471837/Moar%20Profiles/generics/Roxy_Gonsales_brg7lt.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("blacklunacy", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471818/Moar%20Profiles/generics/Rubie_Garlock_pfon5q.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("tynesnouted", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471802/Moar%20Profiles/generics/Rudolph_Wilburn_mrjgtn.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("dishnubbles", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471808/Moar%20Profiles/generics/Russ_Westberg_rj1adc.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("ejectshegs", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471942/Moar%20Profiles/generics/Rusty_Hosch_pphbbo.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("johnsterling", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471905/Moar%20Profiles/generics/Ruthie_Vargo_m3zmnw.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("siennaskin", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471834/Moar%20Profiles/generics/Sabra_Reddick_gemwms.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("oblivionoverfeed", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471848/Moar%20Profiles/generics/Samara_Paschke_puvh65.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("anatexisblind", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471852/Moar%20Profiles/generics/Samual_Semien_sj6cll.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("underdogcleo", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471845/Moar%20Profiles/generics/Sandee_Lipson_jqft4s.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("vocallyskale", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471884/Moar%20Profiles/generics/Sanford_Signorelli_wx5uyd.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("deadlineabseil", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471884/Moar%20Profiles/generics/Santiago_Lesko_k2wllo.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("excretiondude", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471894/Moar%20Profiles/generics/Santiago_Mccusker_yhl54e.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("magnetizeshimy", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471920/Moar%20Profiles/generics/Sasha_Fregoso_dpmaq1.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("belatedbet", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471922/Moar%20Profiles/generics/Saundra_Berube_adonoi.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("peacefulnicki", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471905/Moar%20Profiles/generics/Saundra_Womer_eakp9u.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("Schillsandpiper", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471952/Moar%20Profiles/generics/Scot_Ledgerwood_pbiltd.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("THE SHAG", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471994/Moar%20Profiles/generics/Shaggy_Rogers_uokslh.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("bawdymyeloid", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471921/Moar%20Profiles/generics/Shakita_Ouimet_mwcpjm.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("cocoascallops", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471949/Moar%20Profiles/generics/Shaniqua_Isley_jmrtft.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("mortuarybuck", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471943/Moar%20Profiles/generics/Shanta_Brassard_ys3nrz.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("twinsiodize", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471962/Moar%20Profiles/generics/Shantelle_Stockwell_bb16wj.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("miaowsub", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472078/Moar%20Profiles/generics/Shanti_Gloss_lpxhsg.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("unmanagedgeiger", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471962/Moar%20Profiles/generics/Sharan_Tetzlaff_afou6w.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("tinshydrogen", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471980/Moar%20Profiles/generics/Sharlene_Carl_pb6k2o.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("puzzlingunion","https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472012/Moar%20Profiles/generics/Shaunta_Petteway_efgpf5.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("thirtyolivine", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471980/Moar%20Profiles/generics/Shawnda_Roudebush_drzksz.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("suaveashamed", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471975/Moar%20Profiles/generics/Shelli_Humbertson_gliddr.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("thinlysteak", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592471992/Moar%20Profiles/generics/Shena_Stetler_dkivxb.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("cranehamlet", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472089/Moar%20Profiles/generics/Sherise_Schur_harwku.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("instagramstair", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472028/Moar%20Profiles/generics/Sheron_Wiest_kwjggv.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("rehabpaisley", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472055/Moar%20Profiles/generics/Sherrell_Dworkin_kysduu.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("jackchicago", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472089/Moar%20Profiles/generics/Sherri_Avery_cdooex.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("focusapple", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472035/Moar%20Profiles/generics/Sherrie_Lutz_xvgip1.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("cupskirt", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472076/Moar%20Profiles/generics/Shira_Arata_bjcchc.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("dizzinesstelevision", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472048/Moar%20Profiles/generics/Shirleen_Payton_zilvfv.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("extrassabine", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472125/Moar%20Profiles/generics/Shizue_Jahns_lywpf0.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("curlydropbox", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472170/Moar%20Profiles/generics/Sigrid_Schacherer_sewjbx.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("sturdychewie", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472098/Moar%20Profiles/generics/Sina_Weide_h9k6u9.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("boggedbotanical", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472083/Moar%20Profiles/generics/Skye_Tatum_govxj5.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("gardenbuckinghamshire", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472125/Moar%20Profiles/generics/Song_Sabado_l96oao.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("latticespacket", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472107/Moar%20Profiles/generics/Sonny_Replogle_kebdka.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("cozinessmalthus", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472146/Moar%20Profiles/generics/Stephani_Lazzaro_hxsd8q.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("octobermutal", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472114/Moar%20Profiles/generics/Suzann_Sundquist_nbz55h.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("blousesisterhood", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472131/Moar%20Profiles/generics/Tabetha_Navarro_k5o83r.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("blagictumbleweed", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472145/Moar%20Profiles/generics/Tabetha_Reiter_fea3cg.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("quirkyipad", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472272/Moar%20Profiles/generics/Tameka_Moses_lyzisp.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("uranusunfitted", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472173/Moar%20Profiles/generics/Tamekia_Sands_lhouig.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("slieldsfrosted", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472150/Moar%20Profiles/generics/Tamra_Cockerham_kbqafj.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("equuleuspromise", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472206/Moar%20Profiles/generics/Tarra_Mallet_sqeluk.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("elevatorthese", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472226/Moar%20Profiles/generics/Teena_Baucom_rh8t0u.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("drivegeek", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472222/Moar%20Profiles/generics/Tegan_Habel_lv3ak9.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("oniondinky", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472273/Moar%20Profiles/generics/Teisha_Maxie_rjsjov.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("quarteringpeppering", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472232/Moar%20Profiles/generics/Temeka_Hyndman_kh6ywd.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("kookyinherent", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472256/Moar%20Profiles/generics/Temika_Salomon_ep5njv.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("dubbedwax", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472261/Moar%20Profiles/generics/Tennie_Gargano_unutac.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("mowersnowsuit","https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472297/Moar%20Profiles/generics/Teresa_Yen_utbhwz.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("abidjaninver", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472476/Moar%20Profiles/generics/Terrie_Dreier_jvsiy4.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("choakumchildmars", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472283/Moar%20Profiles/generics/Theron_Brimmer_brpgzx.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("crookesrepent", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472385/Moar%20Profiles/generics/Thomasena_Rios_qgwrer.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("nopesbeast", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472305/Moar%20Profiles/generics/Thomasina_Hollaway_v8fvge.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("elmoarmoire", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472316/Moar%20Profiles/generics/Thomasine_Marc_mwd0pa.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("frashphilips", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472336/Moar%20Profiles/generics/Tierra_Weitzel_ki3ekc.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("recognizeamuck", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472427/Moar%20Profiles/generics/Tiffany_Mccuen_cpog6q.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("lyricismelliptical", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472366/Moar%20Profiles/generics/Tish_Vena_i6ofxp.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("flopham", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472377/Moar%20Profiles/generics/Tomasa_Brim_fskiuh.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("tuesdayswallower", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472377/Moar%20Profiles/generics/Tomasa_Brim_fskiuh.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("monsoonwidgeon", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472362/Moar%20Profiles/generics/Tomiko_Tulloch_hkpvp9.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("romapeakshole", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472399/Moar%20Profiles/generics/Tonia_Beverage_plmc6m.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("cakestaplake", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472374/Moar%20Profiles/generics/Tosha_Bagnell_ij2q7t.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("Trent Canela", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472418/Moar%20Profiles/generics/Trent_Canela_l8410a.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("Unicorn Hunters", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472493/Moar%20Profiles/generics/Unicorn_Hunters_o8dbtk.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("queerberkelium", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472398/Moar%20Profiles/generics/Valda_Linares_ddkg9e.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("humorlesscuban", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472417/Moar%20Profiles/generics/Valerio_Luthy_xjwu2y.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("pridetaste", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472493/Moar%20Profiles/generics/Vallie_Macdonald_uy03yn.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("greenpobster", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472454/Moar%20Profiles/generics/Valorie_Troyer_evwhhi.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("extendedtopsawyer", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472454/Moar%20Profiles/generics/Valrie_Canizales_cfn5cm.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("hollowpointers", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472479/Moar%20Profiles/generics/Vanna_Soder_zzzz1g.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("windgloaming", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472471/Moar%20Profiles/generics/Velva_Kalman_ygtmvt.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("productiveexpress", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472492/Moar%20Profiles/generics/Verdell_Rothwell_pkysba.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("leisureenunciate", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472574/Moar%20Profiles/generics/Verdie_Benning_pqwglb.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("flatteredatlai", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472542/Moar%20Profiles/generics/Vi_Morvant_qvj7gt.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("berateolympics", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472510/Moar%20Profiles/generics/Vickey_Sommerville_ehcolb.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("rastseabiscuit", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472508/Moar%20Profiles/generics/Virgina_Isaacs_oa1tay.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("goldsmithgold", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472628/Moar%20Profiles/generics/Vinnie_Houchins_qhw9c8.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("psifeather", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472527/Moar%20Profiles/generics/Von_Carmona_ua10cs.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("enjoyablecreets", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472523/Moar%20Profiles/generics/Voncile_Willard_hhnc51.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("stadiumambulance", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472530/Moar%20Profiles/generics/Vonnie_Tito_a4bc9e.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("mountpluck","https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472581/Moar%20Profiles/generics/Wei_Hemingway_csjcci.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("clamorouszookeeper", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472542/Moar%20Profiles/generics/Weno_Fujiwara_t7q7xk.jpg",0)`);
                        DB.query(`INSERT INTO images  VALUES
                        ("unhappybuffalo", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472594/Moar%20Profiles/generics/Wilber_Alsobrook_rhrowh.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("unsocialserve", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472576/Moar%20Profiles/generics/Wilford_Whitenack_twenzd.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("anglingjumbo", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472660/Moar%20Profiles/generics/Willa_Hathaway_kyuwwv.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("wrathjumber", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472603/Moar%20Profiles/generics/Wilson_Lance_l1u14e.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("skydinner", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472664/Moar%20Profiles/generics/Wilton_Brandstetter_acfzyx.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("signalunscrewing", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472611/Moar%20Profiles/generics/Winter_Smithson_hc4jhr.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("indiscreetsuds", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472671/Moar%20Profiles/generics/Xuan_Eubank_fnhrwt.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("candysleep", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472642/Moar%20Profiles/generics/Yu_Defoor_dhdmpx.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("candysleep", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472675/Moar%20Profiles/generics/Yuonne_Semmes_gb1eqk.jpg",0)`);
                        DB.query(`INSERT INTO images VALUES
                        ("riotplentiful", "https://res.cloudinary.com/ddrrwygt1/image/upload/v1592472642/Moar%20Profiles/generics/Zachary_Britt_ek8spa.jpg",0)`);

                        DB.query(`INSERT INTO interests VALUES ("#syrup", "02")`);
                        DB.query(`INSERT INTO interests VALUES ("#darling", "02")`);
                        DB.query(`INSERT INTO interests VALUES ("#magic", "ectobiologist")`);
                        DB.query(`INSERT INTO interests VALUES ("#tricks", "ectobiologist")`);
                        DB.query(`INSERT INTO interests VALUES ("#wizards", "tentacletherapist")`);
                        DB.query(`INSERT INTO interests VALUES ("#kanaya", "tentacletherapist")`);
                        DB.query(`INSERT INTO interests VALUES ("#rapping", "turntechgodhead")`);
                        DB.query(`INSERT INTO interests VALUES ("#breadsticks", "turntechgodhead")`);
                        DB.query(`INSERT INTO interests VALUES ("#furry", "gardengnostic")`);
                        DB.query(`INSERT INTO interests VALUES ("#gardening", "gardengnostic")`);
                        DB.query(`INSERT INTO interests VALUES ("#dogs", "gardengnostic")`);
                        DB.query(`INSERT INTO interests VALUES ("#rapping", "golgothasterror")`);
                        DB.query(`INSERT INTO interests VALUES ("#breadsticks", "golgothasterror")`);
                        DB.query(`INSERT INTO interests VALUES ("#drinking", "tipsygnostalgic")`);
                        DB.query(`INSERT INTO interests VALUES ("#zerojudgement", "tipsygnostalgic")`);
                        DB.query(`INSERT INTO interests VALUES ("#baking", "gutsygumshoe")`);
                        DB.query(`INSERT INTO interests VALUES ("#jake", "gutsygumshoe")`);
                        DB.query(`INSERT INTO interests VALUES ("#anime", "timeustestified")`);
                        DB.query(`INSERT INTO interests VALUES ("#swords", "timeustestified")`);
                        DB.query(`INSERT INTO interests VALUES ("#puppets", "timeustestified")`);
                        DB.query(`INSERT INTO interests VALUES ("#gh0sts", "apocalypsearisen")`);
                        DB.query(`INSERT INTO interests VALUES ("#fLYING", "adiostoreador")`);
                        DB.query(`INSERT INTO interests VALUES ("#fIDUSSPAWN", "adiostoreador")`);
                        DB.query(`INSERT INTO interests VALUES ("#internet", "twinarmageddons")`);
                        DB.query(`INSERT INTO interests VALUES ("#rolepurrlay", "arseniccatnip")`);
                        DB.query(`INSERT INTO interests VALUES ("#shipping", "arseniccatnip")`);
                        DB.query(`INSERT INTO interests VALUES ("#Zombies", "grimAuxullatrix")`);
                        DB.query(`INSERT INTO interests VALUES ("#Vampires", "grimAuxullatrix")`);
                        DB.query(`INSERT INTO interests VALUES ("#R3D", "gallowscallibrator")`);
                        DB.query(`INSERT INTO interests VALUES ("#JUDG3M3NT", "gallowscallibrator")`);
                        DB.query(`INSERT INTO interests VALUES ("#flarping", "arachnidsgrip")`);
                        DB.query(`INSERT INTO interests VALUES ("#spiders", "arachnidsgrip")`);
                        DB.query(`INSERT INTO interests VALUES ("#D-->STRONGNESS", "centaurstesticle")`);
                        DB.query(`INSERT INTO interests VALUES ("#D-->machinery", "centaurstesticle")`);
                        DB.query(`INSERT INTO interests VALUES ("#ElIxEr", "terminallycapricious")`);
                        DB.query(`INSERT INTO interests VALUES ("#PiEs", "terminallycapricious")`);
                        DB.query(`INSERT INTO interests VALUES ("#magic", "caligulasaquarium")`);
                        DB.query(`INSERT INTO interests VALUES ("#wwww", "caligulasaquarium")`);
                        DB.query(`INSERT INTO interests VALUES ("#38)", "cuttlefishculler")`);
                        DB.query(`INSERT INTO interests VALUES ("#Unity", "uraniumumbra")`);
                        DB.query(`INSERT INTO interests VALUES ("#^u^", "uraniumumbra")`);
                        DB.query(`INSERT INTO interests VALUES ("#ART.", "undyingumbrage")`);

                    });
                }
            });

    });
    var conn = mysql.createConnection({
        host: `${db.servername}`,
        user: `${db.dbusername}`,
        password: `${db.dbpassword}`,
        database: `${db.dbname}`
    });
    conn.connect(function(err) {
        if (err) throw err;
        conn.query(`SELECT * FROM information_schema.tables
					WHERE table_schema = 'matcha'
					AND table_name = 'messages'`,
            function(err, result) {
                if (err) throw err;
                if (result.length > 0) {

                } else {
                    console.log('message table not found.');
                    var sql = `CREATE TABLE IF NOT EXISTS messages (
					receiver LONGTEXT NOT NULL,
					sender LONGTEXT NOT NULL,
					message LONGTEXT NOT NULL,
					unread BOOLEAN DEFAULT 1,
					date TIMESTAMP default CURRENT_TIMESTAMP
					);`
                    conn.query(sql, function(err, result) {
                        if (err) throw err;

                    });
                }
            });
    });
    var conn = mysql.createConnection({
        host: `${db.servername}`,
        user: `${db.dbusername}`,
        password: `${db.dbpassword}`,
        database: `${db.dbname}`
    });
    conn.connect(function(err) {
        if (err) throw err;
        conn.query(`SELECT * FROM information_schema.tables
					WHERE table_schema = 'matcha'
					AND table_name = 'images'`,
            function(err, result) {
                if (err) throw err;
                if (result.length > 0) {

                } else {
                    console.log('images table not found.');
                    var sql = `CREATE TABLE IF NOT EXISTS images (
					imageOwner LONGTEXT,
					image VARCHAR(2083),
					active BOOLEAN
					);`
                    conn.query(sql, function(err, result) {
                        if (err) throw err;
                        console.log("images table created");
                    });
                }
            });
    });
    var conn = mysql.createConnection({
        host: `${db.servername}`,
        user: `${db.dbusername}`,
        password: `${db.dbpassword}`,
        database: `${db.dbname}`
    });
    conn.connect(function(err) {
        if (err) throw err;
        conn.query(`SELECT * FROM information_schema.tables
					WHERE table_schema = 'matcha'
					AND table_name = 'likes'`,
            function(err, result) {
                if (err) throw err;
                if (result.length > 0) {

                } else {
                    console.log('likes table not found.');
                    var sql = `CREATE TABLE IF NOT EXISTS likes (
					type INT(1) NOT NULL,
					liked LONGTEXT NOT NULL,
					liker LONGTEXT NOT NULL,
					unread BOOLEAN default 1
					);`
                    conn.query(sql, function(err, result) {
                        if (err) throw err;
                        console.log("likes table created");
                    });
                }
            });
    });
    var conn = mysql.createConnection({
        host: `${db.servername}`,
        user: `${db.dbusername}`,
        password: `${db.dbpassword}`,
        database: `${db.dbname}`
    });
    conn.connect(function(err) {
        if (err) throw err;
        conn.query(`SELECT * FROM information_schema.tables
					WHERE table_schema = 'matcha'
					AND table_name = 'views'`,
            function(err, result) {
                if (err) throw err;
                if (result.length > 0) {

                } else {
                    console.log('views table not found.');
                    var sql = `CREATE TABLE IF NOT EXISTS views (
					viewed LONGTEXT,
					viewer LONGTEXT,
					unread BOOLEAN default 1
					);`
                    conn.query(sql, function(err, result) {
                        if (err) throw err;
                        console.log("views table created");
                    });
                }
            });
    });
    var conn = mysql.createConnection({
        host: `${db.servername}`,
        user: `${db.dbusername}`,
        password: `${db.dbpassword}`,
        database: `${db.dbname}`
    });
    conn.connect(function(err) {
        if (err) throw err;
        conn.query(`SELECT * FROM information_schema.tables
					WHERE table_schema = 'matcha'
					AND table_name = 'interests'`,
            function(err, result) {
                if (err) throw err;
                if (result.length > 0) {

                } else {
                    console.log('interests table not found.');
                    var sql = `CREATE TABLE IF NOT EXISTS interests (
					interest varchar(32),
					user TINYTEXT
					);`
                    conn.query(sql, function(err, result) {
                        if (err) throw err;
                        console.log("interests table created");
                    });
                }
            });
    });

    var conn = mysql.createConnection({
        host: `${db.servername}`,
        user: `${db.dbusername}`,
        password: `${db.dbpassword}`,
        database: `${db.dbname}`
    });
    conn.connect(function(err) {
        if (err) throw err;
        conn.query(`SELECT * FROM information_schema.tables
					WHERE table_schema = 'matcha'
					AND table_name = 'blocks'`,
            function(err, result) {
                if (err) throw err;
                if (result.length > 0) {

                } else {
                    console.log('blocks table not found.');
                    var sql = `CREATE TABLE IF NOT EXISTS blocks (
					blocker LONGTEXT,
					blocked LONGTEXT
					);`
                    conn.query(sql, function(err, result) {
                        if (err) throw err;
                        console.log("blocks table created");
                    });
                }
            });
    });

    var conn = mysql.createConnection({
        host: `${db.servername}`,
        user: `${db.dbusername}`,
        password: `${db.dbpassword}`,
        database: `${db.dbname}`
    });
    conn.connect(function(err) {
        if (err) throw err;
        conn.query(`SELECT * FROM information_schema.tables
					WHERE table_schema = 'matcha'
					AND table_name = 'dislikes'`,
            function(err, result) {
                if (err) throw err;
                if (result.length > 0) {

                } else {
                    console.log('dislikes table not found.');
                    var sql = `CREATE TABLE IF NOT EXISTS dislikes (
					disliked LONGTEXT,
					disliker LONGTEXT,
					unread BOOLEAN default 1
					);`
                    conn.query(sql, function(err, result) {
                        if (err) throw err;
                        console.log("dislikes table created");
                    });
                }
            });
    });

    var conn = mysql.createConnection({
        host: `${db.servername}`,
        user: `${db.dbusername}`,
        password: `${db.dbpassword}`,
        database: `${db.dbname}`
    });
    conn.connect(function(err) {
        if (err) throw err;
        conn.query(`SELECT * FROM information_schema.tables
					WHERE table_schema = 'matcha'
					AND table_name = 'reports'`,
            function(err, result) {
                if (err) throw err;
                if (result.length > 0) {} else {
                    console.log('reports table not found.');
                    var sql = `CREATE TABLE IF NOT EXISTS reports (
					reported LONGTEXT,
					reporter LONGTEXT
					);`
                    conn.query(sql, function(err, result) {
                        if (err) throw err;
                        console.log("reports table created");
                    });
                }
            });
    });
}

module.exports.setupDB = setupDB;