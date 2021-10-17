let message = "";
let points = 0;
let cpoints = 0;
function computerPlay (){
    let x = Math.ceil(Math.random()*3);
    switch(x){
        case 1:
            x = "Scissor";
            break;
        case 2:
            x = "Paper";
            break;
        case 3:
            x = "Stone";
            break;
        default:
            x = "Scissor";
    }
    return x;
}
function playRound(x, computerSelection){
    let results = "";
    if (computerSelection == "Scissor"){
        switch(x){
            case "Scissor":
                results = "T";
                break;
            case "Paper":
                results = "L";
                break;
            case "Stone":
                results = "W";
            default:
        }
    }
    else if (computerSelection == "Paper"){
        switch(x){
            case "Scissor":
                results = "W";
                break;
            case "Paper":
                results = "T";
                break;
            case "Stone":
                results = "L";
            default:
        }
    }
    else if (computerSelection == "Stone"){
        switch(x){
            case "Scissor":
                results = "L";
                break;
            case "Paper":
                results = "W";
                break;
            case "Stone":
                results = "T";
            default:
        }
    }

    switch(results){
        case "W":
            message = "You Win! " + x + " beats " + computerSelection;
            break;
        case "L":
            message = "You Lose! " + computerSelection + " beats " + x;
            break;
        case "T":
            message = "It's a Tie!"
        default:
    }
        messageBox.textContent = message;
    return results;
}

function updateScore(results){
    if(results=='W'){
        points+=1;
    }
    else if(results =='L'){
        cpoints+=1;
    }
    console.log(points + " " + cpoints);
    scoreLog.textContent = points + '   :   ' + cpoints;
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        results = playRound(button.id, computerPlay());
        updateScore(results);
    });
});

const container = document.querySelector('#main');
const scoreLog = document.createElement('p');
const messageBox = document.createElement('p');
scoreLog.textContent = points + '   :   ' + cpoints;
messageBox.textContent = "Fuck him up!";
messageBox.style.marginTop = '20px';
messageBox.style.fontSize = '20px';
container.appendChild(scoreLog);
container.appendChild(messageBox);

