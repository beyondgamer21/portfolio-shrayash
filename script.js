// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// GSAP Animations
gsap.from(".signature", { opacity: 0, y: -20, duration: 1.5 });
gsap.from("#hero h2", { opacity: 0, x: -100, duration: 1.2 });
