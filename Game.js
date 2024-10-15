let Players1 = 0;
let Players2 = 0;

const choices = document.querySelectorAll(".choices1");
const Message = document.querySelector("#Message");
const Players1para=document.querySelector("#Player-1");
const Players2para=document.querySelector("#Player-2");

const Draw = () => {
    console.log("Game Draw !");
    Message.innerText = "Draw !";
    Message.style.backgroundColor = "#FFFF00"; // Changed to yellow for Draw
}

const genPlayer2choice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const radIdx = Math.floor(Math.random() * 3);
    return options[radIdx];
};

const showWinner = (Player1win) => {
    if (Player1win) {
        Players1++;
        Players1para.innerText=Players1;
        console.log("You won the Game! Congratulations");
        Message.innerText = "You Win !";

        Message.style.backgroundColor = "#FFA500"; // Changed to orange for win
    } else {
        Players2++;
        Players2para.innerText=Players2;
        console.log("You lost the Game!");
        Message.innerText = "You Lose !";
        Message.style.backgroundColor = "#FF0000"; // Changed to red for loss
    }
}

const PlayGame = (Player_1) => {
    console.log("Player1 Choice =", Player_1);

    // Generate Computer Choice
    const Player_2 = genPlayer2choice();
    console.log("Player2 Choice =", Player_2);

    if (Player_1 === Player_2) {
        Draw();
    } else {
        let Player1win = true;

        if (Player_1 === "Rock") {
            Player1win = Player_2 === "Paper" ? false : true;
        } else if (Player_1 === "Paper") {
            Player1win = Player_2 === "Rock" ? true : false;
        } else { // Assuming "Scissors" for Player_1
            Player1win = Player_2 === "Scissors" ? false : true;
        }

        showWinner(Player1win);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const Player_1 = choice.getAttribute("id");
        PlayGame(Player_1);
    });
});
