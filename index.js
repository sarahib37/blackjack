let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")

let cards = []
let sum = 0
let message = ""
let isAlive = false
let hasBlackjack = false

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random()*13) + 1
    if (randomNumber > 10) {
        return 10
    }else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function gameStart(){
    isAlive = true
    let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEl. textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum

    if (sum < 21) {
        isAlive = true
        hasBlackJack = false
        message = "Do you want to draw a new card?"
    }else if (sum === 21) {
        hasBlackjack = true
        message = "You've got Blackjack!"
    }else {
        isAlive = false
        message = "You're out of the game!"
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        cardNew = getRandomNumber()
        cards.push(cardNew)
        sum += cardNew
        renderGame()
    }
    
}