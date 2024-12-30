document.addEventListener("DOMContentLoaded", () => {
    const textContainer = document.querySelector(".text-container");
    textContainer.classList.add("active");

    // Optional: Hide the preloader after the animation finishes
    setTimeout(() => {
        const preloader = document.getElementById("preloader");
        preloader.style.opacity = "0"; // Fade out effect
        preloader.style.transition = "opacity 0.5s ease";

        setTimeout(() => {
            preloader.style.display = "none"; // Hide completely
            document.body.style.overflow = "auto"; // Enable scrolling
        }, 500); // Wait for fade-out to complete
    }, 2500); // Match the duration of the transition
});
