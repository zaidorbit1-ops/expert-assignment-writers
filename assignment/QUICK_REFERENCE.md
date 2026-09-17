# 🎨 Quick Reference Guide - Making Changes

## 🚀 Start Here

```bash
npm install     # First time only
npm start       # Start development server
npm run build   # Build for production
```

---

## 📝 Editing Content

### Change Heading/Title
Find text in component and replace:
```jsx
<h1>Old Title</h1>
// Change to:
<h1>New Title</h1>
```

### Change Prices or Numbers
Search and replace numbers throughout components

### Add New Service
Edit `src/components/Services.jsx`:
```jsx
const services = [
  // ... existing services
  {
    icon: <YourIcon size={32} />,
    title: 'New Service',
    description: 'Description here...',
  },
];
```

### Add New Testimonial
Edit `src/components/Testimonials.jsx`:
```jsx
const testimonials = [
  // ... existing testimonials
  {
    name: 'New Student',
    university: 'University Name',
    rating: 5,
    image: 'https://image-url.com/photo.jpg',
    text: 'Quote text...',
  },
];
```

### Update FAQ
Edit `src/components/FAQ.jsx`:
```jsx
const faqs = [
  // ... existing FAQs
  {
    question: 'New Question?',
    answer: 'Answer text...',
  },
];
```

---

## 🎨 Styling Changes

### Change Button Colors
In component, find and change:
```jsx
className="bg-primary-900 hover:bg-primary-950"
// To:
className="bg-secondary-700 hover:bg-secondary-800"
```

### Change Section Background
```jsx
<section className="bg-white">
// To:
<section className="bg-primary-50">
```

### Change Text Size
```jsx
className="text-body-md"    // 16px
// To:
className="text-body-lg"    // 18px
// Or:
className="text-headline-md" // 24px
```

### Change Spacing
```jsx
className="gap-gutter"  // 24px
// To:
className="gap-stack-lg" // 32px
```

---

## 🖼️ Image Guide

### Where to Put Images
1. Place all images in the `public/` folder
2. Reference them as: `/image-name.png`

### Image Sizes (Recommended)
- **Logo**: 256x256px (square, transparent)
- **Hero Image**: 1200x800px
- **Service Icons**: 64x64px or use lucide-react icons
- **Testimonial Photos**: 100x100px (circular)
- **Background Images**: 1920x1080px minimum

### Adding New Image
```jsx
<img src="/my-image.png" alt="Description" />
```

---

## 🎨 Color Reference

### Primary Colors
```
#0d3055 - Dark Blue (Main)
#2f5bba - Light Blue
#69aadb - Medium Blue
#87bbe2 - Soft Blue
```

### Secondary Colors
```
#cfa049 - Gold/Orange (Accent)
#f5c099 - Light Gold
#a87f39 - Dark Gold
```

### Neutral Colors
```
#ffffff - White
#f1f5f9 - Light Gray
#43474e - Dark Gray
```

### Using Colors in Code
```jsx
className="bg-primary-900"     // Dark blue
className="text-secondary-700" // Gold
className="border-primary-200" // Light blue border
className="hover:bg-primary-50" // Hover state
```

---

## ⚡ Common Edits

### Edit Headline
File: `src/components/Hero.jsx`
```jsx
<h1>Old Headline</h1>
```

### Edit Description
File: `src/components/Hero.jsx`
```jsx
<p>Old description...</p>
```

### Edit Services
File: `src/components/Services.jsx`
```jsx
title: 'Service Name',
description: 'Service description...',
```

### Edit Process Steps
File: `src/components/Process.jsx`
```jsx
title: 'Step Title',
description: 'Step description...',
```

### Edit FAQ
File: `src/components/FAQ.jsx`
```jsx
question: 'Question?',
answer: 'Answer...',
```

### Edit Footer Links
File: `src/components/Footer.jsx`
```jsx
<a href="/link-path">Link Text</a>
```

### Edit Contact Info
File: `src/components/Footer.jsx`
```jsx
<a href="mailto:email@example.com">Email</a>
<a href="tel:+1234567890">Phone</a>
```

---

## 🔧 Component Files Guide

| File | Purpose | What to Edit |
|------|---------|------------|
| Header.jsx | Navigation | Logo, menu links, CTA button text |
| Hero.jsx | Main section | Headline, description, form fields |
| TrustBar.jsx | University logos | University names, styling |
| Services.jsx | Service cards | Titles, descriptions, icons |
| WhyUs.jsx | Features section | Feature titles, descriptions |
| Process.jsx | 4-step flow | Step titles, descriptions |
| Testimonials.jsx | Reviews | Student names, quotes, universities |
| FAQ.jsx | Q&A section | Questions and answers |
| FinalCTA.jsx | Call-to-action | CTA text and buttons |
| Footer.jsx | Footer | Links, contact info, company info |

---

## 🎨 Tailwind Cheat Sheet

### Common Classes
```
Spacing:
- p-4 (padding)
- m-4 (margin)
- gap-4 (gap between items)

Text:
- text-xl (size)
- font-bold (weight)
- text-center (align)

Colors:
- bg-primary-900 (background)
- text-white (text color)
- border-primary-200 (border)

Responsive:
- md:block (show on medium+)
- lg:grid-cols-4 (4 columns on large+)
- hidden sm:flex (hidden, flex on small+)

Effects:
- rounded-lg (rounded corners)
- shadow-lg (shadow)
- hover:scale-105 (hover effect)
```

---

## ❌ Common Mistakes

### ❌ Wrong Image Path
```jsx
// ❌ Wrong
<img src="public/image.png" />
<img src="./public/image.png" />

// ✅ Correct
<img src="/image.png" />
```

### ❌ Forgetting Alt Text
```jsx
// ❌ Wrong
<img src="/image.png" />

// ✅ Correct
<img src="/image.png" alt="Description" />
```

### ❌ Wrong Color Format
```jsx
// ❌ Wrong
className="bg-#0d3055"

// ✅ Correct
className="bg-primary-900"
```

### ❌ Missing Closing Tags
```jsx
// ❌ Wrong
<button>Click me</button

// ✅ Correct
<button>Click me</button>
```

---

## 📱 Testing Changes

After making changes:

1. **Save the file** (Ctrl+S)
2. **Check browser** - Should auto-reload
3. **Test responsiveness** - Resize browser window
4. **Test on phone** - Use your device or browser DevTools
5. **Check console** - Look for any errors (F12)

---

## 🐛 Debugging Tips

### Check Browser Console
Press `F12` to open DevTools and check for errors

### Common Errors
- **"Cannot find module"** - Check import path
- **"Undefined is not a function"** - Check variable name
- **Styling not applied** - Check class name spelling

### Quick Fixes
1. Save file
2. Clear browser cache (Ctrl+Shift+Delete)
3. Restart dev server (Ctrl+C, npm start)
4. Check for typos in class names

---

## 💾 Saving Work

Best practices:
1. Commit often with Git
2. Use descriptive commit messages
3. Keep backups
4. Don't delete components unless necessary

---

## 📞 Need Help?

1. **Check component comments** - They explain what each part does
2. **Search your error** - Most issues are on Stack Overflow
3. **Read Tailwind docs** - Classes are well-documented
4. **Check React docs** - React-specific issues covered

---

**Pro Tip:** Use VS Code's Find & Replace (Ctrl+H) to make bulk changes quickly!
