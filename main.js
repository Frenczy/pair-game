let cards = document.querySelectorAll('img')

let source = new Array()
for (let i = 0; i < cards.length; i += 1) {
    source[i] = (cards[i].src);
}

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    } for (let i = 0; i < array.length; i += 1) {
        cards[i].src = array[i]
    }
}

// Automatic shuffle at each load
shuffle(source)

let clicked = new Object()
for (let i = 0; i < cards.length; i += 1) {
    clicked[i] = false
}

let header = document.querySelector('div[class="header"]')
let inst = document.querySelector('div[class="instructions"]')
let stopper = document.querySelector('div[class="stopper"]')
let clickCounter = 0
let compare1
let compare2
function checkIfAllFound(){
    let fixedCount=0;
    for (let i = 0; i<cards.length; i+=1){
        if (clicked[i] == 'fixed'){fixedCount+=1}}
        if (fixedCount == 10) {congrats(); setTimeout(reset, 5000)}
}
function compare(){if (cards[compare1].src == cards[compare2].src) {
    clicked[compare1]='fixed'; clicked[compare2]='fixed'; clickCounter = 0; checkIfAllFound()}
    else {setTimeout(function(){cards[compare1].style.opacity=0; cards[compare2].style.opacity=0; clicked[compare1] = false; clicked[compare2] = false; clickCounter = 0}, 1500)}}

for (let i = 0; i < cards.length; i += 1) {
    cards[i].addEventListener("click", function () {
         if (clicked[i] != false) { return } 
         else if (clickCounter==1) {stopperIsRunning=true; cards[i].style.opacity = 1; clicked[i] = true; clickCounter += 1; compare2=i; compare() }
         else if (clickCounter==0) {stopperIsRunning=true; cards[i].style.opacity = 1; clicked[i] = true; clickCounter += 1; compare1=i }
          })}

function congrats(){header.style.color='red'; header.textContent='CONGRATULATIONS'; inst.style.color='red'; inst.textContent='YOU WON!'; stopper.style.color='red', stopperIsRunning=false}


function reset(){header.style.color='white'; header.textContent='JAVASCRIPT PAIRS GAME'; inst.style.color='white'; inst.textContent='CLICK ANY CARD TO BEGIN'; stopper.style.color='white'; stopperTime=0; stopper.textContent='00:00'

    for (let i = 0; i < cards.length; i += 1) {clicked[i] = false; cards[i].style.opacity=0};
    shuffle(source)
}

let stopperTime = 0;
let stopperIsRunning =false

setInterval( () => {
        if (stopperIsRunning == false){return}
        stopperTime +=1;
        let seconds = stopperTime % 60;
        let minutes = Math.floor(stopperTime / 60) % 60
        let hours = Math.floor(stopperTime/3600)
let padNumbers=(num) => {
        return num <10 ? '0' + num : num}
        let eredmény = `${[padNumbers(minutes), padNumbers(seconds)].join(':')}`
        let stopperFace = document.querySelector("div[class='stopper']")
        stopperFace.textContent = eredmény
}, 1000)
