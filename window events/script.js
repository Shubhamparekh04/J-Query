$(document).ready(function () {

    // Scroll event on window
    $(window).on("scroll", function () {
        console.log("window scrolling");
    });

    // Scroll event on any div with overflow
    $("#box").on("scroll", function () {
        console.log("box scrolling");
    });


    // Resize event on window
    $(window).on("resize", function () {
        console.log("You have resized : " + $(this).width() + " px");
    });


});