/**
 * Created by Stefan on 16/04/2017.
 */
$(document).ready(function () {


    $('.menu-wrap').click(function(){
        $('.menu-right-wrapper').toggleClass('menu-right__visible');
        $('.menu-wrap').toggleClass('menu-wrap__visible');
    });

    $('.close-btn').click(function(){
        $('.menu-right-wrapper').toggleClass('menu-right__visible');
        $('.menu-wrap').toggleClass('menu-wrap__visible');
    });

});



