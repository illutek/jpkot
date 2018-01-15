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

 /**
  * this gets only the elements of the first table
  */
//  const item = document.querySelector('tbody').getElementsByClassName('views-field-field-beschikbaar');

// const item = document.querySelectorAll('tbody');

// Gets all the cells i want
let itemText;

let items = document.querySelectorAll('td.views-field-field-beschikbaar');
let availability = document.querySelectorAll('div.availability-item');
let itemsL = items.length;

items = Array.from(items);
availability = Array.from(availability);
// replaced the text works fine
// items = items[0].children[0].textContent = 'contentAdded';

// loop items.lenght
itemText = items[0].children[0].children[0].innerText;
// availabilityItem = availability[0].children[0].innerHTML;

if(itemText== 'Bezet') {
  console.log('Looking good');
  availability.forEach(function(head){
    head.classList.add('availability--test');
  });
} else {
  console.log('BAD');
};
// end loop

// const span = document.createElement('span');
// const text = document.createTextNode('Bezet create');
// console.log(span);
// span.className = 'availability__field--occupied';
// span.appendChild(text);


// items = items[0].classList.add('classAdded');

// item.forEach(function(td){
//   // items = item.childNodes
// });

// let val;

// val = items.className;

// console.log(val);
console.log('Item lenght ' + itemsL);
console.log(items);
console.log(availability);


})();