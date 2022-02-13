export default function Modal() {
    const modalBtns = document.querySelectorAll("[data-modal]"),
        modal = document.querySelector(".modal");

    function modalToggleClass() {
        modal.classList.toggle("modal__show");

        if (modal.classList.contains("modal__show")) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.removeAttribute("style");
        }
        clearTimeout(modalTimerId);
    }

    modalBtns.forEach(btn => {
        btn.addEventListener("click", modalToggleClass);
    });

    modal.addEventListener("click", (e) => {
        if (e.target && (e.target === modal || e.target.hasAttribute("data-close"))) {
            modalToggleClass();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.code === "Escape" && modal.classList.contains("modal__show")) {
            modalToggleClass();
        }
    });

    const modalTimerId = setTimeout(modalToggleClass, 300000000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            modalToggleClass();
            window.removeEventListener("scroll", showModalByScroll);
        }
    }

    window.addEventListener("scroll", showModalByScroll);
}