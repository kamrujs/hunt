// ====banner slider
$('.banner-slider').slick({
    dots: false,
    infinite: true,
    arrows: false,
    speed: 800,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-arrow-circle-left left"></i>',
    nextArrow: '<i class="fas fa-arrow-circle-right right"></i>',
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
// ====banner slider


// ====banner slider
$('.service-slider').slick({
    dots: false,
    arrows: true,
    prevArrow: '<i class="fas fa-chevron-up up-arrow"></i>',
    nextArrow: '<i class="fas fa-chevron-down down-arrow"></i>',
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    centerMode: true,
    centerPadding: "0",
    verticalSwiping: true,
    focusOnSelect: true,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
// ====banner slider


// ====img_slider 
$('.img_slider').slick({
    dots: false,
    arrows: true,
    prevArrow: '<i class="fas fa-chevron-up up-arrow"></i>',
    nextArrow: '<i class="fas fa-chevron-down down-arrow"></i>',
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    centerMode: true,
    centerPadding: "0",
    asNavFor: '.text_slider',
    verticalSwiping: true,
    focusOnSelect: true,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                verticalSwiping: false,
                vertical: false,
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
// ====img_slider 

// ====text_slider 
$('.text_slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.img_slider',
});
// ====text_slider 



// ====counter_up 
$('.counter').counterUp({
    delay: 20,
    time: 1500
});
// ====counter_up 

// ====team_slider 
$('.team_slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
// ====team_slider 


// ====brand_slider 
$('.brand_slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    focusOnSelect: true,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: false,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
// ====brand_slider 