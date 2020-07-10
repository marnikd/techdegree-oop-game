/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    //creates a ul with li elements for the letters and spaces 
    // with the right classnames and text contents
    // and replaces the ul child of the phrase div element with the new ul
    addPhraseToDisplay(){  
        const ul = document.createElement("ul");  
        const displayPhrase = this.phrase.split("");
        
        for(let i = 0; i < displayPhrase.length; i++){
            const li = document.createElement("li");

            if(displayPhrase[i] !== " "){
                li.textContent = displayPhrase[i];
                li.className = `hide letter ${displayPhrase[i]}`;
            } else{
                li.className = "space"
            }
            ul.appendChild(li);
        }
        const divElement = document.getElementById('phrase');
        divElement.replaceChild(ul, divElement.firstChild);
    }

    //checks if a letter is in the phrase
    checkLetter(letter){
        return this.phrase.includes(letter);
    }

    //resets the classname so the letter shows of li elements of the phrase if it matches the input letter
    showMatchedLetter(letter){
        const displayPhrase = this.phrase.split("");
        const letters = document.getElementById('phrase').children[0].children;
        for(let i = 0; i < displayPhrase.length; i++){
            if(letter === letters[i].textContent){
                letters[i].className = `show letter ${letter}`;
            } 
         }
    }
}

 
 