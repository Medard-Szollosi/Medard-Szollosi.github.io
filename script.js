function toggleMenu() {
    const nav = document.querySelector('.navbar');
    nav.classList.toggle('active');
}

function toggleContent() {
    const image = document.getElementById('profile-image');
    const cvContainer = document.getElementById('cv-container');
    if (cvContainer.style.display === 'none') {
        cvContainer.style.display = 'block';
        image.style.display = 'none';
    } else {
        cvContainer.style.display = 'none';
        image.style.display = 'block';
    }
}

function hideText() {
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.style.display = 'none';
    });
}

function toggleFlip(id) {
    const image = document.getElementById(id);
    const text = document.getElementById(id + '-text');
    if (text.style.display === 'none') {
        text.style.display = 'block';
        image.style.transform = 'rotateY(180deg)';
    } else {
        text.style.display = 'none';
        image.style.transform = 'rotateY(0)';
    }
}
