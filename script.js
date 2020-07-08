const leftButton = document.getElementById('kiri')
const rightButton = document.getElementById('kanan')
const itemSlide = document.getElementById('item-slide')

const slideWrapper = document.getElementById('wrapper-slide')

const childCount = slideWrapper.childElementCount - 6

let count = 0

leftButton.addEventListener('click', (e) => {
  count = (count > 0) ? count -= 1 : 0;
  slideWrapper.style.transform = 'translateX(' + (count) * -120 + 'px)'
})

rightButton.addEventListener('click', (e) => {
  count = (count < childCount) ? count += 1 : childCount;
  slideWrapper.style.transform = 'translateX(' + (count) * -120 + 'px)'
})