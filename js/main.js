$("#start").click(function () { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".start").offset().top // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});

$("#exhibition").click(function () { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".exhibition").offset().top // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});

$("#kids").click(function () { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".kids").offset().top // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});

$("#christmas").click(function () { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".christmas").offset().top // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});

$("#to-top").click(function () { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".header").offset().top // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});

$('.exhibition-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow_left.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow_right.png" alt=""></button>'
});

$('.kids-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow_left.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow_right.png" alt=""></button>'
});

$('.christmas-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow_left.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow_right.png" alt=""></button>'
});