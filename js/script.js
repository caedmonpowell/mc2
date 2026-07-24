// 
// Panorama Animation
// 

const cube = document.getElementById("cube");
const splash = document.getElementById("splash");

let rotation = 0;

function animate() {

    // Panorama rotation
    rotation += 0.02;

    cube.style.transform = `
        translate(-50%, -50%)
        rotateX(-10deg)
        rotateY(${rotation}deg)
        scale(1.35)
    `;

    // Minecraft-style splash animation
    const t = performance.now() / 1000;

    const scale =
        1.8 -
        Math.abs(Math.sin(t * Math.PI * 2)) * 0.1;

    splash.style.transform =
        `rotate(-20deg) scale(${scale / 1.8})`;

    requestAnimationFrame(animate);

}

animate();


// 
// Menu Music
// 

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

    music.volume = 0.30;

    music.play().catch(() => {});

}

music.addEventListener("ended", playRandomSong);

// Browsers require interaction before playing audio
window.addEventListener("pointerdown", function startMusic() {

    playRandomSong();

    window.removeEventListener("pointerdown", startMusic);

}, { once: true });


// 
// Minecraft Splashes
// 

fetch("texts/splashes.txt")
    .then(response => response.text())
    .then(text => {

        const splashes = text
            .split(/\r?\n/)
            .map(line => line.trim())
            .filter(line => line.length > 0);

        // Minecraft ignores one specific splash
        const filtered = splashes.filter(line => line !== "missingno");

        const random =
            filtered[Math.floor(Math.random() * filtered.length)];

        splash.textContent = random;

    })
    .catch(() => {

        splash.textContent = "missingno";

    });
