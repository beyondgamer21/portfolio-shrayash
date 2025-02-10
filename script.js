body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background: #121212;
    color: white;
    transition: background 0.5s, color 0.5s;
}
.preloader {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    z-index: 1000;
    opacity: 1;
    transition: opacity 1s ease-in-out;
}
header {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100;
}
nav ul {
    list-style: none;
    display: flex;
    gap: 15px;
}
nav a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}
nav a:hover {
    color: #ff9800;
}
.section {
    padding: 100px 20px;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}
.animated-text {
    font-size: 2.5rem;
    text-transform: uppercase;
    font-weight: bold;
    animation: fadeInUp 2s ease-in-out;
}
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(50px); }
    to { opacity: 1; transform: translateY(0); }
}
