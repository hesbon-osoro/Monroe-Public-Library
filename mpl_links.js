"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

   Author: Hesbon Osoro
   Date: 12/11/22  
   
   Filename: mpl_links.js

*/

/* Event Listeners */

window.addEventListener("load", function () {
  try {
    var allSelect = document.querySelectorAll("form#govLinks select");
    for (var i = 0; i < allSelect.length; i++) {
      allSelect[i].onchange = function (e) {
        location.href = e.target.value;
      };
    }
  } catch (err) {
    console.log(err);
  }
});
