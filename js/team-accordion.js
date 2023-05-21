export function accordeon() {
const buttons = document.querySelectorAll('.member__button');
const text_blocks = document.querySelectorAll('.member__desc');
const names = document.querySelectorAll('.member__name');

buttons.forEach((button,i) => {
  button.addEventListener('click', e => {
    text_blocks[i].classList.toggle('member__desc--active');
    names[i].classList.toggle('member__name--active');
  })
});
}