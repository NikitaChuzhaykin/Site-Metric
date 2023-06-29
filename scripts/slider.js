/*One slider*/
let sliderImgOne = document.querySelector("#sliderImgOne");
let sliderImgItemsOne = Array.from(sliderImgOne.children);
let parrowLeftOne = document.querySelector("#parrowLeftOne");
let parrowRightOne = document.querySelector("#parrowRightOne");

let sliderImgTwo = document.querySelector("#sliderImgTwo");
let sliderImgItemsTwo = Array.from(sliderImgTwo.children);
let parrowRightTwo = document.querySelector("#parrowRightTwo");
let parrowLeftTwo = document.querySelector("#parrowLeftTwo");

slider(sliderImgOne, sliderImgItemsOne, parrowLeftOne, parrowRightOne)
slider(sliderImgTwo, sliderImgItemsTwo, parrowRightTwo, parrowLeftTwo)

function slider(sliderImg ,sliderImgItems, parrowLeft, parrowRight) {
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
        let sliderCurrentIndex = +sliderCurrent.dataset.index;

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
}