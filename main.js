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

// Donation preset buttons
const presetButtons = document.querySelectorAll('.donate-option');
const donationInput = document.getElementById('donation-input');
const thankYouBox = document.getElementById('donate-thanks');

presetButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        donationInput.value = btn.dataset.amount;
    });
});

// Donation form submission
const donateForm = document.querySelector('.donate-form');
donateForm?.addEventListener('submit', e => {
    e.preventDefault();
    const amount = donationInput.value;
    if (amount && amount > 0) {
        thankYouBox.textContent = `Thank you for donating £${amount}!`;
        thankYouBox.style.display = 'block';
        donationInput.value = "";
    }
});
