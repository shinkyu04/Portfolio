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

// JScript for back to top button appear and disappear
const backToTop = document.querySelector('.arrow');

window.addEventListener('scroll', () => {
    // If we have scrolled more than 300px from the top
    if (window.scrollY > 70) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }

  // If you are at the very top (0), make it vanish instantly
    if (window.scrollY <= 10) {
        backToTop.style.transition = "none";
        // Reset it after a tiny delay so it can animate next time
        setTimeout(() => {
            backToTop.style.transition = "";
        }, 10);
    }
});

// JScript for back to top button sroll effect
const backToTopButton = document.querySelector('.arrow');

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // This makes it glide instead of jumping
    });
});