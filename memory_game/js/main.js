const cards = [
    {
    	rank: "queen",
    	suit: "hearts",
    	cardImage: "images/queen-of-hearts.png"
    },
    {
    	rank: "queen",
    	suit: "diamonds",
    	cardImage: "images/queen-of-diamonds.png"
    },
    {
    	rank: "king",
    	suit: "hearts",
    	cardImage: "images/king-of-hearts.png"
    },
    {
    	rank: "king",
    	suit: "diamonds",
    	cardImage: "images/king-of-diamonds.png"
    }
]
var cardsInPlay = [];
var score = 0;

function checkForMatch() {
	if(cardsInPlay[0] === cardsInPlay[1]) {
		// alert('You found a match!');
		score += 1;
	} else {
		alert("Sorry, try again!");
	}
};

function flipCard() {
	cardId = this.getAttribute('data-id');
	console.log("User flipped a " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);
	if(cardsInPlay.length === 2) {
		checkForMatch();
	}
};

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		// let reset = document.getElementById('reset-cards');
		// reset.addEventListener('click', resetCards);

		// let resetGame = document.getElementById('reset-game');
		// resetGame.addEventListener('click', resetGame);

		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard)
		document.getElementById('game-board').appendChild(cardElement);
	}
	let reset = document.getElementById('reset-cards');
	reset.addEventListener('click', resetCards);
	let theScore = document.getElementById('score');

	let resetTheGame = document.getElementById('reset-game');
	resetTheGame.addEventListener('click', resetGame);
	// console.log(score.innerHTML);
	theScore.innerHTML = score;
}

function resetCards() {
	// for (let i = 0; i < cards.length; i++) {
	// 	let el = document.getElementsByTagName('img')[i];
	// 	el = el.setAttribute('src', 'images/back.png');
	// 	cardsInPlay = [];
	// 	score = 0;
	// }
	game = document.getElementById('game-board');
	game.innerHTML = "";
	cardsInPlay = [];
	createBoard();
};

function resetGame() {
	console.log("WTF? Over!")
	theScore = document.getElementById('score');
	score = 0;
	theScore.innerHTML = score;
	resetCards();
};

createBoard();
