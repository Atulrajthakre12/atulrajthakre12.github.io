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
  const body = card.querySelector(".poetry-body");

  if (!body) return; // Guard clause

  const isHidden = getComputedStyle(body).display === "none";

  if (isHidden) {
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
  // A. Sabhi sections chhipayein
  const contents = document.querySelectorAll(".category-content");
  contents.forEach((content) => {
    content.style.display = "none";
  });

  // B. Sabhi buttons se 'active' class hatayein
  const buttons = document.querySelectorAll(".nav-btn");
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });

  // C. Chuna hua section dikhayein aur button ko active karein
  const sectionId = categoryName.endsWith("-section")
    ? categoryName
    : ${categoryName}-section;
  const selectedSection = document.getElementById(sectionId);

  // Find the corresponding button. Assume id structure like 'btn-categoryName'
  const selectedButton = document.getElementById(btn-${categoryName});

  if (selectedSection) {
    selectedSection.style.display = "block";
  }

  if (selectedButton) {
    selectedButton.classList.add("active");
  }
}

// ==========================================
// 4. Sher Slider Logic
// ==========================================
const sherList = [
  "हंसते हुए चेहरे ने ये भ्रम पाल रखा है तेरे ना होने का ग़म पाल रखा है",
  "गुज़ारिश थी जो उम्र गुज़ार दी बैठा गया ग़लत उसे इतनी आवाज़ दी",
  "कोई उम्मीद बर नहीं आती है रात नींद मगर नहीं आती",
  "मुसलसल चलता रहे ये सफ़र मेरा क़ासिद बन जाऊँ मैं गली का तेरा",
  "हौसला ही तो था जो टूटा है, हमें ग़ैरों ने नहीं, अपनों ने लूटा है"
];

let currentIndex = 0;

window.addEventListener("DOMContentLoaded", () => {
  const sherElement = document.getElementById("sher-slider");

  if (sherElement) {
    // Initial display
    sherElement.innerText = sherList[currentIndex];

    // Automatic transition
    setInterval(() => {
      currentIndex = (currentIndex + 1) % sherList.length;
      sherElement.innerText = sherList[currentIndex];
    }, 3000);
  }
});