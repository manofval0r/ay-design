document.addEventListener('DOMContentLoaded', () => {
    /*=============== TYPING EFFECT ===============*/
    if (document.querySelector('.typing-effect')) {
        new Typed('.typing-effect', {
            strings: ['Graphic Designer', 'Content Creator', 'Social Media Manager', 'Graphics Design Mentor'],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }

    /*=============== PORTFOLIO ITEM FILTER ===============*/
    const filterContainer = document.querySelector('.portfolio-filters');
    const portfolioItems = document.querySelectorAll('.portfolio-content');

    if (filterContainer) {
        filterContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('portfolio-filter-item')) {
                filterContainer.querySelector('.active-filter').classList.remove('active-filter');
                e.target.classList.add('active-filter');
                
                const filterValue = e.target.getAttribute('data-filter');
                
                portfolioItems.forEach((item) => {
                    if (item.getAttribute('data-item') === filterValue || filterValue === 'all') {
                        item.classList.remove('hide');
                    } else {
                        item.classList.add('hide');
                    }
                });
            }
        });
    }

    /*=============== PORTFOLIO LIGHTBOX ===============*/
    const popup = document.querySelector('.portfolio-popup');
    const popupClose = document.querySelector('.portfolio-popup-close');
    const popupImg = document.querySelector('.portfolio-popup-img');

    if (popup) {
        document.addEventListener('click', (e) => {
            if (e.target.closest('.portfolio-content')) {
                popup.classList.add('open');
                const imgSrc = e.target.closest('.portfolio-content').querySelector('img').src;
                popupImg.src = imgSrc;
            }
        });

        popupClose.addEventListener('click', () => {
            popup.classList.remove('open');
        });

        // Close popup when clicking outside the image
        popup.addEventListener('click', (e) => {
            if (e.target.classList.contains('portfolio-popup')) {
                 popup.classList.remove('open');
            }
        });
    }

    /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
    const sections = document.querySelectorAll('section[id]');
    function scrollActive() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector('.nav-menu a[href*=' + sectionId + ']');

            if (navLink) {
                 if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active-nav-link');
                } else {
                    navLink.classList.remove('active-nav-link');
                }
            }
        });
    }
    window.addEventListener('scroll', scrollActive);
});
