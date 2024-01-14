import {addToggleMenu} from './modules/toggle-menu';
import {initAccordions} from './vendor/accordion/init-accordion';
import {initHeroSlider} from './modules/slider-hero';

window.addEventListener('DOMContentLoaded', () => {

  window.addEventListener('load', () => {
    addToggleMenu();
    initHeroSlider();
    initAccordions();
  });
});
