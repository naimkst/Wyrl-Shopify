(function($) {
  "use strict";

  /*-------------------------------------------
  Sticky Header
  --------------------------------------------- */
  $(window).on('scroll', function(){
    if( $(window).scrollTop()>80 ){
      $('#sticky').addClass('stick');
    } else {
      $('#sticky').removeClass('stick');
    }
  }); 
  
  jQuery(document).ready(function(){
    /*-------------------------------------------
    js scrollup
    --------------------------------------------- */
    $.scrollUp({
      scrollText: '<i class="fa fa-angle-up"></i>',
      easingType: 'linear',
      scrollSpeed: 300,
      animation: 'fade'
    }); 

    /*-------------------------------------------
    js onePageNav
    --------------------------------------------- */
    $('.toggle-bar').on('click', function () {
      $('.menu-area').slideToggle();
    });

  });

})(jQuery);