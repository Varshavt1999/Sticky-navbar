const headerEl = document.getElementById("header");
const bottomContainerEl = document.querySelector(".home");
console.log(bottomContainerEl.offsetTop, "bottomContainerEl");
console.log(headerEl.offsetHeight, "headerEl");
console.log(bottomContainerEl.offsetTop - headerEl.offsetHeight, "-");
window.addEventListener("scroll", () => {
    // if (window.scrollY !== 0) {
    //     headerEl.classList.add("active");
    // } else {
    //     headerEl.classList.remove("active");
    // }
    if (window.scrollY > bottomContainerEl.offsetTop - headerEl.offsetHeight) {
        headerEl.classList.add("active");
    } else {
        headerEl.classList.remove("active");
    }
});
