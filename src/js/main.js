import { useDynamicAdapt } from './libs/adaptive.js';
useDynamicAdapt();

import './helpers/animation';
import './helpers/swiper';
import BaseHelpers from './helpers/base-helpers';

import PopupManager from './modules/popup-manager';
import Menus from './modules/menus';
// import './helpers/animation';
// import Tabs from './modules/tabs';
import Accordion from './modules/accordion';
import './modules/search';

BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();

// BaseHelpers.headerFixed();

/**
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
new PopupManager();

/**
 *  Модуль для работы с меню (Бургер)
 * */
new Menus().init();

/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 * */
// AOS.init();

/**
 * Параллакс мышей
 * */
// new MousePRLX();

// new Tabs('tabs-example', {
// 	onChange: (data) => {
// 		console.log(data);
// 	},
// });

new Accordion('.frequently-asked-questions__accordion', {
  shouldOpenAll: true, // true
  defaultOpen: [], // [0,1]
  defaultOpenAll: false,
  collapsedClass: 'open',
});

const viewOfTheHelmet = document.querySelector('.view-of-the-helmet__helmet');
const viewOfTheHelmetBtn = document.querySelectorAll('.view-of-the-helmet__btn');

if (viewOfTheHelmet && viewOfTheHelmetBtn.length) {
  viewOfTheHelmetBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      viewOfTheHelmetBtn.forEach(item => {
        item.classList.remove('view-of-the-helmet__btn_active');
      });

      viewOfTheHelmet.querySelector('img').setAttribute('src', btn.getAttribute('data-img'));
      btn.classList.add('view-of-the-helmet__btn_active');
    })
  })
}

document.addEventListener('click', function (e) {
  const socialsAccordion = document.querySelector('.socials-accordion');

  if (e.target.classList.contains('socials-accordion__btn') && socialsAccordion) {
    socialsAccordion.classList.toggle('socials-accordion_open');
  }

  if (!e.target.classList.contains('socials-accordion__btn') && socialsAccordion.classList.contains('socials-accordion_open')) {
    socialsAccordion.classList.remove('socials-accordion_open');
  }
});