const ham = document.querySelector('.hamburger');
const menu = document.querySelector('.fullscreen-menu');
const close = document.querySelector('.modal-close');

ham.addEventListener('click', e => {
  e.preventDefault();
  menu.style.display = 'block';
})

close.addEventListener('click', e => {
  e.preventDefault;
  menu.style.display = 'none';
})