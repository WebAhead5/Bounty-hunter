const password = document.getElementById('password')
const username = document.getElementById('username')
const passwordErr = document.getElementById('passwordErr')
const usernameErr = document.getElementById('usernameErr')

var checkUsername = function () {
    if(username.validity.valueMissing) {
        displayErr(usernameErr, "You think you can leave this empty?!")
        username.style.border = '2px solid red'
    } else if(username.value.length < 5){
        displayErr(usernameErr, "Thats invalid username")
        username.style.border = '2px solid red'
    } else {
        displayErr(usernameErr, "")
        username.style.border = '2px solid #7FFF00'
        return true
    }
}

var checkPw = function () {
    if (password.validity.valueMissing) {
        displayErr(passwordErr, "Enter a password NOW!!");
        password.style.border = '2px solid red'
    } else {
        displayErr(passwordErr, "");
        password.style.border = '2px solid #7FFF00'
        return true;
    }
};

function displayErr(errElem, errMsg) {
    errElem.innerText = errMsg;
}

username.addEventListener("keyup", checkUsername);
password.addEventListener("keyup", checkPw);