jQuery(document).ready(function () {
    jQuery('.owl-carouseljs').owlCarousel({

        loop: true,
        autoplay: true,
        loop: true,
        margin: 10,
        rtl: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            900: {
                items: 2
            },
            1100: {
                items: 3
            }
        },
        slideTransition: 'linear',
        autoplaySpeed: 6000,
        smartSpeed: 6000,
        center: true,

    });

    jQuery('.owl-carouseljs2').owlCarousel({

        loop: true,
        autoplay: true,
        loop: true,
        margin: 10,
        rtl: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            900: {
                items: 2
            },
            1100: {
                items: 3
            }
        },
        slideTransition: 'linear',
        autoplaySpeed: 6000,
        smartSpeed: 6000,
        center: true,

    });

    jQuery('.owl-carouseljs').trigger('play.owl.autoplay', [2000]);
    jQuery('.owl-carouseljs2').trigger('play.owl.autoplay', [2000]);



    function setSpeed() {
        jQuery('.owl-carouseljs').trigger('play.owl.autoplay', [6000]);
        jQuery('.owl-carouseljs2').trigger('play.owl.autoplay', [6000]);
    }
    setTimeout(setSpeed, 1000);
});
