const playertext = document.querySelector("#playertxt");
const computertext = document.querySelector("#computertxt");
const resulttext = document.querySelector("#resulttxt");
const resetbtn = document.querySelector("#resetbtn");
const btns = document.querySelectorAll(".btn"); 


const playerscoreElem = document.querySelector("#playerscore");
const computerscoreElem = document.querySelector("#computerscore");
const drawscoreElem = document.querySelector("#drawscore");

let player;
let computer;
let result;

// Initialize
let playerscore = 0;
let computerscore = 0;
let drawscore = 0;


btns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;    
    computerturn();                 
    playertext.textContent = `player: ${player}`;       
    computertext.textContent = `computer: ${computer}`; 

    result = checkWinner();             
    resulttext.textContent = result;

    updateScore(result); 
}));


function computerturn() {
    const randnum = Math.floor(Math.random() * 3 + 1); 
    switch (randnum) {
        case 1:
            computer = "rock";
            break;
        case 2:
            computer = "paper";
            break;
        case 3:
            computer = "scissors";
            break;
    }
}


function checkWinner() {
    if (player === computer) {
        return "draw!";
    } else if (computer === "rock") {
        return (player === "paper") ? "you win!" : "you lose!";
    } else if (computer === "paper") {
        return (player === "scissors") ? "you win!" : "you lose!";
    } else if (computer === "scissors") {
        return (player === "rock") ? "you win!" : "you lose!";
    }
}


function updateScore(result) {
    if (result === "you win!") {
        playerscore++;
    } else if (result === "you lose!") {
        computerscore++;
    } else if (result === "draw!") {
        tiedscore++;
    }

    
    playerscoreElem.textContent = playerscore;
    computerscoreElem.textContent = computerscore;
    drawscoreElem.textContent = drawscore ;
}


function resetgame() {
    player = '';   
    computer = ''; 
    resulttext.textContent = 'result:';                
    playertext.textContent = 'player choice:';         
    computertext.textContent = 'computer choice:';     

    
    playerscore = 0;
    computerscore = 0;
    drawscore = 0;

    
    playerscoreElem.textContent = playerscore;
    computerscoreElem.textContent = computerscore;
    drawscoreElem.textContent = drawscore;
}


resetbtn.addEventListener("click", resetgame);
