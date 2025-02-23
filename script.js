document.addEventListener("DOMContentLoaded", function () {
    const profileImage = document.getElementById("profile-image");
    const cvContainer = document.getElementById("cv-container");
    const textOverlay = document.querySelector(".text-overlay");
    const menuIcon = document.querySelector(".menu-icon");
    const navList = document.querySelector(".navbar ul");

    let wordsLeft = 3;  // Track how many words are still visible

    // Toggle Hamburger Menu
    menuIcon.addEventListener("click", function () {
        navList.classList.toggle("active");
    });

    // Hide text when clicked and enable image click only after all words are gone
    document.querySelectorAll('.tag').forEach(tag => {
        tag.addEventListener("click", function () {
            tag.style.display = 'none';
            wordsLeft--;

            if (wordsLeft === 0) {
                textOverlay.style.display = 'none';
                profileImage.style.pointerEvents = 'auto';  // Enable clicking on the image
            }
        });
    });

    // Show CV when clicking profile image
    profileImage.addEventListener("click", function () {
        if (wordsLeft === 0) {  // Ensure all words are gone
            cvContainer.style.display = 'block';
            profileImage.style.display = 'none';
        }
    });
});

