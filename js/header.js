$(document).ready(function() {
  var $scrolledHeader = $(".secondary-header");
  var visibleClass = "header-visible";
  var $button = $(".home-hero-cta .button-large");
  $(document).scroll(function() {
    if (
      $(document).scrollTop() >
      $button.offset().top + $button.outerHeight()
    ) {
      $scrolledHeader.addClass(visibleClass);
    } else {
      $scrolledHeader.removeClass(visibleClass);
    }
  });
});
