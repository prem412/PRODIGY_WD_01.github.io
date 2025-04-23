document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-links a');
    const content = document.getElementById('content');
    const body = document.body;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
            body.classList.add('scrolled');
            content.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
            body.classList.remove('scrolled');
            content.classList.remove('scrolled');
        }
        
        const fromTop = window.scrollY + 100;
        
        navLinks.forEach(link => {
            const section = document.querySelector(link.hash);
            
            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });

    // for smooth scrolling 👇
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        }); 
    });

    // initial ...
    window.dispatchEvent(new Event('scroll'));


    
});

