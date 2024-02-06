import Swiper from 'swiper';
import { Autoplay, Pagination, EffectFade, Keyboard } from 'swiper/modules';

const heroSlider = document.querySelector('[data-hero-slider]');

const initHeroSlider = () => {
  const swiper = new Swiper(heroSlider, {
    modules: [Autoplay, Pagination, EffectFade, Keyboard],
    loop: true,
    keyboard: true,
    autoHeight: true,
    speed: 1500,
    effect: 'fade',
    // autoplay: true,
    breakpoints: {
      1440: {
        allowTouchMove: false,
        loop: true,
      },
      768: {
        allowTouchMove: true,
        loop: true,
      },
      320: {
        allowTouchMove: true,
      },
    },
    pagination: {
      el: '.swiper-slide-active [data-hero-pagination]',
      type: 'bullets',
      clickable: true,
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
