function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
    const photoContainer = document.getElementById("photo-container");
    const profilePic = document.getElementById("profile-pic");
    const overlay = document.getElementById("overlay");
    const cv = document.getElementById("cv");

    let overlayClicked = false; // Track if the first click on overlay happened

    if (photoContainer && profilePic && overlay && cv) {
        // Handle the first click (on the overlay)
        overlay.addEventListener("click", () => {
            if (!overlayClicked) {
                // First click: Hide the overlay, reveal the picture
                overlay.classList.add("hidden");
                profilePic.classList.remove("hidden");
                overlayClicked = true; // Mark that overlay has been clicked
            }
        });

        // Handle the second click (on the picture itself)
        profilePic.addEventListener("click", () => {
            if (overlayClicked) {
                // Second click: Hide the picture and show the CV
                profilePic.classList.add("hidden");
                setTimeout(() => {
                    photoContainer.style.display = "none"; // Hide container
                    cv.style.display = "block"; // Show CV
                }, 500);
            }
        });
    }
});
