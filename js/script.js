// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const navList = document.getElementById('nav-list');

    // Check if both elements exist to avoid errors
    if (burger && navList) {
        burger.addEventListener('click', (e) => {
        // Prevent click from bubbling up (useful for closing menu when clicking outside)
        e.stopPropagation();
        navList.classList.toggle('active');
        burger.classList.toggle('active');
        });
    }
});

function autoResize(textarea) {
    // Reset height to 'auto' first so it can shrink if text is deleted
    textarea.style.height = 'auto'; 

    // Set the height to match the scroll height (content size)
    textarea.style.height = textarea.scrollHeight + 'px';
}

// Get the current year and inject it into the span
const yearSpan = document.querySelector('#current-year');
yearSpan.textContent = new Date().getFullYear();