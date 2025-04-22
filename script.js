document.addEventListener("DOMContentLoaded", function () {
  const elementsToProcess = document.querySelectorAll("[hx-get]");
  elementsToProcess.forEach(function (element) {
    htmx.process(element);
  });
});

// Only run this after htmx swaps in header/nav
document.addEventListener("htmx:afterSwap", () => {
  initializeMobileMenu();
});

// Optionally, run once on DOMContentLoaded in case header is already present
document.addEventListener("DOMContentLoaded", () => {
  initializeMobileMenu();

  // Go to Top button logic
  const goToTopButton = document.getElementById("goToTopButton");
  const body = document.querySelector("body");
  if (goToTopButton) {
    window.addEventListener("scroll", () => {
      goToTopButton.style.display = window.scrollY > 0 ? "block" : "none";
      if (window.scrollY === 0) {
        body.classList.remove("blur");
      }
    });

    goToTopButton.addEventListener("click", () => {
      body.classList.add("blur");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

function initializeMobileMenu() {
  const menuButton = document.getElementById("mobile-menu-button");
  const navbarCollapse = document.getElementById("navbar-collapse");

  if (menuButton && navbarCollapse && !menuButton.hasListener) {
    menuButton.addEventListener("click", function () {
      navbarCollapse.classList.toggle("hidden");
    });
    menuButton.hasListener = true; // Prevent duplicate listeners
  }

  // Activate nav links only once
  const navLinks = document.querySelectorAll("#pc-nav a, #mobile-nav a");
  navLinks.forEach((link) => {
    if (!link.hasListener) {
      link.addEventListener("click", function () {
        navLinks.forEach((otherLink) => {
          otherLink.classList.remove("active");
        });
        this.classList.add("active");
      });
      link.hasListener = true;
    }
  });
}
