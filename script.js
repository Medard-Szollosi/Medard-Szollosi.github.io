function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
    const photoContainer = document.getElementById("photo-container");
    const profilePic = document.getElementById("profile-pic");
    const overlay = document.getElementById("overlay");
    const cv = document.getElementById("cv");

    let overlayClicked = false; // Track if the first click happened

    if (photoContainer && profilePic && overlay && cv) {
        photoContainer.addEventListener("click", () => {
            if (!overlayClicked) {
                // First click: Hide the overlay, reveal the picture
                overlay.classList.add("hidden");
                overlayClicked = true; // Mark overlay as clicked
            } else {
                // Second click: Hide the picture and show CV
                profilePic.classList.add("hidden");
                setTimeout(() => {
                    photoContainer.style.display = "none"; // Hide container
                    cv.style.display = "block"; // Show CV
                }, 500);
            }
        });
    }
});
