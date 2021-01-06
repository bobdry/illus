"use strict";

//vamos
document.addEventListener('input', function (event) {
	if (event.target.id === 'hatchPriceIssueTwo' || event.target.id === 'hatchPriceIssueOne') {
        totalOfIssues();
    } 
}, false);


function totalOfIssues () {
    var twoPlusOne = parseInt(document.getElementById('hatchPriceIssueTwo').value) + parseInt(document.getElementById('hatchPriceIssueOne').value);
    switch (twoPlusOne) {
    case 1:
        document.getElementById('hatchPrice').action = 'https://formspree.io/f/mdowdrkn';
        break;
    case 2:
        document.getElementById('hatchPrice').action = 'https://formspree.io/f/mzbkydkl';
        break;
    case 3:
        document.getElementById('hatchPrice').action = 'https://formspree.io/f/mwkwavao';
        break;
    case 4:
        document.getElementById('hatchPrice').action = 'https://formspree.io/f/xbjpqdqk';
        break;
    }
}

function validateForm() {
    var twoPlusOneSubmit = parseInt(document.getElementById('hatchPriceIssueTwo').value) + parseInt(document.getElementById('hatchPriceIssueOne').value);
    if (twoPlusOneSubmit === 0) {
        alert('Please order at least one issue :)');
        return false;
    }
}