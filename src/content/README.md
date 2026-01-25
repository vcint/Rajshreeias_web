# 📝 Content Management Guide

**Welcome! This folder contains all the content for the Rajshree IAS website.**  
**You can easily update website content by editing these JSON files - NO coding knowledge required!**

---

## 🎯 How It Works

**Simple Process:**
1. **Edit JSON files** in this `src/content/` folder using any text editor
2. **Save the file** (Ctrl+S)
3. **Refresh your website** - changes appear instantly!

**No need to visit individual pages** - updating a JSON file automatically updates all relevant sections of the website.

---

## 📁 Files Overview

### 1. **courses.json** - Manage All Course Information
**What you can update:**
- Course prices and discounts
- Course duration and mode (Online/Offline)
- Course descriptions and features
- Razorpay payment links

**How to update a course price:**
```json
"price": "₹1,20,000",          ← Change this to new price
"originalPrice": "₹1,50,000"   ← Change this to show discount
```

**How to update Razorpay link:**
```json
"razorpayUrl": "https://razorpay.me/@rajshreeias/upsc-cse"  ← Update this link
```

**How to add/remove course features:**
```json
"features": [
  "Complete Prelims + Mains + Interview preparation",  ← Existing feature
  "New feature here"  ← Add new feature
]
```

---

### 2. **site-settings.json** - General Website Settings
**What you can update:**
- Phone numbers and email
- Social media links (Facebook, Instagram, etc.)
- WhatsApp number and default message
- Office address
- Website statistics (student count, success rate, etc.)
- Hero section text

**How to update phone number:**
```json
"phone": "+91 86682 75251"  ← Change this number
```

**How to update statistics:**
```json
"studentsEnrolled": "5000+",  ← Update number
"successRate": "85%"          ← Update percentage
```

---

### 3. **testimonials.json** - Student Reviews
**What you can update:**
- Add new student testimonials
- Update existing testimonials
- Change student names, ranks, and reviews

**How to add a new testimonial:**
```json
{
  "id": 5,  ← Use next number
  "name": "Student Name",
  "rank": "AIR 100, UPSC CSE 2024",
  "image": "/testimonials/student-name.jpg",
  "text": "Write the testimonial text here",
  "rating": 5,
  "course": "Course name"
}
```

---

### 4. **faqs.json** - Frequently Asked Questions
**What you can update:**
- Add new FAQs
- Update existing answers
- Remove outdated FAQs

**How to add a new FAQ:**
```json
{
  "id": 7,  ← Use next number
  "question": "Your question here?",
  "answer": "Your detailed answer here.",
  "category": "Courses"  ← Choose: Courses, Payment, Study Material, etc.
}
```

---

### 5. **resources.json** - Free Resources
**What you can update:**
- Add new study materials
- Update download links
- Add new previous year papers
- Update current affairs compilations

**How to add a new resource:**
```json
{
  "id": "ca-feb-2026",
  "title": "February 2026 Current Affairs",
  "type": "Monthly Magazine",
  "date": "2026-02-28",
  "downloadUrl": "/downloads/current-affairs-feb-2026.pdf",
  "featured": true
}
```

---

## ⚠️ Important Rules

### DO's ✅
1. **Always keep the structure intact** - Don't remove commas, braces, or brackets
2. **Use the same format** - Copy existing entries and modify them
3. **Update dates in YYYY-MM-DD format** - Example: "2026-01-18"
4. **Keep prices in ₹ format** - Example: "₹45,000"
5. **Use proper quotation marks** - Always use double quotes "like this"
6. **Save the file after editing** - Press Ctrl+S

### DON'Ts ❌
1. **Don't remove commas** between items
2. **Don't delete the curly braces** { } or square brackets [ ]
3. **Don't change the keys** (id, title, price, etc.) - Only change the values
4. **Don't use special characters** without proper escaping
5. **Don't forget to add comma** after adding new items (except the last item)

---

## 📋 Common Tasks

### Task 1: Update Course Price
1. Open `courses.json`
2. Find the course using its "id" (e.g., "upsc-cse")
3. Update "price" and "originalPrice"
4. Save the file (Ctrl+S)

### Task 2: Update Phone Number Everywhere
1. Open `site-settings.json`
2. Update the phone number in "contact" section
3. Update the WhatsApp number
4. Save the file (Ctrl+S)

### Task 3: Add New Testimonial
1. Open `testimonials.json`
2. Copy the last testimonial entry
3. Paste it before the last closing bracket ]
4. Add a comma after the previous entry
5. Update id, name, rank, text, and course
6. Save the file (Ctrl+S)

### Task 4: Add Monthly Current Affairs
1. Open `resources.json`
2. Find "currentAffairs" → "items"
3. Copy an existing item
4. Update id, title, date, and downloadUrl
5. Set "featured": true to show on homepage
6. Save the file (Ctrl+S)

---

## 🆘 Help & Support

**If something goes wrong:**
1. Check for missing commas or quotes
2. Make sure all brackets are closed { } and [ ]
3. Use a JSON validator online: https://jsonlint.com
4. Contact technical support

**Quick JSON Validation:**
1. Copy all content from your edited file
2. Go to https://jsonlint.com
3. Paste and click "Validate JSON"
4. Fix any errors shown in red

---

## 📱 Contact for Support
- **Phone:** +91 86682 75251
- **Email:** info@rajshreeias.com

---

**Last Updated:** January 18, 2026
