/*Burger Job*/
let menuBurger = document.querySelector("#menuBurger");
let adaptiveList = document.querySelector("#adaptiveList");
let menuAdaptive = document.querySelector("#menuAdaptive");
let menuCancel = document.querySelector("#menuCancel");


menuBurger.addEventListener("click", function () {
    menuBurger.classList.remove("db");
    menuCancel.classList.add("db");
    menuAdaptive.classList.add("open");
});

menuCancel.addEventListener("click", function () {
    menuBurger.classList.add("db");
    menuCancel.classList.remove("db");
    menuAdaptive.classList.remove("open");
});

adaptiveList.addEventListener("click", function () {
    menuBurger.classList.add("db");
    menuCancel.classList.remove("db");
    menuAdaptive.classList.remove("open");
});