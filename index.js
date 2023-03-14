console.log("linked");

const $body = $("body");

$(document).ready(function () {
  $("#about").on("click", function () {
    alert("About was clicked");
  });
});
