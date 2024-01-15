import {addToggleMenu} from './modules/toggle-menu';
import {initAccordions} from './vendor/accordion/init-accordion';
import {initHeroSlider} from './modules/slider-hero';
import {onScrollHeader} from './modules/sticky-header';

window.addEventListener('DOMContentLoaded', () => {
  onScrollHeader();

  window.addEventListener('load', () => {
    addToggleMenu();
    initHeroSlider();
    initAccordions();
  });
});
