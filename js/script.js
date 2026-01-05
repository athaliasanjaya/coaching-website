const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Active link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const scrollOffset = 300; // sesuaikan dengan scroll-padding-top + buffer
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Cek apakah section sedang di viewport
        // Gunakan offset yang lebih besar untuk match dengan scroll-padding
        if (window.pageYOffset >= (sectionTop - scrollOffset)) {
            current = section.getAttribute('id');
        }
    });

    // Update active class
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');

        // Tutup semua item lain
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        // Toggle item yang diklik
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

let currentIndex = 0;
const cards = document.querySelectorAll('.testi-card');
const nextBtn = document.getElementById('nextBtn');
const backBtn = document.getElementById('backBtn');
const cardWidth = 520; // 500px card + 20px gap


function updateCards() {
    const wrapper = document.querySelector('.testi-card-wrapper');
    wrapper.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    
    // Update blur effect
    cards.forEach((card, index) => {
        if (index === currentIndex) {
            card.classList.remove('blur');
        } else {
            card.classList.add('blur');
        }
    });
    
    updateButtons();
}

// Next button
nextBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateCards();
    }
});

// Back button
backBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCards();
    }
});

// Initialize
updateButtons();