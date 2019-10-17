
const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-Score");
const computerScore_span = document.getElementById("computer-Score");
const ScoreBoard_div = document.querySelector(".score_board");
const result_p = document.querySelector("result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(leter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "paper";
    return "scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallcompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = $(convertToWord(userChoice)}${ smallUserWord } beates ${ convertToWord(computerChoice)}${ smllCompWord }. 'You Win';

}

function lose(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smalUserWord = "user".fontsize(3).sub();
    const smalcompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = $(convertToWord(userChoice)}${ smallUserWord } beates $ { convertToWord(computerChoice)}${ smllCompWord }. 'You lost...';

}


function loses() {
    
    const smalUserWord = "user".fontsize(3).sub();
    const smalcompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = $(convertToWord(userChoice)}${ smallUserWord } beates ${ convertToWord(computerChoice) }${ smllCompWord }. 'its a draw'; 
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;

        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }


    function main() {
        rock_div.addEventListener('click', function () {
            game("r")
        })

        paper_div.addEventListener('click', function () {
            game("p")
        })

        scissors_div.addEventListener('click', function () {
            game("s")
        })
