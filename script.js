var swiper = new Swiper(".swiper-container", {
  slidesPerView: 2,
  spaceBetween: 30,

  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5500,

    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
});

// Scroll Menu
$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $("#navbar").addClass("fixedMenu");
    $(".logo img").css("width", "65px");
  } else {
    $("#navbar").removeClass("fixedMenu");
    $(".logo img").css("width", "75px");
  }
});

$(".menu__item").click(function () {
  $(".hamburger-menu input[type='checkbox']").prop("checked", false);
});

AOS.init({
  disable: function () {
    var maxWidth = 992;
    return window.innerWidth < maxWidth;
  },
});

var offsetTop = $("#skills").offset().top;
$(window).scroll(function () {
  var height = $(window).height();
  if ($(window).scrollTop() + height > offsetTop) {
  }
});

$(".skillBar").each(function () {
  $(this)
    .find(".skillBarInner")
    .animate(
      {
        width: $(this).attr("data-percent"),
      },
      2000
    );
});

$("body").scrollspy({ target: "#skrollSpy" });

$(document).ready(function () {
  var mixer = mixitup(".portfolio-content", {
    animation: {
      duration: 500,
   
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)'

    },
 
  });
});

// $(document).ready(function () {
//   $(".filter-button").click(function () {
//     var value = $(this).attr("data-filter");

//     if (value == "all") {
//       //$('.filter').removeClass('hidden');
//       $(".portfolioGalleryItem").show("1000");
//     } else {
//       //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//       //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
//       $(".portfolioGalleryItem")
//         .not("." + value)
//         .hide();
//       $(".portfolioGalleryItem")
//         .filter("." + value)
//         .show("1000");
//     }

//     if ($(".filter-button").removeClass("active")) {
//       $(this).removeClass("active");
//     }
//     $(this).addClass("active");
//   });
// });

// $(document).ready(function () {
//   $(".portfolio-content").isotope({
//     itemSelector: ".portfolioGalleryItem",
//   });

//   $(".filter-button-group").on("click", "li", function () {
//     var filterValue = $(this).attr("data-filter");
//     $(".portfolio-content").isotope({ filter: filterValue });
//     $(".filter-button-group li").removeClass("active");
//     $(this).addClass("active");
//   });
// });
