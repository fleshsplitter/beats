export function accordeon() {
  const buttons = document.querySelectorAll('.member__button');
  const textBlocks = document.querySelectorAll('.member__desc');
  const names = document.querySelectorAll('.member__name');

  buttons.forEach((button, i) => {
    button.addEventListener('click', (e) => {
      textBlocks.forEach((textBlock, j) => {
        if (i === j) return;

        textBlock.classList.remove('member__desc--active');
      });

      textBlocks[i].classList.toggle('member__desc--active');
      names[i].classList.toggle('member__name--active');
    });
  });
}
