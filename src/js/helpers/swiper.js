import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';

Swiper.use([Pagination, Autoplay]);

new Swiper('.our-doctors__swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 2000,
  // autoplay: {
  //   delay: 12000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".our-doctors-pagination",
    dynamicBullets: true,
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