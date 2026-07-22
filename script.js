document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // Highlight Active Navigation Link
    // ===============================

    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll("nav a").forEach(link => {

        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }

    });


    // ===============================
    // Project Details Data
    // ===============================

    const projectDetailsData = {

        "Project 1: Online Store Database": {

            description:
                "A complete e-commerce backend system built with Java and MySQL. Features include inventory tracking, customer management, transaction handling, and sales reporting.",

            techStack:
                ["Java", "MySQL", "JDBC"],

            role:
                "Database Architect & Developer"
        },


        "Project 2: Movie Recommendation System": {

            description:
                "A desktop recommendation system that suggests movies based on user ratings and viewing history using collaborative filtering.",

            techStack:
                ["Java", "JavaFX", "MySQL"],

            role:
                "Full-Stack Desktop Developer"
        },


        "Project 3: SyncRGB": {

            description:
                "A hardware and software integration project that connects Fortnite game events with Arduino-controlled RGB lighting using the Overwolf API.",

            techStack:
                ["JavaScript", "Node.js", "Arduino C++", "Overwolf SDK"],

            role:
                "Lead Hardware & Software Integrator"
        }

    };



    // ===============================
    // Project Modal System
    // ===============================

    const projectCards = document.querySelectorAll(".project-card");


    projectCards.forEach(card => {


        const titleElement = card.querySelector("h3");
        const detailsButton = card.querySelector("a");


        if (titleElement && detailsButton) {


            const projectTitle = titleElement.textContent.trim();


            detailsButton.addEventListener("click", function (event) {


                event.preventDefault();


                const details = projectDetailsData[projectTitle];


                if (details) {

                    showProjectModal(projectTitle, details);

                } else {

                    alert("Project details are not available.");

                }


            });


        }


    });



    function showProjectModal(title, details) {


        // Remove old modal

        const existingModal = document.getElementById("project-modal");

        if (existingModal) {

            existingModal.remove();

        }



        // Create overlay

        const overlay = document.createElement("div");

        overlay.id = "project-modal";


        overlay.style.cssText = `

            position: fixed;

            top: 0;

            left: 0;

            width: 100%;

            height: 100%;

            background: rgba(0,0,0,0.6);

            display: flex;

            justify-content: center;

            align-items: center;

            z-index: 9999;

        `;



        // Create modal box

        const modal = document.createElement("div");


        modal.style.cssText = `

            background: white;

            color: #333;

            padding: 25px;

            border-radius: 10px;

            width: 90%;

            max-width: 500px;

            box-shadow: 0 5px 20px rgba(0,0,0,0.3);

        `;



        modal.innerHTML = `

            <h2>${title}</h2>


            <p>
                <strong>Overview:</strong><br>
                ${details.description}
            </p>


            <p>
                <strong>Role:</strong>
                ${details.role}
            </p>


            <p>
                <strong>Technologies:</strong>
                ${details.techStack.join(", ")}
            </p>


            <button id="closeModal">
                Close
            </button>

        `;



        overlay.appendChild(modal);

        document.body.appendChild(overlay);



        // Close button

        document
            .getElementById("closeModal")
            .addEventListener("click", function () {

                overlay.remove();

            });



        // Close when clicking outside

        overlay.addEventListener("click", function (event) {

            if (event.target === overlay) {

                overlay.remove();

            }

        });



        // Close with Escape key

        document.addEventListener("keydown", function closeEscape(event) {

            if (event.key === "Escape") {

                overlay.remove();

                document.removeEventListener(
                    "keydown",
                    closeEscape
                );

            }

        });


    }




    // ===============================
    // Contact Form Validation
    // ===============================


    const contactForm = document.querySelector("form");


    if (contactForm) {


        contactForm.addEventListener("submit", function (event) {


            const name =
                document.getElementById("name")?.value.trim();


            const email =
                document.getElementById("email")?.value.trim();


            const subject =
                document.getElementById("subject")?.value.trim();


            const message =
                document.getElementById("message")?.value.trim();



            if (!name || !email || !subject || !message) {


                alert("Please fill in all required fields.");


                event.preventDefault();


            }


        });


    }


});
