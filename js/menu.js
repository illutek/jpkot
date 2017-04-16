/**
 * Created by Stefan on 16/04/2017.
 */
$(document).ready(function () {
    $('.menu-right-wrapper').hide();

    $('.hamburger-icon').click(function(){
        $('.menu-right-wrapper').toggleClass('menu-right-visible');
    });

    $('.hamburger-icon').one('click', function(){
        $('.menu-right-wrapper').show();
    });

    $('.close-btn').click(function(){
        $('.menu-right-wrapper').toggleClass('menu-right-visible');
        $('.hamburger-icon').show();
    });
});



