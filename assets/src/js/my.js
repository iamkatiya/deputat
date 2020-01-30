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


    // var loadFilesDiv = document.querySelector('.additional-files__download')

    var limit = 3 // максимальное кол-во файлов

    // loadFilesDiv.addEventListener('click', clickDivContent.bind(null, limit))

    $('.additional-files__download input').on('change', inputHandler.bind(null, limit))

});

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
            }).css('z-index', '11').on('click', imgCLoseHandler.bind(null, $img, $divExpansion, $input))
        }

    }

}

function imgCLoseHandler($img, $divExpansion, $input) {
    $divExpansion.text('JPG, PDF, PNG, docx')
    $img.attr({
        src: 'img/icon.svg',
        alt: 'download'
    }).removeAttr('style')

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

function addInput(limit) {
    var content = document.createElement('div')
    content.classList.add('additional-files__download')
    content.addEventListener('click', clickDivContent.bind(null, limit))

    content.innerHTML = '<input type="file" accept="image/jpeg, image/png, application/pdf, .docx">' +
        '<div class="additional-files__expansion">JPG, PDF, PNG, docx</div>' +
        '<img src="img/icon.svg" alt="download">'

    this.closest('.test').append(content)
}

function clearInput(divExpansion, img) {
    divExpansion.innerHTML = 'JPG, PDF, PNG, docx'

    img = setAttributes(img, ['src', 'alt'], ['img/icon.svg', 'download'])
    img.removeAttribute('style')

    this.value = null // work for EI 11+
}

function clickDivContent(limit, event) {

    var inputCount = event.target.closest('.test').children.length

    if (event.target.tagName === 'INPUT') {
        var input = event.target,
            divExpansion = input.closest('div').children[1],
            img = input.closest('div').children[2]

        input.onchange = function () {
            if (this.files[0]) {
                divExpansion.innerHTML = this.files[0].name

                img = setAttributes(img, ['src', 'alt', 'style'], ['img/close.svg', 'close', 'z-index: 11;'])
                img.addEventListener('click', clearInput.bind(this, divExpansion, img))

                if (limit > inputCount) {
                    addInput.call(this, limit)
                }

            } else {
                divExpansion.innerHTML = 'JPG, PDF, PNG, doc'
                img = setAttributes(img, ['src', 'alt'], ['img/icon.svg', 'download'])
                img.removeAttribute('style')
            }
        }
    }

}

function setAttributes(obj, keys, values) {

    if (keys.length !== values.length) console.error('setAttributes', 'Несовпадающие длины параметров')

    if (obj === {} || obj === null) return obj

    for (var i = 0; i < keys.length; i++) {
        obj.setAttribute(keys[i], values[i])
    }

    return obj

}