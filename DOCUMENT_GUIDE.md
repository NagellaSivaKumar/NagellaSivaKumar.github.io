# Document Organization Guide

## Documents You'll Be Adding

Based on what you're sharing, here's how to organize everything:

## 1. Profile Photos

### Main Profile Photo
- **Location**: `assets/images/profile.jpg`
- **Recommended**: Your best professional photo (formal attire, good lighting)
- **Size**: Square format, at least 500x500 pixels
- **Format**: JPG or PNG

### Additional Photos (Optional - for future photo gallery)
- `assets/images/photo1.jpg` - Professional photo
- `assets/images/photo2.jpg` - Casual photo
- `assets/images/photo3.jpg` - Family photo (optional)
- `assets/images/photo4.jpg` - Hobby/interest photo (optional)

**Photo Tips:**
- Use high-quality, well-lit images
- Professional attire for main profile
- Smile naturally
- Avoid filters or heavy editing
- Recent photos (within last year)

## 2. Certification Documents

Create a combined PDF or separate files:

### Option A: Single Combined PDF (Recommended)
- **File name**: `assets/documents/certifications.pdf`
- **Contents**: All certifications in one PDF
  - CKA (Certified Kubernetes Administrator) certificate
  - HashiCorp Terraform certification
  - GCP (Google Cloud Platform) certification
  - Azure certification
  - Any other relevant certifications

### Option B: Separate Files
- `assets/documents/cka-certificate.pdf`
- `assets/documents/terraform-certificate.pdf`
- `assets/documents/gcp-certificate.pdf`
- `assets/documents/azure-certificate.pdf`

If using separate files, update the HTML (index.html, around line 372):
```html
<h3>Professional Certifications</h3>
<p>All certification documents</p>
<a href="assets/documents/certifications.pdf" class="doc-link" download>
```

## 3. Employment Documents

### Offer Letter
- **File name**: `assets/documents/offer-letter.pdf`
- **Content**: Your Rakuten offer letter
- **Privacy**: Redact if needed (see Privacy section below)

### Compensation Letter
- **File name**: `assets/documents/compensation-letter.pdf`
- **Content**: The letter showing ₹13,20,296 CTC (effective April 2026)
- **Already included in website**: Main details are on the website
- **Purpose**: Verification document for download

### Bonus Letters
- **File name**: `assets/documents/bonus-letters.pdf`
- **Content**: Any performance bonus or special bonus letters
- **Optional**: Add if you want to showcase additional achievements

### Current Employment Verification
- **File name**: `assets/documents/employment-letter.pdf`
- **Content**: Official letter from Rakuten HR confirming your employment
- **Or**: Can use offer letter/compensation letter as verification

## 4. Payslips

### Last 3 Months
- **Option A: Combined PDF (Recommended)**
  - File name: `assets/documents/payslips.pdf`
  - Combine March, February, January 2026 payslips

- **Option B: Separate Files**
  - `assets/documents/payslip-mar-2026.pdf`
  - `assets/documents/payslip-feb-2026.pdf`
  - `assets/documents/payslip-jan-2026.pdf`

**IMPORTANT - Privacy Protection for Payslips:**

Before uploading, MUST redact these details:
1. ✓ Bank Account Number (full number)
2. ✓ PAN Number (show only last 4 digits: XXXX1234)
3. ✓ Aadhaar Number (if mentioned)
4. ✓ Bank IFSC Code (optional, for extra privacy)
5. ✓ Home Address (if detailed)
6. ✓ Digital Signatures (optional)

**Keep visible:**
- Name
- Employee ID
- Gross earnings
- Deductions
- Net pay
- Company name
- Month/Year

### How to Redact PDFs:

**Method 1: Using Adobe Acrobat (Best)**
1. Open PDF in Adobe Acrobat Pro
2. Tools > Redact
3. Mark areas to redact
4. Apply redactions permanently

**Method 2: Using PDF Editor Online**
1. Go to: https://www.ilovepdf.com/edit-pdf
2. Upload payslip
3. Add black rectangles over sensitive info
4. Download

**Method 3: Print and Scan**
1. Print payslips
2. Use black marker to cover sensitive info
3. Scan back to PDF

**Method 4: Using Microsoft Word**
1. Insert PDF as image in Word
2. Add black shapes over sensitive areas
3. Export as PDF

## 5. Educational Certificates

- **File name**: `assets/documents/education.pdf`
- **Contents**:
  1. CDAC PGD Certificate (Grade A)
  2. Vidya Jyothi Institute B.E. Degree (Grade A)
  3. ESC Govt Polytechnic Diploma (80%)
  4. Mark sheets (if you want to include)

**Tip**: Arrange in reverse chronological order (latest first)

## 6. Additional Documents (Optional)

### Form 16 (Tax Certificate)
- **File name**: `assets/documents/form16.pdf`
- **Content**: Latest financial year Form 16
- **Privacy**: Redact PAN number (show last 4 digits only)

### Identity Proof
- **File name**: `assets/documents/id-proof.pdf`
- **Options**:
  - Aadhaar (redact full number - show last 4 only)
  - PAN card (redact number - show last 4 only)
  - Passport (redact number)
- **Note**: Only if comfortable sharing

## Privacy Checklist - IMPORTANT!

Before uploading ANY document, verify:

