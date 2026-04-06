// Typing Animation
const typedTextSpan = document.getElementById("typed-text");
const textArray = ["DevOps Engineer", "Site Reliability Engineer", "Cloud & DevOps Maestro", "Kubernetes Expert", "AWS & GCP Specialist", "Automation Enthusiast"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 500);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, newTextDelay + 250);
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section');
const navLinksAll = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinksAll.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Skill Bar Animation on Scroll
const skillBars = document.querySelectorAll('.skill-progress');

const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;
        const triggerBottom = window.innerHeight * 0.8;

        if (barTop < triggerBottom) {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = progress + '%';
        }
    });
};

window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);

// Fade In Animation on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all cards and timeline items
document.addEventListener('DOMContentLoaded', () => {
    const elementsToObserve = document.querySelectorAll(
        '.detail-item, .timeline-item, .achievement-card, .document-card, .skill-category'
    );

    elementsToObserve.forEach(el => observer.observe(el));
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Here you can add your form submission logic
        // For now, we'll just show an alert
        alert(`Thank you ${name}! Your message has been received. I'll get back to you soon at ${email}.`);

        // Reset form
        contactForm.reset();

        // In a real application, you would send this data to a server
        // Example using fetch API:
        /*
        fetch('your-server-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, subject, message })
        })
        .then(response => response.json())
        .then(data => {
            alert('Message sent successfully!');
            contactForm.reset();
        })
        .catch(error => {
            alert('There was an error sending your message. Please try again.');
        });
        */
    });
}

// Navbar Background Change on Scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(22, 33, 62, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = 'var(--darker-bg)';
        navbar.style.backdropFilter = 'none';
    }
});

// Add hover effect to timeline items
const timelineItems = document.querySelectorAll('.timeline-item');

timelineItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.querySelector('.timeline-dot').style.transform = 'scale(1.5)';
        this.querySelector('.timeline-dot').style.boxShadow = '0 0 20px var(--primary-color)';
    });

    item.addEventListener('mouseleave', function() {
        this.querySelector('.timeline-dot').style.transform = 'scale(1)';
        this.querySelector('.timeline-dot').style.boxShadow = 'none';
    });
});

// Lazy Loading for Images
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// Copy to Clipboard functionality for contact details (optional)
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// Scroll to Top Button (optional enhancement)
const createScrollToTopButton = () => {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--primary-color);
        color: var(--darker-bg);
        border: none;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s, transform 0.3s;
        z-index: 999;
        font-size: 1.2rem;
        box-shadow: 0 5px 15px rgba(255, 189, 57, 0.3);
    `;

    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.style.opacity = '1';
        } else {
            scrollBtn.style.opacity = '0';
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    scrollBtn.addEventListener('mouseenter', () => {
        scrollBtn.style.transform = 'translateY(-5px)';
    });

    scrollBtn.addEventListener('mouseleave', () => {
        scrollBtn.style.transform = 'translateY(0)';
    });
};

// Initialize scroll to top button
createScrollToTopButton();

// Print page functionality (optional)
function printPage() {
    window.print();
}

// Download as PDF functionality (requires additional library like html2pdf.js)
function downloadAsPDF() {
    alert('PDF download feature coming soon! For now, you can use your browser\'s Print to PDF option.');
    // To implement this, you would need to include a library like html2pdf.js
    // and then use it to generate a PDF from the HTML content
}

// Initialize all animations and interactions on page load
window.addEventListener('load', () => {
    // Trigger initial animations
    animateSkillBars();

    // Add loaded class to body for any CSS transitions
    document.body.classList.add('loaded');
});

// Prevent right-click on images (optional - for privacy protection)
const protectImages = false; // Set to true if you want to prevent right-click on profile images
if (protectImages) {
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            return false;
        });
    });
}

// Visitor counter (requires backend implementation)
// This is just a placeholder
const initVisitorCounter = () => {
    // In a real application, this would make an API call to track visitors
    console.log('Visitor counter initialized');
    // You would need a backend service to track actual visitor counts
};

initVisitorCounter();
