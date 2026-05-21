
// Menu Toggle
const menuToggle =
document.querySelector(".menu-toggle");

const navbarMenu =
document.querySelector(".navbar-menu");

menuToggle.addEventListener("click", function(){

    navbarMenu.classList.toggle("active");

});

// Intersection Observer for scroll-triggered card animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card-inner').forEach((el, i) => {
  el.style.animationDelay = (0.08 * i + 0.1) + 's';
  el.style.animationPlayState = 'paused';
  observer.observe(el);
});


