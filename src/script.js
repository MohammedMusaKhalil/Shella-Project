// src/script.js
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(
      ".hero-title, .underhero, .slide-right, .slide-left, .first-Fadein, .second-Fadein, .third-Fadein, .fourth-Fadein"
    );
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px 0px 0px 0px" }
    );
  
    elements.forEach((element) => {
      observer.observe(element);
    });
  });