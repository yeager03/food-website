import axios from "axios";

class Card {
    constructor(src, alt, title, descr, price, parentSeelector, ...classes) {
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.price = price;
        this.classes = classes;
        // methods, transfer, parentNode
        this.parentNode = document.querySelector(parentSeelector);
        this.transfer = 27;
        this.changeToUAH();
    }
    changeToUAH() {
        this.price = this.price * this.transfer;
    }
    render() {
        const element = document.createElement("div");
        this.classes.length > 0 ? element.classList.add(...this.classes) : element.classList.add("menu__item");

        element.innerHTML = `
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
        `;
        this.parentNode.append(element);
    }
}

export default function Cards() {
    axios.get("http://localhost:3000/menu").then(({ data }) => {
        data.forEach(card => {
            new Card(card.img, card.alting, card.title, card.descr, card.price, ".menu__field .container", "menu__item").render();
        });
    });
}

