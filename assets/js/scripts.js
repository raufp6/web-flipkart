/* Categort Slider*/
$('#category-carousel').owlCarousel({
    loop:false,
      navRewind: false,
      margin:10,
      nav:false,
      dots:false,
      responsive:{
          0:{
              items:4
          },
          600:{
              items:5
          },
          1000:{
              items:9
          }
      }
  });
  /* Offers Slider*/
  $('.offer-slider').owlCarousel({
      loop:false,
      navRewind: false,
      margin:10,
      nav:true,
      dots:false,
      navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
      responsive:{
          0:{
              items:2
          },
          600:{
              items:3
          },
          1000:{
              items:4
          }
      },
  });
  $('.offer-slider-2').owlCarousel({
    loop:false,
    navRewind: false,
    margin:10,
    nav:true,
    dots:false,
    navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    },
});
$('#main_slider').owlCarousel({
    loop:false,
    // navRewind: false,
    margin:10,
    nav:true,
    dots:false,
    navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    },
});
  
  
$('.brand-offer-slider').owlCarousel({
  stagePadding: 50,
  loop:true,
  margin:10,
  dots:false,
  nav:true,
  navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
  center:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
});