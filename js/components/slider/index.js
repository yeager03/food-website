export default function Slider() {
    const next = document.querySelector(".offer__slider-next"),
        prev = document.querySelector(".offer__slider-prev"),
        slides = document.querySelectorAll(".offer__slide"),
        total = document.querySelector("#total"),
        current = document.querySelector("#current"),
        slidesWrapper = document.querySelector(".offer__slider-wrapper"),
        slidesField = document.querySelector(".offer__slider-inner"),
        width = getComputedStyle(slidesWrapper).width; // 650px

    let index = 1;
    let offset = 0;

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${index}`;
    }
    else {
        total.textContent = slides.length;
        current.textContent = index;
    }

    slidesField.style.width = 100 * slides.length + "%"; // 400% = 2600px
    slidesField.style.display = "flex";
    slidesField.style.transition = "0.5s all ease-out";

    slidesWrapper.style.overflow = "hidden";

    slides.forEach(slide => {
        slide.style.width = width; // 650px
    });

    const returnNumb = (strNumb) => +strNumb.replace(/\D/g, "");

    next.addEventListener("click", () => {
        if (offset === returnNumb(width) * (slides.length - 1)) { // 1950px === 1950px
            offset = 0;
        } else {
            offset = offset + returnNumb(width); // +650px
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (index === slides.length) {
            index = 1;
        } else {
            index++;
        }

        if (slides.length < 10) {
            current.textContent = `0${index}`;
        } else {
            current.textContent = index;
        }
    });


    prev.addEventListener("click", () => {
        if (offset === 0) { // 0 === 0
            offset = returnNumb(width) * (slides.length - 1); // 1950px
        } else {
            offset = offset - returnNumb(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (index == 1) {
            index = slides.length;
        } else {
            index--;
        }

        if (slides.length < 10) {
            current.textContent = `0${index}`;
        } else {
            current.textContent = index;
        }
    });
}
