function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
    const photoContainer = document.getElementById("photo-container");
    const profilePic = document.getElementById("profile-pic");
    const overlay = document.getElementById("overlay");
    const overlayTexts = document.querySelectorAll(".overlay-text"); // All the words in the overlay
    const cv = document.getElementById("cv");

    // Step 1: Hide the words and reveal the image
    overlayTexts.forEach(word => {
        word.addEventListener("click", () => {
            // Hide the overlay and reveal the profile picture
            overlay.classList.add("hidden");
            profilePic.classList.remove("hidden");
        });
    });

    // Step 2: Show CV when image is clicked
    profilePic.addEventListener("click", () => {
        overlay.classList.add("hidden"); // Hide overlay (in case it is still visible)
        profilePic.classList.add("hidden"); // Hide the profile picture
        setTimeout(() => {
            photoContainer.style.display = "none"; // Hide the entire photo container
            cv.style.display = "block"; // Show the CV
        }, 500); // Wait for the hidden transition
    });
});

