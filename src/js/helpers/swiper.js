import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

Swiper.use([Pagination, Navigation, Autoplay]);

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
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },

    991: {
      slidesPerView: 3,
    },

    1200: {
      slidesPerView: 2,
    },

    1640: {
      slidesPerView: 3,
    },
  },
});