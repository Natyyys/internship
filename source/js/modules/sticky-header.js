function onScrollHeader() {
  const header = document.querySelector('[data-header="data-header"]'); // находим header и записываем в константу

  let prevScroll = window.scrollY; // узнаем на сколько была прокручена страница ранее
  let currentScroll; // на сколько прокручена страница сейчас (пока нет значения)

  window.addEventListener('scroll', () => {

    currentScroll = window.scrollY; // узнаем на сколько прокрутили страницу

    const headerHidden = () => header.classList.contains('header_hidden'); // узнаем скрыт header или нет

    if (currentScroll > prevScroll && !headerHidden()) { // если прокручиваем страницу вниз и header не скрыт
      header.classList.add('header_hidden'); // то скрываем header
    }
    if (currentScroll < prevScroll && headerHidden()) { // если прокручиваем страницу вверх и header скрыт
      header.classList.remove('header_hidden'); // то отображаем header
    }

    prevScroll = currentScroll; // записываем на сколько прокручена страница на данный момент

  });
}

export {onScrollHeader};

