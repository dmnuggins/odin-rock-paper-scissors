console.log('Hello World!')



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

  images.forEach((image) => {
    image.addEventListener('click', () => {
        console.log('Image clicked:', image.alt)
    })
  })

// primary game loop
function game() {

};

function playRound() {

};

function computerSelection() {
    console.log('getComputerChoice')
};

function playerSelection() {
    console.log('playerSelection')
};
