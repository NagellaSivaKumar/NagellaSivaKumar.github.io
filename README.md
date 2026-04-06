# Marriage Profile Website

A modern, impressive personal profile website designed to share your professional and personal details with relatives for marriage purposes. This website features a beautiful dark theme with smooth animations, similar to professional portfolio websites.

## Features

- **Modern Dark Theme**: Professional and eye-catching design with golden accents
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Typing animation, fade-in effects, and hover animations
- **Multiple Sections**:
  - Home with profile photo and introduction
  - About section with personal details
  - Professional experience timeline
  - Skills with animated progress bars
  - Certifications and awards showcase
  - Package details with salary breakdown
  - Document downloads section
  - Contact information and form

## Quick Start

### 1. Add Your Profile Photo

Replace the placeholder image with your photo:
- Add your photo to `assets/images/profile.jpg`
- Recommended size: 500x500 pixels (square image)
- Format: JPG or PNG

### 2. Customize Your Information

Open `index.html` and replace the placeholder text with your actual information:

#### Home Section (Lines 30-45)
- Replace "Your Name" with your actual name
- Update the typing text roles in `assets/js/script.js` (line 3)

#### About Section (Lines 50-95)
- Full Name
- Date of Birth
- Height
- Education
- Occupation
- Location
- Family Background
- Religion & Caste
- Personal introduction paragraph

#### Experience Section (Lines 100-135)
- Add your job positions
- Company names
- Dates
- Responsibilities and achievements
- Duplicate the timeline-item div for more positions

#### Skills Section (Lines 140-190)
- Update technical skills and percentages
- Modify soft skills tags
- Adjust skill names to match your expertise

#### Achievements Section (Lines 195-230)
- Add your certifications
- Include awards and recognitions
- Update issuer names and dates

#### Package Section (Lines 235-270)
- Update salary figures (use ₹XX,XX,XXX format for privacy or actual amounts)
- Modify compensation breakdown
- Update benefits list

#### Contact Section (Lines 280-320)
- Email address
- Phone number
- LinkedIn profile URL
- Location
- Social media links

### 3. Add Your Documents

Place your documents in the `assets/documents/` folder:
- `payslip.pdf` - Recent payslips
- `employment-letter.pdf` - Employment verification
- `form16.pdf` - Tax certificate
- `id-proof.pdf` - Identity proof
- `education.pdf` - Educational certificates
- `certifications.pdf` - Professional certifications

**Important**: Ensure sensitive information is redacted appropriately before uploading.

### 4. Customize Colors (Optional)

Edit `assets/css/styles.css` (lines 8-16) to change the color scheme:

```css
:root {
    --primary-color: #ffbd39;        /* Main accent color (golden) */
    --secondary-color: #ff6b6b;      /* Secondary accent */
    --dark-bg: #1a1a2e;              /* Main background */
    --darker-bg: #16213e;            /* Darker sections */
    --card-bg: #0f3460;              /* Card backgrounds */
}
```

### 5. Customize Typing Animation

Edit `assets/js/script.js` (line 3) to change the typing text:

```javascript
const textArray = ["Software Engineer", "Problem Solver", "Team Player", "Technology Enthusiast"];
```

Replace with your own titles/roles.

## Hosting Your Website

### Option 1: GitHub Pages (Free & Recommended)

1. Create a GitHub account at https://github.com
2. Create a new repository named `your-username.github.io`
3. Upload all files from the `marriage-profile-website` folder
4. Go to repository Settings > Pages
5. Select the main branch as source
6. Your website will be live at `https://your-username.github.io`

**Step-by-step:**

```bash
cd marriage-profile-website
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/your-username.github.io.git
git push -u origin main
```

### Option 2: Netlify (Free & Easy)

1. Sign up at https://netlify.com
2. Drag and drop the `marriage-profile-website` folder
3. Your site will be live instantly with a free Netlify subdomain
4. You can add a custom domain later

### Option 3: Vercel (Free)

