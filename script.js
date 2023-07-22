const navbarToggler = document.querySelector('.navbar-toggler');

navbarToggler.addEventListener('click', function() {
  const navbarCollapse = document.querySelector('#navbar-collapse');

  if (navbarCollapse.classList.contains('show')) {
    navbarCollapse.classList.remove('show');
  } else {
    navbarCollapse.classList.add('show');
  }
});

const goToTopButton = document.getElementById("goToTopButton");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    goToTopButton.style.display = "block";
  } else {
    goToTopButton.style.display = "none";
  }
});

// goToTopButton.addEventListener("click", () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth"
//   });

const body = document.querySelector("body");

// Add a blur class to the body when the button is clicked
goToTopButton.addEventListener("click", () => {
  body.classList.add("blur");
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Remove the blur class when the scroll event is done
window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    body.classList.remove("blur");
  }
});

const navhead = document.getElementById("navhead");

navhead.addEventListener("click", () => {
  location.reload();
});
//   const intro = document.getElementById("introduction");
//   const skills = document.getElementById("skills");
//   const experience = document.getElementById("experience");
//   const education = document.getElementById("education");
//   const certificates = document.getElementById("certificates");
//   const projects = document.getElementById("projects");
// window.addEventListener("scroll", () => {
//   const scrolled = window.scrollY;
//   console.log(scrolled);

//   if (Math.ceil(scrolled) > 152 && Math.ceil(scrolled) < 710) {
//     window.scrollTo({
//       top: skills.offsetTop,
//     });
//   } else if (Math.ceil(scrolled) > 842 && Math.ceil(scrolled) < 1400) {
//     window.scrollTo({
//       top: experience.offsetTop,
      
//     });
//   } else if (Math.ceil(scrolled) > 1563 && Math.ceil(scrolled) <1500) {
//     window.scrollTo({
//       top: education.offsetTop,
      
//     });
//   } else if (Math.ceil(scrolled) > 2193 && Math.ceil(scrolled) < 2790) {
//     window.scrollTo({
//       top: certificates.offsetTop,
      
//     });
//   } else if (Math.ceil(scrolled) > 2909 && Math.ceil(scrolled) < 3470) {
//     window.scrollTo({
//       top: projects.offsetTop,
      
//     });
//   }
// });