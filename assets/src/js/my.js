$(document).ready(function () {
    $('#carouselExampleIndicators').carousel({
        interval: 3000,
        ride: false,
        autoplay: false,
        animateOut: 'fadeOut',
    });
    if ($(window).width() <= 991) {
        $('#myDiv1>form').prependTo('#myDiv2');
    }
    if ($(window).width() <= 440) {
        $('#myDiv3').prependTo('#myDiv2');
    }
    $('.district-life-breadcrumbs-button').click(function () {
        $(".district-life-breadcrumbs-button").removeClass('active-button');
        $(this).addClass('active-button');
    });


    var limit = 3 // максимальное кол-во файлов
    $('.additional-files__download input').on('change', inputHandler.bind(null, limit))
});

function addInput($cloneEl, limit) {
    $cloneEl
        .children('input')
        .val(null)
        .on('change', inputHandler.bind(null, limit))
    $cloneEl
        .children('img')
        .attr({
            src: 'img/icon.svg',
            alt: 'download'
        })
        .css('z-index', '')
    $cloneEl
        .children('div')
        .text('JPG, PDF, PNG, docx')
    $cloneEl
        .appendTo($('.test'))
}

function inputHandler(limit, event) {
    if (event.target.tagName === 'INPUT') {
        var $input = $(event.target),
            $divExpansion = $input.parent().children('div'),
            $img = $input.parent().children('img')

        if ($input[0].files[0]) {
            $divExpansion.text($input[0].files[0].name)
            $img.attr({
                src: 'img/close.svg',
                alt: 'close'
            }).css('z-index', '11').on('click', imgCloseHandler.bind(null, $img, $divExpansion, $input))
            if (limit > $input.closest('.test').children().length) {
                addInput.call(null, $input.parent().clone(), limit)
            }
        } else {
            $divExpansion.text('JPG, PDF, PNG, docx')
            $img.attr({
                src: 'img/icon.svg',
                alt: 'download'
            }).css('z-index', '')
            $input.val(null)
        }

    }

}

function imgCloseHandler($img, $divExpansion, $input) {
    $divExpansion.text('JPG, PDF, PNG, docx')
    $img.attr({
        src: 'img/icon.svg',
        alt: 'download'
    }).css('z-index', '')

    $input.val(null)
}

$(document).on('click', function (e) {
    if (e.target.closest('.scroll-menu')) {
        var headr = e.target.closest('.scroll-menu').getAttribute("href");
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(headr).offset().top
        }, 2000);
    }
});
$('#burger').click(function () {

    if ($(".header-nav").hasClass('open')) {
        $('.header-nav').removeClass('open')
        $('.burger-line1').removeClass('burger-transform-1');
        $('.burger-line2').removeClass('burger-transform-2');
        $('.burger-line3').removeClass('burger-transform-3');
    }
    else {
        $('.header-nav').addClass('open');
        $('.burger-line1').addClass('burger-transform-1');
        $('.burger-line2').addClass('burger-transform-2');
        $('.burger-line3').addClass('burger-transform-3');
    }
});
var show = true;
$(window).scroll(function () {
    if (!show) return false;
    var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
    var e_top = $('.district-in-numbers-items').offset().top; // Расстояние от блока со счетчиками до верха всего документа
    var w_height = $(window).height(); // Высота окна браузера
    var d_height = $(document).height(); // Высота всего документа
    var e_height = $('.district-in-numbers-items').outerHeight(); // Полная высота блока со счетчиками

    if (w_top + w_height >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
        $('.district-item .number').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 1500,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
            show = false;
        });
    }
});