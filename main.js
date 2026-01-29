// Scroll reveal animations
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

reveals.forEach(r => observer.observe(r));

// Mobile burger menu
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('open');
});
