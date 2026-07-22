document.addEventListener("DOMContentLoaded", function () {

    // Contact Form Logic (Runs only on contact.html)
    const contactForm = document.getElementById("contactForm");
    const formStatus = document.getElementById("formStatus");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const userName = document.getElementById("name").value;
            formStatus.textContent = "Thank you, " + userName + "! Your message has been sent.";
            contactForm.reset();
        });
    }

    // Modal Popup Logic (Runs only on projects.html)
    const modal = document.getElementById("projectModal");
    const closeModal = document.getElementById("closeModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDescription");
    const detailButtons = document.querySelectorAll(".detail-btn");

    if (detailButtons.length > 0) {
        detailButtons.forEach(function (btn) {
            btn.addEventListener("click", function () {
                modalTitle.textContent = this.getAttribute("data-title");
                modalDesc.textContent = this.getAttribute("data-desc");
                modal.style.display = "flex";
            });
        });

        if (closeModal) {
            closeModal.addEventListener("click", function () {
                modal.style.display = "none";
            });
        }

        window.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }

});
