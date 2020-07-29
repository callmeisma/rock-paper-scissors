playerScore = 0;
pcScore = 0;

function pcPlay() {
    // randomly return ‘rock’, ‘paper’ or ‘scissors’
    const outcomes = ['rock', 'paper', 'scissors'];
    return outcomes[Math.floor(Math.random() * outcomes.length)];
}

function playround(playerSelection, pcSelection) {
    // plays single round and returns string such as "You Lose! paper beats rock"
    switch(true) {
        case (playerSelection === 'rock' && pcSelection === 'scissors'):
        case (playerSelection === 'scissors' && pcSelection === 'paper'):
        case (playerSelection === 'paper' && pcSelection === 'rock'): 
        playerScore += 1;
        document.getElementById('results').innerHTML = `You Win! ${playerSelection} beats ${pcSelection}.`;
        break;
        case (pcSelection === 'rock' && playerSelection === 'scissors'):
        case (pcSelection === 'scissors' && playerSelection === 'paper'):
        case (pcSelection === 'paper' && playerSelection === 'rock'):
        pcScore += 1;
        document.getElementById('results').innerHTML = `You Lose! ${pcSelection} beats ${playerSelection}.`;
        break;
        case (pcSelection === playerSelection):
        document.getElementById('results').innerHTML = `Its a tie! Both select ${pcSelection}.`;
        }
    
}

function btnCreator(parentId, type,text,id) { 
    type = type.toUpperCase();
    para = document.createElement(type);
    para.innerHTML = text;
    para.setAttribute('id', id);
    document.getElementById(parentId).appendChild(para);    
}

function btnRemover(parentId) {
    let element = document.getElementById(parentId);
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}


document.addEventListener('click', function(e){
    console.log(e.target.id);
    playround(e.target.id,pcPlay());
    document.getElementById('playScore').innerHTML = playerScore;
    document.getElementById('compScore').innerHTML = pcScore;

    if (playerScore >= 3) {
        document.getElementById('results').innerHTML = `Game Over, You\'ve Won! ${playerScore} - ${pcScore}.`;
        btnRemover('controls');
        btnCreator('controls', 'button', 'Play Again', 'replay')
    } else if (pcScore >= 3) {
        document.getElementById('results').innerHTML = `Game Over, You\'ve Lost! ${playerScore} - ${pcScore}.`;
        btnRemover('controls');
        btnCreator('controls', 'button', 'Play Again', 'replay')
    }

    if (e.target.id === 'replay') {
        document.getElementById('results').innerHTML = '';
        playerScore = 0;
        pcScore = 0;
        document.getElementById('playScore').innerHTML = playerScore;
        document.getElementById('compScore').innerHTML = pcScore;
        btnRemover('controls');
        btnCreator('controls', 'button', 'Rock', 'rock')
        btnCreator('controls', 'button', 'Paper', 'paper')
        btnCreator('controls', 'button', 'Scissors', 'scissors')
    }
})