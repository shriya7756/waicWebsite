// Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

<<<<<<< HEAD
=======
        // Toggle current site's mobile nav (matches .hamburger-menu and .nav-nav-menu in HTML)
        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.querySelector('.hamburger-menu');
            const navMenu = document.querySelector('.nav-nav-menu');
            if (hamburger && navMenu) {
                hamburger.addEventListener('click', function() {
                    navMenu.classList.toggle('active');
                });
            }
        });

>>>>>>> 17cd6c1 (Updated with mobile version)
        // Navbar background on scroll
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.15)';
                navbar.style.backdropFilter = 'blur(15px)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.1)';
                navbar.style.backdropFilter = 'blur(10px)';
            }
        });

        // Enhanced scroll snapping for flagship program
        const programContainer = document.querySelector('.program-scroll-container');
        let isScrolling = false;

        if (programContainer) {
            programContainer.addEventListener('scroll', function() {
                if (!isScrolling) {
                    window.requestAnimationFrame(function() {
                        // Add smooth scroll behavior
                        isScrolling = false;
                    });
                    isScrolling = true;
                }
            });
        }

        // Add scroll indicators for the program section
        function addScrollIndicators() {
            const programSection = document.querySelector('.flagship-program');
            if (!programSection) return; // guard: element not present on this page
            const indicator = document.createElement('div');
            indicator.innerHTML = '<div style="text-align: center; margin-top: 20px; color: rgba(255,255,255,0.6); font-size: 0.9rem;">Scroll to explore programs ↓</div>';
            programSection.appendChild(indicator);
        }

        // Initialize scroll indicators
        document.addEventListener('DOMContentLoaded', addScrollIndicators);

        // Animate elements on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.addEventListener('DOMContentLoaded', function() {
            const animateElements = document.querySelectorAll('.stat-card, .pillar-card, .testimonial-card, .program-card');
            animateElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(el);
            });
        });

        // Mobile menu toggle (if needed)
        function toggleMobileMenu() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
        }

        // Button hover effects (generic for all Know More/Coming Soon buttons)
        document.addEventListener('DOMContentLoaded', function() {
            const arrowButtons = document.querySelectorAll('.button.know-more');
            arrowButtons.forEach(btn => {
                const img = btn.querySelector('.pixel-arrow');
                const defaultSrc = btn.getAttribute('data-arrow-default') || (img ? img.src : 'images/Pixel Arrow.png');
                const hoverSrc = btn.getAttribute('data-arrow-hover') || 'images/Pixel Arrow straight.png';
                if (!img) return;

                // Preload hover image
                const preload = new Image();
                preload.src = hoverSrc;

                btn.addEventListener('mouseenter', function() {
                    img.src = hoverSrc;
                });
                btn.addEventListener('mouseleave', function() {
                    img.src = defaultSrc;
                });
            });
        });

        // Add mobile menu styles dynamically if screen is small
        if (window.innerWidth <= 768) {
            const style = document.createElement('style');
            style.textContent = `
                .nav-links {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: rgba(45, 27, 78, 0.95);
                    backdrop-filter: blur(15px);
                    border-radius: 15px;
                    margin-top: 10px;
                    padding: 20px;
                    flex-direction: column;
                    gap: 15px;
                }
                
                .nav-links.active {
                    display: flex;
                }
                
<<<<<<< HEAD
                .navbar {
                    position: relative;
                }
            `;
            document.head.appendChild(style);

            // Add hamburger menu button
            const hamburger = document.createElement('button');
            hamburger.innerHTML = '☰';
            hamburger.style.cssText = 'background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer; display: block;';
            hamburger.onclick = toggleMobileMenu;
            
            const navbar = document.querySelector('.navbar');
            navbar.appendChild(hamburger);
        }

        // Scale entire canvas to fit viewport width without right-edge clipping
        (function() {
            const BASE_WIDTH = 1440;
            function updateScale() {
                const root = document.querySelector('.responsive');
                if (!root) return;
                const viewportW = document.documentElement.clientWidth;
                const scale = Math.min(1, viewportW / BASE_WIDTH);
                root.style.width = BASE_WIDTH + 'px';
                root.style.position = 'relative';
                root.style.left = '50%';
                root.style.transformOrigin = 'top center';
                // Center via left:50% and translateX(-50%), then scale
                root.style.transform = 'translateX(-50%) scale(' + scale + ')';
            }
            document.addEventListener('DOMContentLoaded', updateScale);
            window.addEventListener('resize', updateScale);
            window.addEventListener('orientationchange', updateScale);
            updateScale();
        })();
