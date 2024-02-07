const HIDDEN_CLASS = 'is-hidden';

function onScrollHeader() {
  const header = document.querySelector('[data-header="data-header"]');

  let prevScroll = window.scrollY;
  let currentScroll;

  window.addEventListener('scroll', () => {

    currentScroll = window.scrollY;

    const headerHidden = () => header.classList.contains(HIDDEN_CLASS);

    if (currentScroll > prevScroll && !headerHidden()) {
      header.classList.add(HIDDEN_CLASS);
    }
    if (currentScroll < prevScroll && headerHidden()) {
      header.classList.remove(HIDDEN_CLASS);
    }

    prevScroll = currentScroll;

  });
}

export {onScrollHeader};
