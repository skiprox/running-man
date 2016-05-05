'use strict';

var spigot = require("stream-spigot");
var quotes = require('./quotes.json');

var RunningMan = (function() {

	var quotesLen = quotes.length;

	var getRandomQuote = function() {
		var randomQuote = quotes[Math.floor(Math.random() * quotesLen)];
		return randomQuote;
	};

	return {
		quote: function() {
			return getRandomQuote();
		},
		stream: function() {
			return spigot(quotes);
		}
	}

}());

module.exports = RunningMan;