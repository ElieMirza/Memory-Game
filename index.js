var game_started = false;

var button_colors = ["red", "blue", "green", "yellow"];
var generated_pattern = [];
var player_pattern = [];
var level = 0;

// Checks if game is started on keypress
// so the game doesn't restart at every keypress
$(document).keypress(function() {
  if (game_started == false) {
    game_started = true;
    $("#title").text("Level: " + level);
    addToPattern();
  }
});

// Listens for btn clicks from player, plays animation and sound,
// then check if clicked color is correct or wrong
$(".btn").click(function() {
  var player_clicked_color = $(this).attr("id");
  player_pattern.push(player_clicked_color);
  playSound(player_clicked_color);
  animateButton(player_clicked_color);
  checkStatus(player_pattern.length - 1);
});

// Compares player patter with generated addToPattern
// If completed, it adds another pattern after 1 second
// If not, game over, reset game
function checkStatus(lvl) {
  if (generated_pattern[lvl] === player_pattern[lvl]) {
    if (player_pattern.length === generated_pattern.length) {
      setTimeout(function() {
        addToPattern();
      }, 1000);
    }
  } else {
    $("body").addClass("game-over");
    $("#title").text("Game Over, Press Any Key to Restart");
    playSound("wrong");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 300);

    resetGame();
  }
}

// resets player previously clicked buttons, increments level and updates text
// chooses random color and appends it to generated_pattern
// animates chosen button and plays relevant sound
function addToPattern() {
  player_pattern = [];
  level++;
  $("#title").text("Level: " + level);
  var random_color = button_colors[Math.floor(Math.random() * 4)];
  generated_pattern.push(random_color);
  $("#" + random_color).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(random_color);
};

// Plays sounds
function playSound(mp3_name) {
  var audio = new Audio("sounds/" + mp3_name + ".mp3");
  audio.play();
};

// Animates buttons by appying css class then removing it
function animateButton(clicked_color) {
  $("#" + clicked_color).addClass("pressed");
  setTimeout(function() {
    $("#" + clicked_color).removeClass("pressed");
  }, 100);
};

// This function resets the game
function resetGame() {
  game_started = false;
  level = 0;
  generated_pattern = [];
};
