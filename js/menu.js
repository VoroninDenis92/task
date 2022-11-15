$(document).ready(function() {
    $('.menu-burger').click(function() {
        $('.menu-burger').toggleClass('open-menu');
        $('.nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
    });
});