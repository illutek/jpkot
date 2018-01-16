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


let items = document.querySelectorAll('td.views-field-field-beschikbaar');
items = Array.from(items);
let itemText = items[0].children[0].children[0].innerText;
let itemsL = items.length;

let availability = document.querySelectorAll('div.availability-item');
availability = Array.from(availability);

// loop items.lenght
for(let i = 1; i < itemsL; i++){
  // availability = document.querySelector('div.availability-item:nth-child(i)');
  if(itemText== 'Bezet') {
    // console.log('Looking good');
    availability.forEach(function(x){
      x.classList.add('availability__field--occupied');
    });
  } else {
    availability.forEach(function(y){
      y.classList.add('availability__field--free');
    });
    // console.log('availability__field--free');
  };
}

// end loop


// console.log(val);
console.log('Item lenght ' + itemsL);
// console.log(items);
console.log(availability);


})();