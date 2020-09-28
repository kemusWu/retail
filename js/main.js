$(function () {
  $(window).on('scroll',function(){
    // nav scroll opacity
    if ($(this).scrollTop() > 300) {
      $('nav').addClass('opacity');
    } else {
      $('nav').removeClass('opacity');
    }
  })

  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $("#navbarNavAltMarkup a").on('click', function(event) {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
   
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  });

  $('.navbar a').on('click', function() {
    $('.navbar-toggler').click();
});

});

// wow
new WOW().init();

// swiper
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    //width>=500
    500: {
      slidesPerView: 2,
      spaceBetween: 30
    },
     //width>=768
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
     //width>=1280
    1280: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});