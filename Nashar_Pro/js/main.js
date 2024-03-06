

let signUpBtn = document.getElementById("signupbtn");
let signInBtn = document.getElementById("signinbtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

signInBtn.onclick = function (){
    nameField.style.maxHeight = 0;
    title.innerHTML = "Sign In";
    signUpBtn.classList.add("disable");
    signInBtn.classList.remove("disable")
}

signUpBtn.onclick = function(){
    nameField.style.maxHeight = "65px";
    title.innerHTML = "Sign Up";
    signInBtn.classList.add("disable");
    signUpBtn.classList.remove("disable")
}
