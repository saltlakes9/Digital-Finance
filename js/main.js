$(document).ready(function () {
  // $('.gallery').slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   variableWidth: true,
  //   dots: false,
  //   arrows: true,
  //   prevArrow:
  //     "<button type='button' class='slick-prev pull-left'> <img src='img/left.svg'> </button>",
  //   nextArrow:
  //     "<button type='button' class='slick-next pull-right'><img src='img/right.svg'></button>",
  // });
  $(".gallery").slick({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    dots: false,
    arrows: true,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'> <img src='img/left.svg'> </button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><img src='img/right.svg'></button>",
  });
});

// $(document).ready(function () {
//   $(".single-item").slick({
//     infinite: false,
//     variableWidth: true,
//     dots: false,
//     arrows: true,
//     prevArrow:
//       "<button type='button' class='slick-prev pull-left'> <img src='img/left.svg'> </button>",
//     nextArrow:
//       "<button type='button' class='slick-next pull-right'><img src='img/right.svg'></button>",
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: true,
//         },
//       },
//     ],
//   });
// });

$(document).ready(function () {
  $(".contributor-item").slick({
    dots: false,
    arrows: true,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'> <img src='img/left.svg'> </button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><img src='img/right.svg'></button>",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
        },
      },
    ],
  });

  $.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  $(window).on("resize scroll", function () {
    if ($(".stats").isInViewport()) {
      $(".stats").addClass("animating");
    } else {
      $(".stats").removeClass("animating");
    }
  });
});
