import {setNewsSlider, swiper, newsSlider} from './slider-news';

const ACTIVE_CLASS = 'is-active';
const buttonContainer = document.querySelector('[data-news-tabs="news-tabs"]');
const buttonTabs = buttonContainer.querySelectorAll('[data-news-tab="news-tab"]');
const newsElements = document.querySelectorAll('[data-tabs-el="news-el"]');

const handleNewsTabClick = (clickedButton) => {
  buttonTabs.forEach((button) => button.classList.remove(ACTIVE_CLASS));
  clickedButton.classList.add(ACTIVE_CLASS);
};

const updateNewsElement = (filter) => {
  newsElements.forEach((el) => {
    const newsFilter = el.dataset.filter;
    const shouldShow = filter === 'all' || newsFilter === filter;
    if (!shouldShow) {
      el.classList.add('fade');
      el.remove();
    }
  });
};

const onTabContainerClick = (evt) => {
  swiper.removeAllSlides();
  swiper.appendSlide(newsElements);
  swiper.update();
  const currentTab = evt.target.closest('[data-news-tab="news-tab"]');
  if (currentTab) {
    if (!currentTab.classList.contains(ACTIVE_CLASS)) {
      handleNewsTabClick(currentTab);
    }

    const filter = currentTab.dataset.filter || 'all';
    updateNewsElement(filter);
  }
};

const initNewsSlider = () => {
  if (document.body.contains(newsSlider)) {
    setNewsSlider();

    if (buttonContainer && buttonTabs) {
      buttonContainer.addEventListener('click', onTabContainerClick);
    }
  }
};

export {initNewsSlider};
