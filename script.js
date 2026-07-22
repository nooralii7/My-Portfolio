// Wait for the DOM to fully load before running scripts
document.addEventListener("DOMContentLoaded", function () {
    
    // Highlight the current page link in the navigation menu
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });

    // Handle Contact Form Submission (if on contact page)
    const contactForm = document.querySelector("form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            const name = document.getElementById("name") ? document.getElementById("name").value.trim() : "";
            const email = document.getElementById("email") ? document.getElementById("email").value.trim() : "";
            const subject = document.getElementById("subject") ? document.getElementById("subject").value.trim() : "";
            const message = document.getElementById("message") ? document.getElementById("message").value.trim() : "";

            if (!name || !email || !subject || !message) {
                alert("Please fill in all required fields.");
                event.preventDefault(); // Stop form submission if fields are missing
            }
        });
    }
});
