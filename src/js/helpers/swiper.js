import Swiper from 'swiper';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

Swiper.use([Pagination, Navigation, Autoplay, EffectFade]);

const hero1 = document.querySelector('.hero1 .swiper-wrapper');

if(hero1) {
  const dotsName = hero1.getAttribute('data-text').split(',');
  const dotsImage = hero1.getAttribute('data-img').split(',');

  new Swiper('.hero1__swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1000,
    effect: "fade",
    autoplay: {
      delay: 12000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".hero1__pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}"><img src='${dotsImage[index].trim()}' width='42' height='42' alt loading="lazy"> <span>${dotsName[index].trim()}</span></span>`;
      },
    },
  });
}


const ourDoctorSwiper = new Swiper('.our-doctors__swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 2000,
  autoplay: {
    delay: 12000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".our-doctors-button-next",
    prevEl: ".our-doctors-button-prev",
  },
  pagination: {
    el: ".our-doctors-pagination",
    clickable: true, 
    dynamicBullets: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },

    991: {
      slidesPerView: 2.3,
    },

    1200: {
      slidesPerView: 2,
    },

    1440: {
      slidesPerView: 2.3,
    },

    1680: {
      slidesPerView: 3,
    },
  },
});

function reportWindowSize() {
  const slider = document.querySelector(".our-doctors__swiper");

  if(slider) {
    const sliderSlides = slider.querySelectorAll(".swiper-slide");

    if(window.innerWidth >= 320) {
      if(sliderSlides.length <2) {
        slider.classList.add('our-doctors__swiper-init')
      } else {
        slider.classList.remove('our-doctors__swiper-init')
      }
    }
  
    if(window.innerWidth >= 576) {
      if(sliderSlides.length <3) {
        slider.classList.add('our-doctors__swiper-init')
      } else {
        slider.classList.remove('our-doctors__swiper-init')
      }
    }
  
    if(window.innerWidth >= 1680) {
      if(sliderSlides.length <4) {
        slider.classList.add('our-doctors__swiper-init')
      } else {
        slider.classList.remove('our-doctors__swiper-init')
      }
    }
  }
  
}

reportWindowSize();

window.onresize = reportWindowSize;