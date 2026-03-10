# 🚀 Quick Customization Guide

This is your cheat sheet for making quick changes to your portfolio.

## ⚡ 5-Minute Setup Checklist

### 1. Personal Information (index.html)

**Line 50** - Your Name:
```html
<span class="glitch-text" data-text="YOUR NAME HERE">YOUR NAME HERE</span>
```

**Line 52** - Your Title:
```html
<p class="hero-subtitle">Your Professional Title Here</p>
```

**Line 53** - Your Tagline:
```html
<p class="hero-description">
    Your compelling description here...
</p>
```

### 2. Contact Information (index.html)

**Line 575** - Email:
```html
<a href="mailto:your.email@domain.com">your.email@domain.com</a>
```

**Line 589** - GitHub:
```html
<a href="https://github.com/yourusername">github.com/yourusername</a>
```

**Line 603** - LinkedIn:
```html
<a href="https://linkedin.com/in/yourusername">linkedin.com/in/yourusername</a>
```

### 3. Change Accent Color (styles.css)

**Line 14** - Main Accent Color:
```css
--color-accent: #3B82F6;  /* Change to any hex color */
```

Popular alternatives:
- Green: `#10B981`
- Purple: `#8B5CF6`
- Red: `#EF4444`
- Orange: `#F59E0B`
- Cyan: `#06B6D4`

## 📝 Content Sections to Customize

### About Section (Lines 95-118 in index.html)
Replace with your story. Keep it:
- Professional but personable
- Achievement-focused
- 3-4 paragraphs max

### Skills (Lines 160-260)
1. Find the skill category
2. Add/remove `<span class="skill-tag">Your Skill</span>`
3. Create new categories by copying the skill-category div

### Projects (Lines 320-460)
For each project, update:
- `project-title`: Name of project
- `project-description`: Problem, Solution, Impact
- `tech-tag`: Technologies used
- `metric-value`: Your results (3x, 98%, $2M, etc.)

## 🎨 Quick Style Changes

### Change Background Color
**styles.css Line 11:**
```css
--color-black: #000000;  /* Try #0A0A0A or #050505 for slight variations */
```

### Change Font
**index.html Line 13** - Replace with any Google Font:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR-FONT&display=swap">
```

**styles.css Lines 27-28** - Update font variables:
```css
--font-mono: 'YOUR-MONO-FONT', monospace;
--font-sans: 'YOUR-SANS-FONT', sans-serif;
```

### Adjust Spacing
**styles.css Lines 31-35:**
```css
--spacing-xs: 0.5rem;   /* Extra small spacing */
--spacing-sm: 1rem;     /* Small spacing */
--spacing-md: 2rem;     /* Medium spacing */
--spacing-lg: 4rem;     /* Large spacing */
--spacing-xl: 6rem;     /* Extra large spacing */
```

## 🔧 Common Modifications

### Add a New Section

1. Copy an existing section in `index.html`
2. Change the `id` (e.g., `id="certifications"`)
3. Add to navigation menu:
```html
<li><a href="#certifications" class="nav-link">certifications</a></li>
```

### Remove a Section

1. Delete the entire `<section>` block
2. Remove corresponding nav link
3. Done!

### Change Button Style

**For primary buttons (styles.css Line 395):**
```css
.btn-primary {
    background: var(--color-accent);  /* Change color */
    /* Add more styles */
}
```

## 🖼️ Adding Images

### For Projects:

1. Create `images/` folder
2. Add your image
3. Replace in HTML:
```html
<div class="project-image">
    <img src="images/your-project.jpg" alt="Description">
</div>
```

### For Profile Photo:

Add to About section:
```html
<div class="about-image">
    <img src="images/profile.jpg" alt="Your Name">
</div>
```

Add CSS:
```css
.about-image img {
    width: 100%;
    max-width: 400px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.1);
}
```

## 📱 Test Your Changes

### Desktop:
- Chrome DevTools (F12)
- Responsive mode (Ctrl+Shift+M)
- Test different screen sizes

### Mobile:
- Use your phone
- Or Chrome DevTools mobile simulator

### Performance:
- Run Lighthouse audit in Chrome DevTools
- Target: 90+ performance score

## 🌐 Deploy to GitHub Pages

```bash
# 1. Initialize Git
git init

# 2. Add files
git add .

# 3. Commit
git commit -m "Initial portfolio"

# 4. Create repo and push
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main

# 5. Enable Pages in GitHub repo settings
# Settings → Pages → Source: main branch → Save
```

Your site will be live at: `https://USERNAME.github.io/REPO/`

## ⚠️ Common Mistakes to Avoid

1. **Forgetting to update data-text attribute in glitch effect**
   ```html
   <!-- WRONG -->
   <span class="glitch-text" data-text="AI ENGINEER">YOUR NAME</span>
   
   <!-- CORRECT -->
   <span class="glitch-text" data-text="YOUR NAME">YOUR NAME</span>
   ```

2. **Breaking the closing tags**
   - Always close `<div>`, `<section>`, etc.
   - Use an HTML validator if unsure

3. **Removing required CSS classes**
   - Keep class names like `reveal-up`, `section-title`, etc.
   - These are connected to JavaScript and CSS

4. **Not testing responsively**
   - Always check mobile view
   - Test all breakpoints

## 💡 Pro Tips

1. **Update Gradually**: Change one section at a time
2. **Keep Backups**: Save a copy before major changes
3. **Use Browser Cache**: Hard refresh (Ctrl+Shift+R) to see changes
4. **Validate HTML**: Use [W3C Validator](https://validator.w3.org/)
5. **Check Contrast**: Use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

## 🎯 Your First 30 Minutes

1. ✅ Update name, title, tagline (5 min)
2. ✅ Change email, GitHub, LinkedIn (3 min)
3. ✅ Customize About section (10 min)
4. ✅ Update 1-2 projects (10 min)
5. ✅ Test locally (2 min)

That's it! You have a personalized portfolio.

---

Need help? Check README.md for detailed documentation.
