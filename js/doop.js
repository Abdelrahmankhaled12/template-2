let myspan = document.getElementById("btn");
let img = document.querySelectorAll(".img");
myspan.onclick = function () {
    img[0].classList.toggle("hidden");
    img[1].classList.toggle("hidden");
    img[2].classList.toggle("hidden");
    if( img[0].classList.contains("hidden") === false) {
        myspan.textContent = "Show loss";
    }else {
        myspan.textContent = "Show more";
    }
}
//======================================================================
// =====================================================================

let myemail =document.getElementById("mail");
let mysubject =document.getElementById("subj");
let mymessage = document.getElementById("message");

document.forms[0].onsubmit = function (event) {
    let email = false;
    let subject = false;
    let message = false;

    if(myemail.value!=="") {
        email = true;
    }

    if(mymessage.value !== "") {
        message = true;
    }

    if(mysubject.value !== "") {
        subject = true;
    }

    if(email=== false || subject=== false || message === false) {
        event.preventDefault();
    }
}

// ========================================================================
// ========================================================================
let button =document.getElementById("btn-2");
let hiddenTwo = document.getElementById("hidden-2");

button.onclick = function (){
    hiddenTwo.classList.toggle("hidden-2");
    if(hiddenTwo.classList.contains("hidden-2") === false) {
        button.textContent = "Show less Stories.";
    }else {
        button.textContent = "Show More Stories.";
    }
}

// ================================================================
// ================================================================
