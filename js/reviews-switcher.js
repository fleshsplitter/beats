function changeClass(name) {}

function link() {
  const buttons = document.getElementsByClassName('reviews__switcher-item');
  const displays = document.getElementsByClassName('reviews__display');

  for (const button of buttons) {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const className = button.getAttribute('data-open');
      // console.log(className);
      for (const button of buttons) {
        button.classList.remove('reviews__switcher-item--active');

        for (const display of displays) {
          if (display.getAttribute('data-link') == className) {
            display.classList.add('reviews__display--active');
          } else {
            display.classList.remove('reviews__display--active');
          }
        }
      }

      button.classList.add('reviews__switcher-item--active');
    });
  }
}
export default link;
