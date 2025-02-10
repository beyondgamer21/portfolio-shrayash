document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector(".morph");
    setInterval(() => {
        title.style.transform = `scale(${1 + Math.random() * 0.2})`;
    }, 1000);
});
