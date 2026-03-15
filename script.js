// ================================================
// PORTFOLIO - INTERACTIVE FEATURES
// Jamal El-Shenawy | Data Engineer
// ================================================

// ================================================
// MATRIX BACKGROUND ANIMATION
// ================================================

class MatrixRain {
    constructor() {
        this.canvas = document.getElementById('matrix-bg');
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        this.fontSize = 14;
        this.columns = 0;
        this.drops = [];
        
        this.init();
        this.animate();
        
        window.addEventListener('resize', () => this.init());
    }
    
    init() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.columns = Math.floor(this.canvas.width / this.fontSize);
        this.drops = Array(this.columns).fill(1);
    }
    
    draw() {
        // Fade effect
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Set text style
        this.ctx.fillStyle = '#0071E3';
        this.ctx.font = `${this.fontSize}px monospace`;
        
        // Draw characters
        for (let i = 0; i < this.drops.length; i++) {
            const char = this.chars[Math.floor(Math.random() * this.chars.length)];
            const x = i * this.fontSize;
            const y = this.drops[i] * this.fontSize;
            
            this.ctx.fillText(char, x, y);
            
            // Reset drop randomly
            if (y > this.canvas.height && Math.random() > 0.975) {
                this.drops[i] = 0;
            }
            
            this.drops[i]++;
        }
    }
    
    animate() {
        this.draw();
        setTimeout(() => requestAnimationFrame(() => this.animate()), 50);
    }
}

// ================================================
// NAVIGATION - SMOOTH SCROLL & ACTIVE STATE
// ================================================

class Navigation {
    constructor() {
        this.nav = document.getElementById('navbar');
        this.navToggle = document.getElementById('nav-toggle');
        this.navMenu = document.getElementById('nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        
        if (!this.nav) return;
        
        this.init();
    }
    
    init() {
        // Scroll effect
        window.addEventListener('scroll', () => this.handleScroll());
        
        // Mobile menu toggle
        if (this.navToggle) {
            this.navToggle.addEventListener('click', () => this.toggleMenu());
        }
        
        // Smooth scroll for anchor links (if on single page sections)
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                // Only prevent default for anchor links on the same page
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    
                    if (target) {
                        const offsetTop = target.offsetTop - 80;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }
                
                // Close mobile menu if open
                if (window.innerWidth <= 768) {
                    this.closeMenu();
                }
            });
        });
        
        // Set active link based on current page
        this.setActivePage();
        
        // Initial scroll check
        this.handleScroll();
    }
    
    handleScroll() {
        if (window.scrollY > 50) {
            this.nav.style.background = 'rgba(0, 0, 0, 0.95)';
            this.nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
        } else {
            this.nav.style.background = 'rgba(0, 0, 0, 0.8)';
            this.nav.style.boxShadow = 'none';
        }
    }
    
    toggleMenu() {
        this.navMenu.classList.toggle('active');
        this.navToggle.classList.toggle('active');
    }
    
    closeMenu() {
        this.navMenu.classList.remove('active');
        this.navToggle.classList.remove('active');
    }
    
    setActivePage() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        this.navLinks.forEach(link => {
            const linkPage = link.getAttribute('href');
            
            if (linkPage === currentPage || 
                (currentPage === '' && linkPage === 'index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
}

// ================================================
// SCROLL REVEAL ANIMATIONS
// ================================================

class ScrollReveal {
    constructor() {
        this.elements = document.querySelectorAll('.reveal-up, .intro-card, .expertise-card, .language-card, .social-card, .skill-showcase-item, .project-card-full, .service-card-main');
        
        if (this.elements.length === 0) return;
        
        this.init();
    }
    
    init() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );
        
        this.elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(40px)';
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(el);
        });
    }
}

// ================================================
// LANGUAGE LEVEL ANIMATIONS
// ================================================

class LanguageLevels {
    constructor() {
        this.levels = document.querySelectorAll('.level-fill');
        
        if (this.levels.length === 0) return;
        
        this.init();
    }
    
    init() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const fill = entry.target;
                        const width = fill.style.width;
                        
                        fill.style.width = '0';
                        setTimeout(() => {
                            fill.style.width = width;
                        }, 200);
                        
                        observer.unobserve(fill);
                    }
                });
            },
            { threshold: 0.5 }
        );
        
        this.levels.forEach(level => observer.observe(level));
    }
}

// ================================================
// STATS COUNTER ANIMATION (HOME PAGE)
// ================================================

class StatsCounter {
    constructor() {
        this.counters = document.querySelectorAll('.stat-number');
        
        if (this.counters.length === 0) return;
        
        this.init();
    }
    
    init() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateCounter(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );
        
