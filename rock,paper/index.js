function playgame(userchoice) {
    const choices = ["rock", "paper" , "scissors"];
    const computerchoice = choices[Math.floor(Math.random() * choices.length)];
    document.getElementById("user-choice").querySelector("span").textContent = userchoice;
    document.getElementById("pc-choice").querySelector("span").textContent =computerchoice;

    let result = "";
    if (userchoice === computerchoice) {
        result = "draw!";
    }else if (
        (userchoice === "paper" && computerchoice === "rock") ||
        (userchoice === "rock" && computerchoice === "scissors") ||
        (userchoice === "scissors" && computerchoice === "paper")
    ) {
        result = "good job you won!";
    }else {
        result = "try again you lost!";
    }

    document.getElementById("result").querySelector("span").textContent = result;
}