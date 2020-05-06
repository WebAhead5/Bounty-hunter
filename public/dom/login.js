const password = document.getElementById('password')
const username = document.getElementById('username')
const passwordErr = document.getElementById('passwordErr')
const usernameErr = document.getElementById('usernameErr')

var checkUsername = function () {
    if(username.validity.valueMissing) {
        displayErr(usernameErr, "You think you can leave this empty?!")
    } else if(username.value.length < 5){
        displayErr(usernameErr, "Thats invalid username")
    } else {
        displayErr(usernameErr, "")
        return true
    }
}

var checkPw = function () {
    if (password.validity.valueMissing) {
        displayErr(passwordErr, "Enter a password NOW!!");
        
    } else {
        displayErr(passwordErr, "");
        return true;
    }
};

function displayErr(errElem, errMsg) {
    errElem.innerText = errMsg;
}

username.addEventListener("keyup", checkUsername);
password.addEventListener("keyup", checkPw);