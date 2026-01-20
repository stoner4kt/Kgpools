// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const currentYear = document.getElementById('currentYear');
const contactForm = document.getElementById('contactForm');
const consultationForm = document.getElementById('consultationForm');
const projectsGrid = document.getElementById('projectsGrid');
const loadMoreBtn = document.getElementById('loadMore');
const projectModal = document.getElementById('projectModal');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCount = document.getElementById('projectCount');
const backToTopBtn = document.querySelector('.back-to-top');
const successModal = document.getElementById('successModal');
const closeSuccessModal = document.getElementById('closeModal');
const floatingCta = document.querySelector('.floating-cta');

// Projects Data
const projectsData = [
    {
        id: 1,
        title: "Modern Infinity Edge Pool",
        description: "Luxury infinity edge pool with integrated spa and waterfall feature overlooking the city skyline.",
        category: "infinity",
        tags: ["Infinity Edge", "Luxury", "Spa", "Waterfall"],
        year: "2023",
        location: "Beverly Hills, CA",
        image: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: [
            "Infinity edge design with vanishing effect",
            "Integrated spa with seating for 6",
            "Natural stone waterfall feature",
            "LED color-changing lighting system",
            "Automated pool cover",
            "Heated for year-round use"
        ]
    },
    {
        id: 2,
        title: "Family-Friendly Pool with Slide",
        description: "Large family pool with water slide, diving board, and separate wading area for kids.",
        category: "family",
        tags: ["Family", "Slide", "Diving Board", "Wading Area"],
        year: "2023",
        location: "San Diego, CA",
        image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: [
            "Custom 12-foot water slide",
            "8-foot diving board",
            "Separate wading area for children",
            "Safety fencing with self-closing gates",
            "Beach entry on one side",
            "Multiple seating areas"
        ]
    },
    {
        id: 3,
        title: "Mediterranean Style Pool",
        description: "Elegant Mediterranean-inspired pool with stone decking, roman end steps, and water features.",
        category: "luxury",
        tags: ["Mediterranean", "Stone Decking", "Roman Steps", "Water Features"],
        year: "2022",
        location: "Santa Barbara, CA",
        image: "https://images.unsplash.com/photo-1536746803623-cef87080bfc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: [
            "Hand-cut stone coping and decking",
            "Roman end steps with mosaic tile",
            "Three decorative water features",
            "Integrated bench seating",
            "Outdoor shower and changing area",
            "Mediterranean landscaping"
        ]
    },
    {
        id: 4,
        title: "Pool & Spa Combo Renovation",
        description: "Complete renovation of an outdated pool including new tile, coping, and modern equipment.",
        category: "renovation",
        tags: ["Renovation", "Spa", "Modernization", "Tile"],
        year: "2022",
        location: "Irvine, CA",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: [
            "Complete retiling with glass mosaic",
            "New natural stone coping",
            "Energy-efficient pump and filter system",
            "Saltwater conversion",
            "LED lighting upgrade",
            "New automated control system"
        ]
    },
    {
        id: 5,
        title: "Natural Lagoon Pool",
        description: "Freeform lagoon-style pool with rock waterfalls, natural stone, and lush landscaping.",
        category: "natural",
        tags: ["Lagoon", "Natural", "Rock Waterfalls", "Freeform"],
        year: "2022",
        location: "Malibu, CA",
        image: "https://images.unsplash.com/photo-1560743173-567a3b5658b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: [
            "Freeform lagoon design",
            "Natural boulder waterfalls",
            "Beach entry with gradual slope",
            "Natural stone decking",
            "Integrated planters with aquatic plants",
            "Hidden equipment enclosure"
        ]
    },
    {
        id: 6,
        title: "Backyard Oasis Transformation",
        description: "Complete backyard transformation including pool, patio, outdoor kitchen, and firepit area.",
        category: "luxury",
        tags: ["Oasis", "Outdoor Kitchen", "Firepit", "Complete Backyard"],
        year: "2021",
        location: "Newport Beach, CA",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: [
            "Custom geometric pool design",
            "Full outdoor kitchen with grill and refrigerator",
            "Stone firepit with seating wall",
            "Pergola-covered dining area",
            "Landscape lighting throughout",
            "Irrigation system"
        ]
    },
    {
        id: 7,
        title: "Rectangular Lap Pool",
        description: "Custom 50-foot lap pool for fitness enthusiasts with automatic pool cover and clean lines.",
        category: "lap",
        tags: ["Lap Pool", "Fitness", "Rectangular", "Automatic Cover"],
        year: "2021",
        location: "Pasadena, CA",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: [
            "50-foot length for lap swimming",
            "Automatic safety cover",
            "Swim current generator",
            "Underwater treadmill",
            "Timing system with touchpad",
            "Minimalist design with clean lines"
        ]
    },
    {
        id: 8,
        title: "Modern Pool with Fire Features",
        description: "Contemporary pool design with integrated fire bowls, LED color lighting, and sleek finishes.",
        category: "luxury",
        tags: ["Modern", "Fire Features", "LED Lighting", "Contemporary"],
        year: "2021",
        location: "West Hollywood, CA",
        image: "https://images.unsplash.com/photo-1532346324233-1a7dff0d4e89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: [
            "Integrated fire bowls on pillars",
            "Full RGB LED color lighting",
            "Glass tile waterline",
            "Negative edge detail",
            "Automated water features",
            "Sleek modern furnishings"
        ]
    },
    {
        id: 9,
        title: "Resort-Style Pool Complex",
        description: "Large resort-style pool with multiple areas, cabanas, and extensive decking for entertaining.",
        category: "luxury",
        tags: ["Resort-Style", "Cabanas", "Entertaining", "Multiple Areas"],
        year: "2020",
        location: "Brentwood, CA",
        image: "https://images.unsplash.com/photo-1514894780887-121968d00567?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: [
            "Multiple interconnected pool areas",
            "Private cabanas with electricity",
            "Swim-up bar with seating",
            "Extensive travertine decking",
            "Outdoor sound system",
            "Pool house with bathroom and storage"
        ]
    },
    {
        id: 10,
        title: "Small Backyard Pool Solution",
        description: "Compact pool design maximizing limited space while providing full swimming functionality.",
        category: "family",
        tags: ["Compact", "Small Yard", "Space-Saving", "Functional"],
        year: "2020",
        location: "Santa Monica, CA",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: [
            "Compact 15x30 foot design",
            "Built-in bench seating",
            "Corner spa integration",
            "Space-saving equipment",
            "Vertical garden walls",
            "Multi-level decking"
        ]
    },
    {
        id: 11,
        title: "Vintage Pool Restoration",
        description: "Historical pool restoration maintaining original character while adding modern functionality.",
        category: "renovation",
        tags: ["Restoration", "Vintage", "Historical", "Preservation"],
        year: "2019",
        location: "Hancock Park, CA",
        image: "https://images.unsplash.com/photo-1598940603846-a1edd0ef2574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: [
            "Original tile restoration",
            "Period-appropriate coping",
            "Modern filtration hidden in vintage housing",
            "Historical lighting reproduction",
            "Structural reinforcement",
            "Waterproofing and leak repair"
        ]
    },
    {
        id: 12,
        title: "Eco-Friendly Natural Pool",
        description: "Chemical-free natural swimming pool with biological filtration and aquatic plants.",
        category: "natural",
        tags: ["Eco-Friendly", "Chemical-Free", "Biological", "Sustainable"],
        year: "2019",
        location: "Topanga, CA",
        image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: [
            "Chemical-free biological filtration",
            "Regeneration zone with aquatic plants",
            "Natural stone and gravel materials",
            "Solar-powered circulation",
            "Rainwater collection system",
            "Native plant landscaping"
        ]
    }
];