### Must Redact (High Priority):
- [ ] Bank account numbers (all instances)
- [ ] Full PAN numbers (keep last 4 digits)
- [ ] Full Aadhaar numbers (keep last 4 digits)
- [ ] Bank IFSC codes
- [ ] Digital signatures (optional, for extra security)
- [ ] Full home address (can keep city/state)

### Can Keep Visible:
- [ ] Name
- [ ] Employee ID
- [ ] Company name
- [ ] Job title
- [ ] Salary amounts
- [ ] Education grades
- [ ] Certification names and dates
- [ ] Professional experience details

### Consider Carefully:
- [ ] Phone number (personal preference)
- [ ] Personal email vs work email
- [ ] Social media profiles

## File Organization Structure

```
assets/
├── images/
│   ├── profile.jpg              (Main profile photo - REQUIRED)
│   ├── photo1.jpg               (Optional additional photos)
│   ├── photo2.jpg
│   ├── photo3.jpg
│   └── placeholder.svg          (Already created - fallback)
│
└── documents/
    ├── certifications.pdf       (All 4 certs: CKA, Terraform, GCP, Azure)
    ├── payslips.pdf            (Last 3 months - REDACTED)
    ├── offer-letter.pdf        (Rakuten offer letter)
    ├── compensation-letter.pdf (₹13.2L CTC letter)
    ├── bonus-letters.pdf       (Performance/special bonuses - optional)
    ├── employment-letter.pdf   (Current employment proof)
    ├── education.pdf           (CDAC + B.E. + Diploma certificates)
    ├── form16.pdf             (Tax certificate - REDACTED)
    └── id-proof.pdf           (Aadhaar/PAN - REDACTED - optional)
```

## Adding Documents - Step by Step

### Step 1: Collect All Documents
Gather all digital copies in one folder on your computer.

### Step 2: Redact Sensitive Information
Go through EACH document and redact using methods above.

### Step 3: Rename Files
Rename according to the naming convention above.

### Step 4: Organize in Folders
- Put photos in `assets/images/`
- Put documents in `assets/documents/`

### Step 5: Verify
- Open each file to ensure it's correct
- Check redactions are permanent (can't be removed)
- Verify file names match HTML references

### Step 6: Test Downloads
- Open `index.html` in browser
- Click each download link
- Verify correct file downloads

## Adding Watermarks (Optional but Recommended)

Add "FOR MATRIMONIAL PURPOSE ONLY" watermark to sensitive documents:

**Using PDF Editor:**
1. Open document
2. Add text watermark: "FOR MATRIMONIAL PURPOSE ONLY"
3. Add date: "Generated on: DD/MM/YYYY"
4. Make it semi-transparent (50% opacity)
5. Save

**Why add watermarks?**
- Prevents misuse of documents
- Shows documents are shared for specific purpose
- Adds extra layer of authenticity

## Password Protection (Optional - Advanced)

For extra security, password-protect sensitive PDFs:

1. Use Adobe Acrobat or online tool
2. Set password
3. Share password separately with interested parties
4. Keeps documents secure on public website

**Note**: If using password protection, add note in HTML:
```html
<p>Documents are password protected. Please contact for password.</p>
```

## Updating HTML for Custom Document Names

If you use different file names, update these sections in `index.html`:

### Certifications Section (around line 372):
```html
<a href="assets/documents/certifications.pdf" class="doc-link" download>
```

### Payslips Section (around line 324):
```html
<a href="assets/documents/payslips.pdf" class="doc-link" download>
```

### Other Documents:
Search for `assets/documents/` in index.html and update accordingly.

## Best Practices

1. **Always keep originals**: Never edit your only copy
2. **Test before uploading**: Open in browser locally first
3. **File size**: Keep PDFs under 5MB each (compress if needed)
4. **Quality**: Ensure documents are clear and readable
5. **Format**: Use PDF format for all documents (most compatible)
6. **Backup**: Keep a backup of all files before uploading

## Compression Tools (if files are too large)

- **For PDFs**: https://www.ilovepdf.com/compress_pdf
- **For Images**: https://tinypng.com or https://squoosh.app

Recommended sizes:
- Images: < 1MB each
- PDFs: < 5MB each
- Total website: < 50MB

## After Adding All Documents

1. **Test locally**:
   - Open index.html in browser
   - Navigate to Documents section
   - Click each download link
   - Verify correct file downloads

2. **Check on mobile**:
   - Open on phone
   - Test downloads work on mobile
   - Verify PDFs open correctly

3. **Review privacy**:
   - Open each document
   - Confirm all sensitive info is redacted
   - Check watermarks are visible (if added)

4. **Deploy**:
   - Upload to GitHub Pages / Netlify
   - Share with family first for feedback
   - Then share with prospects

## What Documents to Prioritize

**Must Have:**
1. Main profile photo
2. Certifications (CKA, Terraform, GCP, Azure)
3. Latest payslip (March 2026)
4. Compensation letter (₹13.2L)

**Should Have:**
5. Last 3 months payslips
6. Educational certificates
7. Offer letter

**Nice to Have:**
8. Bonus letters
9. Form 16
10. Additional photos

## Need Help?

If you have questions about:
- Which documents to include
- How to redact properly
- File format issues
- Adding more document sections

Just ask! I can help update the HTML to accommodate any document structure you prefer.

---

**Remember**: Privacy first! When in doubt about sharing something, either redact it or don't include it. You can always share additional documents privately with serious prospects later.
