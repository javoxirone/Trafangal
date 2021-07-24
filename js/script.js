new Swiper('.swiper-container', {

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },


});



$(document).ready(function(){
    // Adding class when clicking
      $('.header__burger').click(function(event){
      // Adding class
          $('.header__burger, .header__menu, .area, .menu_ad, body').toggleClass('active');
          $('body').toggleClass('lock');
      });
  
  
      
  });

  AOS.init();