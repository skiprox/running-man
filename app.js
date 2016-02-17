'use strict';

var RunningMan = require('running-man');

var App = (function() {

	var quoteAnimationDuration = 300;
	var quoteEl;

	var storeElementsAndStyles = function() {
		quoteEl = document.getElementById('quote-element');
		quoteEl.style.transition = 'opacity ' + quoteAnimationDuration + 'ms ease';
	};

	var setQuoteInterval = function() {
		setInterval(startChangeQuote, 4000);
	};

	var startChangeQuote = function() {
		quoteEl.style.opacity = '0';
		setTimeout(endChangeQuote, quoteAnimationDuration * 2);
	};

	var endChangeQuote = function() {
		quoteEl.innerHTML = RunningMan.quote();
		quoteEl.style.opacity = '1';
	};

	return {
		init: function() {
			storeElementsAndStyles();
			endChangeQuote();
			setQuoteInterval();
		}
	}

}());

document.addEventListener('DOMContentLoaded', App.init);