#!/usr/bin/env node

var q = require('../lib/');
var args = process.argv.slice(2);

var query = args.join(' ');

q(query, function (err, episode) {
    if (err) {
        throw err;
    }

    console.log(episode);
});

