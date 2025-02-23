function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
    const photoContainer = document.getElementById("photo-container");
    const profilePic = document.getElementById("profile-pic");
    const overlay = document.getElementById("overlay");
    const overlayTexts = document.querySelectorAll(".overlay-text"); // Select all words in the overlay
    const cv = document.getElementById("cv");

    if (photoContainer && profilePic && overlay && cv) {
        // Hide overlay and show profile picture when any word is clicked
        overlayTexts.forEach(word => {
            word.addEventListener("click", () => {
                overlay.classList.add("hidden"); // Fade out the overlay
                profilePic.classList.remove("hidden"); // Show the profile picture
            });
        });

        // When profile picture is clicked, show CV
        profilePic.addEventListener("click", () => {
            overlay.classList.add("hidden"); // Hide overlay (if it wasn't already hidden)
            profilePic.classList.add("hidden"); // Hide the profile picture
            setTimeout(() => {
                photoContainer.style.display = "none"; // Hide the entire container
                cv.style.display = "block"; // Show the CV
            }, 500); // Wait for fade-out before hiding
        });
    }
});
