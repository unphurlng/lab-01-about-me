'use strict';

function countQuerySelector() {
    var checked = document.querySelectorAll('input[name="tagName"]:checked');
    console.log(checked[0].value);
}