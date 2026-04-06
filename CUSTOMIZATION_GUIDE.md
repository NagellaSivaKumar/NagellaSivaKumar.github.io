# Customization Guide

This guide will help you make the website truly yours with advanced customizations.

## Color Schemes

### Professional Blue Theme
```css
:root {
    --primary-color: #3498db;      /* Blue */
    --secondary-color: #2ecc71;    /* Green */
    --dark-bg: #2c3e50;
    --darker-bg: #1a252f;
    --card-bg: #34495e;
}
```

### Elegant Purple Theme
```css
:root {
    --primary-color: #9b59b6;      /* Purple */
    --secondary-color: #e74c3c;    /* Red */
    --dark-bg: #1e1e2e;
    --darker-bg: #16161e;
    --card-bg: #2e2e3e;
}
```

### Modern Green Theme
```css
:root {
    --primary-color: #2ecc71;      /* Green */
    --secondary-color: #3498db;    /* Blue */
    --dark-bg: #1a1a1a;
    --darker-bg: #0f0f0f;
    --card-bg: #2a2a2a;
}
```

### Warm Orange Theme
```css
:root {
    --primary-color: #e67e22;      /* Orange */
    --secondary-color: #f39c12;    /* Yellow */
    --dark-bg: #2c2416;
    --darker-bg: #1a1612;
    --card-bg: #3a3020;
}
```

## Changing Fonts

### Google Fonts Integration

Add this to `<head>` section in index.html:

```html
<!-- For Modern Look: Poppins -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<!-- For Professional Look: Roboto -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">

<!-- For Elegant Look: Playfair Display + Open Sans -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">
```

Then update CSS:

```css
/* For Poppins or Roboto */
body {
    font-family: 'Poppins', sans-serif;
}

/* For Elegant combination */
h1, h2, h3 {
    font-family: 'Playfair Display', serif;
}
body {
    font-family: 'Open Sans', sans-serif;
}
```

## Adding New Sections

### Hobbies Section

Add this after the Skills section in index.html:

```html
<section id="hobbies" class="hobbies-section">
    <div class="container">
        <h2 class="section-title">Hobbies & Interests</h2>
        <div class="hobbies-grid">
            <div class="hobby-card">
                <i class="fas fa-book"></i>
                <h3>Reading</h3>
                <p>Love reading fiction and self-help books</p>
            </div>
            <div class="hobby-card">
                <i class="fas fa-music"></i>
                <h3>Music</h3>
                <p>Enjoy listening to classical and contemporary music</p>
            </div>
            <div class="hobby-card">
                <i class="fas fa-plane"></i>
                <h3>Travel</h3>
                <p>Passionate about exploring new places</p>
            </div>
            <div class="hobby-card">
                <i class="fas fa-camera"></i>
                <h3>Photography</h3>
                <p>Capturing moments and memories</p>
            </div>
        </div>
    </div>
</section>
```

Add this CSS:

```css
.hobbies-section {
    background-color: var(--dark-bg);
}

.hobbies-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.hobby-card {
    background-color: var(--card-bg);
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    transition: all 0.3s;
}

.hobby-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(255, 189, 57, 0.3);
}

.hobby-card i {
    font-size: 3rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
}

.hobby-card h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
}

.hobby-card p {
    color: var(--gray-text);
}
```

### Photo Gallery Section

Add this HTML:

```html
<section id="gallery" class="gallery-section">
    <div class="container">
        <h2 class="section-title">Photo Gallery</h2>
        <div class="gallery-grid">
            <div class="gallery-item">
                <img src="assets/images/photo1.jpg" alt="Photo 1">
            </div>
            <div class="gallery-item">
                <img src="assets/images/photo2.jpg" alt="Photo 2">
            </div>
            <div class="gallery-item">
                <img src="assets/images/photo3.jpg" alt="Photo 3">
            </div>
            <div class="gallery-item">
                <img src="assets/images/photo4.jpg" alt="Photo 4">
            </div>
        </div>
    </div>
</section>
```

Add this CSS:

```css
.gallery-section {
    background-color: var(--darker-bg);
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
}

.gallery-item {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    cursor: pointer;
}

.gallery-item img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    transition: transform 0.3s;
}

.gallery-item:hover img {
    transform: scale(1.1);
}
```

### Family Details Section

```html
<section id="family" class="family-section">
    <div class="container">
        <h2 class="section-title">Family Details</h2>
        <div class="family-content">
            <div class="family-card">
                <i class="fas fa-male"></i>
                <h3>Father</h3>
                <p class="name">Father's Name</p>
                <p class="occupation">Occupation</p>
            </div>
            <div class="family-card">
                <i class="fas fa-female"></i>
                <h3>Mother</h3>
                <p class="name">Mother's Name</p>
                <p class="occupation">Occupation</p>
            </div>
            <div class="family-card">
                <i class="fas fa-users"></i>
                <h3>Siblings</h3>
                <p class="name">Brother: Name</p>
                <p class="occupation">Occupation</p>
                <p class="name">Sister: Name</p>
                <p class="occupation">Occupation</p>
            </div>
        </div>
        <div class="family-description">
            <h3>About Our Family</h3>
            <p>Write about your family values, traditions, and background here.</p>
        </div>
    </div>
</section>
```

