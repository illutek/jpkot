/**
 * Created by Stefan on 16/04/2017.
 *
 *
 */
(function ($) {
    $(document).ready(function () {

        function openMenu() {
            $('.menu-right').toggleClass('menu-right--visible');
            $('#container__wrapper').toggleClass('pushover-left');
        }

        function closeMenu() {
            $('.menu__right').removeClass('menu-right--visible');
            $('#container__wrapper').removeClass('pushover-left');
        }

        closeMenu();

        $('.header__menu, .menu-right__close-btn').click(openMenu);

    });
})(jQuery);