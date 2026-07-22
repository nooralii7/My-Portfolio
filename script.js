document.addEventListener("DOMContentLoaded", function () {

    // --- 1. Contact Form Functionality ---
    const contactForm = document.getElementById("contactForm");
    const formStatus = document.getElementById("formStatus");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Stop page reload

            const userName = document.getElementById("name").value;

            // Display success message box
            formStatus.textContent = "Thank you, " + userName + "! Your message has been sent successfully.";
            formStatus.className = "status-message success";

            // Clear inputs
            contactForm.reset();
        });
    }

    // --- 2. Project Details Modal Functionality ---
    const modal = document.getElementById("projectModal");
    const closeModal = document.getElementById("closeModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDescription");
    const detailButtons = document.querySelectorAll(".detail-btn");

    // Attach click event to all "Project Details" buttons
    detailButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Read project info from data attributes
            const title = this.getAttribute("data-title");
            const desc = this.getAttribute("data-desc");

            modalTitle.textContent = title;
            modalDesc.textContent = desc;

            // Show modal popup
            modal.style.display = "flex";
        });
    });

    // Close modal when clicking the 'X'
    if (closeModal) {
        closeModal.addEventListener("click", function () {
            modal.style.display = "none";
        });
    }

    // Close modal when clicking outside the box
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

});
