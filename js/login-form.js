
let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
    email = id("email"),
    password = id("password"),
    form = id("form"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    engine(username, 0, "username can not be blank");
    engine(email, 1, "email can not be blank");
    engine(password, 2, "password can not be blank");

    formValidation();

});


let engine = (id, serial, message) => {

    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";

        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    }
    else {
        id.style.border = "2px solid green";

        errorMsg[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
        failureIcon[serial].style.opacity = "0";

    }

};

let formValidation = () => {
    if (username.value.trim() !== "" && email.value.trim() !== "" && password.value.trim() !== "") {
        console.log('success');
        accceptData();

    } else {
        console.log('failure');
    }

};



let data = [{}];

let accceptData = () => {
    data.push({
        username: username.value,
        email: email.value,
        password: password.value,

    });
    localStorage.setItem("data", JSON.stringify(data));
    console.log(data);
    moveLognIn();

};

function moveLognIn() {
    location.assign("sign-in.html");
}



function move() {

    let signIn = document.getElementById('singIn');
    signIn.addEventListener(
        "click",
        function(event){
            event.defaultPrevented();
            console.log("clicked sign in");
            moveLognIn();
        }
    )

}

