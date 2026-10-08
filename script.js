let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let playerEl= document.getElementById("player-el")

let isAlive = true
let blackjack = false
let sum = 0
let cards = []

let player={    
    money: 100,
    name: "Sagun"
}

playerEl.textContent= player.name + "- $" + player.money 

function getRandomCard() {
    let random = Math.floor(Math.random() * 13) + 1
    if (random > 10) {
        return 10
    }
    else if (random === 1) {
        return 11
    }
    else {
        return random
    }
}

function start() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard

    cards = [firstCard, secondCard]
    renderGame()
}

function renderGame() {
    
    isAlive= true
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    if (sum <= 20) {
        messageEl.textContent = "Do you want to draw a new card."
    }
    else if (sum === 21) {
        messageEl.textContent = "You have got a blackjack."
        blackjack = true
    }
    else {
        isAlive = false
        messageEl.textContent = "You are out."
    }
}

function newcard() {
    if (isAlive === true && blackjack === false) {
        let newCard = getRandomCard()
        cards.push(newCard)
        sum += newCard
        renderGame()
    }
}

