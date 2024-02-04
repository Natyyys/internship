import { Form } from './vendor/form-validate/form';
import {CustomSelect} from './vendor/select/custom-select';
import {addToggleMenu} from './modules/toggle-menu';
import {initAccordions} from './vendor/accordion/init-accordion';
import {initHeroSlider} from './modules/slider-hero';
import {onScrollHeader} from './modules/sticky-header';
import {initModals} from './vendor/modals/init-modals';
import {initProgramsSlider} from './modules/slider-programs';
import {initNewsSlider} from './modules/slider-news';
import {initNewsFilter} from './modules/tabs-news';
import {initReviewsSlider} from './modules/slider-reviews';

window.addEventListener('DOMContentLoaded', () => {
  onScrollHeader();

  window.addEventListener('load', () => {
    addToggleMenu();
    initHeroSlider();
    initAccordions();
    initModals();
    initProgramsSlider();
    initNewsSlider();
    initNewsFilter();
    initReviewsSlider();
    const form = new Form();
    window.form = form;
    form.init();
    const select = new CustomSelect();
    select.init();
  });
});
