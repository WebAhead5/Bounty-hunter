const name = document.getElementById('name');
const regUsername = document.getElementById('reg-username');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const form = document.querySelector('loginForm')
const nameErr = document.getElementById('nameErr')
const passwordErr = document.getElementById('passwordErr')
const confirmErr = document.getElementById('confirmErr')
const usernameErr = document.getElementById('usernameErr')


var checkName = function () {
    if (name.validity.valueMissing) {
        displayErr(nameErr, "Your name you brave");
    } else {
        displayErr(nameErr, "");
        return true;
    }
};

var checkUsername = function () {
    if(regUsername.validity.valueMissing) {
        displayErr(usernameErr, "You think you can leave this empty?!")
    } else if(regUsername.value.length < 5){
        displayErr(usernameErr, "Its TOO SHORT soldier")
    } else {
        displayErr(usernameErr, "")
        return true
    }
}



var checkPw = function () {
    if (password.validity.valueMissing) {
        displayErr(passwordErr, "Enter a password NOW!!");
        
    } else if (password.validity.patternMismatch) {
        displayErr(
            passwordErr,
            "Password must contain at least eight characters, including one letter and one number");
    } else {
        displayErr(passwordErr, "");
        return true;
    }
};

var checkConfirmPw = function () {
    if (password.value != confirmPassword.value) {
        displayErr(confirmErr, "Passwords do not match");
    } else if (confirmPassword.validity.valueMissing) {
        displayErr(confirmErr, "You stupid.. your passwords should match");
    } else {
        displayErr(confirmErr, "");
        return true;
    }
};

function displayErr(errElem, errMsg) {
    errElem.innerText = errMsg;
}

regUsername.addEventListener("keyup", checkUsername)
name.addEventListener("keyup", checkName);
password.addEventListener("keyup", checkPw);
confirmPassword.addEventListener("focusout", checkConfirmPw);

// form.addEventListener("submit", function (event) {
//     if (!checkName()) {
//         event.preventDefault();
//     }
//     if (!checkPw()) {
//         event.preventDefault();
//     }
//     if (!checkConfirmPw()) {
//         event.preventDefault();
//     }
// });