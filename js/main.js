(function ($)
  { "use strict"
  
/* 1. Preloder (готовый код, можно использовать в любом проекте) */
    $(window).on('load', function () {
      $('#preloader-active').delay(450).fadeOut('slow');
      $('body').delay(450).css({
        'overflow': 'visible'
      });
    });

/* 2. Sticky And Scroll UP */
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 400) {
        $(".header-sticky").removeClass("sticky-bar");
        $('#back-top').fadeOut(500);
      } else {
        $(".header-sticky").addClass("sticky-bar");
        $('#back-top').fadeIn(500);
      }
    });

  // Scroll Up
    $('#back-top a').on("click", function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  
     $('.nav-link').on('click', function (e){
      e.preventDefault();
      let currTab = $(this).index();
      
       $('.nav-link').removeClass('active');
       $(this).addClass('active');

       $('.tab-pane').removeClass('show active');
       $('.tab-pane').eq(currTab).addClass('show active');
       console.log(currTab);
     })

    const scene = document.getElementById('scene');
    const parallaxInstence = new Parallax(scene); 

    const swiper = new Swiper('.swiper', {
        direction : 'horizontal',
        spaceBetween : 30,
        slidesPerVieW : 1,
        loop : true,
        stopOnLastSlide : false,
        autoplay: {
          delay : 2500
        }
    });

    $('.mobile_menu').on('click', function() {
      $('.main-menu').toggle();
    })

    const btnOpen = document.getElementById('btn-open');
    const btnClose = document.getElementById('btn-close');
    const modal = document.getElementById('wrapper-modal');
    const overlay = document.getElementById('overlay');

    btnOpen.addEventListener('click', () => {
        modal.classList.add('active');
    })

    const closeModal = () => {
        modal.classList.remove('active');
    }

    btnClose.addEventListener('click', closeModal);

    $.validator.addMethod("regex", function(value, element, regexp) {
      var regExsp = new RegExp(regexp);
      return regExsp.test(value);
  },"Please check your input."
  );
  
  $(".form-book").validate({
  rules: {
      firstName: {
        required: true,
        regex : "[A-Za-z]{1,32}"   
      },
      Email: {
        required: true,
        email:true,
        regex : ""   
      },
      phoneNumber: {
        digits : true,
        required: true,
        minlength: 10,
        maxlength: 11,
        regex: "[0-9]+"
      }
  },
  messages: {
    firstName: "Введите ваше имя правильно",
    Email: "Введите ваш E-mail",
    phoneNumber: "Введите ваш номер"
  }
  });

  $(".form-table").validate({
    rules: {
        firstName: {
          required: true,
          regex : "[A-Za-z]{1,32}"   
        },
        Email: {
          required: true,
          email:true,
          regex : "[0-9A-Za-z]"   
        },
        phoneNumber: {
          digits : true,
          required: true,
          minlength: 10,
          maxlength: 11,
          regex: "[0-9]+"
        }
    },
    messages: {
      firstName: "Введите ваше имя правильно",
      Email: "Введите ваш E-mail",
      phoneNumber: "Введите ваш номер"
    }
    });
})(jQuery)

