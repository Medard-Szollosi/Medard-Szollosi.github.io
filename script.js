document.addEventListener("DOMContentLoaded", function () {
    const profileImage = document.getElementById("profile-image");
    const cvContainer = document.getElementById("cv-container");
    const textOverlay = document.querySelector(".text-overlay");

    // Hide text when clicked
    document.querySelectorAll('.tag').forEach(tag => {
        tag.addEventListener("click", function () {
            tag.style.display = 'none';

            // Check if all words are gone
            if (document.querySelectorAll('.tag[style="display: none;"]').length === 3) {
                textOverlay.style.display = 'none';
            }
        });
    });

    // Show CV when clicking profile image
    profileImage.addEventListener("click", function () {
        if (cvContainer.style.display === 'none' || cvContainer.style.display === '') {
            cvContainer.style.display = 'block';
            profileImage.style.display = 'none';
        }
    });
});


