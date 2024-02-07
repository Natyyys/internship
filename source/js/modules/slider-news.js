import Swiper from 'swiper/bundle';

const newsSlider = document.querySelector('[data-news-slider]');
const pagination = document.querySelector('[data-news-pagination]');
const buttonPrev = document.querySelector('[data-news-prev]');
const buttonNext = document.querySelector('[data-news-next]');

let swiper;

function setNewsSlider() {
  swiper = new Swiper(newsSlider, {
    speed: 1000,
    observer: true,
    loop: false,
    slidesPerView: 'auto',
    breakpoints: {
      1440: {
        spaceBetween: 32,
        grid: {
          rows: 1,
        },
        allowTouchMove: false,
      },
      768: {
        spaceBetween: 30,

        grid: {
          rows: 2,
        },
        allowTouchMove: true,
      },
      320: {
        spaceBetween: 20,
        grid: {
          rows: 2,
        },
        allowTouchMove: true,
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
}

export {setNewsSlider, swiper, newsSlider};
