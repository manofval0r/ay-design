document.addEventListener('DOMContentLoaded', () => {
    // Typing effect only runs if the element exists (i.e., on index.html)
    if (document.querySelector('.typing-effect')) {
        new Typed('.typing-effect', {
            strings: ['Graphic Designer', 'Content Creator', 'Social Media Manager', 'Graphics Design Teacher'],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }

    // All portfolio logic only runs if the container exists
    const portfolioContainer = document.querySelector('.portfolio-container');
    if (portfolioContainer) {
        
        /*=============== PORTFOLIO ITEM FILTER ===============*/
        const filterContainer = document.querySelector('.portfolio-filters');
        const portfolioItems = document.querySelectorAll('.portfolio-content');

        if (filterContainer) { // This will only be on portfolio.html
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

        /*=============== PORTFOLIO VIEW TOGGLE ===============*/
        const viewControls = document.querySelector('.view-controls');
        if (viewControls) { // This will only be on portfolio.html
            viewControls.addEventListener('click', (e) => {
                const viewBtn = e.target.closest('.view-btn');
                if (viewBtn) {
                    viewControls.querySelector('.active-view').classList.remove('active-view');
                    viewBtn.classList.add('active-view');
                    const view = viewBtn.getAttribute('data-view');
                    
                    portfolioContainer.classList.remove('grid-view', 'list-view');
                    portfolioContainer.classList.add(`${view}-view`);
                }
            });
        }

        /*=============== PORTFOLIO LIGHTBOX ===============*/
        const popup = document.querySelector('.portfolio-popup');
        const downloadBtn = document.querySelector('.lightbox-download-btn');
        if (popup && downloadBtn) { // This will only be on portfolio.html
            const popupClose = document.querySelector('.portfolio-popup-close');
            const popupImg = document.querySelector('.portfolio-popup-img');

            document.addEventListener('click', (e) => {
                const portfolioContent = e.target.closest('.portfolio-content');
                if (portfolioContent && !portfolioContainer.classList.contains('list-view')) {
                    popup.classList.add('open');
                    const imgSrc = portfolioContent.querySelector('img').src;
                    const downloadUrl = portfolioContent.getAttribute('data-download-url');
                    popupImg.src = imgSrc;
                    downloadBtn.href = downloadUrl;
                }
            });

            popupClose.addEventListener('click', () => popup.classList.remove('open'));
            popup.addEventListener('click', (e) => {
                if (e.target.classList.contains('portfolio-popup')) {
                     popup.classList.remove('open');
                }
            });
        }
    }

    /*=============== SCROLL SECTIONS ACTIVE LINK (for index.html) ===============*/
    const sections = document.querySelectorAll('section[id]');
    if(sections.length > 0 && window.location.pathname.endsWith('index.html') || window.location.pathname === '/'){
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
    }
});