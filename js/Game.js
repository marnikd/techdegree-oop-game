/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game{
    constructor(arr){
        this.missed = 0;
        this.phrases = arr;
        this.activePhrase = null;
    }
    
    
    //need index between 0 and arr.length - 1 and return this.phrases with the index
    getRandomPhrase(){
        return this.phrases[Math.floor(Math.random()*this.phrases.length)];
    }

    //starts the game by removing the overlay and selecting a random phrase
    startGame(){
        document.getElementById('overlay').style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    //disables the key chosen and checks if it is in the phrase or not
    //if it is not in the phrase this is shown by the background color of the key
    //and it is checked if the player is game over
    //if the letter is in the phrase the places were the letter is are shown
    //and the game checks if the player won the game
    handleInteraction(letter){
        const keyboard = document.getElementsByClassName("key");
          for(let i = 0; i<keyboard.length; i++){ 
            if(keyboard[i].textContent === letter && !keyboard[i].disabled){
                keyboard[i].disabled = true;
                if(!this.activePhrase.checkLetter(letter)){
                    keyboard[i].className = "key wrong"; 
                    this.removeLife();
                } else{
                    keyboard[i].className = "key chosen";
                    this.activePhrase.showMatchedLetter(letter);
                    if(this.checkForWin()){
                        this.gameOver();
                    }
                 }
            }
        }

    }

    //removes lives from right to left by changing the src name
    removeLife(){
        const lives = document.getElementsByClassName("tries");
        lives[4 - this.missed].firstChild.src = "images/lostHeart.png";
        this.missed += 1;
        if(this.missed === 5){
            this.gameOver();
        }
    }

    //checks if the player won by looking at the class name of the boxes
    //if a box still has a class of hide (so not all letters are guessed)
    //the game has not been won
    checkForWin(){
        const letters = document.getElementById("phrase").firstChild.children;
        for(let i = 0; i< letters.length; i++){
            if(letters[i].className.includes('hide')){
                return false;
            } 
        }
        return true;

    }

    //if the game ends the right message and color are displayed at the overlay
    gameOver(){
        const overlay = document.getElementById('overlay');
        overlay.style.display = "block";
        if(this.checkForWin()){
            overlay.className = "win"
            document.getElementById('game-over-message').innerHTML = "Congratulations! You guessed the word!";
        } else{
            overlay.className = "lose"
            document.getElementById('game-over-message').innerHTML = `You failed to guess the word <strong>"${this.activePhrase.phrase}"</strong>, better luck next time. Try again!`
        }
    }

    //resets the keyboard and lives when a new game is started
    newGame(){
        const lives = document.getElementsByClassName("tries");
        for(let i = 0; i<lives.length; i++){
        lives[i].firstChild.src = "images/liveHeart.png";
        }
        this.missed = 0;

        const keyboard = document.getElementsByClassName("key");
          for(let i = 0; i<keyboard.length; i++){
            keyboard[i].disabled = false;
            keyboard[i].className = "key"; 
        }
 }

 }