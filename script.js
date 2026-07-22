// Wait until the HTML document is fully loaded before running script logic
document.addEventListener("DOMContentLoaded", function () {
    
    // Select the form and status elements
    const contactForm = document.getElementById("contactForm");
    const formStatus = document.getElementById("formStatus");

    // Safety check: only run this code if the form actually exists on the page
    if (contactForm) {
        
        // Listen for when the user clicks the submit button
        contactForm.addEventListener("submit", function (event) {
            
            // Prevent the page from refreshing when the form submits
            event.preventDefault();

            // Retrieve user's name input
            const userName = document.getElementById("name").value;

            // Display a thank you message dynamically in green text
            formStatus.textContent = "Thank you, " + userName + "! Your message has been sent.";
            formStatus.style.color = "#27ae60";

            // Clear out the form fields for the user
            contactForm.reset();
        });
    }
});
