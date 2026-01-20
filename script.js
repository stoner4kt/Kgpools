// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const portfolioGrid = document.querySelector('.portfolio-grid');
const portfolioModal = document.getElementById('portfolioModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const closeModal = document.querySelector('.close-modal');
const filterButtons = document.querySelectorAll('.filter-btn');
const contactForm = document.getElementById('contactForm');
const currentYear = document.getElementById('currentYear');

// Portfolio Data
const portfolioItems = [
    {
        id: 1,
        title: "Modern Infinity Edge Pool",
        description: "Luxury infinity edge pool with integrated spa and waterfall feature in Beverly Hills.",
        category: "infinity",
        image: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 2,
        title: "Family-Friendly Pool with Slide",
        description: "Large family pool with water slide, diving board, and separate wading area.",
        category: "family",
        image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 3,
        title: "Mediterranean Style Pool",
        description: "Elegant Mediterranean-inspired pool with stone decking and roman end steps.",
        category: "luxury",
        image: "https://images.unsplash.com/photo-1536746803623-cef87080bfc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 4,
        title: "Pool & Spa Combo Renovation",
        description: "Complete renovation of an outdated pool including new tile, coping, and equipment.",
        category: "renovation",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 5,
        title: "Natural Lagoon Pool",
        description: "Freeform lagoon-style pool with rock waterfalls and natural stone surroundings.",
        category: "luxury",
        image: "https://images.unsplash.com/photo-1560743173-567a3b5658b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 6,
        title: "Backyard Oasis Transformation",
        description: "Complete backyard transformation including pool, patio, outdoor kitchen, and firepit.",
        category: "luxury",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 7,
        title: "Rectangular Lap Pool",
        description: "Custom 50-foot lap pool for fitness enthusiasts with automatic pool cover.",
        category: "family",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 8,
        title: "Modern Pool with Fire Features",
        description: "Contemporary pool design with integrated fire bowls and LED color lighting.",
        category: "luxury",
        image: "https://images.unsplash.com/photo-1532346324233-1a7dff0d4e89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
];

// Initialize GSAP animations
function initAnimations() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero section animations
    gsap.from('.hero-title', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-subtitle', {
        duration: 1,
        y: 30,
        opacity: 0,
        delay: 0.3,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-buttons', {
        duration: 1,
        y: 30,
        opacity: 0,
        delay: 0.6,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-stats', {
        duration: 1,
        y: 30,
        opacity: 0,
        delay: 0.9,
        ease: 'power3.out'
    });
    
    gsap.from('.image-container', {
        duration: 1.2,
        x: 100,
        opacity: 0,
        delay: 0.5,
        ease: 'power3.out'
    });
    
    // Service cards animation
    gsap.from('.service-card', {
        scrollTrigger: {
            trigger: '.services',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });
    
    // Portfolio items animation
    gsap.from('.portfolio-item', {
        scrollTrigger: {
            trigger: '.portfolio',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
    });
    
    // About section animation
    gsap.from('.about-text', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
    
    gsap.from('.about-image', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
    });
    
    // Contact form animation
    gsap.from('.contact-form-container', {
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
}

// Initialize portfolio grid
function initPortfolio() {
    portfolioGrid.innerHTML = '';
    
    portfolioItems.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = `portfolio-item ${item.category}`;
        portfolioItem.setAttribute('data-category', item.category);
        
        portfolioItem.innerHTML = `
            <div class="portfolio-img" style="background-image: url('${item.image}')"></div>
            <div class="portfolio-overlay">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        
        portfolioItem.addEventListener('click', () => {
            openPortfolioModal(item);
        });
        
        portfolioGrid.appendChild(portfolioItem);
    });
}

// Open portfolio modal
function openPortfolioModal(item) {
    modalImage.src = item.image;
    modalImage.alt = item.title;
    modalTitle.textContent = item.title;
    modalDescription.textContent = item.description;
    
    portfolioModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Animate modal opening
    gsap.from('.modal-content', {
        duration: 0.5,
        scale: 0.8,
        opacity: 0,
        ease: 'back.out(1.7)'
    });
}

// Close portfolio modal
function closePortfolioModal() {
    portfolioModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Filter portfolio items
function initPortfolioFilter() {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            // Show/hide portfolio items based on filter
            const portfolioItems = document.querySelectorAll('.portfolio-item');
            
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    gsap.to(item, {
                        duration: 0.5,
                        opacity: 1,
                        scale: 1,
                        display: 'block',
                        ease: 'power3.out'
                    });
                } else {
                    gsap.to(item, {
                        duration: 0.5,
                        opacity: 0,
                        scale: 0.8,
                        display: 'none',
                        ease: 'power3.out'
                    });
                }
            });
        });
    });
}

// Handle contact form submission
function handleContactForm(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;
    
    // In a real application, you would send this data to a server
    // For this example, we'll just show a success message
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Simulate form submission
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    setTimeout(() => {
        // Show success message
        alert(`Thank you ${name}! Your consultation request has been submitted. We'll contact you within 24 hours at ${email} or ${phone}.`);
        
        // Reset form
        contactForm.reset();
        
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        // Scroll to top of contact section
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }, 1500);
}

// Set current year in footer
function setCurrentYear() {
    const year = new Date().getFullYear();
    currentYear.textContent = year;
}

// Initialize mobile menu
function initMobileMenu() {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Toggle body scroll
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
}

// Initialize smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
                
                // Scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize header scroll effect
function initHeaderScroll() {
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        const header = document.querySelector('.header');
        
        if (currentScroll > 100) {
            header.style.padding = '0';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            
            if (currentScroll > lastScroll && currentScroll > 200) {
                // Scrolling down
                header.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up
                header.style.transform = 'translateY(0)';
            }
        } else {
            header.style.padding = '';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.05)';
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initSmoothScrolling();
    initPortfolio();
    initPortfolioFilter();
    initAnimations();
    setCurrentYear();
    initHeaderScroll();
    
    // Close modal when clicking outside or on close button
    closeModal.addEventListener('click', closePortfolioModal);
    portfolioModal.addEventListener('click', (e) => {
        if (e.target === portfolioModal) {
            closePortfolioModal();
        }
    });
    
    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && portfolioModal.style.display === 'flex') {
            closePortfolioModal();
        }
    });
});