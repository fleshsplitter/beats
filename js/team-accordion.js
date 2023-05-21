const button = document.querySelector('.member__name::after');
const text_block = document.querySelector('.member__desc');

button.addEventListener('click', e => {
  text_block.classList.toggle('member__desc--active');
})