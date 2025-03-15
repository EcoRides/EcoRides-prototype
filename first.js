const jellyfish = document.querySelector('.jellyfish');

function moveJellyfish() {
    jellyfish.style.top = `${Math.random() * 80}vh`;
    jellyfish.style.left = `${Math.random() * 80}vw`;
}

setInterval(moveJellyfish, 5000);