## Advanced Features

### Add Background Patterns

Add subtle patterns to sections:

```css
.home-section {
    background-image:
        linear-gradient(135deg, var(--darker-bg) 0%, var(--dark-bg) 100%),
        url('data:image/svg+xml,<svg>...</svg>');
}
```

### Add Particle Effect Background

Include particles.js library in `<head>`:

```html
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
```

Add to home section:

```html
<div id="particles-js"></div>
```

Initialize in script.js:

```javascript
particlesJS('particles-js', {
    particles: {
        number: { value: 80 },
        color: { value: '#ffbd39' },
        opacity: { value: 0.5 },
        size: { value: 3 }
    }
});
```

### Add Smooth Page Transitions

Add this CSS:

```css
.page-transition {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--primary-color);
    z-index: 9999;
    transform: translateY(-100%);
    transition: transform 0.5s ease-in-out;
}

.page-transition.active {
    transform: translateY(0);
}
```

### Add Loading Animation

Add this HTML before closing `</body>`:

```html
<div class="loader">
    <div class="spinner"></div>
</div>
```

Add this CSS:

```css
.loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--darker-bg);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    transition: opacity 0.5s, visibility 0.5s;
}

.loader.hidden {
    opacity: 0;
    visibility: hidden;
}

.spinner {
    width: 50px;
    height: 50px;
    border: 5px solid rgba(255, 189, 57, 0.3);
    border-top-color: var(--primary-color);
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}
```

Add this JavaScript:

```javascript
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.classList.add('hidden');
});
```

## Typography Customization

### Adjust Font Sizes

```css
/* Make everything bigger */
html {
    font-size: 18px; /* Default is 16px */
}

/* Or adjust individual elements */
.section-title {
    font-size: 3rem; /* Larger section titles */
}

body {
    font-size: 1.1rem; /* Slightly larger body text */
}
```

### Change Line Heights

```css
body {
    line-height: 1.8; /* More spacing between lines */
}

.home-text p {
    line-height: 2; /* Extra spacing for intro text */
}
```

## Button Styles

### Gradient Buttons

```css
.btn-primary {
    background: linear-gradient(135deg, var(--primary-color), var(--hover-color));
    border: none;
}
```

### Rounded Pill Buttons

```css
.btn {
    border-radius: 50px; /* Fully rounded */
}
```

### Neon Glow Effect

```css
.btn-primary:hover {
    box-shadow: 0 0 20px var(--primary-color),
                0 0 40px var(--primary-color),
                0 0 60px var(--primary-color);
}
```

## Navigation Customization

### Centered Navigation

```css
.navbar .container {
    justify-content: center;
}

.logo {
    position: absolute;
    left: 20px;
}
```

### Transparent Navbar (Initially)

```css
.navbar {
    background-color: transparent;
}

.navbar.scrolled {
    background-color: var(--darker-bg);
}
```

Add JavaScript:

```javascript
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
```

## Mobile Optimization

### Adjust Mobile Breakpoints

```css
/* Tablet */
@media (max-width: 992px) {
    /* Your tablet styles */
}

/* Mobile */
@media (max-width: 576px) {
    /* Your mobile styles */
}
```

### Touch-Friendly Buttons

```css
@media (hover: none) {
    .btn {
        padding: 15px 35px; /* Larger touch targets */
    }
}
```

## Performance Optimization

### Lazy Load Images

Update img tags:

```html
<img src="placeholder.jpg" data-src="actual-image.jpg" loading="lazy" alt="Description">
```

### Minify CSS and JS

Use online tools:
- CSS: https://cssminifier.com
- JS: https://javascript-minifier.com

Save minified versions and update links in HTML.

## Tips for Impressive Design

1. **Consistency**: Use the same spacing, colors, and styles throughout
2. **White Space**: Don't cram too much information
3. **High-Quality Images**: Use professional photos
4. **Fast Loading**: Optimize image sizes
5. **Mobile First**: Test on phone before desktop
6. **Proofread**: Check for typos and errors
7. **Test Links**: Ensure all links work
8. **Regular Updates**: Keep information current

## Testing Checklist

- [ ] Test on Chrome, Firefox, Safari
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Verify images load
- [ ] Test contact form
- [ ] Check document downloads
- [ ] Verify responsive design
- [ ] Test animations
- [ ] Check loading speed
- [ ] Proofread all content

---

Need more customization help? Check the main README.md or search online for specific CSS/JavaScript tutorials.
