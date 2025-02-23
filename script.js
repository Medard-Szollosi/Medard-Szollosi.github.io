document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navList = document.querySelector(".navbar ul");

    // Toggle the menu
    menuIcon.addEventListener("click", function () {
        navList.classList.toggle("active");
    });

    // Hide text overlays when clicked
    document.querySelectorAll('.tag').forEach(tag => {
        tag.addEventListener("click", function () {
            tag.style.display = 'none';
        });
    });

    // Show/hide CV when clicking profile image
    const profileImage = document.getElementById('profile-image');
    const cvContainer = document.getElementById('cv-container');

    profileImage.addEventListener("click", function () {
        if (cvContainer.style.display === 'none' || cvContainer.style.display === '') {
            cvContainer.style.display = 'block';
            profileImage.style.display = 'none';
        } else {
            cvContainer.style.display = 'none';
            profileImage.style.display = 'block';
        }
    });

    // Flip portfolio images to show text
    document.querySelectorAll('.portfolio-item img').forEach(img => {
        img.addEventListener("click", function () {
            const text = img.nextElementSibling;
            if (text.style.display === 'none' || text.style.display === '') {
                text.style.display = 'block';
                img.style.opacity = '0.3';
            } else {
                text.style.display = 'none';
                img.style.opacity = '1';
            }
        });
    });
});
