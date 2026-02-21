// Preloader logic
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('loader-hide');
        setTimeout(type, 500); // Start typing after loader is gone
    }, 2000); // Increased to 2s to allow the name animation to finish
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Theme toggle logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const isLight = body.classList.contains('light-mode');

    // Update icon
    if (isLight) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'light');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'dark');
    }
});

// Typewriter Effect
const typingText = document.getElementById('typing-text');
const roles = [
    'Full-Stack Developer',
    'Software Engineer',
    'AI Enthusiast',
    'UI/UX Designer',
    'Problem Solver'
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typeSpeed = 2000; // Wait at the end of typing
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500; // Wait before starting next word
    }

    setTimeout(type, typeSpeed);
}

// Start typing when page loads
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scroll');
    } else {
        nav.classList.remove('scroll');
    }
});

// Intersection Observer for reveal animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.8s ease-out';
    observer.observe(section);
});

// Typewriter effect for hero subtitle
const heroSubtitle = document.querySelector('#hero p');
const text = heroSubtitle.textContent;
heroSubtitle.textContent = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        heroSubtitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

// Start typewriter after a small delay (allowing for loader fade out)
setTimeout(typeWriter, 2500);
