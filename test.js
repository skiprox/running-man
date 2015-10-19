var runningMan = require("./");

var Test = (function() {

	var singleQuote = function() {
		console.log('\nA single, random quote: ', runningMan.quote());
	};

	var stream = function() {
		console.log('\nThe stream, of all quotes:');
		runningMan.stream().pipe(process.stdout);
	};

	return {
		init: function() {
			singleQuote();
			stream();
		}
	}

}());

Test.init();