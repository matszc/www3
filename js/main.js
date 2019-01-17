$(document).ready(function(){

function scroll(link) {

    let target  = $(this).attr('href');

    link.preventDefault();

    $('html, body').animate({
        scrollTop: ($(target).offset().top)-74
    }, 800);
}

$('.nav-link').click(scroll);
$('.navbar-brand').click(scroll);

})