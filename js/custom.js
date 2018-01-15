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
let item;
const parentDiv = document.querySelector('.availability');
const oldSpan = document.querySelector('.availability').getElementsByTagName('span'[0]);
let items = document.querySelectorAll('td.views-field-field-beschikbaar');
let itemsL = items.length;

items = Array.from(items);
// replaced the text works fine
// items = items[0].children[0].textContent = 'contentAdded';

// loop items.lenght
item = items[0].children[0].children[0].innerText;

if(item == 'Bezet') {
  console.log('Looking good');

  const newSpan = document.createElement('span');
  newSpan.className = 'availability__field--occupied';

  const text = document.createTextNode('Bezet create');

  console.log(newSpan);

  newSpan.appendChild(text);

  // parentDiv.replaceChild(newSpan, oldSpan);
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
console.log('The text value ' + item);
console.log('Old span ' + oldSpan);
console.log('ParentDiv ' + parentDiv);
// console.log('New span ' + newSpan);


})();