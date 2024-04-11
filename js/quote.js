(function () {
    const API_URL = "https://random-quote.hyobb.com/";
    const quoteElement = document.getElementById("quote");
    const quoteItem = localStorage.getItem("quote");

    const nowDate = new Date();
    const month = nowDate.getMonth() + 1;
    const date = nowDate.getDate();

    const setQuote = (result) => {
        let quote = { createDate: `${month}-${date}`, quoteData: result };
        localStorage.setItem("quote", JSON.stringify(quote));
        quoteElement.textContent = `"${result}"`;
    };

    const getQuote = async () => {
        try {
            const data = await fetch(API_URL).then((res) => res.json());
            const result = data[1].respond;
            setQuote(result);
        } catch (err) {
            console.log(`err : ${err}`);
            setQuote("오류 발생했는데 보고만 있는 당신은 사용자.!");
        }
    };

    if (!quoteItem || JSON.parse(quoteItem).createDate !== `${month}-${date}`) {
        getQuote();
    } else {
        const { quoteData } = JSON.parse(quoteItem);
        quoteElement.textContent = `"${quoteData}"`;
    }
})();