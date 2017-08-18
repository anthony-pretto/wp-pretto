$(document).ready(function(){
  function calcParams() {
    var contentWidth = $( window ).outerWidth();
    if(contentWidth < 840){
      maxSlides = 1;
    } else {
      maxSlides = 2;
    }
    return maxSlides;
  }
  var maxSlides = calcParams();
  var sliderWidth = 376;
  var slider = $('.home-testimonie-container').bxSlider({
    maxSlides: maxSlides,
    slideWidth: sliderWidth
  });
  $(window).resize(function(){
    var maxSlides = calcParams();
    slider.reloadSlider({
      maxSlides: maxSlides,
      slideWidth: sliderWidth
    });
  });
});
