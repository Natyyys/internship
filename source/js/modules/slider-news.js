import Swiper from 'swiper/bundle';

const newsSlider = document.querySelector('[data-news-slider]');
const pagination = document.querySelector('[data-news-pagination]');
const buttonPrev = document.querySelector('[data-news-prev]');
const buttonNext = document.querySelector('[data-news-next]');

const swiper = new Swiper(newsSlider, {
  speed: 1500,
  loop: false,
  updateOnWindowResize: true,
  observeSlideChildren: true,

  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 2,
      // grid: {
      //   rows: 2,
      //   fill: 'row',
      // },
      allowTouchMove: true,
    },
    768: {
      slidesPerView: 4,
      slidesPerGroup: 2,
      spaceBetween: 30,

      // grid: {
      // rows: 2,
      // fill: 'column',
      // },
      allowTouchMove: true,
    },
    1440: {
      slidesPerView: 'auto',
      // slidesPerGroup: 2,
      spaceBetween: 32,
      // grid: {
      //   rows: 1,
      // },
      allowTouchMove: false,
    },
  },
  pagination: {
    el: pagination,
    clickable: true,
    renderBullet: (index, className) => `<button class="news__pagination-button ${className} type="button" aria-label="Перейти к ${index + 1} слайду">${index + 1}</button>`,
  },
  navigation: {
    nextEl: buttonNext,
    prevEl: buttonPrev,
  },
});

const initNewsSlider = () => swiper;

export {initNewsSlider, swiper};
