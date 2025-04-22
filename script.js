document.addEventListener("DOMContentLoaded", () => {
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

  // Navhead reload logic
  // const navhead = document.getElementById("navhead");
  // if (navhead) {
  //   navhead.addEventListener("click", () => {
  //     window.location.reload();
  //   });
  // }

  // Initialize mobile menu if headers are already loaded
  initializeMobileMenu();

  // Mobile menu toggle logic (run after header is loaded)
  document.addEventListener("htmx:afterSwap", () => {
    initializeMobileMenu();

    // // Function to load projects if on the projects section
    // function loadProjectsIfOnProjects() {
    //   if (window.location.hash === "#projects") {
    //     fetch("projects.csv") // Adjust path if needed
    //       .then((response) => response.text())
    //       .then((csvData) => {
    //         const projects = parseCSVData(csvData);
    //         triggerHTMXProjectLoad(projects);
    //       })
    //       .catch((error) => {
    //         console.error("Error fetching projects.csv:", error);
    //       });
    //   }
    // }

    // // Load projects on initial page load if the hash is already #projects
    // loadProjectsIfOnProjects();

    // // Listen for hash changes to load projects when the user navigates to #projects
    // window.addEventListener("hashchange", loadProjectsIfOnProjects);
  });
});

// Separate function to initialize the mobile menu
function initializeMobileMenu() {
  const menuButton = document.getElementById("mobile-menu-button");
  const navbarCollapse = document.getElementById("navbar-collapse");

  if (menuButton && navbarCollapse) {
    menuButton.addEventListener("click", function () {
      navbarCollapse.classList.toggle("hidden");
    });
  }

  const navLinks = document.querySelectorAll("#pc-nav a, #mobile-nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((otherLink) => {
        otherLink.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
}
