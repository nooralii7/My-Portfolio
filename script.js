// Wait until the HTML document is fully loaded before running script logic
document.addEventListener("DOMContentLoaded", function () {
    
    // Select the contact form element from the page
    const form = document.getElementById("contactForm");
    const statusMessage = document.getElementById("formStatus");

    // Listen for when the user clicks the submit button
    form.addEventListener("submit", function (event) {
        
        // Prevent the page from refreshing when the form submits
        event.preventDefault();

        // Retrieve user inputs from the text fields
        const nameInput = document.getElementById("name").value;

        // Display a simple thank you message dynamically
        statusMessage.textContent = "Thank you, " + nameInput + "! Your message has been sent.";

        // Clear out the form fields for the user
        form.reset();
    });
});
