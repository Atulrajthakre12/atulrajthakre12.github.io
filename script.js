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

function showCategory(category) {
    // 1. सभी सेक्शन्स को छिपाएँ
    const sections = document.querySelectorAll('.category-content');
    sections.forEach(sec => {
        sec.style.display = 'none';
    });

    // 2. केवल चुनी गई कैटेगरी को दिखाएँ
    const targetSection = document.getElementById(category + '-section');
    if (targetSection) {
        targetSection.style.display = 'block';
    }

    // 3. बटन्स के एक्टिव रंग को मैनेज करें
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // जो बटन दबाया गया है उसे एक्टिव क्लास दें
    event && event.currentTarget && event.currentTarget.classList.add('active');
}
const sheroList = [
    "शायर • ग़ज़लकार • शेर • कवि",
    "हंसते हुए चेहरे ने ये भ्रम पाल रखा है तेरे ना होने का गम पाल रखा है,",
        "गुजारनी थी जो उम्र गुज़ार दी बैठ गया गला उसे इतनी आवाज़ दी,",
        "खोई उमीद भर नहीं आती होती है रात नींद मगर नहीं आती"
        "मुसलसल चलता रहे ये सफ़र मेरा काशिद बन जाऊं मैं गली का तेरा,""
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