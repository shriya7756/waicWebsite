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

        // Button hover effects
        const enrollBtn = document.getElementById('enroll-btn');
        if (enrollBtn) {
            enrollBtn.addEventListener('mouseover', function() {
                this.src = 'placeholder_hover.png';
            });
            enrollBtn.addEventListener('mouseout', function() {
                this.src = 'placeholder_normal.png';
            });
        }

        const knowMore1 = document.getElementById('know-more-1');
        if (knowMore1) {
            knowMore1.addEventListener('mouseover', function() {
                this.querySelector('img').src = 'images/Pixel Arrow straight.png';
            });
            knowMore1.addEventListener('mouseout', function() {
                this.querySelector('img').src = 'images/Pixel Arrow.png';
            });
        }

        const knowMore2 = document.getElementById('know-more-2');
        if (knowMore2) {
            knowMore2.addEventListener('mouseover', function() {
                this.querySelector('img').src = 'images/Pixel Arrow straight.png';
            });
            knowMore2.addEventListener('mouseout', function() {
                this.querySelector('img').src = 'images/Pixel Arrow.png';
            });
        }

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

            // Add hamburger menu button
            const hamburger = document.createElement('button');
            hamburger.innerHTML = '☰';
            hamburger.style.cssText = 'background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer; display: block;';
            hamburger.onclick = toggleMobileMenu;
            
            const navbar = document.querySelector('.navbar');
            navbar.appendChild(hamburger);
        }