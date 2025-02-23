function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
    const photoContainer = document.getElementById("photo-container");
    const profilePic = document.getElementById("profile-pic");
    const overlay = document.getElementById("overlay");
    const cv = document.getElementById("cv");

    let overlayClicked = false; // Track if the overlay was clicked

    if (photoContainer && profilePic && overlay && cv) {
        // Handle the first click (on the overlay)
        overlay.addEventListener("click", () => {
            if (!overlayClicked) {
                // First click: Hide the overlay and show the picture
                overlay.classList.add("hidden"); // Hide the overlay
                profilePic.classList.remove("hidden"); // Show the profile picture
                overlayClicked = true; // Mark overlay as clicked
            }
        });

        // Handle the second click (on the profile picture)
        profilePic.addEventListener("click", () => {
            if (overlayClicked) {
                // Second click: Hide the profile picture and show the CV
                profilePic.classList.add("hidden");
                setTimeout(() => {
                    photoContainer.style.display = "none"; // Hide the container
                    cv.style.display = "block"; // Show the CV
                }, 500);
            }
        });
    }
});
