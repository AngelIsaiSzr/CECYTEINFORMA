(function ($) {

  "use strict";

  // PRE LOADER
  $(window).load(function () {
    $('.preloader').delay(500).slideUp('slow'); // set duration in brackets    
  });


  // MENU
  $('.navbar-collapse a').on('click', function () {
    $(".navbar-collapse").collapse('hide');
  });

  $(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });


  // PARALLAX JS
  function initParallax() {
    $('#home').parallax("60%", 100);
    $('#about').parallax("100%", 80);
    $('#project').parallax("80%", 60);
    $('#contact').parallax("30%", 30);
  }
  initParallax();

})(jQuery);

function startImageSlideshow() {
  const images = ["assets/images/slider-1.jpeg", "assets/images/slider-2.jpeg", "assets/images/slider-3.jpeg"];
  let index = 0;

  function nextImage() {
    index = (index + 1) % images.length;
    document.getElementById("contact").style.backgroundImage = `url(${images[index]})`;
  }

  setInterval(nextImage, 3000);
}

startImageSlideshow();
