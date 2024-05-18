const searchform = document.getElementById('search__form');
const searchInput = searchform.querySelector('#search-input');
const clean = searchform.querySelector('.search__clean');

if(searchform) {
    searchInput.addEventListener('input', (e) => {
      if (e.target.value) {
        clean.classList.remove('search__clean_hidden');
      } else {
        clean.classList.add('search__clean_hidden');
      }
    });
      
    clean.addEventListener('click', () => {
      searchInput.value = null;
      searchInput.focus();
      clean.classList.add('search__clean_hidden');
    });
}

