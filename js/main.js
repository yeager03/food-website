"use strict";

import Tabs from "./components/tabs";
import Timer from "./components/timer";
import Modal from "./components/modal";
import Cards from "./components/cards";
import Form from "./components/forms";
import Slider from "./components/slider";
import Calculator from "./components/calc";

window.addEventListener("load", () => {
    Tabs();
    Timer("2022-05-15");
    Modal();
    Cards();
    Form();
    Slider();
    Calculator();
});

