document.addEventListener("DOMContentLoaded", function () {
    console.log("Official website loaded successfully!");
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
function showCategory(categoryName) {
    // 1. सभी सेक्शन्स छुपाएँ
    const contents = document.querySelectorAll('.category-content');
    contents.forEach(content => {
        content.style.display = 'none';
    });

    // 2. सभी बटन्स से 'active' क्लास हटाएँ
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // 3. चुना हुआ सेक्शन दिखाएँ
    const selectedSection = document.getElementById(categoryName + '-section') || document.getElementById(categoryName);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }

    // 4. क्लिक हुए बटन को एक्टिव बनाएँ
    if (window.event && window.event.currentTarget) {
        window.event.currentTarget.classList.add('active');
    }
}
const sheroList = [
    "शायर • ग़ज़लकार • शेर • कवि",
    "हंसते हुए चेहरे ने ये भ्रम पाल रखा है तेरे ना होने का गम पाल रखा है,",
        "गुजारनी थी जो उम्र गुज़ार दी बैठ गया गला उसे इतनी आवाज़ दी,",
        "खोई उमीद भर नहीं आती होती है रात नींद मगर नहीं आती,",
        "मुसलसल चलता रहे ये सफ़र मेरा काशिद बन जाऊं मैं गली का तेरा,",
];

let currentIndex = 0;
const sherElement = document.getElementById("sher-slider");

if (sherElement) {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % sheroList.length;
        sherElement.style.opacity = 0;
        setTimeout(() => {
            sherElement.innerText = sheroList[currentIndex];
            sherElement.style.opacity = 1;
        }, 300);
    }, 3000);
}