// Current filter and loaded projects count
let currentFilter = 'all';
let displayedProjects = 6;

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initSmoothScrolling();
    initHeaderScroll();
    initCurrentYear();
    initBackToTop();
    initFloatingCta();
    
    // Initialize contact form if it exists
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Initialize consultation form if it exists
    if (consultationForm) {
        consultationForm.addEventListener('submit', handleConsultationForm);
    }
    
    // Initialize projects page if we're on projects.html
    if (projectsGrid) {
        initProjectsGrid();
        initProjectFilter();
        initProjectModal();
        
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', loadMoreProjects);
        }
    }
    
    // Initialize success modal close button
    if (closeSuccessModal) {
        closeSuccessModal.addEventListener('click', () => {
            successModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    // Initialize animations after a slight delay to ensure GSAP is loaded
    setTimeout(initAnimations, 100);
});

// Initialize mobile menu
function initMobileMenu() {
    if (!hamburger) return;
    
    hamburger.addEventListener('click', () => {
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !isExpanded);
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
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target) && navMenu.classList.contains('active')) {
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close menu with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// Initialize smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '#!') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                
                // Close mobile menu if open
                if (hamburger) {
                    hamburger.setAttribute('aria-expanded', 'false');
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
                
                // Scroll to target
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
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

// Set current year in footer
function initCurrentYear() {
    const year = new Date().getFullYear();
    
    if (currentYear) {
        currentYear.textContent = year;
    }
    
    // Also set for any other elements with class currentYear
    document.querySelectorAll('.currentYear').forEach(el => {
        el.textContent = year;
    });
}

// Initialize back to top button
function initBackToTop() {
    if (!backToTopBtn) return;
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize floating CTA
function initFloatingCta() {
    if (!floatingCta) return;
    
    // Show after scrolling
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            floatingCta.classList.add('visible');
        } else {
            floatingCta.classList.remove('visible');
        }
    });
    
    // Initially visible on mobile
    if (window.innerWidth <= 768) {
        floatingCta.classList.add('visible');
    }
}

// Initialize GSAP animations
function initAnimations() {
    // Check if GSAP is loaded
    if (typeof gsap === 'undefined') {
        console.log('GSAP not loaded, animations disabled');
        return;
    }
    
    // Register ScrollTrigger plugin
    if (typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }
    
    // Hero section animations
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
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
    }
    
    // Service cards animation
    const serviceCards = document.querySelectorAll('.service-card');
    if (serviceCards.length > 0 && typeof ScrollTrigger !== 'undefined') {
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
    }
    
    // Featured projects animation
    const projectPreviews = document.querySelectorAll('.project-preview');
    if (projectPreviews.length > 0 && typeof ScrollTrigger !== 'undefined') {
        gsap.from('.project-preview', {
            scrollTrigger: {
                trigger: '.featured-projects',
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        });
    }
    
    // About section animation
    const aboutText = document.querySelector('.about-text');
    if (aboutText && typeof ScrollTrigger !== 'undefined') {
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
    }
    
    // Testimonials animation
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    if (testimonialCards.length > 0 && typeof ScrollTrigger !== 'undefined') {
        gsap.from('.testimonial-card', {
            scrollTrigger: {
                trigger: '.testimonials',
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        });
    }
    
    // Contact form animation
    const contactFormContainer = document.querySelector('.contact-form-container');
    if (contactFormContainer && typeof ScrollTrigger !== 'undefined') {
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
    
    // Page hero animations for other pages
    const pageHero = document.querySelector('.page-hero');
    if (pageHero) {
        gsap.from('.page-hero-title', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power3.out'
        });
        
        gsap.from('.page-hero-subtitle', {
            duration: 1,
            y: 30,
            opacity: 0,
            delay: 0.3,
            ease: 'power3.out'
        });
        
        gsap.from('.page-hero-buttons', {
            duration: 1,
            y: 30,
            opacity: 0,
            delay: 0.6,
            ease: 'power3.out'
        });
    }
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
    
    // Basic validation
    if (!name || !email || !phone || !service || !message) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    // Simulate form submission
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitButton.disabled = true;
    
    setTimeout(() => {
        // Show success modal
        successModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Animate modal opening if GSAP is available
        if (typeof gsap !== 'undefined') {
            gsap.from('#successModal .modal-content', {
                duration: 0.5,
                scale: 0.8,
                opacity: 0,
                ease: 'back.out(1.7)'
            });
        }
        
        // Reset form
        contactForm.reset();
        
        // Reset button
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
    }, 1500);
}

// Handle consultation form submission
function handleConsultationForm(e) {
    e.preventDefault();
    
    // Get form values
    const name = e.target.querySelector('input[type="text"]').value;
    const phone = e.target.querySelector('input[type="tel"]').value;
    const email = e.target.querySelector('input[type="email"]').value;
    const projectType = e.target.querySelector('select').value;
    
    // Basic validation
    if (!name || !phone || !email || !projectType) {
        alert('Please fill in all required fields.');
        return;
    }
    
    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    // Simulate form submission
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Scheduling...';
    submitButton.disabled = true;
    
    setTimeout(() => {
        alert(`Thank you ${name}! Your consultation has been scheduled. We'll call you at ${phone} to confirm the date and time.`);
        
        // Reset form
        e.target.reset();
        
        // Reset button
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
    }, 1500);
}

// Initialize projects grid
function initProjectsGrid() {
    if (!projectsGrid) return;
    
    renderProjects();
}

// Render projects based on current filter
function renderProjects() {
    projectsGrid.innerHTML = '';
    
    // Filter projects
    const filteredProjects = currentFilter === 'all' 
        ? projectsData 
        : projectsData.filter(project => project.category === currentFilter);
    
    // Update project count
    if (projectCount) {
        projectCount.textContent = filteredProjects.length;
    }
    
    // Determine how many projects to show
    const projectsToShow = filteredProjects.slice(0, displayedProjects);
    
    // Create project cards
    projectsToShow.forEach(project => {
        const projectCard = document.createElement('article');
        projectCard.className = `project-card ${project.category}`;
        projectCard.setAttribute('data-category', project.category);
        projectCard.setAttribute('role', 'listitem');
        
        projectCard.innerHTML = `
            <div class="project-image" style="background-image: url('${project.image}')" role="img" aria-label="${project.title}">
                <div class="project-overlay">
                    <button class="view-project-btn" data-project-id="${project.id}" aria-label="View details for ${project.title}">
                        <i class="fas fa-search-plus" aria-hidden="true"></i> View Details
                    </button>
                </div>
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        // Add click event to view project button
        const viewBtn = projectCard.querySelector('.view-project-btn');
        viewBtn.addEventListener('click', () => openProjectModal(project.id));
        
        projectsGrid.appendChild(projectCard);
    });
    
    // Show/hide load more button
    if (loadMoreBtn) {
        if (displayedProjects >= filteredProjects.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-flex';
        }
    }
    
    // Animate projects if GSAP is available
    if (typeof gsap !== 'undefined') {
        gsap.from('.project-card', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out'
        });
    }
}

// Initialize project filter
function initProjectFilter() {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button and aria-pressed
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-pressed', 'false');
            });
            button.classList.add('active');
            button.setAttribute('aria-pressed', 'true');
            
            // Update filter
            currentFilter = button.getAttribute('data-filter');
            displayedProjects = 6;
            
            // Re-render projects
            renderProjects();
            
            // Scroll to top of projects grid
            document.querySelector('.projects-grid-section').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Load more projects
function loadMoreProjects() {
    displayedProjects += 6;
    renderProjects();
    
    // Scroll to newly loaded projects
    const lastProject = document.querySelector('.project-card:last-child');
    if (lastProject) {
        lastProject.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });
    }
}

// Initialize project modal
function initProjectModal() {
    if (!projectModal) return;
    
    const closeModalBtn = projectModal.querySelector('.close-modal');
    
    // Close modal when clicking on X
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeProjectModal);
    }
    
    // Close modal when clicking outside
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            closeProjectModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && projectModal.style.display === 'flex') {
            closeProjectModal();
        }
    });
}

// Open project modal
function openProjectModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project || !projectModal) return;
    
    // Update modal content
    const modalImage = document.getElementById('modalProjectImage');
    const modalTitle = document.getElementById('modalProjectTitle');
    const modalCategory = document.getElementById('modalProjectCategory');
    const modalYear = document.getElementById('modalProjectYear');
    const modalLocation = document.getElementById('modalProjectLocation');
    const modalDescription = document.getElementById('modalProjectDescription');
    const modalFeatures = document.getElementById('modalProjectFeatures');
    
    if (modalImage) modalImage.style.backgroundImage = `url('${project.image}')`;
    if (modalTitle) modalTitle.textContent = project.title;
    if (modalCategory) modalCategory.textContent = project.category.charAt(0).toUpperCase() + project.category.slice(1);
    if (modalYear) modalYear.textContent = project.year;
    if (modalLocation) modalLocation.textContent = project.location;
    if (modalDescription) modalDescription.textContent = project.description;
    
    // Create features list
    if (modalFeatures) {
        const featuresList = project.features.map(feature => `<li>${feature}</li>`).join('');
        modalFeatures.innerHTML = `
            <h4>Project Features</h4>
            <ul>${featuresList}</ul>
        `;
    }
    
    // Show modal
    projectModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Animate modal opening if GSAP is available
    if (typeof gsap !== 'undefined') {
        gsap.from('.project-modal-content', {
            duration: 0.5,
            scale: 0.8,
            opacity: 0,
            ease: 'back.out(1.7)'
        });
    }
    
    // Focus the close button for accessibility
    const closeBtn = projectModal.querySelector('.close-modal');
    if (closeBtn) closeBtn.focus();
}

// Close project modal
function closeProjectModal() {
    if (projectModal) {
        projectModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Handle form submission for any form on the site
document.addEventListener('submit', function(e) {
    if (e.target.tagName === 'FORM') {
        // Prevent default if it's not a real form submission
        if (!e.target.action || e.target.action === window.location.href) {
            e.preventDefault();
        }
    }
});
