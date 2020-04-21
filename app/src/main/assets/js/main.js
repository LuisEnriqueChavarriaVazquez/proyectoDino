$(document).ready(function () {

    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });

    $('.fixed-action-btn').floatingActionButton();
    $('.parallax').parallax();

    $('#cargador').fadeOut(5000);

    $('.slider').slider({
        height: 300,
        indicators: false
    });

    $('.tabs').tabs();
    $('.sidenav').sidenav();
    $('.materialboxed').materialbox();
    

    var consulta = $(".search-table").DataTable();

    $(".input-search").keyup(function () {
        consulta.search($(this).val()).draw();


        if ($(".input-search").val() == "") {
            $(".search-table").hide();
        } else {
            $(".search-table").fadeIn();
        };

    });


});