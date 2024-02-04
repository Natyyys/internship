import Swiper from 'swiper/bundle';

const heroSlider = document.querySelector('[data-hero-slider]');

const initHeroSlider = () => {
  const swiper = new Swiper(heroSlider, {
    speed: 1500,
    effect: 'fade',
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: true,
    // },
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
        loop: true,
      },
    },
    pagination: {
      el: '.swiper-slide-active [data-hero-pagination]',
      type: 'bullets',
      clickable: true,
      // slidesPerView: 1,
      // centeredSlides: true,
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
