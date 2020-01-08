const cards = [
    {
    	rank: "queen",
    	suit: "hearts",
    	cardImage: "images/queen-of-hears.png"
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
const cardsInPlay = [];

function checkForMatch() {
	if(cardsInPlay[0] === cardsInPlay[1]) {
		alert('You found a match!');
	} else {
		alert("Sorry, try again!");
	}
};

function flipCard(cardId) {
	console.log("User flipped a " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	if(cardsInPlay.length === 2) {
		checkForMatch();
	}
	
	// console.log(cardsInPlay);
};

flipCard(0);
flipCard(2);
