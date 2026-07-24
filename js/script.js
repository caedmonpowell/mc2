const cube = document.getElementById("cube");

let rotation = 0;

function animate() {

    rotation += 0.02;

    cube.style.transform = `
        translate(-50%, -50%)
        rotateX(-10deg)
        rotateY(${rotation}deg)
        scale(1.35)
    `;

    requestAnimationFrame(animate);

}

animate();


// --------------------
// Menu Music
// --------------------

const music = document.getElementById("menuMusic");

const songs = [
    "sounds/menu1.ogg",
    "sounds/menu2.ogg",
    "sounds/menu3.ogg",
    "sounds/menu4.ogg"
];

function playRandomSong() {

    const random = Math.floor(Math.random() * songs.length);

    music.src = songs[random];

    music.volume = 0.25;      // 25% volume

    music.play();

}

music.addEventListener("ended", playRandomSong);

// Browsers block autoplay until user interaction.
window.addEventListener("click", function startMusic() {

    playRandomSong();

    window.removeEventListener("click", startMusic);

}, { once: true });
