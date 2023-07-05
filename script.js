const Result = document.getElementById('result');
const computer = document.getElementById('computerGuess');
const options = ['🤘', '📄', '✂️'];
function computerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return options[choice];
}// computer bata input garna ko lagi use gareko function. so user can select as their wish
function callRock() {
    const computerChoosen = computerChoice();
if(computerChoosen == options[0]){
    Result.innerText = `It's a draw`;
    computer.innerText = `Computer got ${computerChoosen}`;

}
else if(computerChoosen == options[1]){
    Result.innerText = `You loose`;
    computer.innerText = `Computer got ${computerChoosen}`;

}
else{
    Result.innerText = `You won`;
    computer.innerText = `computer got ${computerChoosen}`;
}
}
function callPaper() {
    const computerChoosen = computerChoice();
if(computerChoosen == options[0]){
    Result.innerText = `you won`;
    computer.innerText = `Computer got ${computerChoosen}`;

}
else if(computerChoosen == options[1]){
    Result.innerText = `it's a draw`;
    computer.innerText = `Computer got ${computerChoosen}`;

}
else{
    Result.innerText = `You loose`;
    computer.innerText = `computer got ${computerChoosen}`;
}
}
function callScissor() {
    const computerChoosen = computerChoice();
if(computerChoosen == options[0]){
    Result.innerText = "you loose";
    computer.innerText = `Computer got ${computerChoosen}`;

}
else if(computerChoosen == options[1]){
    Result.innerText = "you Win";
    computer.innerText = `Computer got ${computerChoosen}`;

}
else{
    Result.innerText = "it's a draw";
    computer.innerText = `computer got ${computerChoosen}`;
}
}

function reset(){
    Result.innerText = "";
    computer.innerText = "";
}
