document.addEventListener("DOMContentLoaded", function() {
    const profileImage = document.getElementById("profileImage");
    const cvContainer = document.getElementById("cvContainer");
    const backButton = document.getElementById("backButton");

    profileImage.addEventListener("click", function() {
        this.style.display = "none";  // Hide image
        cvContainer.style.display = "block";  // Show CV
        setTimeout(() => cvContainer.style.opacity = "1", 100);
        backButton.style.display = "block";
    });

    backButton.addEventListener("click", function() {
        cvContainer.style.opacity = "0";
        setTimeout(() => {
            cvContainer.style.display = "none";
            profileImage.style.display = "block";
            backButton.style.display = "none";
        }, 500);
    });
});