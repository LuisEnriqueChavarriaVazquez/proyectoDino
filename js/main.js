$(document).ready(function() {
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });
    $('.slider').slider({
        height: 300,
        indicators: false
    });

    $('.tabs').tabs();

    $('.collapsible').collapsible();
    $('.parallax').parallax();
    $('.materialboxed').materialbox();

    $('.fixed-action-btn').floatingActionButton();
    $('.sidenav').sidenav();
});