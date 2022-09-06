const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');


function error(input, message) {
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}


function success(input) {
    input.className = 'form-control is-valid'
}


function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        error(input, `${input.id} must be ${min} characters`);
    } else if (input.value.length > max) {
        error(input, `${input.id} should not exceed ${max} characters`);
    } else {
        success(input);
    }
}

function checkPasswords(pass1, pass2) {
    if (pass1.value !== pass2.value) {
        error(pass2, 'password mismatch!');
    } else {
        success(pass2);
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (username.value === '') {
        error(username, 'please enter username!');
    } else {
        checkLength(username, 6, 12);
    } if (email.value === '') {
        error(email, 'please enter valid email!');
    } else if (!validateEmail(email.value)) {
        error(email, 'Invalid Mail!');
    } else {
        success(email);
    } if (password.value === '') {
        error(password, 'please enter valid password!');
    } else {
        checkLength(password, 6, 30);
    } if (repassword.value === '') {
        error(repassword, 'please enter re-password!');
    } else {
        checkPasswords(password, repassword);
    }
});