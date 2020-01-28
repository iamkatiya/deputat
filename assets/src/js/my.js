$(document).ready(function () {
    $('#carouselExampleIndicators').carousel({
        interval: 3000,
        ride: false,
        autoplay: false,
        animateOut: 'fadeOut',
    });
    if ($(window).width() <= 991) {
        var para = $('#myDiv1>form');
        para.prependTo('#myDiv2');
    }
    if ($(window).width() <= 440) {
        var para1 = $('#myDiv3');
        para1.prependTo('#myDiv2');
    }
    $('.district-life-breadcrumbs-button').click(function () {
        $(".district-life-breadcrumbs-button").removeClass('active-button');
        $(this).addClass('active-button');
    });


    ////////////////////////////////////////////////////////////

    document
        .querySelector('.additional-files__download input')
        .setAttribute('accept', 'image/jpeg, image/png, application/pdf, .docx') // поправить в HTML!!!!

    var loadFilesDiv = document.querySelector('.additional-files__download')

    var limit = 3 // максимальное кол-во файлов

    loadFilesDiv.addEventListener('click', clickDivContent.bind(null, limit))


});
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

    this.parentElement.parentElement.append(content)
}

function clearInput() {
    var divExpansion = this.parentElement.children[1]
    var img = this.parentElement.children[2]

    divExpansion.innerHTML = 'JPG, PDF, PNG, docx'

    img.setAttribute('src', 'img/icon.svg')
    img.setAttribute('alt', 'download')
    img.removeAttribute('style')

    this.parentElement.innerHTML = this.parentElement.innerHTML
}

function clickDivContent(limit, event) {

    var inputCount = event.target.parentElement.parentElement.children.length

    if (event.target.tagName === 'INPUT') {
        var input = event.target,
            divExpansion = event.target.parentElement.children[1],
            img = event.target.parentElement.children[2]


        input.onchange = function () {
            if (this.files[0]) {
                divExpansion.innerHTML = this.files[0].name
                img.setAttribute('src', 'img/close.svg')
                img.setAttribute('alt', 'close')
                img.setAttribute('style', 'z-index: 11;') // FIX THIS!!!!
                img.addEventListener('click', clearInput.bind(this))

                if (limit > inputCount) {
                    addInput.call(this, limit)
                }

            } else {
                divExpansion.innerHTML = 'JPG, PDF, PNG, doc'
                img.setAttribute('src', 'img/icon.svg')
                img.setAttribute('alt', 'download')
                img.removeAttribute('style')
            }
        }
    }

}