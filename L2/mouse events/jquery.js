// Mouse Events

$(document).ready(function () {
    // 1.click()
    $("#btn1").on("click", function () {
      $("body").css("background-color", "orange");
    });

    // 2.dblclick()
    $("#btn2").on("dblclick", function () {
      $("body").css("background-color", "blue");
    });

    // 3.mouseenter()
    $("#btn3").on("mouseenter", function () {
      $("body").css("background-color", "red");
    });

    //3.mouseleave()
    $("#btn3").on("mouseleave", function () {
      $("body").css("background-color", "purple");
      alert("Background color purple will be applied on successful  mouse leave event");
    });

    //4.click()+dblclick
    $("#btn4").on("click", function () {
      $("body").css("background-color", "yellow");
    });
    $("#btn4").on("dblclick", function () {
      $("body").css("background-color", "green");
    });


    //5.contextmenu-rightclick()
    $("#btn5").on("contextmenu", function () {
      $("body").css("background-color", "black");
    });
});
