const ACTIVE_CLASS = 'is-active';
const buttonContainer = document.querySelector('[data-news-tabs="news-tabs"]');
const buttonTabs = buttonContainer.querySelectorAll('[data-news-tab="news-tab"]');
const newsElement = document.querySelectorAll('[data-tabs-el="news-el"]');

/** Обработчик клика на tab */
const handleNewsTabClick = (clickedButton) => {
  buttonTabs.forEach((button) => button.classList.remove(ACTIVE_CLASS));
  clickedButton.classList.add(ACTIVE_CLASS);
};

/** Обновляет слайды по выбранной категории */
const updateNewsElement = (filter) => {
  newsElement.forEach((el) => {
    const newsFilter = el.dataset.filter;
    const shouldShow = filter === 'all' || newsFilter === filter;
    el.style.display = shouldShow ? 'block' : 'none';
    el.classList.add('fade');
  });
};

/** Обработчик клика по выбранной категории */
const onTabContainerClick = (evt) => {
  const currentTab = evt.target.closest('[data-news-tab="news-tab"]');
  if (currentTab) {
    if (!currentTab.classList.contains(ACTIVE_CLASS)) {
      handleNewsTabClick(currentTab);
    }

    const filter = currentTab.dataset.filter || 'all';
    updateNewsElement(filter);
  }
};

const initNewsFilter = () => {
  if (buttonContainer && buttonTabs) {
    buttonContainer.addEventListener('click', onTabContainerClick);
  }
};

export {initNewsFilter};
