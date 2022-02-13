export default function Timer(date) {
    const deadline = date;

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()), // разница в милисекундах
            days = Math.floor(t / (1000 * 60 * 60 * 24)), // mm / (1000mm * 60s * 60m * 24h) = days
            hours = Math.floor((t / (1000 * 60 * 60)) % 24), // (mm / (1000mm * 60s * 60m)) % 24 = remainder hours
            minutes = Math.floor((t / 1000 / 60) % 60), // (mm / 1000mm / 60s) % 60 = remainder minutes
            seconds = Math.floor((t / 1000) % 60); // (mm /1000 mm) % 60 = remainder seconds

        return {
            t,
            days,
            hours,
            minutes,
            seconds,
        };
    }


    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector("#hours"),
            minutes = timer.querySelector("#minutes"),
            seconds = timer.querySelector("#seconds"),
            // function setZero, timerInterval
            getZero = number => number >= 0 && number < 10 ? `0${number}` : number,
            timeInterval = setInterval(updateClock, 1000);

        updateClock(); // in first time, we will init our timer with the new date

        function updateClock() {
            const { t, days: d, hours: h, minutes: m, seconds: s } = getTimeRemaining(endtime);

            days.textContent = getZero(d);
            hours.textContent = getZero(h);
            minutes.textContent = getZero(m);
            seconds.textContent = getZero(s);

            if (t <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock(".timer", deadline);
}