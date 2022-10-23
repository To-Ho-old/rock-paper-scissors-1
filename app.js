let playerScore = 0;
let computerScore = 0;
/* "caching the DOM": caching-storing something for future use*/
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//Computer choice function
function getComputerChoice() {
    const choices = ['r', 'p', 's']; //array of choice
    //choose random array index 0-2
    //Math.random() generates a random number between 0-1
    const randomNumber = Math.floor(Math.random() * 3); //Generates a number between 0-3
    return choices[randomNumber];
}

//test
//console.log(getComputerChoice());

//Function to convers playerChoice and ComputerChoice to word
function convertToWord (letter) {
    switch(letter) {
        case "r": return "Rock";
        case "p": return "Paper";
        case "s": return "Scissors";
    }
}

//Win function
function win(playerChoice, computerChoice) {
    const playerChoice_div = document.getElementById(playerChoice);
    playerScore++;
    //Set playerScore_span to playerScore
    playerScore_span.innerHTML = playerScore; //innerHTML sets or returns the HTML content of an element
    computerScore_span.innerHTML = computerScore;
    //const smallUserWord = "player".fontsize(3).sup(); //Change player to smaller size. .sub(): down, .sup(): up
    //Show message on the html page
    result_p.innerHTML = `Player's ${convertToWord(playerChoice)} BEATS Computer's ${convertToWord(computerChoice)}. Player Win!`;
    //result_p.innerHTML = `Player ${convertToWord(playerChoice)}${smallUserWord} BEATS Computer ${convertToWord(computerChoice)}. Player Win`;

    //Change clicked icon border color when player win
    playerChoice_div.classList.add('green-glow');
    //Revert the glow with setTimeout
    //setTimeout(function() {playerChoice_div.classList.remove("green-glow")}, 1000);
    //Arrow Function
    setTimeout(() => playerChoice_div.classList.remove("green-glow"), 1000);
} 

//Lose function
function lose(playerChoice, computerChoice) {
    const playerChoice_div = document.getElementById(playerChoice);
    computerScore++;
    playerScore_span.innerHTML = playerScore; 
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `Player's ${convertToWord(playerChoice)} LOSES TO Computer's ${convertToWord(computerChoice)}. Player Lost!`;
    //Change clicked icon border color when player loses
    playerChoice_div.classList.add('red-glow');
    //Revert the glow with setTimeout
    //setTimeout(function() {playerChoice_div.classList.remove("red-glow")}, 1000);
    setTimeout(() => playerChoice_div.classList.remove("red-glow"), 1000);
}

//Draw function
function draw(playerChoice, computerChoice) {
    const playerChoice_div = document.getElementById(playerChoice);
    result_p.innerHTML = `Player's ${convertToWord(playerChoice)} IS THE SAME AS Computer's ${convertToWord(computerChoice)}. Draw!`;
    playerChoice_div.classList.add('gray-glow');
    setTimeout(() => playerChoice_div.classList.remove("gray-glow"), 1000);
}

//game function
//Take the value of clicked button and compare with computer choice
function game(playerChoice) {
    const computerChoice = getComputerChoice();
    switch (playerChoice + computerChoice) {
        //Win scenarios
        case "rs":
        case "sp":
        case "pr":
            win(playerChoice, computerChoice);
            break;
        //Lose scenarios
        case "sr":
        case "ps":
        case "rp":
            lose(playerChoice, computerChoice);
            break;
        //draw
        case "rr":
        case "ss":
        case "pp":
            draw(playerChoice, computerChoice);
            break;
    } 
} 

function main(){
/* player click on the buttons */
//Pass the clicked icon to playerChoice
    rock_div.addEventListener('click', () => game("r"));
    
    paper_div.addEventListener('click', () => game("p"));
    
    scissors_div.addEventListener('click', () => game("s"));
    //scissors_div.addEventListener("click", function() {
    //    game("s");
    //})
}
 main();
