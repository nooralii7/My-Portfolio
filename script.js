document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // 1. Live Clock Updating Every Second
    // ==========================================
    const liveClockEl = document.getElementById("liveClock");

    function updateClock() {
        if (!liveClockEl) return;
        const now = new Date();
        const options = {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        liveClockEl.textContent = "🕒 " + now.toLocaleDateString('en-US', options);
    }

    updateClock();
    setInterval(updateClock, 1000);


    // ==========================================
    // 2. Light / Dark Mode Theme Toggle
    // ==========================================
    const themeToggleBtn = document.getElementById("themeToggle");
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
        document.body.classList.add("dark-mode");
        if (themeToggleBtn) themeToggleBtn.textContent = "☀️ Switch to Light Mode";
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            let theme = "light";

            if (document.body.classList.contains("dark-mode")) {
                theme = "dark";
                themeToggleBtn.textContent = "☀️ Switch to Light Mode";
            } else {
                themeToggleBtn.textContent = "🌙 Switch to Dark Mode";
            }

            localStorage.setItem("theme", theme);
        });
    }


    // ==========================================
    // 3. Project Gallery Image Slider & Auto-Cycle
    // ==========================================
    const galleryImg = document.getElementById("galleryImg");
    const galleryCaption = document.getElementById("galleryCaption");
    const prevBtn = document.getElementById("prevSlide");
    const nextBtn = document.getElementById("nextSlide");

    const slides = [
        { src: "images/project1.png", caption: "Personal Portfolio Website Preview" },
        { src: "images/project2.png", caption: "Web Calculator Application Preview" },
        { src: "images/project3.png", caption: "Student Task Tracker Application Preview" },
        { src: "images/project4.png", caption: "Weather Forecast Dashboard Preview" }
    ];

    let currentSlideIndex = 0;

    function renderSlide(index) {
        if (!galleryImg || !galleryCaption) return;
        galleryImg.src = slides[index].src;
        galleryCaption.textContent = slides[index].caption;
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener("click", function () {
            currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
            renderSlide(currentSlideIndex);
        });

        nextBtn.addEventListener("click", function () {
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            renderSlide(currentSlideIndex);
        });

        // Automatic image rotation every 5 seconds
        setInterval(function () {
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            renderSlide(currentSlideIndex);
        }, 5000);
    }


    // ==========================================
    // 4. "Show More / Show Less" Projects Button
    // ==========================================
    const toggleProjectsBtn = document.getElementById("toggleProjectsBtn");

    if (toggleProjectsBtn) {
        toggleProjectsBtn.addEventListener("click", function () {
            const extraProjects = document.querySelectorAll(".extra-project");
            let isHidden = false;

            extraProjects.forEach(function (card) {
                if (card.classList.contains("hidden")) {
                    card.classList.remove("hidden");
                    isHidden = true;
                } else {
                    card.classList.add("hidden");
                }
            });

            if (isHidden) {
                toggleProjectsBtn.textContent = "Show Less Projects";
            } else {
                toggleProjectsBtn.textContent = "Show More Projects";
            }
        });
    }


    // ==========================================
    // 5. Contact Form Validation
    // ==========================================
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const subjectInput = document.getElementById("subject");
        const messageInput = document.getElementById("message");

        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const subjectError = document.getElementById("subjectError");
        const messageError = document.getElementById("messageError");
        const formSuccess = document.getElementById("formSuccess");

        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        }

        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            let isValid = true;

            // Reset Errors
            [nameInput, emailInput, subjectInput, messageInput].forEach(input => input.classList.remove("input-error"));
            [nameError, emailError, subjectError, messageError].forEach(span => span.textContent = "");
            formSuccess.style.display = "none";

            // 1. Name Validation (Required, min 3 chars)
            if (nameInput.value.trim() === "") {
                nameError.textContent = "Name is required.";
                nameInput.classList.add("input-error");
                isValid = false;
            } else if (nameInput.value.trim().length < 3) {
                nameError.textContent = "Name must be at least 3 characters long.";
                nameInput.classList.add("input-error");
                isValid = false;
            }

            // 2. Email Validation (Required, valid format)
            if (emailInput.value.trim() === "") {
                emailError.textContent = "Email is required.";
                emailInput.classList.add("input-error");
                isValid = false;
            } else if (!validateEmail(emailInput.value.trim())) {
                emailError.textContent = "Please enter a valid email address.";
                emailInput.classList.add("input-error");
                isValid = false;
            }

            // 3. Subject Validation (Required)
            if (subjectInput.value.trim() === "") {
                subjectError.textContent = "Subject is required.";
                subjectInput.classList.add("input-error");
                isValid = false;
            }

            // 4. Message Validation (Required, min 20 chars)
            if (messageInput.value.trim() === "") {
                messageError.textContent = "Message is required.";
                messageInput.classList.add("input-error");
                isValid = false;
            } else if (messageInput.value.trim().length < 20) {
                messageError.textContent = "Message must be at least 20 characters long.";
                messageInput.classList.add("input-error");
                isValid = false;
            }

            // Form Submit Success
            if (isValid) {
                formSuccess.textContent = "✅ Thank you, " + nameInput.value.trim() + "! Your message has been sent successfully.";
                formSuccess.style.display = "block";
                contactForm.reset();
            }
        });
    }


    // ==========================================
    // 6. "Back to Top" Floating Button
    // ==========================================
    const backToTopBtn = document.getElementById("backToTop");

    if (backToTopBtn) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add("show");
            } else {
                backToTopBtn.classList.remove("show");
            }
        });

        backToTopBtn.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

});
