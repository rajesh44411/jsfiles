function validFname() {
    let first_name = document.getElementById("firstname").value
    if (first_name == "") {
        displayMsg("first name is required", "fnameMsg", "red")
        return false
    }
    else if (first_name.length < 3) {
        displayMsg("first name shuld be more than 2 character", "fnameMsg", "red")
        return false
    }
    else if (!first_name.match(/^[a-zA-Z]+$/)) {
        displayMsg("first name only accepts alphebet", "fnameMsg", "red")
        return false
    }
    else {
        displayMsg('valid first name', "fnameMsg", "green")
        return true
    }
}

function validLname() {
    let last_name = document.getElementById("lastname").value
    if (last_name == "") {
        displayMsg("last name is required", "lnameMsg", "red")
        return false
    }
    else if (last_name.length < 3) {
        displayMsg("first name shuld be more than 2 character", "lnameMsg", "red")
        return false
    }
    else if (!last_name.match(/^[a-zA-Z]+$/)) {
        displayMsg("last name accepts only alphebets", "lnameMsg", "red")
        return false
    }
    else {
        displayMsg('valid last name', "lnameMsg", "green")
        return true
    }
}
function validEmail() {
    let email = document.getElementById("email").value
    if (email == "") {
        displayMsg("email is required", "emailMsg", "red")
        return false
    }
    //singhrajesh1866@gmail.com
    else if (!email.match(/^([a-z0-9])[a-z0-9\_\-\.]+\@+(([a-z])+\.)([a-z])+$/)) {
        displayMsg("invalid email", "emailMsg", "red")
        return false
    }
    else {
        displayMsg('valid email', "emailMsg", "green")
        return true
    }
}
function validPassword() {
    let password = document.getElementById("password").value
    if (password == "") {
        displayMsg("password is required", "passwordMsg", "red")
        return false
    }
    else if (!password.match(/^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[@#$%&*]).{8,20}$/)) {
        displayMsg("password must be one upper case,one lower case,one special character and must be more than 8 charactor", "passwordMsg", "red")
        return false
    }
    else {
        displayMsg('valid password', "passwordMsg", "green")
        return true
    }
}
function validForm() {
    if (validFname() && validLname() && validEmail() && validPassword()) {
        return true
    }
    else {
        return false
    }
}
function displayMsg(message, idValue, colorValue) {
    document.getElementById(idValue).innerHTML = message
    document.getElementById(idValue).style.color = colorValue
}
