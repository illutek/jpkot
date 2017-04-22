/**
 * Created by Stefan on 16/04/2017.
 */
(function ($){
    $(document).ready(function () {

        $('.menu-right-wrapper').removeClass('menu-right__visible');
        $('.menu-wrap').removeClass('menu-wrap__visible');

        $('.menu-wrap').click(function () {
            $('.menu-right-wrapper').addClass('menu-right__visible');
            $('.menu-wrap').addClass('menu-wrap__visible');
        });

        $('.close-btn').click(function () {
            $('.menu-right-wrapper').removeClass('menu-right__visible');
            $('.menu-wrap').removeClass('menu-wrap__visible');
        });
    });
})(jQuery);