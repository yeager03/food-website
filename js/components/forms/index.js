import axios from "axios";

export default function Form() {
    const forms = document.querySelectorAll("form"),
        statusMessage = document.querySelector(".message");

    const messages = {
        succes: "Спасибо! Скоро мы с вами свяжемся!",
        failure: "Ошибка!"
    };

    function postData(form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const data = Object.fromEntries(new FormData(form).entries()),
                button = form.querySelector("button");

            function showMessage(selector, text, ...classes) {
                classes.length > 0 ? selector.classList.add(...classes) : selector.classList.add(classes);
                selector.textContent = text;
                form.reset(); // reset form
            }
            function hideMessage(selector, ...classes) {
                button.innerHTML = `Перезвонить мне`;
                classes.length > 0 ? selector.classList.toggle(...classes) : selector.classList.toggle(classes);
            }

            button.innerHTML = `<img src="img/spinner.svg" alt="" width="30">`;

            axios.post("http://localhost:3000/requests", data)
                .then(() => {
                    showMessage(statusMessage, messages.succes, "message_show");
                    setTimeout(() => {
                        hideMessage(statusMessage, "message_show");
                    }, 2000);
                }).catch(() => {
                    showMessage(statusMessage, messages.failure, "message_show", "message_error");
                    setTimeout(() => {
                        hideMessage(statusMessage, "message_show");
                    }, 2000);
                });
        });
    }
    forms.forEach(form => postData(form));
}
