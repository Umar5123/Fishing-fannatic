///// HEADER TOGGLE
function myFunction() {
  let element = document.querySelector("header .navigation");
  element.classList.toggle("nav-show");
  let element2 = document.querySelector("header .toggle-btn");
  element2.classList.toggle("toggle-open");
}
document.querySelector("header .header-toggle-btn").addEventListener("click", myFunction);

///// SLIDER FOR CAPTAIN'S SECTION
$(document).ready(function () {
  var slider;

  function initSlider() {
    if ($(window).width() < 768) {
      if (!slider) {
        slider = $('.captains-row').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 19000,
          dots: false,
          arrows: true,
          prevArrow: `<button type="button" class="next-slick"><img src="./images/arrow-right.png" alt=""></button>`,
          nextArrow: `<button type="button" class="prev-slick"><img src="./images/arrow-left.png" alt=""></button>`,
          Infinity: true,
        });
      }
    } else {
      if (slider) {
        slider.slick('unslick');
        slider = null;
      }
    }
  }
  initSlider();

  $(window).resize(function () {
    initSlider();
  });
});

///// SLIDER FOR TESTIMONIAL SECTION
$(document).ready(function () {
  var slider;
  function initSlider() {
    if ($(window).width() < 768) {
      if (!slider) {
        slider = $('.testimonial-data').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: false,
          arrows: true,
          prevArrow: `<button type="button" class="next-slick"><img src="./images/arrow-right.png" alt=""></button>`,
          nextArrow: `<button type="button" class="prev-slick"><img src="./images/arrow-left.png" alt=""></button>`,
          Infinity: true,
        });
      }
    } else {
      if (slider) {
        slider.slick('unslick');
        slider = null;
      }
    }
  }
  initSlider();
  $(window).resize(function () {
    initSlider();
  });
});




