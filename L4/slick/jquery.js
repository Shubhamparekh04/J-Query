//responsive code

$(document).ready(function () {
  ///////////////////////////////////////////////////

  // $("body").css({ margin: "35px", backgroundColor: "black" });
  // $(".responsive div").css({
  //   border: "1px solid black",
  //   "background-color": "red",
  //   "text-align": "center",
  //   height: "100px",
  //   width: "400px",
  //   display: "flex",
  //   "align-items": "center",
  //   "justify-content": "center",
  // });

  $(".responsive").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  ///////////////////////////////////////////////////
});
