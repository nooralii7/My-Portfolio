// Wait for the HTML document to fully load before attaching JavaScript listeners
document.addEventListener("DOMContentLoaded", function () {

    // Select the contact form elements from HTML
    const contactForm = document.getElementById("contactForm");
    const formStatus = document.getElementById("formStatus");

    // Check if the form exists on the current page (e.g., contact.html)
    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {
            // Prevent default page refresh on form submission
            event.preventDefault();

            // Read the user input from the 'Name' text field
            const userName = document.getElementById("name").value;

            // Display success feedback message on screen
            formStatus.textContent = "Thank you, " + userName + "! Your message has been sent successfully.";
            formStatus.style.color = "#27ae60"; // Green color indicator

            // Clear all input fields in the form
            contactForm.reset();
        });
    }

});
