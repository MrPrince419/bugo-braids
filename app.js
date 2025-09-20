// Bugo Braids Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('Bugo Braids website loaded');

    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking on nav links
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target) || navToggle.contains(event.target);
            
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }

    // FAQ Accordion Functionality
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');

            // Close all other FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                }
            });

            // Toggle current FAQ item
            if (isActive) {
                faqItem.classList.remove('active');
            } else {
                faqItem.classList.add('active');
            }
        });
    });

    // Smooth Scrolling for Navigation Links
    function smoothScrollToSection(targetId) {
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const navbar = document.querySelector('.navbar');
            const navbarHeight = navbar ? navbar.offsetHeight : 80;
            const targetPosition = targetElement.offsetTop - navbarHeight - 20;
            
            window.scrollTo({
                top: Math.max(0, targetPosition),
                behavior: 'smooth'
            });
            return true;
        }
        return false;
    }

    // Handle all navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal anchor links
            if (href && href.startsWith('#') && href !== '#') {
                e.preventDefault();
                e.stopPropagation();
                
                console.log('Navigating to:', href);
                const success = smoothScrollToSection(href);
                
                if (!success) {
                    console.error('Could not find target element:', href);
                }
            }
        });
    });

    // Handle other anchor links (like "View Services" button)
    const otherAnchorLinks = document.querySelectorAll('a[href^="#"]:not(.nav-link):not(.whatsapp-btn):not(.whatsapp-link):not(.social-link)');
    
    otherAnchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href && href.startsWith('#') && href !== '#') {
                e.preventDefault();
                e.stopPropagation();
                
                console.log('Scrolling to:', href);
                smoothScrollToSection(href);
            }
        });
    });

    // WhatsApp Integration with better error handling
    function openWhatsAppChat(message = null) {
        const businessNumber = '1234567890'; // Replace with actual business WhatsApp number
        const defaultMessage = message || 'Hi Bugo Braids! I would like to book an appointment for braiding services.';
        
        try {
            const encodedMessage = encodeURIComponent(defaultMessage);
            const whatsappUrl = `https://wa.me/${businessNumber}?text=${encodedMessage}`;
            
            console.log('Opening WhatsApp:', whatsappUrl);
            
            // Try to open WhatsApp
            const newWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
            
            if (!newWindow) {
                // Fallback if popup blocked
                window.location.href = whatsappUrl;
            }
            
            return true;
        } catch (error) {
            console.error('Error opening WhatsApp:', error);
            alert('Unable to open WhatsApp. Please contact us directly.');
            return false;
        }
    }

    // Handle WhatsApp buttons
    const whatsappButtons = document.querySelectorAll('.whatsapp-btn');
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            let message = 'Hi Bugo Braids! I would like to book an appointment for braiding services.';
            
            // Check if this is a specific service inquiry
            const serviceCard = this.closest('.service-card');
            if (serviceCard) {
                const serviceTitle = serviceCard.querySelector('h3');
                if (serviceTitle) {
                    const serviceName = serviceTitle.textContent.trim();
                    message = `Hi Bugo Braids! I'm interested in your ${serviceName} service. Could you please provide more information and help me book an appointment?`;
                }
            }
            
            console.log('WhatsApp button clicked');
            openWhatsAppChat(message);
        });
    });

    // Handle social media links
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const platform = this.querySelector('span:last-child').textContent.trim();
            
            let url = '#';
            switch(platform.toLowerCase()) {
                case 'instagram':
                    url = 'https://instagram.com/bugobraids'; // Replace with actual Instagram handle
                    break;
                case 'facebook':
                    url = 'https://facebook.com/bugobraids'; // Replace with actual Facebook page
                    break;
                case 'tiktok':
                    url = 'https://tiktok.com/@bugobraids'; // Replace with actual TikTok handle
                    break;
                case 'whatsapp':
                    openWhatsAppChat('Hi Bugo Braids! I found you through your website and would like to book an appointment.');
                    return;
            }
            
            if (url !== '#') {
                console.log('Opening social media:', platform, url);
                window.open(url, '_blank', 'noopener,noreferrer');
            }
        });
    });

    // Handle WhatsApp links in footer specifically
    const whatsappLinks = document.querySelectorAll('.whatsapp-link');
    
    whatsappLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('WhatsApp link clicked');
            openWhatsAppChat('Hi Bugo Braids! I found you through your website and would like to book an appointment.');
        });
    });

    // Navbar Background on Scroll
    const navbar = document.querySelector('.navbar');
    
    function handleScroll() {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    }
    
    window.addEventListener('scroll', handleScroll);

    // Add CSS for scrolled navbar
    if (!document.querySelector('#navbar-scroll-styles')) {
        const style = document.createElement('style');
        style.id = 'navbar-scroll-styles';
        style.textContent = `
            .navbar.scrolled {
                background: rgba(252, 252, 249, 0.95);
                backdrop-filter: blur(10px);
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            }
            
            @media (prefers-color-scheme: dark) {
                .navbar.scrolled {
                    background: rgba(31, 33, 33, 0.95);
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Intersection Observer for Animation on Scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animateElements = document.querySelectorAll('.service-card, .testimonial-card, .feature, .contact-item');
    animateElements.forEach(element => {
        observer.observe(element);
    });

    // Add CSS for scroll animations
    if (!document.querySelector('#scroll-animation-styles')) {
        const animationStyle = document.createElement('style');
        animationStyle.id = 'scroll-animation-styles';
        animationStyle.textContent = `
            .service-card,
            .testimonial-card,
            .feature,
            .contact-item {
                opacity: 0;
                transform: translateY(30px);
                transition: all 0.6s ease-out;
            }
            
            .animate-in {
                opacity: 1;
                transform: translateY(0);
            }
            
            .service-card:nth-child(1) { transition-delay: 0.1s; }
            .service-card:nth-child(2) { transition-delay: 0.2s; }
            .service-card:nth-child(3) { transition-delay: 0.3s; }
            .service-card:nth-child(4) { transition-delay: 0.1s; }
            .service-card:nth-child(5) { transition-delay: 0.2s; }
            .service-card:nth-child(6) { transition-delay: 0.3s; }
        `;
        document.head.appendChild(animationStyle);
    }

    // Loading State Management
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Trigger initial animations for elements in view
        const elementsInView = document.querySelectorAll('.service-card, .testimonial-card, .feature');
        elementsInView.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                element.classList.add('animate-in');
            }
        });
    });

    // Keyboard Navigation Support
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (navToggle) navToggle.classList.remove('active');
        }
        
        // Enter key on FAQ questions
        if ((e.key === 'Enter' || e.key === ' ')) {
            const faqQuestion = e.target.closest('.faq-question');
            if (faqQuestion) {
                e.preventDefault();
                faqQuestion.click();
            }
        }
    });

    // Debug logging
    console.log('🌟 Bugo Braids website initialized successfully! 🌟');
    console.log('Navigation links found:', navLinks.length);
    console.log('WhatsApp buttons found:', whatsappButtons.length);
    console.log('Social links found:', socialLinks.length);
    console.log('FAQ questions found:', faqQuestions.length);
});

// Utility Functions
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function openWhatsApp(customMessage) {
    const businessNumber = '1234567890'; // Replace with actual WhatsApp business number
    const message = customMessage || 'Hi Bugo Braids! I would like to book an appointment for braiding services.';
    
    try {
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${businessNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
        console.error('Error opening WhatsApp:', error);
    }
}

// Export functions for potential future use
window.BugoBraids = {
    scrollToTop: scrollToTop,
    openWhatsApp: openWhatsApp
};