        this.counters.forEach(counter => observer.observe(counter));
    }
    
    animateCounter(element) {
        const text = element.textContent;
        const hasPlus = text.includes('+');
        const hasPercent = text.includes('%');
        const target = parseInt(text.replace(/[^0-9]/g, ''));
        
        if (isNaN(target)) return;
        
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                let displayValue = Math.floor(current);
                if (hasPlus) displayValue += '+';
                if (hasPercent) displayValue += '%';
                element.textContent = displayValue;
                requestAnimationFrame(updateCounter);
            } else {
                let finalValue = target;
                if (hasPlus) finalValue += '+';
                if (hasPercent) finalValue += '%';
                element.textContent = finalValue;
            }
        };
        
        updateCounter();
    }
}

// ================================================
// SMOOTH SCROLL TO TOP
// ================================================

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ================================================
// PERFORMANCE MONITORING
// ================================================

class PerformanceMonitor {
    constructor() {
        this.init();
    }
    
    init() {
        window.addEventListener('load', () => {
            if (window.performance && window.performance.timing) {
                const perfData = window.performance.timing;
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                
                console.log(`%c Page Load Time: ${pageLoadTime}ms`, 'color: #10B981; font-weight: bold;');
                
                if (pageLoadTime < 3000) {
                    console.log('%c ✓ Excellent load time! ', 'background: #10B981; color: white; padding: 5px; border-radius: 3px;');
                }
            }
        });
    }
}

// ================================================
// ACCESSIBILITY ENHANCEMENTS
// ================================================

class AccessibilityEnhancements {
    constructor() {
        this.init();
    }
    
    init() {
        // Skip to main content link
        this.addSkipLink();
        
        // Keyboard navigation
        this.enhanceKeyboardNav();
        
        // Focus visible for keyboard users
        this.addFocusVisible();
    }
    
    addSkipLink() {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -100px;
            left: 10px;
            background: var(--color-accent);
            color: white;
            padding: 8px 16px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 10000;
            transition: top 0.3s;
        `;
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '10px';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-100px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
    }
    
    enhanceKeyboardNav() {
        // ESC key to close modals/menus
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                // Close mobile menu if open
                const navMenu = document.getElementById('nav-menu');
                if (navMenu && navMenu.classList.contains('active')) {
                    const nav = new Navigation();
                    nav.closeMenu();
                }
            }
        });
    }
    
    addFocusVisible() {
        // Add focus visible class for keyboard navigation
        document.body.addEventListener('keydown', () => {
            document.body.classList.add('keyboard-nav');
        });
        
        document.body.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-nav');
        });
    }
}

// ================================================
// MOBILE MENU STYLES (INJECTED)
// ================================================

function injectMobileStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .nav-menu {
                position: fixed;
                top: 65px;
                right: -100%;
                width: 250px;
                background: rgba(0, 0, 0, 0.98);
                backdrop-filter: blur(20px);
                flex-direction: column;
                padding: 2rem;
                gap: 1.5rem;
                border-left: 1px solid rgba(255, 255, 255, 0.1);
                transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                height: calc(100vh - 65px);
                overflow-y: auto;
            }
            
            .nav-menu.active {
                right: 0;
            }
            
            .nav-toggle.active span:nth-child(1) {
                transform: rotate(45deg) translate(5px, 5px);
            }
            
            .nav-toggle.active span:nth-child(2) {
                opacity: 0;
            }
            
            .nav-toggle.active span:nth-child(3) {
                transform: rotate(-45deg) translate(7px, -7px);
            }
        }
        
        .keyboard-nav *:focus {
            outline: 2px solid var(--color-accent);
            outline-offset: 2px;
        }
    `;
    document.head.appendChild(style);
}

// ================================================
// UTILITY FUNCTIONS
// ================================================

// Debounce function for performance
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ================================================
// INITIALIZE ALL COMPONENTS
// ================================================

document.addEventListener('DOMContentLoaded', () => {
    // Inject mobile styles
    injectMobileStyles();
    
    // Core functionality
    new MatrixRain();
    new Navigation();
    new ScrollReveal();
    new StatsCounter();
    new LanguageLevels();
    new AccessibilityEnhancements();
    new PerformanceMonitor();
    
    // Log initialization
    console.log(
        '%c Portfolio Initialized ', 
        'background: #0071E3; color: white; padding: 8px 16px; border-radius: 4px; font-weight: bold;'
    );
    console.log(
        '%c Built with precision for Jamal El-Shenawy | Data Engineer ', 
        'color: #0071E3; font-style: italic;'
    );
});

// ================================================
// SMOOTH SCROLL FOR ALL INTERNAL LINKS
// ================================================

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ================================================
// EXPORT FOR USE IN OTHER MODULES (IF NEEDED)
// ================================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        MatrixRain,
        Navigation,
        ScrollReveal,
        StatsCounter,
        debounce,
        throttle
    };
}
