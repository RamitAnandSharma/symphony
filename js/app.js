$(function($) {


  $(window).scroll(function() {
  if ($(window).scrollTop() > 50) {
    $('#siteheader').removeClass('p-4 mb-3').addClass('nav-bottom-border');
    $('#navbarCollapse').find( ".nav-link" ).removeClass('s-normal').addClass('s-small');
    $('.navbar-toggle').css('margin-top', '4');
  } else {
    $('#siteheader').addClass('p-4 mb-3').removeClass('nav-bottom-border');
    $('#navbarCollapse').find( ".nav-link" ).removeClass('s-small').addClass('s-normal');

  }
});
//$('.parallax-window').parallax({imageSrc: '../Symphony/img/cargo-ship.jpg'});
  // baguetteBox.run('.tz-gallery');
 

     });
