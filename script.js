function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
    const profilePic = document.getElementById("profile-pic");
    const overlay = document.getElementById("overlay");
    const cv = document.getElementById("cv");

    if (profilePic && overlay && cv) {
        profilePic.addEventListener("click", () => {
            overlay.classList.add("hidden"); // Fade out the words
            setTimeout(() => {
                profilePic.style.display = "none"; // Hide the picture after words fade out
                cv.style.display = "block"; // Show the CV
            }, 500); // Wait for fade-out animation before hiding image
        });
    }
});
