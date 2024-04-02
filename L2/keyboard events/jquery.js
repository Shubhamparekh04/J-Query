$(document).ready(function () {
  // 1.keypress()
  $("body").on("keypress", function () {
    $("body").css("background-color", "red");
  });

  // 2.keyup()
  $("body").on("keyup", function () {
    $("body").css("background-color", "green");
  });

  // 3.keydown() // APART FROM NUMBER /ALPHA /SYMBOL APPLY ON THER KEY PRESS(SHIFT-TAB-CAPS-NUM-CTRL-ESC-OME-END-PGUP-PGDWN-FN KEYS)
  $("body").on("keydown", function () {
    $("body").css("background-color", "blue");
  });
});
