(function ($) {
  "use strict";

  // offcanvas-js
  $(".offcanvas-open").click(function () {
    $(".offcanvas-menu").addClass("active");
    $(".offcanvas-overlay").addClass("active");
  });
  $(".offcanvas-menu a").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(".close-offcanvas").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(document).mouseup(function (e) {
    var container = $(".offmenu");

    // If the target of the click isn't the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".offcanvas-menu").removeClass("active");
      $(".offcanvas-overlay").removeClass("active");
    }
  });

  // owl-carousel
  $(".rt-result-slider-active").owlCarousel({
    loop: true,
    margin: 7,
    responsiveClass: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fal fa-long-arrow-left"></i>',
      '<i class="fal fa-long-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 2,
      },
    },
    rtl: $("body").hasClass("rtl-page"),
  });
  // console.log($("body").hasClass("rtl-page"));
  $(".testimonial-slider-active").owlCarousel({
    loop: true,
    margin: 11,
    items: 3,
    responsiveClass: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fal fa-long-arrow-left"></i>',
      '<i class="fal fa-long-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      1199: {
        items: 3,
      },
    },
    rtl: $("body").hasClass("rtl-page"),
  });
  $(".rt__testimonial__video__slider-active").owlCarousel({
    loop: true,
    margin: 11,
    items: 1,
    responsiveClass: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fal fa-long-arrow-left"></i>',
      '<i class="fal fa-long-arrow-right"></i>',
    ],
    rtl: $("body").hasClass("rtl-page"),
  });

  //magnificPopup
  $(".popup-img").magnificPopup({
    type: "image",
  });
  $(".popup-video").magnificPopup({
    type: "iframe",
  });
  // magnific-popup-img-gallery
  $(".album-img a").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
  //multiple-img-gallery
  $(".image-box").each(function () {
    // the containers for all your galleries
    $(this).magnificPopup({
      delegate: ".img", // the selector for gallery item
      type: "image",
      gallery: {
        enabled: true,
      },
    });
  });

  // cookie-close
  $(".cookie-close-button").click(function () {
    $("#cookie-popup").addClass("hidden");
  });

  // custom step-progress
  $("body").addClass("step1").attr("step-progress", "1");
  $(".step-progress-next").click(function () {
    var stepCurrent = $("body").attr("step-progress");
    $("body").attr("step-progress", stepCurrent - "-1");
  });
  $(".step-progress-next").click(function () {
    var stepCurrent2 = $("body").attr("step-progress");
    $("body").addClass("step" + stepCurrent2);
    var selector = ".all-step-progress .step:nth-child(" + stepCurrent2 + ")";
    $(selector).addClass("active");
    $(".all-step-progress .step").removeClass("current");
    $(selector).addClass("current");
    var selector2 = ".all-step-content .step:nth-child(" + stepCurrent2 + ")";
    $(".all-step-content .step").removeClass("active");
    $(selector2).addClass("active");
  });
  $(".step-progress-prev").click(function () {
    var stepCurrent = $("body").attr("step-progress");
    var stepCurrent3 = $("body").attr("step-progress");
    var one = 1;
    if (stepCurrent3 > one) {
      $("body").attr("step-progress", stepCurrent - "1");
    }
  });
  $(".step-progress-prev").click(function () {
    var stepCurrent2 = $("body").attr("step-progress");
    $("body").removeClass("step" + (stepCurrent2 - "-1"));
    var selector =
      ".all-step-progress .step:nth-child(" + (stepCurrent2 - -1) + ")";
    var prevSelector =
      ".all-step-progress .step:nth-child(" + (stepCurrent2 - 0) + ")";
    $(selector).removeClass("active");
    $(selector).removeClass("current");
    $(prevSelector).addClass("current");
    var selector2 = ".all-step-content .step:nth-child(" + stepCurrent2 + ")";
    $(".all-step-content .step").removeClass("active");
    $(selector2).addClass("active");
  });
})(jQuery);

$(document).ready(function () {
  // scroll up
  $(function () {
    $.scrollUp();
  });

  // nice-select
  $(".nice-select").niceSelect();

  // preloader
  $("#preloader").fadeOut(500);
});

// counter-up
$(document).ready(function () {
  $(".count").each(function () {
    var thisis = $(this);
    var time = 700;
    var step = 500;
    var value = $(this).text();
    $(this).attr("value", value);
    var valueF = $(this).attr("value");
    if ($(thisis).length) {
      $(window).scroll(function () {
        if (
          $(thisis).offset().top <
          $(window).scrollTop() + $(window).height() - 20
        ) {
          if ($(thisis).hasClass("counterup-done")) {
          } else {
            $(thisis).addClass("counterup");
          }
        }
        if ($(thisis).hasClass("counterup")) {
          setTimeout(function () {
            $(thisis).removeClass("counterup");
            $(thisis).addClass("counterup-done");
          }, time);
        }
        if ($(thisis).hasClass("counterup")) {
          if (valueF.indexOf(".") > -1) {
            var nbr = valueF;
            var afd =
              nbr != Math.floor(nbr) ? nbr.toString().split(".")[1].length : 0;
            for (let i = 0; i < step - 1 + 1; i++) {
              setTimeout(function () {
                var calv = valueF / step + i * (valueF / step);
                $(thisis).text(calv.toFixed(afd));
              }, (time / step) * i);
            }
          } else {
            for (let i = 0; i < step - 1 + 1; i++) {
              setTimeout(function () {
                var calv = Math.floor(valueF / step + i * (valueF / step));
                $(thisis).text(
                  calv
                    .toString()
                    .replace(/\D/g, "")
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                );
              }, (time / step) * i);
            }
          }
        }
      });
    }
  });
});
