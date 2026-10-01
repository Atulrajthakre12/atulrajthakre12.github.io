// 1. Page Load Log
document.addEventListener("DOMContentLoaded", function () {
    console.log("Official website loaded successfully!");
});

// 2. Accordion / Poetry Toggle Function
function togglePoetry(header) {
    const card = header.parentElement;
    const body = card.querySelector('.poetry-body');

    if (body.style.display === "none" || !body.style.display) {
        body.style.display = "block";
        card.classList.add("active");
    } else {
        body.style.display = "none";
        card.classList.remove("active");
    }
}

// 3. Category Switcher Function
function showCategory(categoryName) {
    // Sabhi sections chhipayein
    const contents = document.querySelectorAll('.category-content');
    contents.forEach(content => {
        content.style.display = 'none';
    });

    // Sabhi buttons se 'active' class hatayein
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Chuna hua section dikhayein
    const selectedSection = document.getElementById(categoryName + '-section') || document.getElementById(categoryName);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }

    // Click hue button ko active banayein
    if (window.event && window.event.currentTarget) {
        window.event.currentTarget.classList.add('active');
    }
}

// 4. Sher Slider Logic
const sheroList = [
    "शायर • ग़ज़लकार • शेर • कवि",
    "हंसते हुए चेहरे ने ये भ्रम पाल रखा है तेरे ना होने का गम पाल रखा है",
    "गुजारनी थी जो उम्र गुज़ार दी बैठा गया गला उसे इतनी आवाज़ दी",
    "खोई उम्मीद भर नहीं आती होती है रात नींद मगर नहीं आती",
    "मुसलसल चलता रहे ये सफर मेरा काशिद बन जाऊं मैं गली का तेरा",
    "हौसला ही तो था जो टूटा है, हमें गैरों ने नहीं, अपनों ने लूटा है"
];

let currentIndex = 0;

window.addEventListener("DOMContentLoaded", () => {
    const sherElement = document.getElementById("sher-slider");

    if (sherElement) {
        sherElement.innerText = sheroList[currentIndex];

        setInterval(() => {
            currentIndex = (currentIndex + 1) % sheroList.length;
            sherElement.innerText = sheroList[currentIndex];
        }, 3000);
    }
});