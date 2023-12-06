# Blackjack

In this project, you will design a simple webpage implementation of the game Blackjack. The interface
will be an HTML page formatted using CSS (described below) and using JavaScript to implement the dynamic
elements of the game.

## Rules of Blackjack

In our simplified version of Blackjack, the goal of the game is to get a hand as close to 21 points as possible
without going over. The game is played against the dealer, who also has a hand. If the player’s hand is closer
to 21 (again, without going over) than the dealer's they win, otherwise the dealer wins.

The game begins by dealing two cards to the player and two cards to the dealer. The player can see both of
their cards, but only one of the dealer’s cards. The player then has the option to “hit” or “stand”. If the player
hits, they are dealt another card. If the dealt card puts the player's total over 21, they automatically lose and
the round is over. If the player stands, the dealer then plays their hand. The dealer must hit until their hand is
worth at least 17 points. If the dealer’s hand is worth more than 21 points, the player wins.

Cards have values according to the table below:

| Card | Value |
| --- | --- |
| 2-10 | Face value |
| Jack, Queen, King | 10 |
| Ace | 1 or 11 |

## Project Requirements

### HTML

The HTML page for this project, while reasonably simple, should take into consideration the _user experience_.
That is, it should be well-formatted, attractive, and intuitive. The following elements should be included:

1. A header with the title of the game.
2. Sections for the player's hand and the dealer's hand. These should be deliniated using CSS grid.
3. Within each section, the cards should be displayed as divs with a border and large font so that the card
   is easy to read (it does not need to look like a real card). Arrange the cards using Flexbox.
4. Controls for the game. These should include a button to start a new game, a button to hit, and a button
   to stand.

### CSS

The project should include a CSS file, making use of Flexbox and Grid as described above. Additionally,
any formatting to make the interface more appealing should also be contained here.

### JavaScript

The JavaScript file should contain the logic for the game. This includes:

1. A function to start a new game. This should reset the player and dealer hands, and deal two cards to
   each.
2. A function to "hit." This should deal a card to the player and update the display. If the player's hand
   exceeds 21, the game is over and the dealer wins. The hit button should be disabled at this point.
3. A function to "stand." This should play the dealer's hand. The dealer should hit until their hand is
    worth at least 17 points. If the dealer's hand exceeds 21, the player wins. Otherwise, the player and
    dealer hands should be compared and the winner should be displayed. The hit and stand buttons should
    be disabled at this point.
4. Additional functions as needed. You will probably need several including functions to select and display
   cards, and to calculate the value of a hand (which is tricky when aces are involved).

Your JavaScript code should adhere to good style and documentation practices. This includes good naming
conventions and clear documentation at the start of any function. If one function is particularly long or
complicated, you may want to include additional comments within the function, or even break it up into
smaller functions.

### Testing

You should test your code to ensure that it works properly. One of the advantages of creating several
functions is that you can break down the code and test each function individually. At the end of the day
however, your testing will largely involve playing a lot of blackjack. With a project of this complexity,
you should expect to spend about 70% of your time testing and debugging. Remember that you are working with
three different languages each with their own quirks and pitfalls; getting it right the first time is unlikely.

### Submission

Please submit all files to your GitHub repository. This should include your HTML, CSS, and JavaScript files.
Submission is as simple as committing and pushing your changes to GitHub. Remember that good commit messages
are a part of the documentation process, and will be considered when grading your project. Commits should be made
regularly as you finish a particular component of the project. This will force you to work on one part or feature
at a time, which is generally a very good idea.

### AI Policy

This is not an AI-based assignment. This is a classic programming problem, and Copilot will probably be just a
little too good at it. Of course, you will need to look things up occasionally, but you should avoid generating and
directly copying any code from Copilot or GPT or whatever.

### Extra Challenges

If you finish early, there are a few rules we left out which you can consider adding back in. These include:

1. Ask the player for a bet before each hand and track their winnings. If a player wins, they win the amount
   they bet. If they lose, they lose the amount they bet. If they tie, they get their bet back.
2. If a player is dealt 21 points on the first two cards, they win automatically. This is called a "blackjack,"
   and is worth 1.5 times the bet, unless the dealer also has a blackjack, in which case it is a tie.
3. If a player is dealt two cards of the same value, they can "split" their hand into two separate hands. This
   requires adding a second hand for the player and dealing a second card to each hand. The player then plays
   each hand separately. If the player splits aces, they are only dealt one additional card for each hand.
4. If the dealer's first card is an ace, the player can take "insurance" against the dealer having a blackjack.
   This requires the player to bet half of their original bet. If the dealer has a blackjack, the player loses
   their original bet but wins the insurance bet, resulting in a net loss of zero. If the dealer does not have
   a blackjack, the player loses the insurance bet and the hand proceeds as normal.