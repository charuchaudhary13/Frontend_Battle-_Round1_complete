// Toggle light/dark mode
document.addEventListener('DOMContentLoaded', function () {
  const modeToggle = document.getElementById('modeToggle');
  if (modeToggle) {
    modeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      document.body.classList.toggle('light-mode');
    });
  }
});
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  // Wait for 3 seconds before starting fade out
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500); // matches CSS transition
  }, 3000); // change this to match your loader video duration (in ms)
});

