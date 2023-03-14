console.log("linked");

const $body = $("body");

$(document).ready(function () {
  $("#about").on("click", function () {
    alert("About was clicked");
  });
  $("#next").on("click", function () {
    //alert("Next was clicked");
    createTile();
  });
});

function createTile() {
  let $div = $(`<div class="tile"></div`);

  for (let x = 0; x < 3; x++) {
    let $col = $(`<div class="tile">Col ${x}</div>`);
    $div.append($col);
  }
  $body.append($div);
}
