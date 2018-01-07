/**
 * Created by Stefan on 17/11/2017.
 * Strict mode makes it easier to write "secure" JavaScript.
 *
  * (function () {
 *   })(); = IIFE
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
     * #open__menu on templates/partials/header.html.twig
     * #close__menu on templates/partials/menu-right.html.twig
     * #container__wrapper on templates/layout/page.html.twig and on page--front.html.twig
     *
     * .menu__right on templates/partials/menu-right.html.twig
     *
     * @type {Element}
     */

    /**
     * The old ES5 way 
     *  var openBtn = document.getElementById('open__menu');
     *  var closeBtn = document.getElementById('close__menu');
     *  var menuRightWrapper = document.getElementsByClassName('menu-right')[0];
     *  // const menuRightWrapper = document.getElementsByClassName('menu-right');
     *  var containerWrapper = document.getElementById('container__wrapper');
     * 
     * Change on 2018-01-06 to ES6 (ES2016) with babel and gulp-babel gulpfile.js to gulpfile.babel.js
     * Now i can use const keyword and most important querySelector
     * https://markgoodyear.com/2015/06/using-es6-with-gulp/
     * https://stackoverflow.com/questions/44958216/how-to-minify-es6-functions-with-gulp-uglify/46746412
     * 
    */

    const openBtn = document.querySelector('#open__menu');
    const closeBtn = document.querySelector('#close__menu');
    const menuRightWrapper = document.querySelector('.menu-right');
    const containerWrapper =document.querySelector('#container__wrapper');

    /**
     * functions
     */
    function closeMenu() {
        menuRightWrapper.classList.remove('menu-right--visible');
        // menuRightWrapper[0].classList.remove('menu__right--visible');
        containerWrapper.classList.remove('pushover-left');
    }

    function openMenu() {
        menuRightWrapper.classList.toggle('menu-right--visible');
        containerWrapper.classList.toggle('pushover-left');
    }

    // close menu when the page loads
    window.onload = closeMenu();

    // close menu when the user clicks the close button on the open menu-wrapper
    closeBtn.addEventListener('click', closeMenu);

    // Toggle open and close menu-wrapper when the user clicks the menu button
    openBtn.addEventListener('click', openMenu);


})();
