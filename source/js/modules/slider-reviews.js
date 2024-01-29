import Swiper from 'swiper/bundle';

const reviewsSlider = document.querySelector('[data-reviews-slider]');
const buttonPrev = document.querySelector('[data-reviews-prev]');
const buttonNext = document.querySelector('[data-reviews-next]');
const scrollbar = document.querySelector('[data-reviews-scrollbar]');

const initReviewsSlider = () => {
  const swiper = new Swiper(reviewsSlider, {
    speed: 1500,
    loop: false,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    scrollbar: {
      el: scrollbar,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
        allowTouchMove: true,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        allowTouchMove: true,
      },
      1440: {
        slidesPerView: 2,
        spaceBetween: 32,
        allowTouchMove: false,
        scrollbar: {
          dragSize: '392',
        },
      },
    },
  });

  return swiper;
};

export {initReviewsSlider};
