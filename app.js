/* JAVASCRIPT GAME 1: Concentration */
document.addEventListener('DOMContentLoaded', () => {

	//card options
	const cardArray = [
		{
			name: 'bike',
			img: 'img/bike.png'
		},
		{
			name: 'burger',
			img: 'img/burger.png'
		},
		{
			name: 'cat',
			img: 'img/cat.png'
		},
		{
			name: 'cloud',
			img: 'img/cloud.png'
		},
		{
			name: 'leaf',
			img: 'img/leaf.png'
		},
		{
			name: 'moon',
			img: 'img/moon.png'
		},
		{
			name: 'smile',
			img: 'img/smile.png'
		},
		{
			name: 'star',
			img: 'img/star.png'
		},
		{
			name: 'bike',
			img: 'img/bike.png'
		},
		{
			name: 'burger',
			img: 'img/burger.png'
		},
		{
			name: 'cat',
			img: 'img/cat.png'
		},
		{
			name: 'cloud',
			img: 'img/cloud.png'
		},
		{
			name: 'leaf',
			img: 'img/leaf.png'
		},
		{
			name: 'moon',
			img: 'img/moon.png'
		},
		{
			name: 'smile',
			img: 'img/smile.png'
		},
		{
			name: 'star',
			img: 'img/star.png'
		}
	]

	// game board setup
	// randomize cards
	cardArray.sort(() => 0.5 - Math.random());

	// initialize game elements
	const grid = document.querySelector('.grid');
	// hook up text displays for scoring and matches feedback
	const resultDisplay = document.querySelector('#result');
	// Display max number of possible matches with however many cards are on board
	const resultDisplayMax = document.querySelector('#result-max');
	resultDisplayMax.textContent = String(cardArray.length / 2);
	const lastMoveDisplay = document.querySelector('#last-move');
	// message when user wins game
	// const resultDisplayWin = document.querySelector('#result-win');
	// create empty arrays to track cards as player interacts
	var cardsChosen = [];
	var cardsChosenId = [];
	var cardsWon = [];

	// fill board with card layout from cardArray
	function createBoard() {
		for (let i = 0; i < cardArray.length; i++) {
			const card = document.createElement('img');
			card.setAttribute('src', 'img/cardback.png');
			card.setAttribute('data-id', i);
			card.addEventListener('click', flipCard);
			grid.appendChild(card);
		}
	}

	// check for matches
	function checkForMatch() {
		var cards = document.querySelectorAll('img');
		const optionOneId = cardsChosenId[0];
		const optionTwoId = cardsChosenId[1];
		// deep comparison of the two chosen cards
		if (cardsChosen[0] === cardsChosen[1]) {
			// match success: update lastMoveDisplay,
			// change the card image to be blank
			// (remove them from board from player perspective)
			lastMoveDisplay.textContent = 'You found a match!';
			cards[optionOneId].setAttribute('src', 'img/blank.png');
			cards[optionTwoId].setAttribute('src', 'img/blank.png');
			cardsWon.push(cardsChosen);
		} else {
			// match fail: update lastMoveDisplay,
			// change the card image to default cardback (flip back over)
			lastMoveDisplay.textContent = 'No match :(';
			cards[optionOneId].setAttribute('src', 'img/cardback.png');
			cards[optionTwoId].setAttribute('src', 'img/cardback.png');
		}
		// empty out the chosen cards arrays for player's next move
		cardsChosen = [];
		cardsChosenId = [];
		// update score display (resultDisplay)
		resultDisplay.textContent = String(cardsWon.length);
		// check if player won the game by finding all matches
		// (score will be equal to initial # of cards / 2)
		if (cardsWon.length === cardArray.length/2) {
			lastMoveDisplay.textContent = 'You win!';
		}
	}

	// flip card
	function flipCard() {
		// only flipCard if there are less than 2 cards in cardsChosen
		if (cardsChosen.length < 2) {
			var cardId = this.getAttribute('data-id');
			cardsChosen.push(cardArray[cardId].name);
			cardsChosenId.push(cardId);
			this.setAttribute('src', cardArray[cardId].img);
			// if player has picked two cards, script should checkForMatch
			if (cardsChosen.length === 2) {
				setTimeout(checkForMatch, 500);
			}
		}
	}

	// Create board and game is ready
	createBoard();
})

