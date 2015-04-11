# userAgents

Randomly generate a user-agent string (no inherit evil included).


## Quick usage
    require('ua-list')();


## Usage with request
    var request = require('request'),
        UAs = require('ua-list');

    var options = {
      url: 'https://api.github.com/repos/request/request',
      headers: {
        'User-Agent': UAs()
      }
    };

    function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        console.log(info.stargazers_count + " Stars");
        console.log(info.forks_count + " Forks");
      }
    }

    request(options, callback);


## Specify Browser
    UAs = require('ua-list')('firefox')


## Browser list
* Amiga
* Chrome
* Firefox
* Safari
* IE


## Install
* npm install ua-list