1. Sign up at https://vercel.com
2. Import your GitHub repository or upload files
3. Deploy with one click

## Privacy Considerations

### What to Share / Not Share

**Safe to Share:**
- Name, basic details
- Professional experience
- Educational qualifications
- Skills and certifications
- Approximate salary range

**Consider Carefully:**
- Exact salary figures (you can use ranges like ₹15-20L)
- Recent payslips (redact sensitive info like bank account, PAN)
- Phone number (consider using email only)
- Exact home address

### Protecting Your Documents

1. **Redact sensitive information** from PDFs:
   - Bank account numbers
   - PAN card numbers (show only last 4 digits)
   - Aadhaar numbers
   - Signatures (if desired)

2. **Use watermarks** on documents:
   - Add "For Marriage Proposal Only" watermark
   - Include date of generation

3. **Password protect PDFs** (optional):
   - Share password separately with interested parties

## Making It More Impressive

### Add More Sections

You can add additional sections like:
- **Hobbies & Interests**
- **Travel Experience**
- **Family Details** (separate section)
- **Expectations** (what you're looking for)
- **Photo Gallery**

### Add Google Analytics (Optional)

To track visitors, add this before `</head>` in index.html:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace `G-XXXXXXXXXX` with your Google Analytics ID.

### Add WhatsApp Contact Button

Add this in the contact section:

```html
<a href="https://wa.me/919876543210" class="btn btn-primary" target="_blank">
    <i class="fab fa-whatsapp"></i> Contact on WhatsApp
</a>
```

Replace `919876543210` with your phone number (country code + number).

## Customization Tips

### Change Font

Add this to `<head>` in index.html:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Then update CSS:

```css
body {
    font-family: 'Poppins', sans-serif;
}
```

### Add More Projects/Achievements

Copy the `.achievement-card` div in index.html and paste it to add more achievements.

### Change Section Order

Simply cut and paste the `<section>` blocks in index.html to reorder them.

## Troubleshooting

### Images Not Showing
- Check that images are in `assets/images/` folder
- Verify file names match exactly (case-sensitive)
- Ensure images are in JPG or PNG format

### Documents Not Downloading
- Place all PDFs in `assets/documents/` folder
- Update the `href` attributes in document cards
- Verify file names match exactly

### Website Not Responsive
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check that you haven't modified the viewport meta tag
- Test on different browsers

### Animations Not Working
- Ensure `assets/js/script.js` is properly linked
- Check browser console for JavaScript errors (F12)
- Verify all script tags are present

## Contact Form Setup (Advanced)

The contact form currently shows an alert. To make it actually send emails:

### Option 1: FormSpree (Easy)

1. Sign up at https://formspree.io
2. Replace the form with:

```html
<form action="https://formspree.io/f/your-form-id" method="POST">
    <input type="text" name="name" placeholder="Your Name" required>
    <input type="email" name="email" placeholder="Your Email" required>
    <input type="text" name="subject" placeholder="Subject" required>
    <textarea name="message" placeholder="Your Message" required></textarea>
    <button type="submit">Send Message</button>
</form>
```

### Option 2: EmailJS (Free)

1. Sign up at https://www.emailjs.com
2. Follow their integration guide
3. Update the JavaScript form handler

## Security Best Practices

1. **Never commit sensitive files to GitHub**:
   - Create a `.gitignore` file
   - Add pattern: `assets/documents/*.pdf`

2. **Use environment variables** for sensitive data
3. **Enable HTTPS** (automatic with GitHub Pages, Netlify, Vercel)
4. **Regular updates**: Keep checking and updating your information

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Credits

- Font Awesome for icons: https://fontawesome.com
- Inspired by modern portfolio designs
- Built with vanilla HTML, CSS, and JavaScript

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Inspect browser console for errors (F12)
3. Verify all file paths are correct

## License

This template is free to use for personal purposes. Feel free to customize it as needed.

---

**Good luck with your matrimonial search! May you find the perfect life partner.**
