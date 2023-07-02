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

const images = document.querySelectorAll('.img-container img')
let playerTurn = true
let playerWins = 0
let comWins = 0

images.forEach((image) => {
    image.addEventListener('click', () => {
        const playerChoice = image.alt

        if (playerWins < 5 || comWins < 5) {
            playRound(playerChoice)
        }
    })
})


// primary game loop
function game() {

}

function playRound(playerChoice) {
    const comChoice = computerSelection()
    console.log(comChoice)
    if (playerChoice == 'rock') {
        if (comChoice == 'paper') {
            comWins += 1
            console.log("LOSE")
        }
        else if (comChoice == 'scissors') {
            playerWins += 1
            console.log("WIN")
        }
        else {
            console.log("TIE")
        }
    }

    console.log("playround")
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


function playerSelection(weapon) {
    console.log(weapon)
}
