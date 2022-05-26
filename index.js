let cards = []
let sum = 0
let message
let isAlive = false
let hasBlackjack = false
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let messageEl = document.getElementById("message-el")
let newCardButton = document.getElementById("new-card-btn")
let startButton = document.getElementById("start-btn")
let playerEl = document.getElementById("player-el")

function startGame() {
    beginning()                       
    sum = getRandowNumber()
    renderGame()
}

function beginning() {
    hasBlackjack = false
    isAlive = true
    cards = []
    newCardButton.style.opacity = "1"
    cardsEl.textContent = "Cards: "
    startButton.textContent = "RESTART GAME"
    newCardButton.style.display = "inline-block"
}

function getRandowNumber() {
    let oneCard = Math.floor(Math.random() * 13) + 1
    if (oneCard === 11 || oneCard === 12 || oneCard === 13) oneCard = 10
    if (oneCard === 1) oneCard = 11
    cards.push(oneCard)
    return oneCard
}

function newCard() {
    if(isAlive && !hasBlackjack) renderGame()
}

function renderGame() {
    sum += getRandowNumber()
    showMessage()
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
}

function showMessage() {
    if (sum < 21) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Woohoo! You've got Brackjack 🥳"
        hasBlackjack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    if (hasBlackjack || !isAlive) newCardButton.style.opacity = "0.5"
    messageEl.textContent = message
}