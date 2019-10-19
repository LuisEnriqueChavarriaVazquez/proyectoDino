$(document).ready(function() {
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });
    $('.slider').slider({
        height: 300,
        indicators: false
    });

    M.AutoInit();
});