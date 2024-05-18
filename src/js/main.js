import { useDynamicAdapt } from './libs/adaptive.js';
useDynamicAdapt();

import './helpers/animation';
// import './helpers/swiper';
import BaseHelpers from './helpers/base-helpers';

import PopupManager from './modules/popup-manager';
import Menus from './modules/menus';
// import './helpers/animation';
// import Tabs from './modules/tabs';
// import Accordion from './modules/accordion';
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

// new Accordion('.accordion', {
// 	shouldOpenAll: false, // true
// 	defaultOpen: [2], // [0,1]
// 	collapsedClass: 'open',
// });
