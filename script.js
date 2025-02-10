@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background: linear-gradient(120deg, #000, #222, #444);
    color: white;
    text-align: center;
    overflow-x: hidden;
    cursor: default; /* Default system cursor */
}

/* Sections */
.hero {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.signature {
    font-size: 50px;
    font-weight: 600;
    background: linear-gradient(to right, #ff8a00, #da1b60);
    -webkit-background-clip: text;
    color: transparent;
    animation: fadeIn 1.5s ease-in-out;
}

.projects {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 50px;
}

.project-card {
    width: 200px;
    height: 200px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    transition: transform 0.3s;
}

.project-card:hover {
    transform: scale(1.05);
}

@keyframes fadeIn {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
}
