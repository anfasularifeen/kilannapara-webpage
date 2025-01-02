document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const mainContent = document.querySelector("main");

  // Duration settings
  const typewriterDuration = 6000; // 6 seconds for typing effect
  const resizeDuration = 1500; // 1.5 seconds for header resize
  const buttonDelay = 500; // 0.5 seconds after resizing to show buttons

  // After typing is complete, resize the header
  setTimeout(() => {
      header.classList.add("shrink"); // Add shrink class to header
  }, typewriterDuration);

  // After resizing, show the buttons and main content
  setTimeout(() => {
      mainContent.style.opacity = "1"; // Show main content
      document.body.classList.add("allow-scroll"); // Enable scrolling
  }, typewriterDuration + resizeDuration + buttonDelay);
});
document.body.style.overflow = "auto"; // Force scrolling

