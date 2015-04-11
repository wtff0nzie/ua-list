/***************************************************
*                Random User agent
****************************************************
*
*   About:  Return random user agent string
*
****************************************************/
'use strict';

var UA = require('./data.json');


// Return a random user agent
var randomAgentString = function (browser) {
    var random;

    if (!browser) {
        random = Math.floor(Math.random() * Object.keys(UA).length);
        browser = Object.keys(UA)[random];
    } else {
        browser = browser.toLowerCase();
    }

    random = Math.floor(Math.random() * UA[browser].length);

    return UA[browser][random];
};


// Public API
module.exports = randomAgentString;
if (typeof EVENTS !== 'undefined') {
    EVENTS.on('randomUserAgentString', randomAgentString);
}