let randomNumber = parseInt(Math.random() * 100 + 1) 

//selecting submit guess button
const submit = document.querySelector('#subt')

//selecting user input (we'll take its value later on)
const userInput = document.querySelector('#guessField')

// selecting users previous guesses
const guessSlot = document.querySelector('.guesses')

// selecting the no of guesses remaining
const remaining = document.querySelector('.lastResult')

//selecting low or hi class
const lowOrHi = document.querySelector('.lowOrHi')

// selecting result para so we can show start over messages
const startOver = document.querySelector('.resultParas')


// creating a p element which we will inject at multiple places
const p = document.createElement('p')



// array of previous guesses
let prevGuess = []

// no of guesses
let numGuess = 1


let playGame = true


if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();      // prevents the form's values to go into server directly . i.e. hold them for some time

        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

// checking if the input guess is valid or not(kahi abc to nhi dediya)
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    } else if(guess < 1){
        alert('Please enter a number greater than 1')
    }else if(guess > 100){
        alert('Please enter a number less than 100')
    }

    else{
        prevGuess.push(guess)       // adding the guessed no to prevGuess array

        if (numGuess > 10){         // checkng if no of guesses are exhausted
              displayGuess(guess)
              displayMessage(`Game over! Random number was ${randomNumber}`)
              endGame()             // ended the game
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }


    }

}

// check if no is high or lower or equal than actual no
function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    }
    else if(guess < randomNumber){
        displayMessage(`Number is too lower`)
    }
    else if(guess > randomNumber){
        displayMessage(`Number is too higher`)
    }

}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess} , `        // does not update but pushes the guessed value in the guess slot
    numGuess++;
    remaining.innerHTML = `${10 - numGuess +1}`
}

// it will display appropriate messages
function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;

}

// ending the game
function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">START NEW GAME</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()

}

// starting a new game by reseting values
function newGame(){
    const newGameButton = document.querySelector('#newGame')

    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${10 - numGuess +1}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
    })

}
