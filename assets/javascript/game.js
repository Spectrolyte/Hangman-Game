// press any key to get started
// variable declaration
	// wins
	// guesses remaining
	// losses
	// CPU word
	// placeholder for word '- - - -' (changes w/ correct guess)
	// word bank
	// letters guessed
// when any key is pressed (outer function)
	// assign CPUword
	// when letter is pressed (inner function)
		// if no guesses remaining
			// assign new value to CPUword
		// else if placeholder doesn't have dashes
			// increment wins by 1
			// reset guesses remaining
			// assign new value to CPUword
		// else if letter DNE in guessedLetters array AND there are guesses remaining
			// store letter in array
			// if letter matches letter(s) in CPUword
				// replace dashes with letters
			// else if letter doesn't match
				// decrement guesses remaining

document.onkeyup = function () {
	var wins = 0;
	var losses = 0;
	var guessesRemaining = 10;
	var CPUword = '';
	var placeholder = ''.padEnd(CPUword.length, '_');

	var wordBank = [];
	var guessedLetters = [];
	var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

	function generateWord () {
		var randomNum = Math.floor(Math.random() * letters.length);
		return letters[randomNum];
	}

	document.onkeyup = function (event) {
		CPUword = generateWord();
		if (letters.indexOf(event.key) > -1) {
			if (guessesRemaining === 0) {
				CPUword = generateWord();
			}
			else if (placeholder.indexOf('-') === -1) {
				wins++;
				guessesRemaining = 10;
				CPUword = generateWord();
			}
			else if (guessesRemaining > 0 && guessedLetters.indexOf(event.key) === -1) {
				guessedLetters.push(event.key);
				if (CPUword.indexOf(event.key) > -1) {
					for (var i=0; i < CPUword.length; i++) {
						if (CPUword.indexOf(event.key) === i) {
							placeholder[i] = event.key;
						}
					}
				}
				else {
					guessesRemaining--;
				}
			}
		}
	}
}











