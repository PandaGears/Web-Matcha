function Specialfinder(string) {
    var regex = /^[A-Za-z0-9-_. ]+$/
    var isValid = regex.test(string);

    return (isValid);
}

function emailValid(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function loginValidifierinator(username, password) {
    if (!username || !password)
        return (false);
    return (true);
}

function Validifierinator(username, name, surname, email, password, confpassword) {
    if (!username || !name || !surname || !email || !password || !confpassword)
        return (false);
    if (password !== confpassword)
        return (false);
    if (!emailValid(email))
        return (false);
    if (username.length < 4)
        return (false);
    if (!Specialfinder(username))
        return (false);
    return (true);
}

module.exports.Validifierinator = Validifierinator;
module.exports.loginValidifierinator = loginValidifierinator;