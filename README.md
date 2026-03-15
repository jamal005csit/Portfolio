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

## 📁 Project Structure

```
portfolio/
├── index.html          # Home page with hero section
├── about.html          # About page with background and languages
├── education.html      # Education details from E-JUST
├── projects.html       # Project showcase with GitHub links
├── services.html       # Services offered with descriptions
├── resume.html         # Resume page (viewable and downloadable)
├── styles.css          # Unified stylesheet for all pages
├── script.js           # JavaScript for interactivity
└── README.md          # This file
```

## 🚀 Quick Start

### Local Development

1. **Download all files** to a folder on your computer

2. **Open in browser**
   - Simply double-click `index.html`
   - Or use a local server (recommended):
   
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js
   npx http-server
   ```

3. **View the site**
   - Open `http://localhost:8000` in your browser

### No Build Process Required

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
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```

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

## 🔧 Browser Support

- ✅ Chrome/Edge (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Safari (last 2 versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

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

$ exit 0
