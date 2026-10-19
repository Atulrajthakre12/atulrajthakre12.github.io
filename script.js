// ==========================================
// 1. Page Load Log
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
    console.log("Official website loaded successfully!");
});


// ==========================================
// 2. Accordion / Poetry Toggle Function
// ==========================================
/**
 * Toggles the visibility of a poetry accordion card's body.
 * @param {HTMLElement} header - The clicked header element of the accordion.
 */
function togglePoetry(header) {
    const card = header.parentElement;
    const body = card.querySelector('.poetry-body');

    // CSS variables standard access
    if (!body) return; // Guard clause

    if (getComputedStyle(body).display === "none") {
        body.style.display = "block";
        card.classList.add("active");
    } else {
        body.style.display = "none";
        card.classList.remove("active");
    }
}


// ==========================================
// 3. Category Switcher Function
// ==========================================
/**
 * Switches the active content section based on the provided category name.
 * @param {string} categoryName - The name of the category to show.
 */
function showCategory(categoryName) {
    // A. Sabhi sections chipayein
    const contents = document.querySelectorAll('.category-content');
    contents.forEach(content => {
        content.style.display = 'none';
    });

    // B. Sabhi buttons se 'active' class hatayein
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // C. Chuna hua section dikhayein aur button ko active karein
    const sectionId = categoryName.endsWith('-section') ? categoryName : `${categoryName}-section`;
    const selectedSection = document.getElementById(sectionId);
    
    // Find the corresponding button. Assume id structure like 'btn-categoryName'
    const selectedButton = document.getElementById(btn-${categoryName});

    if (selectedSection) {
        selectedSection.style.display = 'block';
    }

    if (selectedButton) {
        selectedButton.classList.add('active');
    }
}


// ==========================================
// 4. Sher Slider Logic
// ==========================================
const sheroList = [
    "हंसते हुए चेहरे ने ये भ्रम पाल रखा है तेरे ना होने का गम पाल रखा है",
    "गुज़ारिश थी जो उम्र गुज़ार दी बैठा गया गला उसे इतनी आवाज़ दी",
    "खोई उम्मीद भर नहीं आती होती है रात नींद मगर नहीं आती",
    "मसलसल चलता रहे ये सफर मेरा काशिद बन जाऊं मैं गली का तेरा",
    "हौसला ही तो था जो टूटा है, हमें गैरों ने नहीं, अपनों ने लूटा है"
];

let currentIndex = 0;

window.addEventListener("DOMContentLoaded", () => {
    const sherElement = document.getElementById("sher-slider");

    if (sherElement) {
        // Initial display
        sherElement.innerText = sheroList[currentIndex];

        // Automatic transition
        setInterval(() => {
            currentIndex = (currentIndex + 1) % sheroList.length;
            sherElement.innerText = sheroList[currentIndex];
        }, 3000);
    }
});