$(document).ready(function () {
    var navbar = $('.navbar');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            navbar.addClass('fixed');
        } else {
            navbar.removeClass('fixed');
        }
    });
});