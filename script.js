document.addEventListener("DOMContentLoaded", function () {
    // 1. Dynamic Clock (Updates every second)
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

    // 2. Light / Dark Mode Toggle
    const themeToggleBtn = document.getElementById("themeToggle");
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        if (themeToggleBtn) themeToggleBtn.textContent = "Light Mode";
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            let theme = "light";

            if (document.body.classList.contains("dark-mode")) {
                theme = "dark";
                themeToggleBtn.textContent = "Light Mode";
            } else {
                themeToggleBtn.textContent = "Dark Mode";
            }

            localStorage.setItem("theme", theme);
        });
    }

    // 3. Image Gallery Slider (Projects Page)
    const galleryImg = document.getElementById("galleryImg");
    const galleryCaption = document.getElementById("galleryCaption");
    const prevBtn = document.getElementById("prevSlide");
    const nextBtn = document.getElementById("nextSlide");

    const slides = [
        { src: "project1.png", caption: "Personal Portfolio Website Preview" },
        { src: "project2.png", caption: "Interactive Calculator App Preview" },
        { src: "project3.png", caption: "Cybersecurity Network Scanner Preview" },
        { src: "project4.png", caption: "Student Task Tracker Preview" }
    ];

    let currentSlideIndex = 0;
    function showSlide(index) {
        if (!galleryImg || !galleryCaption) return;
        galleryImg.src = slides[index].src;
        galleryCaption.textContent = slides[index].caption;
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener("click", function () {
            currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
            showSlide(currentSlideIndex);
        });
        nextBtn.addEventListener("click", function () {
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            showSlide(currentSlideIndex);
        });
        // Automatically change image every 5 seconds
        setInterval(function () {
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            showSlide(currentSlideIndex);
        }, 5000);
    }
    // 4. "Show More Projects" Toggle
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

            toggleProjectsBtn.textContent = isHidden ? "Show Less Projects" : "Show More Projects";
        });
    }
    // 5. Contact Form Validation
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

        function isValidEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());
        }

        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            let isValid = true;

            // Clear previous errors
            [nameInput, emailInput, subjectInput, messageInput].forEach(i => i.classList.remove("input-error"));
            [nameError, emailError, subjectError, messageError].forEach(s => s.textContent = "");
            formSuccess.style.display = "none";

            // Name: Required & Min 3 Chars
            if (!nameInput.value.trim()) {
                nameError.textContent = "Name is required.";
                nameInput.classList.add("input-error");
                isValid = false;
            } else if (nameInput.value.trim().length < 3) {
                nameError.textContent = "Name must be at least 3 characters.";
                nameInput.classList.add("input-error");
                isValid = false;
            }

            // Email: Required & Valid Format
            if (!emailInput.value.trim()) {
                emailError.textContent = "Email is required.";
                emailInput.classList.add("input-error");
                isValid = false;
            } else if (!isValidEmail(emailInput.value.trim())) {
                emailError.textContent = "Please enter a valid email address.";
                emailInput.classList.add("input-error");
                isValid = false;
            }

            // Subject: Required
            if (!subjectInput.value.trim()) {
                subjectError.textContent = "Subject is required.";
                subjectInput.classList.add("input-error");
                isValid = false;
            }

            // Message: Required & Min 20 Chars
            if (!messageInput.value.trim()) {
                messageError.textContent = "Message is required.";
                messageInput.classList.add("input-error");
                isValid = false;
            } else if (messageInput.value.trim().length < 20) {
                messageError.textContent = "Message must be at least 20 characters.";
                messageInput.classList.add("input-error");
                isValid = false;
            }

            if (isValid) {
                formSuccess.textContent = "Thank you, " + nameInput.value.trim() + "! Your message passed validation and is ready to send.";
                formSuccess.style.display = "block";
                contactForm.reset();
            }
        });
    }
    // 6. Back to Top Button
    const backToTopBtn = document.getElementById("backToTop");

    if (backToTopBtn) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 250) {
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
