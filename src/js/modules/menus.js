import Popup from '../helpers/popup';

class Menus extends Popup {
  constructor() {
    super();

    this.menusButton = document.querySelectorAll('[data-menus]');
  }

  init() {
    if (this.menusButton.length) {
      document.addEventListener('click', ({ target }) => {
        const targetData = target.getAttribute('data-menus');

        if (targetData === 'search') {
          this.html.classList.toggle(`${targetData}-open`);
          this.toggleBodyLock(this.isSearchOpen);
          if (this.isSearchOpen) {
            this.html.classList.remove('burger-open');
          }
        }

        if (targetData === 'burger') {
          this.html.classList.toggle(`${targetData}-open`);
          this.toggleBodyLock(this.isBurgerOpen);
          if (this.isSearchOpen) {
            this.html.classList.remove('search-open');
          }
        }

        if (target.hasAttribute(`data-close-search`) && this.isSearchOpen) {
          this.menusClose('search');
          if (this.isBurgerOpen) {
            this.html.classList.remove('burger-open');
          }
        }

        if (target.hasAttribute(`data-close-burger`) && this.isBurgerOpen) {
          this.menusClose('burger');
          if (this.isSearchOpen) {
            this.html.classList.remove('search-open');
          }
        }
      });

      document.addEventListener('keydown', (e) => {
        const keyCode = e.keyCode;

        if (keyCode == 27) {
          if (this.isSearchOpen) {
            this.menusClose('search');
            if (this.isBurgerOpen) {
              this.html.classList.remove('burger-open');
            }
          }

          if (this.isBurgerOpen) {
            this.menusClose('burger');
            if (this.isSearchOpen) {
              this.html.classList.remove('search-open');
            }
          }
        }
      });
    }
  }

  menusClose(nameClass) {
    this.toggleBodyLock(false);
    this.html.classList.remove(`${nameClass}-open`);

    const searchform = document.getElementById('search__form');

    if (searchform) {
      const searchInput = searchform.querySelector('#search-input');
      const clean = searchform.querySelector('.search__clean');

      searchInput.value = null;
      searchInput.focus();
      clean.classList.add('search__clean_hidden');
    }
  }

  get isSearchOpen() {
    return this.html.classList.contains('search-open');
  }

  get isBurgerOpen() {
    return this.html.classList.contains('burger-open');
  }
}

export default Menus;
