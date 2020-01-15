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