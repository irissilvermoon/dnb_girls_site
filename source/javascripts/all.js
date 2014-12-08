//= require_tree .

$(function() {
  var image = $(".profile-images")

  image.slick({
    fade: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
  }).click( function () {
    image.slickNext();
  });
});


