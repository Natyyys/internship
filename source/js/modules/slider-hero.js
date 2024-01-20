import Swiper from 'swiper/bundle';

const heroSlider = document.querySelector('[data-hero-slider]');
const heroPagination = document.querySelector('[data-hero-pagination]');

const initHeroSlider = () => {
  const swiper = new Swiper(heroSlider, {
    speed: 1500,
    effect: 'fade',
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
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
        loop: false,
      },
    },
    pagination: {
      el: heroPagination,
      type: 'bullets',
      clickable: true,
      slidesPerView: 1,
      centeredSlides: true,
    },
  });

  return swiper;
};

export {initHeroSlider};
