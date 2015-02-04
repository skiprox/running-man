'use strict';

var spigot = require("stream-spigot");

var quotes = [
'Hello cutie pie, one of us is in deep trouble.',
'If revenge is a dish best served cold, then put on your Sunday finest. It\'s time to feast!',
'I eat Green Berets for breakfast, and right now, I\'m very hungry.',
'Run! Get to the chopper!',
'There\'s someone in my house eating my birthday cake with my family, and it\'s not me!',
'Ha, ha, ha. You have strucked Hercules.',
'I\'ll be back.',
'It\'s showtime!',
'No problemo.',
'Alright everyone, Chill!',
'You have no respect for logic.',
'You\'re fired!',
'You\'re luggage.',
'Because I\'m going to say please.',
'Consider that a divorce.',
'Listen to me very carefully.',
'The iceman commeth.',
'Doesn\'t anyone stay dead anymore?',
'If it bleeds we can kill it.',
'Get your ass to mars.',
'You are not you, you are me.',
'I\'ve seen you before, you\'re the asshole on TV.',
'Hasta la vista, baby!',
'What killed the dinosaurs? The ice age!',
'You should go clone yourself, so you can go fuck yourself.',
'I\'m not a pervert! I was just looking for a Turbo Man doll!',
'Take your toy back to the carpet!',
'Feel how soft my skin is.',
'I do not want to touch his ass, I want to make him talk.',
'Who is your daddy, and what does he do?',
'Freeze in hell, Batman!',
'You\'ve just been erased.',
'I eat green beret\'s for breakfast, and right now I\'m very hungry.',
'You\'re not sending me to the cooler.',
'Do it now!',
'Put that cookie down, now!',
'You set us up!',
'I want to ask you a bunch of questions and I want to have them answered immediately.',
'Come with me if you want to live.',
'Now remember, I could break your neck like a chicken\'s.',
'One ugly mother fucker.',
'Enough talk!',
'Talk to the hand.',
'Chill out, dickwad.',
'Grant me revenge. And if you do not listen, then the hell with you.',
'My name is John Kimble, and I love my car.',
'Hey, you want to be a farmer? Here\'s a couple of acres!',
'What the fuck did I do wrong!'
]

var RunningMan = (function() {

	var getRandomQuote = function() {
		var quotesLen = quotes.length,
			randomQuote = quotes[Math.floor(Math.random() * quotesLen)];
		return randomQuote;
	}

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