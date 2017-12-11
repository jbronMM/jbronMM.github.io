
function sayThatWasEasy() {
  var thatWasEasy = new Audio("WebsiteSong.mp3");
  thatWasEasy.play();
}

$("#easy").on("click", sayThatWasEasy);
