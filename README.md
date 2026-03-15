<<<<<<< HEAD
# Jamal El-Shenawy - Data Engineer Portfolio

A professional multi-page portfolio website with a dark Apple-inspired aesthetic, showcasing data engineering expertise, projects, and services.

## 🎯 Overview

This portfolio website features:
- **Multi-page architecture** (not a single-page app)
- **Dark coding aesthetic** with Apple-style minimalism
- **Fully responsive design** for all devices
- **Matrix background animation** for technical feel
- **Smooth animations and transitions**
- **Clean, professional layout**
=======
# AI Engineer Portfolio Website

A dark-themed, professional portfolio website with a technical coding aesthetic. Built with performance, accessibility, and GitHub Pages deployment in mind.

## 🎯 Features

- **Dark Theme Design**: Professional black/gray color scheme with strategic accent colors
- **Matrix Animation**: Dynamic background with falling code characters
- **Smooth Animations**: GPU-accelerated CSS animations and scroll reveals
- **Fully Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Lighthouse score 90+ target
- **Accessibility**: ARIA labels, keyboard navigation, proper contrast ratios
- **SEO Optimized**: Semantic HTML, meta tags, structured content
>>>>>>> c94674fa76459aab3f53d1fcfbd8198ad5194741

## 📁 Project Structure

```
portfolio/
<<<<<<< HEAD
├── index.html          # Home page with hero section
├── about.html          # About page with background and languages
├── education.html      # Education details from E-JUST
├── projects.html       # Project showcase with GitHub links
├── services.html       # Services offered with descriptions
├── resume.html         # Resume page (viewable and downloadable)
├── styles.css          # Unified stylesheet for all pages
├── script.js           # JavaScript for interactivity
=======
├── index.html          # Main HTML file
├── styles.css          # Complete stylesheet
├── script.js           # JavaScript functionality
>>>>>>> c94674fa76459aab3f53d1fcfbd8198ad5194741
└── README.md          # This file
```

## 🚀 Quick Start

### Local Development

<<<<<<< HEAD
1. **Download all files** to a folder on your computer

2. **Open in browser**
   - Simply double-click `index.html`
   - Or use a local server (recommended):
   
=======
1. **Clone or download the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
>>>>>>> c94674fa76459aab3f53d1fcfbd8198ad5194741
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
<<<<<<< HEAD
   # Node.js
=======
   # Node.js (if you have http-server installed)
>>>>>>> c94674fa76459aab3f53d1fcfbd8198ad5194741
   npx http-server
   ```

3. **View the site**
   - Open `http://localhost:8000` in your browser

### No Build Process Required

<<<<<<< HEAD
This is a static website with no dependencies or build tools. Just HTML, CSS, and vanilla JavaScript.

## 🎨 Design Features

