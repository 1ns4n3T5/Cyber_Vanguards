let lastScrollTop = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down - Hide navbar
        header.classList.add("hidden-header");
    } else {
        // Scrolling up - Show navbar
        header.classList.remove("hidden-header");
    }

    lastScrollTop = scrollTop;
});
