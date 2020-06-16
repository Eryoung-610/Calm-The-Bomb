# Calm-The-Bomb
https://eryoung-610.github.io/Calm-The-Bomb/

## Setting up project
• Clone or download

## About the game
With a 3x3 grid of bombs, your goal is to defuse randomly ignited bombs otherwise you lose the game! As there is no winners in this game, how many bombs can you defuse before a bomb blows up?

## Wireframe
![wireframe](https://github.com/Eryoung-610/Uncalm-The-Bomb/blob/master/UncalmTheBomb.JPG)

## Game Rundown
* On page load, initial difficulty is set to normal, where the time for bomb to blow up is 1 to 1.5 seconds. Easy is 1.5 to 2 seconds, whereas hard is .45 to .5 seconds.
* Upon clicking start, the first bomb lights up and the user must click it to defuse it in order for the next bomb to appear. 
* Game continues until a bomb explodes, thus ending the game. The high score will be updated.
* Upon clicking start from a game over, the board resets and a new game begins.
* Upon clicking reset from either a current ongoing game or a game over, the board will reset.

## Tech Being Used
* HTML/CSS/JS
* Bootstrap

## Minimum Viable Product
* Create game board (HTML/CSS)
  * 3x3 board on load
  * Initialize bombs on load
  * Start button to begin/Turns into restart button after
* Create randomizer for bombs
* Create interval to change image of bomb
* Create image detection to defuse bombs
* Establish gameOver conditions

## Stretch Goals
* Implement modes/difficulty
