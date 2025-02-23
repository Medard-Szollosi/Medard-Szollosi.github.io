function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
    const profilePic = document.getElementById("profile-pic");
    const cv = document.getElementById("cv");

    if (profilePic && cv) {
        profilePic.addEventListener("click", () => {
            profilePic.style.display = "none";
            cv.style.display = "block";
        });
    }
});
