$(document).ready(function () {

    // focus
    $("#sname,#sclass,#scountry").on("focus", function () {
        $(this).css("background-color", "lime");
    });

    // blur
    $("#sname,#sclass,#scountry").on("blur", function () {
        $(this).css("background-color", "");
    });


    // select
    $("#sname,#sclass").on("select", function () {
        $(this).css("background-color", "yellow");
    });


    // change
    $("#scountry").on("change", function () {
        $(this).css("background-color", "pink");
    });


    // change
    $("#scountry").on("change", function () {
        $("#test").html($(this).val()).css("border", "1px solid black");
    });



    // submit

    $("form").on("submit", function () {
        alert("Name is : " + $("#sname").val() + " Class is: " + $("#sclass").val() + " Country is: " + $("#scountry").val());
    });

});