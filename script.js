// script.js

// Get all elements with class 'toggle'
const toggles = document.querySelectorAll('.toggle');

// Add click event listener to each toggle
toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        // Get the associated content based on data-target
        const contentId = toggle.getAttribute('data-target');
        const content = document.getElementById(contentId);

        // Toggle the visibility and max-height for a smooth reveal effect
        if (content.style.visibility === "visible") {
            content.style.maxHeight = "0";
            content.style.visibility = "hidden";
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            content.style.visibility = "visible";
        }
    });
});
