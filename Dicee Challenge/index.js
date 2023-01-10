var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");

var title = document.querySelector("h1");

img1.setAttribute('src', 'images/dice' + randomNumber1 + '.png');
img2.setAttribute('src', 'images/dice' + randomNumber2 + '.png');



if (randomNumber1 > randomNumber2) {
title.textContent = 'Player 1 Wins!';
}

else if (randomNumber2 > randomNumber1) {
title.textContent = 'Player 2 Wins!';
}

else {
title.textContent = "It's a tie!";
}