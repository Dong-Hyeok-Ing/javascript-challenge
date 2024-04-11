(function () {
    const bookmarkBar = document.getElementById("bookmark-bar");
    const bookMarkOpen = document.getElementById("bookmark-open");
    const bookMarkClose = document.getElementById("bookmark-close");

    const isBookMarkBarOpen = localStorage.getItem("isBookMarkBarOpen");
    if (isBookMarkBarOpen === "close") {

        bookmarkBar.style.display = "none";
        bookMarkOpen.style.display = "none";
        bookMarkClose.style.display = "flex";
    } else {

        bookmarkBar.style.display = "block";
        bookMarkOpen.style.display = "flex";
        bookMarkClose.style.display = "none";
    }

    const bookmarkBarToggle = () => {
        let isBookMarkBarOpen = localStorage.getItem("isBookMarkBarOpen");

        if (isBookMarkBarOpen === "close") {
            localStorage.setItem("isBookMarkBarOpen", "open");
            bookmarkBar.style.display = "block";
            bookMarkOpen.style.display = "flex";
            bookMarkClose.style.display = "none";
            return;
        }

        localStorage.setItem("isBookMarkBarOpen", "close");
        bookmarkBar.style.display = "none";
        bookMarkOpen.style.display = "none";
        bookMarkClose.style.display = "flex";

    };

    document.getElementById("bookmark-open-btn").addEventListener("click", bookmarkBarToggle);
    document.getElementById("bookmark-close-btn").addEventListener("click", bookmarkBarToggle);
})();