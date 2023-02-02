let cards=[];
let sum=0;
let message = "";
let messageEl = document.getElementById('message-el');
let cardsEl = document.getElementById('cards-el');
let sumEl = document.getElementById('sum-el');
let startBtn = document.getElementById('start-btn');
let newCardBtn = document.getElementById('newCard-btn');
let player = {
  name : "Padma",
  chips : 200
};
let playerEl = document.getElementById('chips-el');
playerEl.textContent = player.name + " : $" + player.chips;


function getRandomCard(){
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if(randomCard > 10){
    return 10
  }
  else if(randomCard === 1){
    return 11
  }
  else{
    return randomCard
  }
}

function startGame(){
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  newCardBtn.disabled = false;
  renderGame();
}

function renderGame(){
  cardsEl.textContent = "Cards : "
  for(let i=0; i<cards.length; i++){
    cardsEl.textContent += cards[i] + " ";
  }
  
  sumEl.textContent = "Sum : " + sum;
  if(sum < 21){
    messageEl.textContent = "Draw new card?";
  }
  else if(sum === 21){
    messageEl.textContent = "You've got blackjack!";
    newCardBtn.disabled = true;
  }
  else{
    messageEl.textContent = "You're out of the game.";
    startBtn.disabled = false;
    newCardBtn.disabled = true;
  }
  
}

function newCard(){
  let newCard = getRandomCard();
  cards.push(newCard);
  sum = sum + newCard;
  renderGame();
}