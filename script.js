var rollDice= document.querySelector('.roll-dice');
var dice= document.querySelector('.dice');
var img= document.querySelector('img');
var interScorePlayer1= document.querySelector(".intermediate-score-player1");
var interScorePlayer2= document.querySelector(".intermediate-score-player2");
var hold= document.querySelector(".hold")
var finalScore1= document.querySelector(".final-score1")
var finalScore2= document.querySelector(".final-score2")
var divPlayer1= document.querySelector(".player1")
var divPlayer2= document.querySelector(".player2")
var round1= document.querySelector(".player1 span")
var round2= document.querySelector(".player2 span")
var player1H3= document.querySelector(".player1 h3")
var player2H3= document.querySelector(".player2 h3")
var newGame= document.querySelector(".new-game")
var turn = 1
divPlayer1.style.backgroundColor= "rgb(234, 228, 228)";
divPlayer2.style.backgroundColor= "white";
round1.style.opacity= "1";
player1H3.style.color= "black"
player2H3.style.color= "black"

function getNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*max+min);
}

rollDice.addEventListener('click', () => {
    player1H3.style.color= "black"
    player2H3.style.color= "black"
    if(turn==1) {
        divPlayer1.style.backgroundColor= "rgb(234, 228, 228)";
        divPlayer2.style.backgroundColor= "white";
        round1.style.opacity= "1";
        round2.style.opacity= "0";

        img.style.display= "block";
        let diceNumber = getNumber(1,6);
        let sum= 0;

        img.setAttribute("src", `./images/dice-${diceNumber}.png`);
        sum = parseInt(interScorePlayer1.innerHTML);
        interScorePlayer1.innerHTML=sum+diceNumber
        getNumber(1,6);

        if(parseInt(finalScore1.innerHTML)>=100){
            player1H3.innerHTML= "WINNER !!!";
            player1H3.style.color= "red"
        }

        if(player2H3.innerHTML== "WINNER !!!"||player1H3.innerHTML== "WINNER !!!") {
            clearGame()
        }

        if(diceNumber==1) {
            img.setAttribute("src", "./images/dice-1.png");
            sum=0;
            interScorePlayer1.innerHTML=sum
            divPlayer1.style.backgroundColor= "white";
            divPlayer2.style.backgroundColor= "rgb(234, 228, 228)"
            turn=2
            round1.style.opacity= "0";
            round2.style.opacity= "1";
        }
    } else if (turn==2) {
        divPlayer2.style.backgroundColor= "rgb(234, 228, 228)";
        divPlayer1.style.backgroundColor= "white";
        round2.style.opacity= "1";
        round1.style.opacity= "0";

        img.style.display= "block";
        let diceNumber = getNumber(1,6);
        let sum= 0;

        img.setAttribute("src", `./images/dice-${diceNumber}.png`);
        sum = parseInt(interScorePlayer2.innerHTML);
        interScorePlayer2.innerHTML=sum+diceNumber
        getNumber(1,6);

        if(parseInt(finalScore2.innerHTML)>=100){
            player2H3.innerHTML= "WINNER !!!";
            player2H3.style.color= "green"
        }

        if(player2H3.innerHTML== "WINNER !!!"||player1H3.innerHTML== "WINNER !!!") {
            clearGame()
        }

        if(diceNumber==1) {
            img.setAttribute("src", "./images/dice-1.png");
            sum=0;
            interScorePlayer2.innerHTML=sum
            divPlayer2.style.backgroundColor= "white";
            divPlayer1.style.backgroundColor= "rgb(234, 228, 228)"
            turn=1
            round2.style.opacity= "0";
            round1.style.opacity= "1";
        }
    }  
})

hold.addEventListener("click", ()=> {
    let sum= 0

    if(turn==1){
        sum = parseInt(finalScore1.innerHTML);
        finalScore1.innerHTML=sum+parseInt(interScorePlayer1.innerHTML);
        interScorePlayer1.innerHTML=0
        round1.style.opacity=0;
        round2.style.opacity=1;
        divPlayer2.style.backgroundColor= "rgb(234, 228, 228)"
        divPlayer1.style.backgroundColor= "white"
        if(parseInt(finalScore1.innerHTML)>=100){
            player1H3.innerHTML= "WINNER !!!"
            player1H3.style.color= "green"
            player1H3.style.marginRight= 0
        }
        turn=2
    } else if(turn==2) {
        sum = parseInt(finalScore2.innerHTML);
        finalScore2.innerHTML=sum+parseInt(interScorePlayer2.innerHTML);
        interScorePlayer2.innerHTML=0
        round1.style.opacity=1;
        round2.style.opacity=0;
        divPlayer2.style.backgroundColor= "white"
        divPlayer1.style.backgroundColor= "rgb(234, 228, 228)"
        if(parseInt(finalScore2.innerHTML)>=100){
            player2H3.innerHTML= "WINNER !!!"
            player2H3.style.color= "green"
            player2H3.style.marginRight= 0
        }
        turn=1
    }
})

function clearGame() {
    finalScore1.innerHTML=0
    finalScore2.innerHTML=0
    interScorePlayer1.innerHTML=0
    interScorePlayer2.innerHTML=0
    img.style.display= "none";
    player1H3.innerHTML= "PLAYER 1"
    player2H3.innerHTML= "PLAYER 2"
    player1H3.style.color= "black"
    player2H3.style.color= "black"
    turn=1
    divPlayer2.style.backgroundColor= "white"
    divPlayer1.style.backgroundColor= "rgb(234, 228, 228)"
    round1.style.opacity=1;
    round2.style.opacity=0;
}

newGame.addEventListener('click', clearGame)

