const song = document.getElementById("bgSong");

function goToPage(pageNum) {
  // Hide all pages
  for (let i = 1; i <= 4; i++) {
    document.getElementById("page" + i).classList.remove("active");
  }

  // Show selected page
  document.getElementById("page" + pageNum).classList.add("active");

  // Start song after first next click
  if (pageNum >= 2) {
    song.play().catch(() => {
      console.log("Autoplay blocked. User interaction needed.");
    });
  }
}

function stopMusic() {
  song.pause();
  song.currentTime = 0;
  alert("I Love you too 💖😘");
}

function createDots(dotContainerId) {
  const container = document.getElementById(dotContainerId);

  for (let i = 0; i < 40; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");

    dot.style.left = Math.random() * 100 + "vw";
    dot.style.animationDuration = (3 + Math.random() * 5) + "s";
    dot.style.opacity = Math.random();

    container.appendChild(dot);
  }
}

createDots("dots1");
createDots("dots2");
createDots("dots3");
createDots("dots4");
