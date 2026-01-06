const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

window.addEventListener('scroll', () => {
    let current = '';
    const scrollOffset = 300; 
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= (sectionTop - scrollOffset)) {
            current = section.getAttribute('id');
        }
    });

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

        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

let currentIndex = 0;
const cards = document.querySelectorAll('.testi-card');
const nextBtn = document.getElementById('nextBtn');
const backBtn = document.getElementById('backBtn');
const cardWidth = 520;


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

nextBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateCards();
    }
});

backBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCards();
    }
});

updateButtons();