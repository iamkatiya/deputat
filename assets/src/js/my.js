$(document).ready(function () {
    $('#carouselExampleIndicators').carousel({
        interval: 3000,
        ride: false,
        autoplay: false,
        animateOut: 'fadeOut',
    });
    if ($(window).width() <= 991) {
        var para = $('#myDiv1>form');
        para.prependTo( '#myDiv2' );
    }
    if ($(window).width() <= 440) {
        var para1 = $('#myDiv3');
        para1.prependTo( '#myDiv2' );
    }
    $('.district-life-breadcrumbs-button').click(function ()
    {
        $(".district-life-breadcrumbs-button").removeClass('active-button');
        $(this).addClass('active-button');
    });
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

    if($(".header-nav").hasClass('open'))
    {
        $('.header-nav').removeClass('open')
        $('.burger-line1').removeClass('burger-transform-1');
        $('.burger-line2').removeClass('burger-transform-2');
        $('.burger-line3').removeClass('burger-transform-3');
    }
    else
    {
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
document.querySelector('.additional-files__download input').onchange = function() {
    if (this.files[0]){ // если выбрали файл
        document.querySelector('.additional-files__expansion').innerHTML = this.files[0].name;
        // $('.additional-files').append(' <div class="additional-files__download mt-3 ml-auto">\n' +
        //     '                                <input type="file" name="file[]">\n' +
        //     '                                <div class="additional-files__expansion">JPG, PDF, PNG, docx</div>\n' +
        //     '                                <img src="img/icon.svg" alt="download">\n' +
        //     '                            </div>');
        // $('.additional-files').addClass('flex-wrap')
    }
};