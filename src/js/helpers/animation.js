const scrollItems = document.querySelectorAll('.line');

const scrollAnimation = () => {
  const windowCenter = window.innerHeight * 0.7 + window.scrollY;

  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  const height = window.scrollY + clientHeight + 300;

  scrollItems.forEach((el) => {
    const jEl = el;
    const scrollOffset = jEl.offsetTop;

    if (
      windowCenter >= scrollOffset &&
      !jEl.classList.contains('animation-line')
    ) {
      el.classList.add('animation-line');
    }
    //   else if (windowCenter < scrollOffset && jEl.classList.contains("animation-line")) {
    //     el.classList.remove('animation-line');
    //   }

    if (height >= scrollHeight) {
      el.classList.add('animation-line');
    }
  });
};

scrollAnimation();

window.addEventListener('scroll', () => {
  scrollAnimation();
});
