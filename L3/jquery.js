$(document).ready(function () {
  // class add
  // console.log("success");

  // getmethod
  // console.log($("form").text());
  // console.log($("form").html());

  $("body").addClass("bgcolor");

  $("body").on("keypress keydown", function (event) {
    // console.log(event);
    $("#lbl1").text("Key is :" + event.key);
    $("#lbl2").text("KeyCode is :" + event.keyCode);
  });
  //   Comment below removeClass to see border to be apply

  // $("form").removeClass("bordertest");

  // toggle class
  $("#tgl").on("click", function () {
    $("form").toggle({ duration: 500 });
  });

  //SlideUp
  $("#sup").on("click", function () {
    $("form").slideUp({ duration: 500 });
  });

  //SlidDown
  $("#sdn").on("click", function () {
    $("form").slideDown({ duration: 500 });
  });

  //FadeOut
  $("#fout").on("click", function () {
    $("form").fadeOut();
  });

  //FadeIn
  $("#fin").on("click", function () {
    $("form").fadeIn();
  });

  //age check
  $("input[type='submit']").on("click", function () {
    var dob = $("#dobirth").val();

    var birthyear = new Date(dob).getFullYear();
    var currentyear = new Date().getFullYear();
    var age = currentyear - birthyear;

    if (age < 18) {
      alert("sorry only 18+ can fill the form your age is : " + age);
      $("form").attr("action", " ");
      $("form").reset();
    }
  });

  $("body").on("keydown keypress", function (event) {
    if (event.key === "p") {
      $("video").trigger("play");
    }
    if (event.key === " ") {
      $("video").trigger("pause");
    }
  });

  // form methods

  //focus()

  $("input").on("focus", function () {
    $(this).css("backgroundColor", "lime").css("border", "none");
  });

  //blur()
  $("input").on("blur", function () {
    $(this).css("backgroundColor", "");
  });

  //select()

  $("input").on("select", function () {
    $(this).css("backgroundColor", "yellow");
  });

  //submit()
  $("form").on("submit", function () {
    alert("Thank you " + $("#first-name").val());
  });
});
