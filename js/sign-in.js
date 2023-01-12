let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username");
let password = id("password"),
    form = id("form"),
    errorMsgUsername = classes("error-username"),
    errorMsgPassword = classes("error-password");

let failureIconUsername = id("failure-icon-username");
let successIconUsername = id("success-icon-username");
let failureIconPassword = id("failure-icon-password");
let successIconPassword = id("success-icon-password");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    if (username.value.trim() === "") {
        errorMsgUsername = "user name can not blank";
        username.style.border = "2px solid red";
        failureIconUsername.style.opacity = "1"; 
        successIconUsername.style.opacity ="0";
    }
    else {
        errorMsgUsername = "";
        username.style.border = "2px solid green";
        successIconUsername.style.opacity = "1";
        failureIconUsername.style.opacity ="0";

    }

    if (password.value.trim() === "") {
        errorMsgPassword = "password can not blank";
        password.style.border = "2px solid red";
        failureIconPassword.style.opacity = "1";
        successIconPassword.style.opacity ="0";
    }
    else {
        errorMsgPassword = "";
        password.style.border = "2px solid green";
        successIconPassword.style.opacity = "1";
        failureIconPassword.style.opacity ="0";

    }
    $('.error-username').html(errorMsgUsername);
    $('.error-password').html(errorMsgPassword);



});

