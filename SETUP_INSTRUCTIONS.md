# Setup Instructions for Nagella Siva Kumar's Profile Website

## Your Website is Ready!

I've created a professional, impressive marriage profile website tailored specifically for you with all your information already filled in!

## What's Already Done

- **Personal Information**: Name, DOB (Dec 09, 1995), Height (6 feet), Location (Bangalore)
- **Professional Details**:
  - Current Role: DevOps Engineer-II & SRE at Rakuten (Oct 2024 - Present)
  - Previous: Senior Software Engineer at Capgemini (3.2 years)
- **Education**:
  - CDAC - PGD in Computer Software Engineering (Grade A)
  - Vidya Jyothi Institute - B.E. in ECE (Grade A)
  - ESC Govt Polytechnic - Diploma in ECE (80%)
- **Skills**: AWS, GCP, Azure, Kubernetes, Docker, Terraform, CI/CD, Ansible, etc.
- **Certifications**: CKA, Terraform, GCP, Azure
- **Package**: ₹13,20,296 per annum (Effective April 1, 2026)
- **Employee ID**: 300148750

## Quick Steps to Make it Live

### Step 1: Add Your Profile Photo (5 minutes)

1. Choose a professional, high-quality photo of yourself
2. Rename it to `profile.jpg`
3. Place it in: `marriage-profile-website/assets/images/profile.jpg`
4. Recommended: Square image, at least 500x500 pixels

### Step 2: Update Contact Information (2 minutes)

Open `index.html` and update these details (search for these lines):

**Line 529**: Update your email
```html
<p>nagella.kumar@example.com</p>
```
Replace with your actual email address.

**Line 536**: Update your phone number
```html
<p>+91 XXXXX XXXXX (Update with your number)</p>
```
Replace with your actual phone number.

**Line 543**: Update your LinkedIn URL
```html
<p><a href="https://linkedin.com/in/yourprofile" target="_blank">linkedin.com/in/nagella-sivakumar</a></p>
```
Replace with your actual LinkedIn profile URL.

**Lines 554-557**: Update social media links (optional)
```html
<a href="#" target="_blank"><i class="fab fa-facebook"></i></a>
```
Replace `#` with your actual social media URLs, or remove these lines if you don't want to share.

### Step 3: Add Personal Touch (10 minutes - Optional)

You can customize the "Personal Introduction" section in the About section (around line 117-120 in index.html) to make it more personal and reflect your personality, values, and what you're looking for in a life partner.

### Step 4: Add Documents (Optional but Recommended)

Place these documents in `assets/documents/` folder:
- `payslip.pdf` - Your recent payslips
- `employment-letter.pdf` - Employment verification from Rakuten
- `form16.pdf` - Tax certificate
- `education.pdf` - Educational certificates
- `certifications.pdf` - Your CKA, Terraform, GCP, Azure certificates

**IMPORTANT**: Before adding documents, redact sensitive information:
- Bank account numbers
- Full PAN/Aadhaar numbers (show only last 4 digits)
- Signatures (if desired)

### Step 5: Test Locally (3 minutes)

1. Open the `index.html` file in your web browser
2. Navigate through all sections
3. Check if your photo displays correctly
4. Verify all information is accurate
5. Test the contact form
6. Try clicking document download links

### Step 6: Deploy to GitHub Pages (15 minutes)

#### First Time Setup:

