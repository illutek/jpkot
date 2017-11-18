/**
 * Created by Stefan on 17/11/2017.
 * Strict mode makes it easier to write "secure" JavaScript.
 */
(function () {
    'use strict';

    var openBtnMenu = document.getElementsByClassName('menu-wrap')[0];
    var menuRightWrapper = document.getElementsByClassName('menu-right-wrapper')[0];
    var containerWrapper = document.getElementsByClassName('container__wrapper')[0];
    var closeBtn = document.getElementsByClassName('close-btn')[0];


    function closeMenu() {
        menuRightWrapper.classList.remove('menu-right__visible');
        containerWrapper.classList.remove('pushover-left');
    }

    function openMenu() {
        menuRightWrapper.classList.toggle('menu-right__visible');
        containerWrapper.classList.toggle('pushover-left');
    }

    closeMenu()

    closeBtn.addEventListener('click', function () {
        closeMenu()
    });

    openBtnMenu.addEventListener('click', function () {
        openMenu()
    });

}());
