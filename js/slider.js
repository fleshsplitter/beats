
export function slider() {
  const slider = $(".shop-list").bxSlider({
    pager: false,
    controls: false
  });
  
  $('.shop__arrow--left').click((e) => {
    e.preventDefault();
    slider.goToPrevSlide();
  });
  
  $('.shop__arrow--right').click((e) => {
    e.preventDefault();
    slider.goToNextSlide();
  });
}