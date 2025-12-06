import { createIcons, icons } from 'lucide';

// Initialize Lucide Icons
createIcons({ icons });

// Custom Cursor
const cursorDot = document.createElement('div');
const cursorOutline = document.createElement('div');
cursorDot.className = 'cursor-dot hidden md:block';
cursorOutline.className = 'cursor-outline hidden md:block';
document.body.appendChild(cursorDot);
document.body.appendChild(cursorOutline);

window.addEventListener('mousemove', (e) => {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  // Animated outline with slight delay
  cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, { duration: 500, fill: "forwards" });
});

// Interactive elements hover effect on cursor
document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursorOutline.style.width = '60px';
    cursorOutline.style.height = '60px';
    cursorOutline.style.backgroundColor = 'hsla(var(--primary) / 0.1)';
  });
  el.addEventListener('mouseleave', () => {
    cursorOutline.style.width = '40px';
    cursorOutline.style.height = '40px';
    cursorOutline.style.backgroundColor = 'transparent';
  });
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.remove('nav-transparent');
    navbar.classList.add('nav-scrolled');
  } else {
    navbar.classList.add('nav-transparent');
    navbar.classList.remove('nav-scrolled');
  }
});

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('open');
    if (isOpen) {
      mobileMenu.classList.remove('open');
      menuBtn.innerHTML = '<i data-lucide="menu"></i>';
    } else {
      mobileMenu.classList.add('open');
      menuBtn.innerHTML = '<i data-lucide="x"></i>';
    }
    createIcons({ icons });
  });
}

// Parallax Effect for Hero
document.addEventListener('mousemove', (e) => {
  const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
  const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

  const heroImage = document.querySelector('.hero-bg');
  if (heroImage) {
    heroImage.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
  }
  
  const floatingElements = document.querySelectorAll('.float-animation, .float-animation-delayed');
  floatingElements.forEach((el, index) => {
    const depth = index + 1;
    el.style.transform = `translate(${moveX * depth * 2}px, ${moveY * depth * 2}px)`;
  });
});


// Scroll Animations (Intersection Observer)
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in-up').forEach(el => {
  observer.observe(el);
});

// Accordion Logic
const accordions = document.querySelectorAll('.accordion-trigger');
accordions.forEach(acc => {
  acc.addEventListener('click', () => {
    const content = acc.nextElementSibling;
    const isOpen = content.style.maxHeight;
    
    document.querySelectorAll('.accordion-content').forEach(c => c.style.maxHeight = null);
    
    if (!isOpen) {
      content.style.maxHeight = content.scrollHeight + "px";
      acc.classList.add('text-primary');
    } else {
      content.style.maxHeight = null;
      acc.classList.remove('text-primary');
    }
  });
});
