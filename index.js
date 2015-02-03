'use strict';

var _ = require('lodash'),
	cool = require('cool-ascii-faces'),
	esprima = require('esprima'),
	fs = require('fs');

var RunningMan = (function() {

	var esprimaTest = function(file) {
		_.pick(esprima.parse(file), 'body').body.forEach(function(n) {
			console.log(JSON.stringify(n) + '\n');
		});
	}

	return {
		init: function() {
			console.log(cool());
			var code = fs.readFileSync('index.js')
			esprimaTest(code);
		}
	};

}());

module.exports = RunningMan.init();