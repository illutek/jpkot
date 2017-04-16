/**
 * Created by Stefan on 16/04/2017.
 */
$(document).ready(function () {
    $('.hamburger-icon').click(function(){
        $('.menu-right-wrapper').toggleClass('menu-right-visible');
    });

    $('.close-btn').click(function(){
        $('.menu-right-wrapper').toggleClass('menu-right-visible');
        $('.hamburger-icon').show();
    });
});



