document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    themeToggle.addEventListener("click", function() {
        body.classList.toggle("dark-mode");
        themeToggle.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });
});
