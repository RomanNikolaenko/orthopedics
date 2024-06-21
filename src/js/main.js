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
const viewOfTheHelmetBtn = document.querySelectorAll(
  '.view-of-the-helmet__btn'
);

if (viewOfTheHelmet && viewOfTheHelmetBtn.length) {
  viewOfTheHelmetBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      viewOfTheHelmetBtn.forEach((item) => {
        item.classList.remove('view-of-the-helmet__btn_active');
      });

      viewOfTheHelmet
        .querySelector('img')
        .setAttribute('src', btn.getAttribute('data-img'));
      btn.classList.add('view-of-the-helmet__btn_active');
    });
  });
}

document.addEventListener('click', function (e) {
  const socialsAccordion = document.querySelector('.socials-accordion');

  if (
    e.target.classList.contains('socials-accordion__btn') &&
    socialsAccordion
  ) {
    socialsAccordion.classList.toggle('socials-accordion_open');
  }

  if (
    !e.target.classList.contains('socials-accordion__btn') &&
    socialsAccordion.classList.contains('socials-accordion_open')
  ) {
    socialsAccordion.classList.remove('socials-accordion_open');
  }

  const whatHelmet = document.querySelector('.what-a-helmet-can-do');
  if (whatHelmet) {
    popups(
      e,
      whatHelmet,
      'what-a-helmet-can-do__btn',
      'what-a-helmet-can-do__popup'
    );
  }

  const mapPopups = document.querySelector('.map');
  if (mapPopups) {
    popups(e, mapPopups, 'bg', 'region-map');
  }

  if (e.target.closest('.tooltip__btn')) {
    const parent = e.target.parentNode;

    if (parent.getAttribute('data-collapse') == 'false') {
      const tooltips = document.querySelectorAll('[data-collapse]');

      tooltips.forEach((tooltip) => {
        tooltip.classList.remove('tooltip_open');
        tooltip.setAttribute('data-collapse', false);
      });
    }
    parent.classList.toggle('tooltip_open');
    parent.setAttribute(
      'data-collapse',
      parent.classList.contains('tooltip_open') ? true : false
    );
  }

  if (!e.target.closest('.tooltip')) {
    const tooltips = document.querySelectorAll('.tooltip');

    tooltips.forEach((tooltip) => {
      tooltip.classList.remove('tooltip_open');
      tooltip.setAttribute('data-collapse', false);
    });
  }
});

const popups = (e, parent, btn, popup) => {
  const mapBtn = parent.querySelectorAll(`.${btn}`);
  const mapPopup = parent.querySelectorAll(`.${popup}`);

  if (e.target.classList.contains(`${btn}`)) {
    const dataAttr = e.target.getAttribute('data-popup-btn');

    if (!e.target.classList.contains(`${btn}_active`)) {
      mapBtn.forEach((item) => {
        item.classList.remove(`${btn}_active`);
      });
    }

    e.target.classList.toggle(`${btn}_active`);

    mapPopup.forEach((item) => {
      item.classList.remove(`${popup}_active`);

      if (
        item.getAttribute('data-popup-wrap') == dataAttr &&
        e.target.classList.contains(`${btn}_active`)
      ) {
        item.classList.toggle(`${popup}_active`);
      }
    });
  }

  if (!e.target.closest(`.${popup}`) && !e.target.closest(`.${btn}`)) {
    mapBtn.forEach((item) => {
      item.classList.remove(`${btn}_active`);
    });

    mapPopup.forEach((item) => {
      item.classList.remove(`${popup}_active`);
    });
  }

  if (e.target.classList.contains(`${popup}__close`)) {
    mapBtn.forEach((item) => {
      item.classList.remove(`${btn}_active`);
    });

    mapPopup.forEach((item) => {
      item.classList.remove(`${popup}_active`);
    });
  }
};


function reportWindow() {
  if(window.innerWidth >= 768) {
    const btn = document.querySelector('[data-popup-btn="region-1"]');
    const popup = document.querySelector('[data-popup-wrap="region-1"]');

    if(btn && popup) {
      btn.classList.add('bg_active');
      popup.classList.add('region-map_active');
    }
  }

  const helmetBtn = document.querySelector('[data-popup-btn="1"]');
  const helmetPopup = document.querySelector('[data-popup-wrap="1"]');
  if(helmetBtn && helmetPopup) {
    helmetBtn.classList.add('what-a-helmet-can-do__btn_active');
    helmetPopup.classList.add('what-a-helmet-can-do__popup_active');
  }
}

reportWindow();