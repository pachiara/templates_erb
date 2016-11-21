$(window).on("scroll touchmove", function () {
  $('#mainheader').toggleClass('ridotto', $(document).scrollTop() > 32);
  $('body').toggleClass('ridotto', $(document).scrollTop() > 32);
  $('#topcontrol').toggleClass('visualizza', $(document).scrollTop() > 200);
});

   $(document).ready(function() {
      $('.menu-btn').click(function() {
         $('body,html').animate({scrollTop:0},200);
         $('body').toggleClass('menu-opened');
         $('.sidebar-offcanvas').toggleClass('active', 1000);
      });
      $('#chiudimenu').on('click',function(e){
         e.preventDefault();
         $('body').toggleClass('menu-opened');
         $('.sidebar-offcanvas').toggleClass('active', 1000);
      });
      $("#topcontrol").click(function() {
         $('body,html').animate({scrollTop:0},500);
      });
   });
