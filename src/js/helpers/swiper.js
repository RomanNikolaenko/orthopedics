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


new Swiper('.our-doctors__swiper', {
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

    1640: {
      slidesPerView: 3,
    },
  },
});