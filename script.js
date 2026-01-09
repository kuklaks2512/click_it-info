document.getElementById('playBtn').addEventListener('click', () => {
    window.open('http://127.0.0.1:5500/game%20itself/index.html');
});

document.getElementById('subscribeForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Дякуємо за підписку!');
    e.target.reset();
});