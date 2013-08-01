$(function() {

  $('#favorite-color').hover(changeColorGreen);
});

function changeColorGreen() {
  $(this).addClass("green");
};