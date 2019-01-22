$(document).ready(function(){

function scroll(link) {

    let target  = $(this).attr('href');

    link.preventDefault();
    $('.navbar').removeClass('sticky-top');
    $('html, body').animate({
        scrollTop: ($(target).offset().top)
    }, 800);

    $('.navbar').addClass('sticky-top');
}

$('.nav-link').click(scroll);

})