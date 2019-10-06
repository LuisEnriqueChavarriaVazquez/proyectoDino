$(document).ready(function() {
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });
    $('.slider').slider({
        height: 230,
        indicators: false
    });
    $('.tabs').tabs();

    $('.collapsible').collapsible();


    $('.fixed-action-btn').floatingActionButton();
    $('.sidenav').sidenav();
});