const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

const jumpSound = new Audio("Fjump.wav");
const hitSound = new Audio("Fhit.wav");

let isAlive = true;

// Jump controls
document.addEventListener("keydown", (e) => {
  if (e.code === "Space") jump();
});

document.addEventListener("click", jump);
document.addEventListener("touchstart", jump);

function jump() {
  if (!dino.classList.contains("jump") && isAlive) {
    dino.classList.add("jump");
    jumpSound.currentTime = 0;
    jumpSound.play();

    setTimeout(() => {
      dino.classList.remove("jump");
    }, 500);
  }
}

// Collision detection
const checkCollision = setInterval(() => {
  if (!isAlive) return;

  const dinoBottom = parseInt(
    window.getComputedStyle(dino).getPropertyValue("bottom")
  );

  const cactusRight = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("right")
  );

  // Adjust values if you resize images
  if (cactusRight > 520 && cactusRight < 570 && dinoBottom < 40) {
    isAlive = false;
    hitSound.play();
    cactus.style.animation = "none";
    cactus.style.display = "none";

    setTimeout(() => {
      alert("Game Over!");
      location.reload();
    }, 300);
  }
}, 10);
