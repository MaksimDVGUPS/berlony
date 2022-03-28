// Бургер в шапке
$('.header__burger').on('click', function () {
    $(this).toggleClass('active')
    $('.header__nav').toggleClass('active')
})

// Кнопка "Каталог" в шапке
$('.header__catalog-toggle').on('click', function () {
    $('.catalog-nav').addClass('active')
    $('body').addClass('no-scroll')
})

// Закрытие каталога
$('.catalog-nav__close').on('click', function () {
    $(this).parent().removeClass('active')
    $('body').removeClass('no-scroll')
})

$('.catalog-nav__category a').on('click', (e) => {
    e.stopPropagation()
})

// Раскрытие категории в каталоге на маленьких экранах
$('.catalog-nav__category').on('click', function () {
    $(this).toggleClass('active')
    $(this).next().toggleClass('active')
})

// Появление/скрытие содержимого категории в каталоге на больших экранах
$('.catalog-nav__category').on('mouseenter', function () {
    if (window.innerWidth > 1600) {
        $(this).addClass('active')
        $('.catalog-mount').addClass('active')
    }
})

$('.catalog-nav__dropdown').on('mouseenter', function () {
    if (window.innerWidth > 1600) {
        $(this).prev().addClass('active')
        $('.catalog-mount').addClass('active')
    }
})

$('.catalog-nav__category').on('mouseleave', function () {
    if (window.innerWidth > 1600) {
        $(this).removeClass('active')
        $('.catalog-mount').removeClass('active')
    }
})

$('.catalog-nav__dropdown').on('mouseleave', function () {
    if (window.innerWidth > 1600) {
        $(this).prev().removeClass('active')
        $('.catalog-mount').removeClass('active')
    }
})

// Баннер на главной странице
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

// Слайдер в карточке товара
$('.furniture-list__slider').slick({
    arrows: false,
    dots: true,
    speed: 0
})

$(document).on('mousemove', '.furniture-list__slider', function (e) {
    const pxPerSlide = $(this).width() / $(this).children().length
    $(this).slick('slickGoTo', Math.round(e.offsetX / pxPerSlide), true)
})

$(document).on('mouseleave', '.furniture-list__slider', function () {
    $('.furniture-list__slider').slick('slickGoTo', 0, true)
})

// Слайдер с партнерами
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

// Слайдер фотографий на странице продукта
$('.product__slider').slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1
})

// Слайдер с карточками товара
$('.might-like__furniture-list').slick({
    arrows: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
        {
            breakpoint: 1050,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 580,
            settings: {
                slidesToShow: 1
            }
        }
    ]
})

// Кнопка "Показать еще" в категориях мебели
if ($('.catalog-categories__list a').length > 3) {
    $('.catalog-categories__list').append("<button class='catalog-categories__more'></button>")

    $('.catalog-categories__more').on('click', function () {
        $(this).parent().toggleClass('active')
    })
}

// Открытие модального окна "Заказать звонок"
$('.header__callback').on('click', function () {
    $('.callback-modal').addClass('active')
})

// Открытие модального окна "Доставка"
$('.product__delivery').on('click', function () {
    $('.delivery-modal').addClass('active')
})

// Открытие модального окна "Оплата"
$('.product__payment').on('click', function () {
    $('.payment-modal').addClass('active')
})

// Закрытие модальных окон
$('.modal__close, .modal__mount').on('click', function () {
    $('.modal').removeClass('active')
})

// Появление/скрытие лупы в галерее
$('.news-gallery__item').on('mouseenter', function () {
    $(this).append(`<img src="img/gallery__zoom.svg" class="news-gallery__zoom">`)
})

$('.news-gallery__item').on('mouseleave', function () {
    $('.news-gallery__zoom').remove()
})

// Открытие модального окна с увеличенной картинкой
$('.news-gallery__item').on('click', function () {
    $('.img-zoom-modal__img').attr('src', ($(this).attr('data-big-img')))
    $('.img-zoom-modal').addClass('active')
})

// Открытие фильтров
$('.list-with-pagination__filter').on('click', function () {
    $('.filter-mount').addClass('active')
    $('body').addClass('no-scroll')
    $('.filter').addClass('active')
})

// Закрытие фильтров
$('.filter__close, .mount').on('click', function () {
    $('.filter-mount').removeClass('active')
    $('body').removeClass('no-scroll')
    $('.filter').removeClass('active')
})

// Открытие/закрытие категории в фильтрах
$('.filter__header').on('click', function () {
    $(this).toggleClass('active')
})

// Фильтр цены
if ($('.filter__price').length > 0) {
    $('.filter__price').slider({
        range: true,
        min: 1000,
        max: 1000000,
        values: [1000, 1000000],
        slide: function (event, ui) {
            $('.filter__min').val(ui.values[0] + " руб.")
            $('.filter__max').val(ui.values[1] + " руб.")
        }
    })
}

// Выпадашки в навигации
let hover = [false, false, false, false, false]

$('.header__nav a, .header__nav-dropdown').on('mouseenter', function () {
    hover[$(this).parent().index()] = true
    $(this).parent().find('.header__nav-dropdown').addClass('active')
})

$('.header__nav a, .header__nav-dropdown').on('mouseleave', function () {
    hover[$(this).parent().index()] = false
    setTimeout(() => {
        if (!hover[$(this).parent().index()]) {
            $(this).parent().find('.header__nav-dropdown').removeClass('active')
        }
    }, 1000)
})