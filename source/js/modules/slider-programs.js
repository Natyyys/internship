import Swiper from 'swiper/bundle';

const programsSlider = document.querySelector('[data-programs-slider]');
const buttonPrev = document.querySelector('[data-programs-prev]');
const buttonNext = document.querySelector('[data-programs-next]');
const scrollbar = document.querySelector('[data-programs-scrollbar]');

const initProgramsSlider = () => {
  const swiper = new Swiper(programsSlider, {
    speed: 1500,
    loop: false,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        allowTouchMove: true,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        allowTouchMove: true,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 32,
        allowTouchMove: false,
      },
    },
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    scrollbar: {
      el: scrollbar,
    }
  });

  return swiper;
};

export {initProgramsSlider};
