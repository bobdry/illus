/* main.js */

console.log('init');

//Set var defined
var bodyClass = document.body.attributes;
var bodySet = bodyClass[0].nodeValue;

//Page number var defined
var currPage = window.location.href;
var currPageCount = currPage.replace(/\D/g, '');
currPageCount = currPageCount[currPageCount.length -1];

var paginaTor = function(set,curr,tots) {
    //previous page
    var baseUrl = "<a href=\"/"
    var urlSlash = "/"
    var urlHyp = "-"
    var currPlus = parseInt(curr) + 1;
    var currMinus = parseInt(curr) - 1;
    var prevEnd = ".html\">&laquo;</a>"
    var nextEnd = ".html\">&raquo;</a>"

    var prevInner = baseUrl.concat(set,urlSlash,set,urlHyp,currMinus,prevEnd)
    var nextInner = baseUrl.concat(set,urlSlash,set,urlHyp,currPlus,nextEnd)
    if (curr > 1) {
    document.getElementById('bdPrev').innerHTML = prevInner;
    }
    //curr page number
    document.getElementById('bdCurrPage').innerHTML = curr;
    //total pages in portfolio
    document.getElementById('bdTotPage').innerHTML = tots;
    //next page
    if (curr < tots) {
    document.getElementById('bdNext').innerHTML = nextInner;
    }
}

if (bodySet != '') {
    if (bodySet == 'campbell') {
        paginaTor(bodySet,currPageCount,4);
    }
    else if (bodySet == 'con') {
        paginaTor(bodySet,currPageCount,8);
    }
    else if (bodySet == 'crown') {
        paginaTor(bodySet,currPageCount,4);
    }
    else if (bodySet == 'guada') {
        paginaTor(bodySet,currPageCount,4);
    }
    else if (bodySet == 'five') {
        paginaTor(bodySet,currPageCount,3);
    }
    else if (bodySet == 'hero') {
        paginaTor(bodySet,currPageCount,4);
    }
    else if (bodySet == 'izaak') {
        paginaTor(bodySet,currPageCount,4);
    }
    else if (bodySet == 'kids') {
        paginaTor(bodySet,currPageCount,4);
    }
    else if (bodySet == 'nature') {
    paginaTor(bodySet,currPageCount,3);
    }
}