### Color Scheme
- **Primary**: Black (#000000) - Authority and professionalism
- **Accent**: Blue (#0071E3) - Apple-inspired trust and clarity
- **Text**: Light Gray (#D1D5DB) - Optimal readability
- **Success**: Green (#10B981) - Terminal prompts

### Typography
- **Display Font**: SF Pro Display (Apple's system font)
- **Monospace**: JetBrains Mono (for code and technical elements)

### Animations
- Matrix rain background
- Smooth scroll reveals
- Hover transitions
- Counter animations for stats
- Language level progress bars

## 📝 Pages Overview

### 1. Home (`index.html`)
- Hero section with terminal code visual
- Quick intro cards for key skills
- Location section with animated marker
- Statistics display

### 2. About (`about.html`)
- Professional background as Data Engineer
- Additional expertise areas (Web Dev, ML, RAG)
- Language proficiency with visual indicators
- Social media links (GitHub, LinkedIn, Email)

### 3. Education (`education.html`)
- E-JUST university details
- Academic activities and achievements
- Robotics competition accomplishment
- University highlights and features

### 4. Projects (`projects.html`)
Four featured projects:
- **CineVerse**: Netflix-style streaming platform
- **Booking Application**: Flight and car booking system
- **MNIST Recognition**: Machine learning character recognition
- **Credit Scoring Model**: ML risk assessment system

### 5. Services (`services.html`)
Detailed service offerings:
- ETL Pipelines
- Web Scraping
- API Scraping & Integration
- Web Development

### 6. Resume (`resume.html`)
- Downloadable/printable resume
- Professional summary
- Technical skills
- Education and experience
- Projects and languages

## 🛠️ Customization Guide

### Update Personal Information

**Name and Title (index.html, line ~48-50)**
```html
<span class="name-text">Your Name</span>
<h2 class="hero-subtitle-main">Your Title</h2>
```

**Contact Information (all pages footer)**
```html
<a href="mailto:your-email@example.com">your-email@example.com</a>
<a href="https://github.com/yourusername">GitHub</a>
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
```

### Modify Colors

Edit `styles.css` (lines ~15-30):
```css
:root {
    --color-accent: #0071E3;  /* Change to your preferred color */
    --color-success: #10B981;
    /* ... other colors */
}
```

### Add/Remove Sections

Each page is independent. To modify:
1. Edit the respective HTML file
2. CSS classes are reusable across pages
3. Update navigation links if needed

### Update Projects

In `projects.html`, find each project card and update:
- Project title
- Description
- Technologies used
- Skills demonstrated
- GitHub link

### Modify Services

In `services.html`, customize:
- Service descriptions
- Technologies list
- Features offered

## 🌐 Deployment

### GitHub Pages

1. **Create a GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio website"
   ```

2. **Push to GitHub**
   ```bash
=======
This is a static site with no dependencies or build process. Just edit the HTML, CSS, and JS files directly.

## 📝 Customization Guide

### 1. Personal Information

Edit `index.html` to add your details:

**Hero Section** (Lines 45-70):
```html
<h1 class="hero-title">
    <span class="glitch-text" data-text="YOUR NAME">YOUR NAME</span>
</h1>
<p class="hero-subtitle">Your Title | Your Expertise</p>
<p class="hero-description">Your personal tagline...</p>
```

**About Section** (Lines 95-115):
- Replace the paragraphs with your story
- Update the stats (years experience, projects, etc.)

**Education** (Lines 125-145):
- Replace degree names, institutions, years
- Add/remove education cards as needed

**Skills** (Lines 155-210):
- Add/remove skill tags in each category
- Customize categories to match your expertise

**Experience** (Lines 220-280):
- Update job titles, companies, dates
- Replace descriptions with your accomplishments
- Modify impact badges with your metrics

**Projects** (Lines 320-420):
- Replace project titles and descriptions
- Update tech stacks
- Change metrics to your actual results

**Contact** (Lines 570-600):
- Update email address
- Replace GitHub/LinkedIn URLs with yours

### 2. Color Scheme

Edit `styles.css` (Lines 10-25) to change colors:

```css
:root {
    --color-black: #000000;
    --color-charcoal: #0D0D0D;
    --color-dark-gray: #1A1A1A;
    --color-accent: #3B82F6;  /* Change this for different accent color */
}
```

### 3. Fonts

Current fonts (JetBrains Mono + IBM Plex Sans):
- To change: Update Google Fonts link in `index.html` (Line 13)
- Update CSS variables in `styles.css` (Lines 27-28)

### 4. Adding Images

To add project images or profile photos:

1. Create an `images/` folder
2. Add your images
3. Update the HTML:
```html
<div class="project-image">
    <img src="images/project-name.jpg" alt="Project description">
</div>
```

### 5. Sections

To add/remove sections:
1. Copy a section in `index.html`
2. Change the `id` attribute
3. Add navigation link in the nav menu
4. Update scroll spy in `script.js` if needed

## 🌐 GitHub Pages Deployment

### Method 1: Through GitHub Interface

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
>>>>>>> c94674fa76459aab3f53d1fcfbd8198ad5194741
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```

<<<<<<< HEAD
3. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to "Pages"
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO/`

### Netlify (Alternative)

1. Drag and drop your folder to [Netlify Drop](https://app.netlify.com/drop)
2. Your site will be live instantly
3. Optional: Connect to GitHub for automatic deployments

### Vercel (Alternative)

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts
4. Your site will be deployed

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## ♿ Accessibility Features

- Semantic HTML5 structure
- ARIA labels where appropriate
- Keyboard navigation support
- Skip-to-content link
- Focus indicators for keyboard users
- Color contrast compliant (WCAG AA)
- Print-friendly resume page

## ⚡ Performance

### Optimization Features
- Minimal external dependencies
- Lazy-loaded animations
- Efficient CSS animations (GPU-accelerated)
- Optimized images (when added)
- Clean, semantic code

### Lighthouse Scores (Target)
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+
=======
2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to "Pages" section
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be live at `https://YOUR-USERNAME.github.io/YOUR-REPO/`

### Method 2: Using GitHub CLI

```bash
# Initialize and push
git init
git add .
git commit -m "Initial commit"
gh repo create YOUR-REPO --public --source=. --remote=origin --push

# Enable Pages
gh api repos/YOUR-USERNAME/YOUR-REPO/pages -X POST -f source[branch]=main
```

### Custom Domain (Optional)

1. Add a `CNAME` file to your repository:
   ```
   yourdomain.com
   ```

2. Configure DNS with your domain provider:
   - Add A records pointing to GitHub's IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add a CNAME record pointing to `YOUR-USERNAME.github.io`

3. In GitHub repository settings, enter your custom domain under "Pages"

## ⚡ Performance Tips

### Achieved Optimizations

✅ **Minimal Dependencies**: No external libraries (except fonts)
✅ **CSS Animations**: GPU-accelerated transforms
✅ **Lazy Loading**: Images load only when needed
✅ **Debounced Scroll**: Performance-optimized scroll handlers
✅ **Compressed Assets**: Minimal file sizes

### Further Optimizations

If you add images:

1. **Compress images**:
   - Use tools like TinyPNG or ImageOptim
   - Serve WebP format with JPEG/PNG fallbacks
   - Use responsive images with `srcset`

2. **Minify files** (for production):
   ```bash
   # CSS
   npx clean-css-cli -o styles.min.css styles.css
   
   # JavaScript
   npx terser script.js -o script.min.js
   ```

3. **Enable caching**: Add to repository root
   ```
   # .htaccess
   <IfModule mod_expires.c>
     ExpiresActive On
     ExpiresByType text/css "access plus 1 year"
     ExpiresByType text/javascript "access plus 1 year"
   </IfModule>
   ```

## 🎨 Design Philosophy

### Color Psychology Applied

- **Black (#000000)**: Authority, expertise, professionalism
- **Gray Tones**: Logic, technical precision, neutrality
- **Blue Accent (#3B82F6)**: Trust, intelligence, clarity
- **White Text**: Clarity, precision, readability

### Typography Hierarchy

- **Headers**: JetBrains Mono (monospace coding font)
- **Body**: IBM Plex Sans (readable, technical aesthetic)
- **Clear hierarchy**: Large titles → Medium headings → Body text

### Animation Principles

- **Purposeful**: Every animation serves a function
- **Performance**: CSS-first, GPU-accelerated
- **Subtle**: Professional, not distracting
- **Accessible**: Respects `prefers-reduced-motion`
>>>>>>> c94674fa76459aab3f53d1fcfbd8198ad5194741

## 🔧 Browser Support

- ✅ Chrome/Edge (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Safari (last 2 versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

<<<<<<< HEAD
## 📄 Resume Download Feature

The resume page includes a download button that triggers the browser's print dialog. To use a PDF file instead:

1. Create a `resume.pdf` file
2. Update `resume.html` download function:
```javascript
function downloadResume() {
    const link = document.createElement('a');
    link.href = 'resume.pdf';
    link.download = 'Jamal_El-Shenawy_Resume.pdf';
    link.click();
}
```

## 🎯 SEO Optimization

Each page includes:
- Meta descriptions
- Keywords
- Proper heading hierarchy
- Semantic HTML
- Alt text for images (when added)

## 🐛 Troubleshooting

### Navigation Not Working
- Ensure all HTML files are in the same directory
- Check that file names match exactly (case-sensitive on some servers)

### Fonts Not Loading
- Check internet connection (Google Fonts CDN)
- Fallback fonts will load automatically

### Animations Not Smooth
- Ensure hardware acceleration is enabled in browser
- Try a different browser

## 📞 Support

For questions or issues:
- Check the code comments in each file
- Review this README
- Test in different browsers

## 📜 License

This portfolio template is free to use for personal portfolios. Attribution appreciated but not required.

---

**Built with precision for Jamal El-Shenawy**  
Data Engineer | Problem Solver | Technology Enthusiast
=======
### Fallbacks Implemented

- IntersectionObserver API with fallback
- CSS Grid with flexbox fallback
- Modern CSS features with vendor prefixes

## 📱 Mobile Responsiveness

Breakpoints:
- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

Responsive features:
- Collapsible navigation (can be enhanced with hamburger menu)
- Stacked layouts on mobile
- Touch-friendly buttons and links
- Readable font sizes across devices

## ♿ Accessibility Features

- ✅ Semantic HTML5 elements
- ✅ ARIA labels where needed
- ✅ Keyboard navigation support
- ✅ Skip-to-content link
- ✅ Color contrast ratios (WCAG AA compliant)
- ✅ Focus indicators
- ✅ Alt text for images (when added)

## 🐛 Troubleshooting

### Fonts not loading?
- Check your internet connection
- Google Fonts CDN might be blocked
- Download fonts locally and update paths

### Animations not working?
- Clear browser cache
- Check JavaScript console for errors
- Ensure `script.js` is loaded properly

### GitHub Pages not updating?
- Changes may take 5-10 minutes to deploy
- Clear browser cache
- Check repository "Actions" tab for build status

## 📄 License

This template is free to use for personal portfolios. Attribution appreciated but not required.

## 🤝 Contributing

Feel free to fork and customize! If you create improvements, consider sharing them back.

## 📞 Support

For issues or questions:
- Check the code comments in each file
- Review this README thoroughly
- Search GitHub Issues (if applicable)

---

**Built with precision and purpose** 🚀
>>>>>>> c94674fa76459aab3f53d1fcfbd8198ad5194741

$ exit 0
