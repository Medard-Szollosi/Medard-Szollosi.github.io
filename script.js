function toggleMenu() {
    const nav = document.querySelector('.navbar ul');
    nav.classList.toggle('active');
}

// Hide text overlays when clicked
function hideText() {
    document.querySelectorAll('.tag').forEach(tag => {
        tag.style.display = 'none';
    });
}

// Show/hide CV when clicking profile image
function toggleContent() {
    const image = document.getElementById('profile-image');
    const cvContainer = document.getElementById('cv-container');

    if (cvContainer.style.display === 'none' || cvContainer.style.display === '') {
        cvContainer.style.display = 'block';
        image.style.display = 'none';
    } else {
        cvContainer.style.display = 'none';
        image.style.display = 'block';
    }
}

// Flip portfolio images to show text
function toggleFlip(id) {
    const image = document.getElementById(id);
    const text = document.getElementById(id + '-text');

    if (text.style.display === 'none' || text.style.display === '') {
        text.style.display = 'block';
        image.style.opacity = '0.3';
    } else {
        text.style.display = 'none';
        image.style.opacity = '1';
    }
}
