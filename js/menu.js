/**
 * Created by Stefan on 16/04/2017.
 *
 *
 */
(function ($) {
    $(document).ready(function () {

        function openMenu() {
            $('.menu-right-wrapper').toggleClass('menu-right__visible');
            $('#container__wrapper').toggleClass('pushover-left');
        }

        function closeMenu() {
            $('.menu-right-wrapper').removeClass('menu-right__visible');
            $('#container__wrapper').removeClass('pushover-left');
        }

        closeMenu()

        $('.menu-wrap, .close-btn').click(function () {
            openMenu()
        });

    });
})(jQuery);