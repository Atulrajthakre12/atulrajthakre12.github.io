document.addEventListener("DOMContentLoaded", function () {
    console.log("Official website loaded successfully!");

    alert("स्वागत है! अतुल राज ठाकरे की आधिकारिक वेबसाइट पर।");
});
function togglePoetry(header) {
    const card = header.parentElement;
    const body = card.querySelector('.poetry-body');
    
    if (body.style.display === "none") {
        body.style.display = "block";
        card.classList.add("active");
    } else {
        body.style.display = "none";
        card.classList.remove("active");
    }
}
function showCategory(category) {
    // सभी सेक्शन को छिपाएँ
    const sections = document.querySelectorAll('.category-content');
    sections.forEach(sec => {
        sec.style.display = 'none';
    });

    // केवल चुनी गई कैटेगरी को दिखाएँ
    const targetSection = document.getElementById(category + '-section');
    if (targetSection) {
        targetSection.style.display = 'block';
    }
}