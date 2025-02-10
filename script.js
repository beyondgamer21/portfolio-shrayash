document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.querySelector(".custom-cursor");

    document.addEventListener("mousemove", (e) => {
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
    });

    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            cursor.style.transform = "scale(1.5)";
        });
        card.addEventListener("mouseleave", () => {
            cursor.style.transform = "scale(1)";
        });
    });
});
