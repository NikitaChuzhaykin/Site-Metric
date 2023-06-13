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

/*One slider*/
let sliderImg = document.querySelector("#sliderImg");
let sliderImgItems = Array.from(sliderImg.children);
let parrowLeft = document.querySelector("#parrowLeft");
let parrowRight = document.querySelector("#parrowRight");

sliderImgItems.forEach(function (slider, index) {

    slider.dataset.index = index;
    sliderImgItems[0].setAttribute("data-active", "");


    if (index > 0) {
        slider.classList.add("dn");
    }

    slider.addEventListener("click", function () {
        slider.classList.add("dn");
        slider.removeAttribute("data-active");

        if (index + 1 === sliderImgItems.length) {
            nextSliderIndex = 0;
        } else {
            nextSliderIndex = index + 1;
        }

        let nextSlider = sliderImg.querySelector(`[data-index="${nextSliderIndex}"]`);
        nextSlider.setAttribute("data-active", "");
        nextSlider.classList.remove("dn");

    })

    parrowRight.onclick = function () {
        showNextSlider("next");
    }

    parrowLeft.onclick = function () {
        showNextSlider("prev");
    }
})

function showNextSlider(direction) {
    let sliderCurrent = sliderImg.querySelector("[data-active]");
    let sliderCurrentIndex =  +sliderCurrent.dataset.index;

    sliderCurrent.classList.add("dn");
    sliderCurrent.removeAttribute("data-active");

    if (direction === "next") {
        if (sliderCurrentIndex + 1 === sliderImgItems.length) {
            nextSliderIndex = 0;
        } else {
            nextSliderIndex = sliderCurrentIndex + 1;
        }
    } else if (direction === "prev") {
        if (sliderCurrentIndex === 0) {
            nextSliderIndex = sliderImgItems.length - 1;
        } else {
            nextSliderIndex = sliderCurrentIndex - 1;
        }
    }

    let nextSlider = sliderImg.querySelector(`[data-index="${nextSliderIndex}"]`);
    nextSlider.setAttribute("data-active", "");
    nextSlider.classList.remove("dn");
}

/*Two slider*/
let sliderImgTwo = document.querySelector("#sliderImgTwo");
let sliderImgItemsTwo = Array.from(sliderImgTwo.children);
let parrowRightTwo = document.querySelector("#parrowRightTwo");
let parrowLeftTwo = document.querySelector("#parrowLeftTwo");

sliderImgItemsTwo.forEach(function (slider, index) {

    slider.dataset.index = index;
    sliderImgItemsTwo[0].setAttribute("data-active", "")

    if (index > 0) {
        slider.classList.add("dn");
    }

    slider.addEventListener("click", function() {
        slider.classList.add("dn");
        slider.removeAttribute("data-active")

        if (index + 1 > sliderImgItemsTwo.length-1) {
            nextSliderIndex = 0;
        } else {
            nextSliderIndex = index + 1;
        }

        let nextSlider = sliderImgTwo.querySelector(`[data-index="${nextSliderIndex}"]`);
        nextSlider.classList.remove("dn")
        nextSlider.setAttribute("data-active", "")
    })

    parrowRightTwo.onclick = function() {
        showNextSliderTwo("next")
    }

    parrowLeftTwo.onclick = function() {
        showNextSliderTwo("prev")
    }
})

function showNextSliderTwo(directionTwo) {
    let sliderCurrentTwo = sliderImgTwo.querySelector("[data-active]");
    let sliderCurrentIndexTwo =  +sliderCurrentTwo.dataset.index;

    sliderCurrentTwo.classList.add("dn");
    sliderCurrentTwo.removeAttribute("data-active");

    if (directionTwo === "next") {
        if (sliderCurrentIndexTwo + 1 === sliderImgItemsTwo.length - 1) {
            nextSliderIndex = 0;
        } else {
            nextSliderIndex = sliderCurrentIndexTwo + 1;
        }
    } else if (directionTwo === "prev") {
        if (sliderCurrentIndexTwo === 0) {
            nextSliderIndex = sliderImgItemsTwo.length - 1;
        } else {
            nextSliderIndex = sliderCurrentIndexTwo - 1;
        }
    }

    let nextSlider = sliderImgTwo.querySelector(`[data-index="${nextSliderIndex}"]`);
    nextSlider.classList.remove("dn")
    nextSlider.setAttribute("data-active", "")
}