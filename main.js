/**
 * Get user input:
 *  - rock
 *  - paper
 *  - scissors
 * Validate user input
 * Generate computer choice (rock, paper, scissors)
 * Compare userIn and compIn
 * Decide winner based on combination of user & comp input
 * Update points -> display updated score on site
 * Prompt user for input
 * IF user/comp reaches max wins (5) first, declare winner
 */

const images = document.querySelectorAll('.card-container img')
let gameOver = false
let playerTurn = true
let playerWins = 0
let comWins = 0
let round = 1

enableUserIn()


function enableUserIn() {
    images.forEach((image) => {
        image.addEventListener('click', () => {
            const playerChoice = image.alt
            console.log(playerChoice)
            if(!gameOver) {
                playRound(playerChoice)
            }
        })
    })
}

function disableUserIi() {
    images.forEach((image) => {
        image.removeEventListener('click')
    })
    console.log("Player DISABLED")
}

function playRound(playerChoice) {
    round += 1
    const comChoice = computerSelection()

    updateImages(playerChoice, comChoice)

    console.log("Computer chose:", comChoice)
    validateChoices(playerChoice, comChoice)
    updateText()
    console.log("Player Points:", playerWins)
    console.log("Computer Points:", comWins)


    if (playerWins >= 5 || comWins >= 5)
    {
        gameOver = true
        console.log(gameOver)
        // display reset message
        document.getElementById('reset').style.display = 'block'
        playerImg = document.getElementById('player-choice')
        computerImg = document.getElementById('computer-choice')
        if (playerWins >= 5) {
            playerImg.src = "./static/winner.png"
            computerImg.src = "./static/loser.png"

        } else {
            playerImg.src = "./static/loser.png"
            computerImg.src = "./static/winner.png"
        }
    }
}

// generates random number and returns com choice
function computerSelection() {
    const randVal = Math.floor(Math.random() * 3)
    switch (randVal) {
        case 0:
            return 'rock'
            break;
        case 1:
            return 'paper'
            break;
        case 2:
            return 'scissors'
            break;
        default:
            return ''
            break;
    }

}

function validateChoices(playerChoice, comChoice) {
    if (playerChoice == 'rock') {
        if (comChoice == 'scissors') {
            playerWins += 1
            console.log("WIN")
        }
        else if (comChoice == 'paper') {
            comWins += 1
            console.log("LOSE")
        }
        else {
            console.log("TIE")
        }
    }
    else if (playerChoice == 'paper') {
        if (comChoice == 'rock') {
            playerWins += 1
            console.log("WIN")
        }
        else if (comChoice == 'scissors') {
            comWins += 1
            console.log("LOSE")
        }
        else {
            console.log("TIE")
        }
    }
    else if (playerChoice == 'scissors') {
        if (comChoice == 'paper') {
            playerWins += 1
            console.log("WIN")
        }
        else if (comChoice == 'rock') {
            comWins += 1
            console.log("LOSE")
        }
        else {
            console.log("TIE")
        }
    }
}

function updateImages(playerChoice, comChoice) {
    // player image
    document.getElementById('player-choice').src = "./static/" + playerChoice + ".png"
    // computer image
    document.getElementById('computer-choice').src = "./static/" + comChoice + ".png"
}

function updateText() {
    document.getElementById('player-score').innerText = playerWins
    document.getElementById('computer-score').innerText = comWins
    document.getElementById('round-num').innerText = round
}