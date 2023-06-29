/*Operation of the modal registration and authorization window*/
let buttonSignUp = document.querySelectorAll("#buttonSignUp");
let upcancel = document.querySelector("#upcancel");
let upmodal = document.querySelector("#upmodal");
let upoveraly = document.querySelector("#upoveraly");
let upInput = document.querySelector("#upinput")

upmodal.addEventListener("submit", function (e) {
    e.target.reset();
    upmodal.classList.remove("open");
    confirm("Welcome!")
})

buttonSignUp.forEach(function (btnSignUp) {
    btnSignUp.addEventListener("click", function () {
        upmodal.classList.add("open");
    })
})

upcancel.addEventListener("click", function () {
    upmodal.classList.remove("open");

})

upoveraly.addEventListener("click", function () {
    upmodal.classList.remove("open");
})

/*Sign up for our newsletter*/
let signForm = document.querySelector("#signForm");

signForm.addEventListener("submit", function (e) {
    e.target.reset();
    confirm("You have successfully subscribed!");
})