/**
 * Generates a shuffled casino deck of cards.
 * 
 * @param {number} n - The number of decks to generate.
 * @returns {string[]} - An array of shuffled cards.
 */
function generateDeck(n) {
    let values = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
    let suits = ['clubs','diamonds','hearts','spades'];
    let deck = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < suits.length; j++) {
            for (let k = 0; k < values.length; k++) {
                deck.push(values[k] + ' of ' + suits[j]);
            }
        }
    }

    //Shuffle the deck
    for (let i = 0; i < deck.length; i++) {
        let swapIdx = Math.floor(Math.random() * deck.length);
        let tmp = deck[swapIdx];
        deck[swapIdx] = deck[i];
        deck[i] = tmp;
    }

    return deck;
}

/** 
 * Determines the value of a given card.
 * @param {String} card
 * @returns {number} - The value of the card. Note: Aces are always 11.
*/
function evaluateCard(card) {
    //TODO: Implement this function.
}

/**
 * Returns the total value of a given hand.
 * @param {String[]} hand - An array of cards.
 * @returns {number} - The total value of the hand.
 */
function evaluateHand(hand) {
    //TODO: Implement this function.
}

/**
 * Hits a given hand with a card from the deck.
 * 
 * @param {String[]} hand - An array of cards representing a hand.
 * @param {String[]} deck - The deck to draw the next card from.
 */
function hit(hand, deck) {
    //TODO: Implement this function.
}

/**
 * Executes the dealer's entire turn.
 * 
 * @param {*} hand - The dealer's hand to play.
 * @param {*} deck - The deck to play from.
 */
function playDealer(hand, deck) {
    //TODO: Implement this function.
}

//TODO: Implement the rest of the game and display logic.

let deck = generateDeck(1);
let playerHand = [];
let dealerHand = [];