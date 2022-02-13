export default function Tabs() {
    const btns = document.querySelectorAll(".tabheader__item"),
        btnsParent = document.querySelector(".tabheader__items"),
        tabsContent = document.querySelectorAll(".tabcontent");

    function hideTabContent() {
        tabsContent.forEach(tab => tab.classList.remove("tabcontent__active", "tabcontent__animation"));
        btns.forEach(btn => btn.classList.remove("tabheader__item_active"));
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add("tabcontent__active", "tabcontent__animation");
        btns[i].classList.add("tabheader__item_active");
    }

    btnsParent.addEventListener("click", (e) => {
        if (e.target && e.target.classList.contains("tabheader__item")) {
            btns.forEach((btn, i) => {
                if (e.target === btn) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}