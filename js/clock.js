(function () {
    const dateElement = document.getElementById("date");
    const timeElement = document.getElementById("time");
    const spanElement = timeElement.querySelector("span");

    const modifyNumber = (number) => {
        return parseInt(number) < 10 ? "0"+number : number;
    }


    const getNowDate = () => {
        const nowDate = new Date();
        const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'];
        let month = modifyNumber(nowDate.getMonth() +1);
        let date = modifyNumber(nowDate.getDate());
        let day = nowDate.getDay();

        setNowDate(month, date, week[day]);
    }

    const setNowDate = (month, date, day) => {
        dateElement.textContent = `${month}월 ${date}일 ${day}`
    }

    function getNowTime() {
        var date = new Date();
        let hr = modifyNumber(date.getHours());
        let min = modifyNumber(date.getMinutes());
        let sec = date.getSeconds();

        setNowTime(hr, min, sec);
    }

    const setNowTime = (hr, min, sec) => {
        timeElement.textContent = `${hr} : ${min}`;
        spanElement.textContent = `${sec}`;
        timeElement.append(spanElement);
    }

    getNowDate();
    getNowTime();
    setInterval(getNowTime, 1000);
})();