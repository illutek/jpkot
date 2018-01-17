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

/**
 * field--field-beschikbaar add class depends of his content
 */
    // variable availabilityOcc returns a HTMLCollection of x items
    let availabilityOcc = document.getElementsByClassName('hasClass');
    // variable itemsLenght = x
    let itemsLenght = availabilityOcc.length;
    let availabilityText;

    for(let i = 0; i < itemsLenght; i++) {
      availabilityText = availabilityOcc[i].innerText;
      if(availabilityText === 'Bezet') {
        availabilityOcc[i].classList.remove('availability__field');
        availabilityOcc[i].classList.add('availability__field--occupied');
      };
    }

    /** after running classList.remove there has to be a class present
     *  otherwise the method classList.add gives an error therefor the
     *  dummy class 'hasClass'
    */

    // console.log(availabilityOcc);
    // console.log(itemsLenght);
    // console.log(availabilityText);

})();