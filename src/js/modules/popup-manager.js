import Popup from '../helpers/popup';

class PopupManager extends Popup {
  constructor(options = {}) {
    super();

    const defaultOptions = {
      isOpenClass: 'is-open',
    };

    this.options = Object.assign(defaultOptions, options);

    this.init();
    this.addEventListeners();
  }

  init() {
    this.popups.forEach((popup) => {
      popup.setAttribute('aria-hidden', 'true');
    });
  }

  addEventListeners() {
    document.addEventListener('click', this.togglePopup.bind(this));
    document.addEventListener('keydown', (e) => {
      const keyCode = e.keyCode;
      const popup = document.querySelector('.popup.is-open');

      if (keyCode == 27 && popup) {
        popup.classList.remove(this.options.isOpenClass);
        popup.setAttribute('aria-hidden', 'true');
        this.closePopup(popup);

        setTimeout(() => {
          this.toggleBodyLock(false);
        }, 400);
      }
    });
  }

  togglePopup({ target }) {
    if (target.closest('[data-type]')) {
      const popup = this.getPopupBySelector(target.dataset.type);

      this.isOpenElements.forEach((modal) => this.closePopup(modal));
      this.openPopup(popup);
      this.toggleBodyLock(true);

      if (target.getAttribute('data-type') == 'map') {
        let iframe = document.createElement('iframe');
        iframe.src =
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.8864054856595!2d35.03799027675989!3d48.4587090287496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe2dfec05384b%3A0x75b21560c0e2f0ec!2z0LLRg9C70LjRhtGPINCi0YDQvtGX0YbRjNC60LAsIDIx0LMsINCU0L3RltC_0YDQviwg0JTQvdGW0L_RgNC-0L_QtdGC0YDQvtCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDQ5MDAw!5e0!3m2!1suk!2sua!4v1716023808703!5m2!1suk!2sua';
        iframe.allowfullscreen;
        iframe.loading = 'lazy';
        iframe.referrerpolicy = 'no-referrer-when-downgrade';
        popup.querySelector('.map-popup__iframe').appendChild(iframe);
      }
    }

    if (
      target.hasAttribute('data-close-overlay')
    ) {
      this.closePopup(target.closest('[data-popup]'));

      setTimeout(() => {
        this.toggleBodyLock(false);
      }, 400);
    }
  }

  getPopupBySelector(popupName) {
    return document.querySelector(`[data-popup="${popupName}"]`);
  }

  get popups() {
    return document.querySelectorAll('[data-popup]');
  }

  get isOpenElements() {
    return document.querySelectorAll(`.${this.options.isOpenClass}`);
  }

  openPopup(popup) {
    if (popup) {
      popup.classList.add(this.options.isOpenClass);
      popup.setAttribute('aria-hidden', 'false');
    }
  }

  closePopup(popup) {
    if (popup) {
      popup.classList.remove(this.options.isOpenClass);
      popup.setAttribute('aria-hidden', 'true');
    }

    if (popup.getAttribute('data-popup') == 'map') {
      popup.querySelector('iframe').remove();
    }
  }
}

export default PopupManager;
