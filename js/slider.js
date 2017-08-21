$(document).ready(function(){
  function calcParams() {
    var contentWidth = $( window ).outerWidth();
    if(contentWidth < 840){
      maxSlides = 1;
      slideMargin = 16;
    } else {
      maxSlides = 2;
      slideMargin = 24;
    }
    return maxSlides;
  }
  var maxSlides = calcParams();
  var sliderWidth = 420;
  var slider = $('.home-testimonie-container').bxSlider({
    maxSlides: maxSlides,
    slideWidth: sliderWidth,
    slideMargin: slideMargin
  });
  $(window).resize(function(){
    var maxSlides = calcParams();
    slider.reloadSlider({
      maxSlides: maxSlides,
      slideWidth: sliderWidth,
      slideMargin: slideMargin
    });
  });
});
