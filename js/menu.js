/**
 * Created by Stefan on 16/04/2017.
 */
$(document).ready(function () {
// when loading the page menu hide
    //$('.menu-header-main').addClass('showmenu');

    $('.showmenu-btn').click(function(){
        $('.menu-header-main').toggleClass('showmenu');
    });

    $('.closemenu-btn').click(function(){
        $('.menu-header-main').toggleClass('showmenu');
        $('.showmenu-btn').show();
    });
});



