import Swiper from 'swiper';
import { Navigation, Pagination, Grid } from 'swiper/modules';

const newsSlider = document.querySelector('[data-news-slider]');
const pagination = document.querySelector('[data-news-pagination]');
const buttonPrev = document.querySelector('[data-news-prev]');
const buttonNext = document.querySelector('[data-news-next]');

const swiper = new Swiper(newsSlider, {
  modules: [Navigation, Pagination, Grid],
  speed: 1500,
  loop: false,
  updateOnWindowResize: true,

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerGroup: 1,
      grid: {
        rows: 2,
        fill: 'row',
      },
      allowTouchMove: true,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 1,
      grid: {
        rows: 2,
        fill: 'column',
      },
      allowTouchMove: true,
    },
    1440: {
      slidesPerView: 'auto',
      slidesPerGroup: 2,
      spaceBetween: 32,
      grid: {
        rows: 1,
      },
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
