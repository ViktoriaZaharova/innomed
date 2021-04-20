$('.sponsors-slider').slick({
    slidesToShow: 1,
    dots: true,
    appendArrows: '.sponsors-slider__nav',
    appendDots: '.sponsors-slider__nav',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="../img/sprite.svg#next"></use></svg></button>',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="../img/sprite.svg#prev"></use></svg></button>'
});

$('.organizers-slider').slick({
    slidesToShow: 1,
    dots: true,
    appendArrows: '.organizers-slider__nav',
    appendDots: '.organizers-slider__nav',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="../img/sprite.svg#next"></use></svg></button>',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="../img/sprite.svg#prev"></use></svg></button>'
});

$('.reviews-slider').slick({
    slidesToShow: 2,
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="../img/sprite.svg#next"></use></svg></button>',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="../img/sprite.svg#prev"></use></svg></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ]

});

$('.slider-dates').slick({
    slidesToShow: 4,
    asNavFor: '.gallery-slider',
    focusOnSelect: true,
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="../img/sprite.svg#next"></use></svg></button>',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="../img/sprite.svg#prev"></use></svg></button>',
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
});

$('.gallery-slider').slick({
    slidesToShow: 1,
    arrows: false
});

$('.participants-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 2,
    dots: true,
    appendArrows: '.participants-slider__nav',
    appendDots: '.participants-slider__nav',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="../img/sprite.svg#next"></use></svg></button>',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="../img/sprite.svg#prev"></use></svg></button>',
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.experts-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    dots: true,
    appendArrows: '.experts-slider__nav',
    appendDots: '.experts-slider__nav',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="../img/sprite.svg#next"></use></svg></button>',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="../img/sprite.svg#prev"></use></svg></button>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.home-navigation-slider').slick({
    slidesToShow: 4,
    vertical: true,
    focusOnSelect: true,
    asNavFor: '.home-slider',
    arrows: false
});

$('.home-slider').slick({
    slidesToShow: 1,
    dots: true,
    fade: true,
    appendArrows: '.home-slider__nav',
    appendDots: '.home-slider__nav',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="../img/sprite.svg#next"></use></svg></button>',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="../img/sprite.svg#prev"></use></svg></button>'
});

$('.btn-burger').on('click', function () {
   $('.mobile-menu').fadeIn();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});

$('[name="phone"]').mask('+7 (999) 999-99-99');

new WOW().init();