let homeEl = document.getElementById("homescore-el")
let guestEl = document.getElementById("guestscore-el")
let homeScore = 0
let guestScore = 0

// Home
function addOneHome() {
    homeScore += 1
    homeEl.textContent = homeScore
}

function addTwoHome() {
    homeScore += 2
    homeEl.textContent = homeScore
}

function addThreeHome() {
    homeScore += 3
    homeEl.textContent = homeScore
}

// Guest
function addOneGuest() {
    guestScore += 1
    guestEl.textContent = guestScore
}

function addTwoGuest() {
    guestScore += 2
    guestEl.textContent = guestScore
}

function addThreeGuest() {
    guestScore += 3
    guestEl.textContent = guestScore
}