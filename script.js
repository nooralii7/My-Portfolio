document.addEventListener("DOMContentLoaded", function () {
    
    // Highlight the active page link in navigation
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });

    // Dynamic "Project Details" modal functionality
    const projectDetailsData = {
        "Project 1: Online Store Database": {
            description: "A complete e-commerce backend system built with Java and MySQL. Features include real-time inventory tracking, user authentication, transaction management, and automated sales reporting.",
            techStack: ["Java", "MySQL", "JDBC"],
            role: "Database Architect & Developer"
        },
        "Project 2: Movie Recommendation System": {
            description: "A desktop recommendation engine that uses collaborative filtering algorithms to suggest movies based on user viewing history and rating preferences, featuring a modern JavaFX interface.",
            techStack: ["Java", "JavaFX", "MySQL"],
            role: "Full-Stack Desktop Developer"
        },
        "Project 3: SyncRGB": {
            description: "An interactive hardware-software integration project that reads real-time game telemetry from Fortnite via Overwolf API and sends signal commands to an Arduino to sync RGB ambient lighting dynamically.",
            techStack: ["JavaScript", "Node.js", "Arduino C++", "Overwolf SDK"],
            role: "Lead Hardware & Software Integrator"
        }
    };

    // Attach click listeners to all "Project Details" buttons
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(card => {
        const titleElement = card.querySelector("h3");
        const detailButton = card.querySelector("a");

        if (titleElement && detailButton) {
            const projectTitle = titleElement.textContent.trim();

            detailButton.addEventListener("click", function (event) {
                event.preventDefault(); // Stop page jump

                const details = projectDetailsData[projectTitle];
                if (details) {
                    showProjectModal(projectTitle, details);
                } else {
                    alert("More details coming soon for " + projectTitle);
                }
            });
        }
    });

    // Helper function to create and show modal popup
    function showProjectModal(title, details) {
        // Remove existing modal if any
        const existingModal = document.getElementById("project-modal");
        if (existingModal) existingModal.remove();

        // Create backdrop
        const modalOverlay = document.createElement("div");
        modalOverlay.id = "project-modal";
        modalOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        `;

        // Create modal content container
        const modalContent = document.createElement("div");
        modalContent.style.cssText = `
            background: #ffffff;
            color: #333333;
            padding: 24px;
            border-radius: 8px;
            max-width: 500px;
            width: 90%;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            position: relative;
        `;

        modalContent.innerHTML = `
            <h3 style="margin-top:0;">${title}</h3>
            <p><strong>Overview:</strong> ${details.description}</p>
            <p><strong>Role:</strong> ${details.role}</p>
            <p><strong>Key Technologies:</strong> ${details.techStack.join(", ")}</p>
            <button id="close-modal-btn" style="
                margin-top: 15px;
                padding: 8px 16px;
                background-color: #0056b3;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
            ">Close</button>
        `;

        modalOverlay.appendChild(modalContent);
        document.body.appendChild(modalOverlay);

        // Close on button click or background click
        document.getElementById("close-modal-btn").addEventListener("click", () => modalOverlay.remove());
        modalOverlay.addEventListener("click", (e) => {
            if (e.target === modalOverlay) modalOverlay.remove();
        });
    }

    // Contact Form Handling (for contact.html)
    const contactForm = document.querySelector("form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            const name = document.getElementById("name") ? document.getElementById("name").value.trim() : "";
            const email = document.getElementById("email") ? document.getElementById("email").value.trim() : "";
            const subject = document.getElementById("subject") ? document.getElementById("subject").value.trim() : "";
            const message = document.getElementById("message") ? document.getElementById("message").value.trim() : "";

            if (!name || !email || !subject || !message) {
                alert("Please fill in all required fields.");
                event.preventDefault();
            }
        });
    }
});
