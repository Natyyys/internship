import Swiper from 'swiper/bundle';

const heroSlider = document.querySelector('[data-hero-slider]');

const initHeroSlider = () => {
  const swiper = new Swiper(heroSlider, {
    loop: true,
    speed: 1500,
    effect: 'fade',
    autoplay: true,
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