=======
        }
    });
}

// Add scroll indicators for the program section
function addScrollIndicators() {
    const programSection = document.querySelector('.flagship-program');
    if (!programSection) return; // guard: element not present on this page
    const indicator = document.createElement('div');
    indicator.innerHTML = '<div style="text-align: center; margin-top: 20px; color: rgba(255,255,255,0.6); font-size: 0.9rem;">Scroll to explore programs ↓</div>';
    programSection.appendChild(indicator);
}

// Initialize scroll indicators
document.addEventListener('DOMContentLoaded', addScrollIndicators);

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.stat-card, .pillar-card, .testimonial-card, .program-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Button hover effects (generic for all Know More/Coming Soon buttons)
document.addEventListener('DOMContentLoaded', function() {
    const arrowButtons = document.querySelectorAll('.button.know-more');
    arrowButtons.forEach(btn => {
        const img = btn.querySelector('.pixel-arrow');
        const defaultSrc = btn.getAttribute('data-arrow-default') || (img ? img.src : 'images/Pixel Arrow.png');
        const hoverSrc = btn.getAttribute('data-arrow-hover') || 'images/Pixel Arrow straight.png';
        if (!img) return;

        // Preload hover image
        const preload = new Image();
        preload.src = hoverSrc;

        btn.addEventListener('mouseenter', function() {
            img.src = hoverSrc;
        });
        btn.addEventListener('mouseleave', function() {
            img.src = defaultSrc;
        });
    });
});

// Add mobile menu styles dynamically if screen is small
if (window.innerWidth <= 768) {
    const style = document.createElement('style');
    style.textContent = `
        .nav-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(45, 27, 78, 0.95);
            backdrop-filter: blur(15px);
            border-radius: 15px;
            margin-top: 10px;
            padding: 20px;
            flex-direction: column;
            gap: 15px;
        }
        
        .nav-links.active {
            display: flex;
        }
        
        .navbar {
            position: relative;
        }
    `;
    document.head.appendChild(style);

    // Add hamburger menu button for desktop navbar if present
    const hamburger = document.createElement('button');
    hamburger.innerHTML = '☰';
    hamburger.style.cssText = 'background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer; display: block;';
    hamburger.onclick = toggleMobileMenu;
    
    const navbar = document.querySelector('.navbar');
    if (navbar) navbar.appendChild(hamburger);
}

// Scale entire canvas to fit viewport width without right-edge clipping (desktop .responsive only)
(function() {
    const BASE_WIDTH = 1440;
    function updateScale() {
        const root = document.querySelector('.responsive');
        if (!root) return;
        const viewportW = document.documentElement.clientWidth;
        if (viewportW <= 768) {
            // On small screens, disable transform so CSS media queries take effect
            root.style.width = '100%';
            root.style.left = '0';
            root.style.transform = 'none';
            root.style.transformOrigin = '';
            return;
        }
        const scale = Math.min(1, viewportW / BASE_WIDTH);
        root.style.width = BASE_WIDTH + 'px';
        root.style.position = 'relative';
        root.style.left = '50%';
        root.style.transformOrigin = 'top center';
        // Center via left:50% and translateX(-50%), then scale
        root.style.transform = 'translateX(-50%) scale(' + scale + ')';
    }

    document.addEventListener('DOMContentLoaded', updateScale);
    window.addEventListener('resize', updateScale);
    window.addEventListener('orientationchange', updateScale);
    updateScale();
})();

// Mobile navbar toggle for .iphone layout (hamburger ↔ cross + dropdown)
document.addEventListener('DOMContentLoaded', function () {
    const mobileHamburger = document.querySelector('.iphone .hamburger-menu');
    const mobileMenu = document.querySelector('.iphone .nav-nav-menu');
    if (!mobileHamburger || !mobileMenu) return;

    mobileHamburger.addEventListener('click', function () {
        mobileHamburger.classList.toggle('open');
        mobileMenu.classList.toggle('active');
    });
});
>>>>>>> 17cd6c1 (Updated with mobile version)
