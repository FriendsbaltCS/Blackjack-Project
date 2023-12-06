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