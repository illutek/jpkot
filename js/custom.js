/**
 * Created by Stefan on 12/01/2018.
 *
 */

(function () {
  'use strict';

/**
 * add .heading-tertiary to h3 tag
 * add .heading-fourth to h4 tag
 */

    let heading3 = document.getElementsByTagName('h3');
    let heading4 = document.getElementsByTagName('h4');

    heading3 = Array.from(heading3);
    heading4 = Array.from(heading4);

    heading3.forEach(function(head){
      head.classList.add('heading-tertiary');
    });

    heading4.forEach(function(head){
      head.classList.add('heading-fourth');
    });

    // console.log(heading3);

})();