1. **Create GitHub Account** (if you don't have one):
   - Go to https://github.com/signup
   - Create your account

2. **Create a New Repository**:
   - Go to https://github.com/new
   - Repository name: `nagella-sivakumar.github.io` (or `your-username.github.io`)
   - Make it Public
   - Click "Create repository"

3. **Upload Your Files**:

   **Option A: Using GitHub Web Interface (Easiest)**
   - Click "uploading an existing file"
   - Drag and drop all files from `marriage-profile-website` folder
   - Click "Commit changes"

   **Option B: Using Git Command Line**
   ```bash
   cd marriage-profile-website
   git init
   git add .
   git commit -m "Initial commit - Marriage profile website"
   git branch -M main
   git remote add origin https://github.com/your-username/your-username.github.io.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to repository Settings
   - Click "Pages" in left sidebar
   - Under "Source", select "main" branch
   - Click "Save"
   - Wait 2-3 minutes

5. **Your Website is Live!**
   - URL: `https://your-username.github.io`
   - Share this link with family and relatives

## Alternative Hosting Options

### Option 2: Netlify (Very Easy)

1. Go to https://netlify.com
2. Sign up (free)
3. Drag and drop the `marriage-profile-website` folder
4. Get instant live URL: `yourname.netlify.app`
5. Can add custom domain later

### Option 3: Vercel (Easy)

1. Go to https://vercel.com
2. Sign up (free)
3. Import your folder or GitHub repository
4. Get live URL instantly

## Privacy & Security Considerations

### What I've Already Included:
- Your professional experience and skills
- Education background
- Certifications
- Official package details from your compensation letter
- Employee ID (as it's on official letter)

### What You Should Consider:
1. **Phone Number**: Decide if you want it publicly visible or shared only with serious prospects
2. **Email**: Consider creating a separate email for this purpose
3. **Documents**:
   - Only upload if comfortable
   - Always redact sensitive info
   - Consider password-protecting PDFs
4. **Social Media**: Only link profiles you're comfortable sharing

### Privacy Tips:
1. Don't include your full home address
2. Redact bank details from payslips
3. Consider using ranges instead of exact salary (though exact is already there)
4. You can make the GitHub repository private and share access selectively

## Customization Options

### Change Color Scheme:
Edit `assets/css/styles.css`, lines 8-16:
```css
:root {
    --primary-color: #ffbd39;  /* Change to your preferred color */
}
```

### Add More Sections:
Check `CUSTOMIZATION_GUIDE.md` for:
- Adding hobbies section
- Adding photo gallery
- Adding family details
- And more!

## Need Help?

### Common Issues:

**Images not showing?**
- Make sure image is named exactly `profile.jpg`
- Check it's in `assets/images/` folder
- Try a different image format (JPG or PNG)

**Website not loading on GitHub Pages?**
- Wait 5-10 minutes after first deployment
- Check repository is public
- Verify GitHub Pages is enabled in settings

**Animations not working?**
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check if JavaScript is enabled in browser
- Try a different browser

## Next Steps After Going Live

1. **Share with Family First**: Get feedback from family members
2. **Test on Mobile**: Make sure it looks good on phones
3. **Update Regularly**: Keep information current
4. **Track Visitors**: (Optional) Add Google Analytics
5. **Respond Promptly**: Check contact form submissions regularly

## What Makes Your Website Impressive

- **Modern Design**: Dark theme with smooth animations (like the reference site you shared)
- **Professional Content**: Showcases your DevOps expertise at Rakuten
- **Complete Information**: Education, experience, certifications, package details
- **Responsive**: Works perfectly on desktop, tablet, and mobile
- **Easy to Navigate**: Clear sections with smooth scrolling
- **Impressive Skills Display**: Animated skill bars showing your expertise
- **Official Documentation**: Links to download certificates and documents

## Files Structure

```
marriage-profile-website/
├── index.html                    (Main website file)
├── assets/
│   ├── css/
│   │   └── styles.css           (Styling)
│   ├── js/
│   │   └── script.js            (Animations & interactions)
│   ├── images/
│   │   ├── profile.jpg          (👈 ADD YOUR PHOTO HERE)
│   │   └── placeholder.svg      (Temporary placeholder)
│   └── documents/               (👈 ADD YOUR DOCUMENTS HERE)
│       ├── payslip.pdf
│       ├── employment-letter.pdf
│       ├── form16.pdf
│       ├── education.pdf
│       └── certifications.pdf
├── README.md                     (Full documentation)
├── QUICK_START.md               (Quick reference)
├── CUSTOMIZATION_GUIDE.md       (Advanced customization)
└── SETUP_INSTRUCTIONS.md        (This file)
```

## Final Checklist Before Going Live

- [ ] Added your profile photo (`profile.jpg`)
- [ ] Updated email address
- [ ] Updated phone number
- [ ] Updated LinkedIn URL
- [ ] Added/updated social media links (or removed them)
- [ ] Reviewed personal introduction section
- [ ] Added documents (optional)
- [ ] Tested website locally in browser
- [ ] All sections display correctly
- [ ] All links work properly
- [ ] Website is responsive on mobile
- [ ] Sensitive information is redacted from documents
- [ ] Ready to deploy!

## Support

For detailed documentation, refer to:
- `README.md` - Complete guide with all features
- `QUICK_START.md` - 30-minute quick setup
- `CUSTOMIZATION_GUIDE.md` - Advanced styling and features

---

## Summary

Your professional marriage profile website is **ready to go**! Just add your photo, update contact details, and deploy to GitHub Pages. The entire process should take about 30-45 minutes.

**Your website showcases:**
- 4+ years of experience in DevOps and SRE
- Working at Rakuten (top e-commerce company)
- Multiple certifications (CKA, Terraform, GCP, Azure)
- Strong educational background
- Competitive package (₹13.2 LPA)
- Professional skills in cloud technologies

This will definitely impress your relatives and prospects!

**Good luck with your matrimonial search!** 🎉
