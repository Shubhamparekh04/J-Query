$(document).ready(function () {
  $("#img1").hide();

  $("#on").on("click", function () {
    $("#img1").show();
    $("#img2").hide();
    $("body").css("background-color", "#FDE26E");
    $(this).css("background-color", "#FDE26E");
    $(this).css("color", "black");
  });

  $("#off").on("click", function () {
    $("#img1").hide();
    $("#img2").show();
    $("body").css("background-color", "black");
    $("#on").css("background-color", "black");
    $("#on").css("color", "white");
  });
});
