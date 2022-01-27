var button_colors = ["red", "blue", "green", "yellow"];
var generated_pattern = [];
var player_pattern = [];
var level = 0;

var game_started = false;

$(document).keypress(function() {
  if (game_started == true) {
    $("#title").text("Level " + level)
  }
});

function addToPattern() {
  var random_color = button_colors[Math.floor(Math.random() * 4)];
  generated_pattern.push(random_color);
}
