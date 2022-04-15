
  //Navbar appear on scroll
    window.addEventListener('scroll', function () {
        let header = document.querySelector('header');

        header.classList.toggle('scrolling-active', window.scrollY > 0);
    })

    //Fade in on scroll
    const fadeIn = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 1
    };

    const appearOnScroll = new IntersectionObserver
    (function(
        entries, 
        appearOnScroll
        ) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add('is-visible');
                }
            })
        }, 
    appearOptions);

    fadeIn.forEach(fadeIn => {
        appearOnScroll.observe(fadeIn);
    })

    //Slide in on scroll

    const txtAppearOptions = {
        threshold: 1
    };

    const slideLeft = document.querySelectorAll('.slide-left');

    const slideLeftOnScroll = new IntersectionObserver
    (function(
        entries,
        slideLeftOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('slideLeft');
            }
        })
    },
        txtAppearOptions);
    
        slideLeft.forEach(slideLeft => {
        slideLeftOnScroll.observe(slideLeft);
    })

    const slideRight = document.querySelectorAll('.slide-right');

    const slideRightOnScroll = new IntersectionObserver
    (function(
        entries,
        slideRightOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('slideRight');
            }
        })
    },
        txtAppearOptions);
    
        slideRight.forEach(slideRight => {
        slideRightOnScroll.observe(slideRight);
    })


