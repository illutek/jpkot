/**
 * Created by Stefan on 17/11/2017.
 * Strict mode makes it easier to write "secure" JavaScript.
 *
 */
(function () {
    'use strict';

    /**
     * Added id's, this makes it easier to get document.getElement, none need for [0]
     *
     * var openBtnMenu = document.getElementsByClassName('menu-wrap')[0];
     * var closeBtn = document.getElementsByClassName('close-btn')[0];
     * var containerWrapper = document.getElementsByClassName('container__wrapper')[0];
     * 
     * @type {Element}
     */


    var openBtn = document.getElementById('open__menu');
    var closeBtn = document.getElementById('close__menu');
    var menuRightWrapper = document.getElementsByClassName('menu-right-wrapper')[0];
    var containerWrapper = document.getElementById('container__wrapper');


    /**
     * functions
     */
    function closeMenu() {
        menuRightWrapper.classList.remove('menu-right__visible');
        containerWrapper.classList.remove('pushover-left');
    }

    function openMenu() {
        menuRightWrapper.classList.toggle('menu-right__visible');
        containerWrapper.classList.toggle('pushover-left');
    }

    // close menu when the page loads
    closeMenu();

    // close menu when the user clicks the close button on the open menu-wrapper
    closeBtn.addEventListener('click', function () {
        closeMenu()
    });

    // Toggle open and close menu-wrapper when the user clicks the menu button
    openBtn.addEventListener('click', function () {
        openMenu()
    });


}());
