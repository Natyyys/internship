import Swiper from 'swiper';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

const heroSlider = document.querySelector('[data-hero-slider]');

const initHeroSlider = () => {
  const swiper = new Swiper(heroSlider, {
    modules: [Pagination, Autoplay, EffectFade],
    observer: true,
    speed: 1500,
    effect: 'fade',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        allowTouchMove: true,
        loop: true,
      },
      768: {
        allowTouchMove: true,
        loop: true,
      },
      1200: {
        allowTouchMove: false,
        loop: false,
      },
    },
    pagination: {
      el: '.swiper-slide-active [data-hero-pagination]',
      type: 'bullets',
      clickable: true,
      slidesPerView: 1,
      centeredSlides: true,
    },
    on: {
      slideChangeTransitionStart: function () {
        swiper.pagination.init();
        swiper.pagination.render();
        swiper.pagination.update();
      }
    }
  });

  return swiper;
};

export {initHeroSlider};
