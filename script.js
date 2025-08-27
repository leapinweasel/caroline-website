// Mobile navigation toggle
const navToggle = document.querySelector(".nav-toggle");
const navList = document.getElementById("primary-menu");
if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    navList.classList.toggle("open");
  });
}

// Close menu on link click (mobile)
if (navList) {
  navList.addEventListener("click", (e) => {
    const target = e.target;
    if (
      target instanceof Element &&
      target.tagName === "A" &&
      navList.classList.contains("open")
    ) {
      navList.classList.remove("open");
      navToggle?.setAttribute("aria-expanded", "false");
    }
  });
}

// Simple contact form validation + fake submission
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const errorName = document.getElementById("error-name");
    const errorEmail = document.getElementById("error-email");
    const errorMessage = document.getElementById("error-message");
    const successEl = document.getElementById("form-success");

    let valid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nameInput && errorName) {
      if (!nameInput.value.trim()) {
        errorName.textContent = "Please enter your name.";
        valid = false;
      } else {
        errorName.textContent = "";
      }
    }

    if (emailInput && errorEmail) {
      const email = emailInput.value.trim();
      if (!email) {
        errorEmail.textContent = "Please enter your email.";
        valid = false;
      } else if (!emailRegex.test(email)) {
        errorEmail.textContent = "Please enter a valid email address.";
        valid = false;
      } else {
        errorEmail.textContent = "";
      }
    }

    if (messageInput && errorMessage) {
      if (!messageInput.value.trim()) {
        errorMessage.textContent = "Please enter a message.";
        valid = false;
      } else {
        errorMessage.textContent = "";
      }
    }

    if (!valid) return;

    // Simulate successful submission
    if (successEl) {
      successEl.hidden = false;
    }
    if (nameInput) nameInput.value = "";
    if (emailInput) emailInput.value = "";
    if (messageInput) messageInput.value = "";
  });
}
