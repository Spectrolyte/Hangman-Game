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

	//variable declaration
	var wins = 0;
	var losses = 0;
	var guessesRemaining = 10;
	var CPUword = '';
	var placeholder = '';

	var wordBank = ['hello','world','coding'];
	var guessedLetters = [];
	var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

	//helper functions
	function generateWord () {
		var randomNum = Math.floor(Math.random() * wordBank.length);
		generatedWord = true;
		return wordBank[randomNum].split('');
	}

	function generatePlaceholder() {
		var dashes = [];
		for (var i=0; i < CPUword.length; i++) {
			dashes.push('_');
		}
		return dashes;
	}

	function reset () {
		guesses = 10;
		guessedLetters = [];
		CPUword = generateWord();
		placeholder = generatePlaceholder();
	}

	function checkScore () {
		if (guessesRemaining === 0) {
			alert('you lose, play again?');
			wins = 0;
			reset();
		}
		else if (!placeholder.includes('_')) {
			alert('you win');
			wins++;
			reset();
		}
	}

	function update () {
		document.getElementById('wins').innerHTML = "Wins :" + wins;
		document.getElementById('CPUword').innerHTML = "Current Word: " + placeholder.join('');
		document.getElementById('guessesRemaining').innerHTML = "Guesses Remaining: " + guessesRemaining;
		document.getElementById('guessedLetters').innerHTML = "Guessed Letters: " + guessedLetters;
	}

	//game start

	generateWord();
	generatePlaceholder();
	reset();

	//when user presses key
	document.onkeyup = function (event) {
		checkScore();
		update();

		var userGuess = event.key;
		
		if (letters.indexOf(userGuess) > -1 && !guessedLetters.includes(userGuess) && guessesRemaining > 0) {
			guessedLetters.push(userGuess);
			if (CPUword.includes(userGuess)) {
				//replace dashes with letters
				//concat letters together
				//display new word
				for (var i=0; i < CPUword.length; i++) {
					// switching placeholder and CPUword chars
					if (CPUword[i] === userGuess) {
						placeholder[CPUword.indexOf(userGuess)] = userGuess;
						CPUword[placeholder.indexOf(userGuess)] = '_';
					}
				}
			}
			else {
				guessesRemaining--;
			}
			checkScore();
			update();
		}
	}












