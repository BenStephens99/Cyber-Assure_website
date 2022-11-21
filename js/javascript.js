let cards = document.getElementsByClassName("card");
let currentCard = 0;
let dots = document.getElementsByClassName("dot");

console.log(cards)
document.getElementById("dots").innerHTML += '<div onClick="goToCard('+0+')" class="dot"></div>';
cards[0].style.opacity = "1";
dots[0].style.backgroundColor = "#696969"


for (let i = 1; i < cards.length; i++) {
    cards[i].style.opacity = "0";
    document.getElementById("dots").innerHTML += '<div onClick="goToCard('+i+')" class="dot"></div>';
}

dots[0].style.color = "black"

function changeCard(direction) {
    cards[currentCard].style.opacity = "0";
    dots[currentCard].style.backgroundColor = "#bbb"
    currentCard += direction;
    if (currentCard >= cards.length) {
        currentCard = 0;
    } else if (currentCard < 0) {
        currentCard = cards.length - 1;
    }
    dots[currentCard].style.backgroundColor = "#696969"
    cards[currentCard].style.opacity = "1";

}

function goToCard(index) {
    cards[currentCard].style.opacity = "0";
    dots[currentCard].style.backgroundColor = "#bbb";
    currentCard = index;
    dots[index].style.backgroundColor = "#696969"
    cards[index].style.opacity = "1";
}

const autoChangeCard = window.setInterval(function(){
    changeCard(1)
   }, 5000);
