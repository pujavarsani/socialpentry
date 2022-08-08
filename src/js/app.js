import $ from 'jquery';

require('jquery');


require('slick-slider/slick/slick');


$(document).ready(function () {
    $('.main-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
    });
    $('.card_banner').slick({
      arrows: false,
      dots: false,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
      ]
    });

    $('.latest_banner').slick({
      arrows: false,
      dots: false,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
    $('.testimonials').slick({
      arrows: true,
      dots: false,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button class="slick-prev"><img src="image/pre.svg"></button>',
      nextArrow: '<button class="slick-next"><img src="image/next.svg"></button>',
    });
    $('.news_slider').slick({
      arrows: true,
      dots: false,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '<button class="slick-prev"><img src="image/pre.svg"></button>',
      nextArrow: '<button class="slick-next"><img src="image/next.svg"></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
      ]
    });
    // what we offer
    $('.slider-banner').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      // fade: true,
      prevArrow: '<button class="slick-prev"><img src="image/pre.svg"></button>',
      nextArrow: '<button class="slick-next"><img src="image/next.svg"></button>',
    });
});
// menu
$(document).ready(function(){
		  $(".menu_icon").click(function(){
        $(".menu").toggle(500);
      });
      $(".mega-menu").click(function(){
        $(".mega-body").toggleClass("active");
      });
      $(".Back").click(function(){
        $(".mega-body").removeClass("active");
      });
      $(".model").click(function(){
        $(".show-modal").toggleClass("active");
        $("body").addClass("overflow");
        $(".transparent-bg").addClass("active");
      });
      $(".modal-close").click(function(){
        $(".show-modal").removeClass("active");
        $("body").removeClass("overflow");
        $(".transparent-bg").removeClass("active");
      });
});
$(".Hide").click(function(){
  $(".text-show").toggleClass("active");
  $(".read-more").toggleClass("active");
  $(".read-less").toggleClass("active");
});
// megamenu
    

// on scroll
$(window).scroll(function(){
  if ($(this).scrollTop() >= 100) {
     $('.fix-header').addClass('newClass'); 
  } else {
     $('.fix-header').removeClass('newClass');
  }
});

// fancy box
const myCarousel = new Carousel(document.querySelector("#myCarousel"), {
  preload: 1
  });
  
  Fancybox.assign('[data-fancybox="carousel-gallery"]', {
  closeButton: "top",
  Thumbs: false,
  Carousel: {
  Dots: true,
  on: {
  change: (that) => {
  myCarousel.slideTo(myCarousel.getPageforSlide(that.page), {
  friction: 0
  });
  }
  }
  }
  });

  // modal
  // $(window).scroll(function() {
	// 	var windscroll = $(window).scrollTop();
	// 	if (windscroll >= 100) {
	// 		$('section').each(function(i) {
	// 			if ($(this).position().top <= windscroll - 0) {
	// 				$('.nav li.active').removeClass('active');
	// 				$('.nav li').eq(i).addClass('active');
	// 			}
	// 		});

	// 	} else {

	// 		$('.nav li.active').removeClass('active');
	// 		$('.nav li:first').addClass('active');
	// 	}

	// 	}).scroll();



  