var playerScore = 0;
var roboScore = 0;

function roboPlay() {
    // randomly return ‘rock’, ‘paper’ or ‘scissors’
    const outcomes = ['rock', 'paper', 'scissors'];
    return outcomes[Math.floor(Math.random() * outcomes.length)];
}

function showPicks(playerSelection, roboSelection) {
    const rock = '<path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>';
    const paper = '<path d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1h-11zM2 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V8H9.5A1.5 1.5 0 0 0 8 9.5V14H2.5a.5.5 0 0 1-.5-.5v-11zm7 11.293V9.5a.5.5 0 0 1 .5-.5h4.293L9 13.793z"/>';
    const scissors = '<path d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61 3.5 3.5zm2.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zm7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"/>';
    

    if(playerSelection === "rock") {
        document.getElementById('user-pick').innerHTML = `<svg id="animate-click" data-toggle="animation" data-animation-start="onClick" data-animation-reset="false" data-animation="slide-right" xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor" class="bi bi-square" viewBox="0 0 16 16">${rock}</svg>`;
    }

    else if (playerSelection === "paper") {
        document.getElementById('user-pick').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor" class="bi bi-square" viewBox="0 0 16 16">${paper}</svg>`;
    }

    else if(playerSelection === "scissors") {
        document.getElementById('user-pick').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor" class="bi bi-square" viewBox="0 0 16 16">${scissors}</svg>`;
    }

    if(roboSelection === "rock") {
        document.getElementById('robo-pick').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor" class="bi bi-square" viewBox="0 0 16 16">${rock}</svg>`;
    }

    else if (roboSelection === "paper") {
        document.getElementById('robo-pick').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor" class="bi bi-square" viewBox="0 0 16 16">${paper}</svg>`;
    }

    else if(roboSelection === "scissors") {
        document.getElementById('robo-pick').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor" class="bi bi-square" viewBox="0 0 16 16">${scissors}</svg>`;
    }
}

function playround(playerSelection) {
    var roboSelection = roboPlay();
    // plays single round and returns string such as "You Lose! paper beats rock"
    switch(true) {
        case (playerSelection === 'rock' && roboSelection === 'scissors'):
        case (playerSelection === 'scissors' && roboSelection === 'paper'):
        case (playerSelection === 'paper' && roboSelection === 'rock'):
        showPicks(playerSelection, roboSelection); 
        playerScore += 1;
        document.getElementById("round-result").innerHTML = "You've Won!"
        updateBar();
        break;
        case (roboSelection === 'rock' && playerSelection === 'scissors'):
        case (roboSelection === 'scissors' && playerSelection === 'paper'):
        case (roboSelection === 'paper' && playerSelection === 'rock'):
        showPicks(playerSelection, roboSelection);
        roboScore += 1;
        document.getElementById("round-result").innerHTML = "You've Lost!"
        updateBar();
        break;
        case (roboSelection === playerSelection):
        showPicks(playerSelection, roboSelection);
        document.getElementById("round-result").innerHTML = "Tie!"
        }
}

function updateBar() {
    var userElemBar = document.getElementById("userBar");
    userElemBar.style.width = `${((playerScore/3)*100)}%`;
    var roboElemBar = document.getElementById("roboBar");
    roboElemBar.style.width = `${((roboScore/3)*100)}%`;
}

function showEndModal(title, content) {
    document.getElementById("end-modal-title").innerHTML = title
    document.getElementById("end-modal-content").innerHTML = content
    $("#end-modal").modal("show")
}

function newGame() {
    // refresh scores and displays
    playerScore = 0;
    roboScore = 0;
    updateBar()
    document.getElementById("round-result").innerHTML = ""
    document.getElementById("user-pick").innerHTML = ""
    document.getElementById("robo-pick").innerHTML = ""
}

document.addEventListener('click', function(e){
    playround(e.target.id);

    if (playerScore >= 3) {
        // show you won modal
        showEndModal("YOU'VE WON!","A true champion, Ready to double down?")

    } else if (roboScore >= 3) {
        // show you lost modal\
        showEndModal("You've lost","That was unfortunate, Next game is all yours!")
    }
})