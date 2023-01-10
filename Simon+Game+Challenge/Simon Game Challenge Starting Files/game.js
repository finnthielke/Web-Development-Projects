var started = false;
var level = 0;
var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];


$(document).keypress(function() {
  if (!started) {

    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});


$('.btn').click(function(){
    var userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1); //pass in index of last element in array//
    });



function checkAnswer(currentLevel) {
    console.log(userClickedPattern);
    console.log(gamePattern);

    // check if user's most recent button hit matches pattern //
    if (userClickedPattern[currentLevel]
    === gamePattern[currentLevel]) {

        console.log("success");

        // check if user hit button right amount of times
        if (userClickedPattern.length === gamePattern.length) {
        setTimeout(function() {nextSequence(); }, 1000);

        }
        } else {

      console.log("wrong");

      //1. In the sounds folder, there is a sound called wrong.mp3, play this sound if the user got one of the answers wrong.
      var audio = new Audio('sounds/wrong.mp3');
      audio.play();

      //2. In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      //3. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
      $("#level-title").text("Game Over, Press Any Key to Restart");

      startOver();
    }

}



function nextSequence() {
    userClickedPattern = [];
    level ++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $('#' + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function animatePress(currentColour) {
$('#' + currentColour).addClass('pressed');
setTimeout( function() {$('#' + currentColour).removeClass('pressed'); }, 100 );
}

function playSound(name) {
    var audio = new Audio('sounds/' + name + '.mp3');
    audio.play();
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
    }



 