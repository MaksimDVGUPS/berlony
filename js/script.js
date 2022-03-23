$('.header__burger').on('click', function () {
    $(this).toggleClass('active')
    $('.header__nav').toggleClass('active')
})

$('.header__catalog-toggle').on('click', function () {
    $('.catalog-nav').addClass('active')
    $('body').addClass('no-scroll')
})

$('.catalog-nav__close').on('click', function () {
    $(this).parent().removeClass('active')
    $('body').removeClass('no-scroll')
})

$('.catalog-nav__category a').on('click', (e) => {
    e.stopPropagation()
})

$('.catalog-nav__category').on('click', function () {
    $(this).toggleClass('active')
    $(this).next().toggleClass('active')
})

$('.banner__slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    centerMode: true,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                dots: false
            }
        }
    ]
})

$('.partners__slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 2400,
            settings: {
                slidesToShow: 7,
            }
        },
        {
            breakpoint: 2100,
            settings: {
                slidesToShow: 6,
            }
        },
        {
            breakpoint: 1920,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 1200,
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
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            }
        },
    ]
})