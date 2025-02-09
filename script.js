document.addEventListener("DOMContentLoaded", function() {
    const profileImage = document.getElementById("profileImage");
    const cvContainer = document.getElementById("cvContainer");
    const backButton = document.getElementById("backButton");

    if (!profileImage || !cvContainer || !backButton) {
        console.error("One or more elements not found! Check your HTML structure.");
        return;
    }

    function showCV() {
        console.log("Profile image clicked/tapped!"); // Debugging log
        profileImage.style.display = "none";  // Hide image
        cvContainer.style.display = "block";  // Show CV
        setTimeout(() => cvContainer.style.opacity = "1", 100);
        backButton.style.display = "block";
    }

    function hideCV() {
        console.log("Back button clicked/tapped!"); // Debugging log
        cvContainer.style.opacity = "0";
        setTimeout(() => {
            cvContainer.style.display = "none";
            profileImage.style.display = "block";
            backButton.style.display = "none";
        }, 500);
    }

    // Listen for both mouse clicks and touch events
    profileImage.addEventListener("click", showCV);
    profileImage.addEventListener("touchstart", showCV);

    backButton.addEventListener("click", hideCV);
    backButton.addEventListener("touchstart", hideCV);
});
