document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // When they leave your tab
        document.title = "Hey! Come back! 🥺";
    } else {
        // When they click back onto your tab
        document.title = "Joshua | Portfolio";
    }
});

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

(function(){
    emailjs.init("fLW5bk1yepj2yZOZH");
})();

function sendMail() {
    let params = {
        name: document.getElementById('nameInput').value.trim() || 'Web Profile Visitor',
        email: document.getElementById('emailInput').value.trim(),
        subject: document.getElementById('subjectInput').value.trim() || 'Email Message from Web Portfolio',
        message: document.getElementById('messageTextarea').value.trim()
    };

    const contactForm = document.getElementById('contact-form');

    const honey = document.getElementById('honeypot').value;

    if (honey !== "") {
        console.log("Something went wrong!");
        return; // Kill the process quietly
    }

    const lastSub = localStorage.getItem('last_submission');
    const now = Date.now();
    const cooldown = 120000; // 2 minutes in milliseconds

    if (lastSub && (now - lastSub < cooldown)) {
        const remaining = Math.ceil((cooldown - (now - lastSub)) / 1000);
        Swal.fire({
            title: "You've recently sent a message!",
            text: `Please wait ${remaining} seconds before sending another message.`,
            icon: "warning"
        });
        return;
    }

    emailjs.send('service_qw727zr', 'template_sh1ha7y', params)
        .then(
            function() {
                Swal.fire({
                    title: "Email Sent!",
                    text: "Your message has been sent",
                    icon: "success",
                });
                contactForm.reset();
                localStorage.setItem('last_submission', Date.now());
            }
        )
        .catch(
            function() {
                Swal.fire({
                    title: "Oops...!",
                    text: "Something went wrong",
                    icon: "error"
                });
            }
        )
}
