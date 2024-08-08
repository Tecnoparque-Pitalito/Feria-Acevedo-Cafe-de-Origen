document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3 // Change this to your preference
    };

    // const observer = new IntersectionObserver((entries, observer) => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             const id = entry.target.getAttribute('id');
    //             navLinks.forEach(link => {
    //                 link.classList.remove('active');
    //                 if (link.getAttribute('href').includes(id)) {
    //                     link.classList.add('active');
    //                 }
    //             });
    //         }
    //     });
    // }, observerOptions);

    for (let i = 0; i < navLinks.length; i++) {

        navLinks[i].addEventListener('click', function () {
            for (let x = 0; x < navLinks.length; x++) {
                navLinks[x].classList.remove('active');
            }

            navLinks[i].classList.add('active');
        })
    }



    sections.forEach(section => {
        observer.observe(section);
    });
});