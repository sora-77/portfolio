$(function(){

    function debounce(func, wait = 300, immediate = true) {
        var timeout;
        return function() {
          var context = this,
            args = arguments;
          var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
      }
      
      const sliderImages = document.querySelectorAll('.slide-up');
      
      function checkSlide(e) {
        sliderImages.forEach(sliderImage => {
          // halfway through the image
          const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 3;
          // bottom of the image
          //const imageBottom = sliderImage.offsetTop + sliderImage.height;
          const isHalfShown = slideInAt > sliderImage.offsetTop;
          //const isNotScrolledPast = window.scrollY < imageBottom;
          if (isHalfShown ) {
            sliderImage.classList.add('active');
          } else {
            sliderImage.classList.remove('active');
          }
      
          console.log(slideInAt);
        });
      }
      
      window.addEventListener('scroll', debounce(checkSlide));
    
      
      $(window).scroll(function() {

        if ($(document).scrollTop() > $("#about .about__sora2").offset().top - 280) {
            $(".about__intro").addClass("on");
          } if ($(document).scrollTop() > $("#about .about__sora2").offset().top - 500) {
            $(".about__intro--sub").hide();
          } else {
            $(".about__intro").removeClass("on");
            $(".about__intro--sub").show();

        }    
        });  


        $(window).scroll(function() {
        var scroll = $(window).scrollTop();
            $(".zoom img").css({
            width: (100 + scroll/300)  + "%",
            top: -(scroll/50)  + "%",
            });
        });


        $(window).scroll(function() {
          var scroll = $(window).scrollTop();
          $(".zoom-out img").css({
          width: (100 - scroll/200)  + "%",
          top: - (scroll/5)  + "%",
          });
          });

      
})