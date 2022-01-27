var game_started = false;

var button_colors = ["red", "blue", "green", "yellow"];
var generated_pattern = [];
var player_pattern = [];
var level = 0;

$(document).keypress(function() {
  if (game_started == false) {
    game_started = true;
    $("#title").text("Level " + level);
    addToPattern();
  }
});

$(".btn").click(function() {
  var player_clicked_color = $(this).attr("id");
  player_pattern.push(player_clicked_color);
  playSound(player_clicked_color);
  animate_button(player_clicked_color);
});

function addToPattern() {
  player_pattern = [];
  level++;
  var random_color = button_colors[Math.floor(Math.random() * 4)];
  generated_pattern.push(random_color);
  $("#" + random_color).fadeIn(100).fadeOut(100). fadeIn(100);
  playSound(random_color);
};

function playSound(mp3_name) {
  var audio = new Audio("sounds/" + mp3_name + ".mp3");
  audio.play();
};

function animateButton(clicked_color) {
  $("#" + clicked_color).addClass("pressed");
  setTimeout(function() {
    $("#" + clicked_color).removeClass("pressed");
  }, 100);
};

function resetGame() {
  game_started = false;
  level = 0;
  generated_pattern = [];
};
