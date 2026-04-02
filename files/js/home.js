const header = document.querySelector("header");
const navLinks = document.querySelectorAll("nav a");
const currentPage = window.location.pathname.split("/").pop() || "index.html";

window.addEventListener("scroll", () => {
  if (!header) return;

  if (window.scrollY > 50) {
    header.style.position = "fixed";
    header.style.top = "0";
    header.style.left = "0";
    header.style.width = "100%";
    header.style.zIndex = "1000";
    header.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
  } else {
    header.style.position = "relative";
    header.style.boxShadow = "none";
  }
});

navLinks.forEach(link => {
  const href = link.getAttribute("href");

  if (
    (currentPage === "index.html" || currentPage === "") &&
    href === "#about"
  ) {
    return;
  }

  if (href === currentPage) {
    link.classList.add("active");
  }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

const revealElements = document.querySelectorAll(
  ".menu-card, .hero-card, .form-card, .faq-link-wrap, .intro-card, .contact-info-card, .contact-form-card, .rule-card, .faq-card, .menu-hero-text"
);

revealElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(35px)";
  el.style.transition = "all 0.6s ease";
});

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.88;

  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < triggerBottom) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const reservationForm = document.getElementById("reservationForm");
const formMessage = document.getElementById("formMessage");

if (reservationForm && formMessage) {
  reservationForm.addEventListener("submit", function (e) {
    e.preventDefault();
    formMessage.textContent = "Your reservation request has been received successfully.";
    reservationForm.reset();
  });
}

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Your message has been sent successfully.");
    contactForm.reset();
  });
}