const playButton = document.getElementById('play-button');
const playSessionContainer = document.getElementById('play-session-container');
const menuGameContainer = document.getElementById('menu-game-container');
const result = document.getElementById('result');

playButton.addEventListener('click', function () {
    playSessionContainer.classList.remove('hidden');
    menuGameContainer.classList.add('hidden');
});

function game() {
    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissor = document.getElementById('scissor');

    const choices = { rock: "rock", paper: "paper", scissor: "scissors" };

    [rock, paper, scissor].forEach(option => {
        option.addEventListener('click', function () {
            let playerChoice = choices[option.id];
            let computerOptions = ["rock", "paper", "scissors"];
            let computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];

            // Menentukan hasil permainan
            if (playerChoice === computerChoice) {
                result.textContent = "Tie";
            } else if (
                (playerChoice === "rock" && computerChoice === "scissors") ||
                (playerChoice === "paper" && computerChoice === "rock") ||
                (playerChoice === "scissors" && computerChoice === "paper")
            ) {
                result.textContent = "Player Won";
            } else {
                result.textContent = "Computer Won";
            }

            // Setelah hasil muncul, kembali ke menu
            setTimeout(() => {
                playSessionContainer.classList.add('hidden');
                menuGameContainer.classList.remove('hidden');
            }, 2000); // Delay 2 detik sebelum kembali ke menu
        });
    });
}

game();
