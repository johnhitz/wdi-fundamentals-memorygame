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

function checkForMatch() {
	if(cardsInPlay[0] === cardsInPlay[1]) {
		alert('You found a match!');
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
		let reset = document.getElementById('reset');
		reset.addEventListener('click', resetCards);

		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard)

		document.getElementById('game-board').appendChild(cardElement);
	}
}

function resetCards() {
	for (let i = 0; i < cards.length; i++) {
		let el = document.getElementsByTagName('img')[i];
		el = el.setAttribute('src', 'images/back.png');
		cardsInPlay = [];
	}
};

createBoard();
