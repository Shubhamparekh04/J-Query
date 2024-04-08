$(document).ready(function () {
  // $("#img1").hide();

  // $("#on").on("click", function () {
  //   $("#img1").show();
  //   $("#img2").hide();
  //   $("body").css("background-color", "#FDE26E");
  //   $(this).css("background-color", "#FDE26E");
  //   $(this).css("color", "black");
  // });

  // $("#off").on("click", function () {
  //   $("#img1").hide();
  //   $("#img2").show();
  //   $("body").css("background-color", "black");
  //   $("#on").css("background-color", "black");
  //   $("#on").css("color", "white");
  // });

  // single button on/off code -

  // $("#img1").hide();
  // $("#off").hide();
  // var a = 0;
  // $("#on").css("background-color", "#FDE26E");
  // $("#on").css("color", "black");

  // $("#on").on("click", function () {
  //   if (a === 0) {
  //     $("#img1").show();
  //     $("#img2").hide();
  //     $("body").css("background-color", "#FDE26E");
  //     $("#on").css("background-color", "black");
  //     $(this).css("color", "white");
  //     $(this).text("OFF");
  //     a = 1;
  //   } else {
  //     $("#img2").show();
  //     $("#img1").hide();
  //     $("body").css("background-color", "black");
  //     $("#on").css("background-color", "#FDE26E");
  //     $("#on").css("color", "black");
  //     $(this).text("ON");
  //     a = 0;
  //   }
  // });

  // with the use of attribute function which replaces images on click event
  $("#on").css("background-color", "#FDE26E");
  $("#on").css("color", "black");
  var bulb = 0;
  $("#on").on("click", function () {
    if (bulb === 0) {
      $("img").attr("src", "./bulb.png");
      $("body").css("background-color", "#FDE26E");
      $(this).css("background-color", "black");
      $(this).css("color", "white");
      $(this).text("OFF");
      bulb = 1;
    } else {
      $("img").attr("src", "./bulb1.png");
      $("body").css("background-color", "black");
      $(this).css("background-color", "#FDE26E");
      $(this).css("color", "black");
      $(this).text("ON");
      bulb = 0;
    }
  });
});
