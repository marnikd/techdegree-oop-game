/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const startButton = document.getElementById("btn__reset");
const keyboard = document.getElementsByClassName("key");
const game = new Game([new Phrase("monday"),new Phrase("holland"), new Phrase("good morning"), new Phrase("strong"), new Phrase("javascript"), new Phrase("amsterdam")]);

//add behaviour to the start button
startButton.addEventListener("click", (e) => {
    game.newGame();
    game.startGame();
});

//add behaviour to the key buttons
for(let i = 0; i < 26; i++){
    keyboard[i].addEventListener("click", (e) => game.handleInteraction(keyboard[i].textContent) )
}

//adds behaviour to the real keyboard of the player
document.addEventListener("keyup", (e) => game.handleInteraction(e.key));
