'use strict';

const openBtns = document.querySelectorAll('.accord-header'),
   chooseColor = [...document.querySelector('.var-color').children];

openBtns.forEach(item => {
   item.addEventListener('click', () => {
      item.querySelector('.collapse-btn').firstElementChild.classList.toggle('collapse-btn_open');
   });
});


chooseColor[0].classList.add('color_active');
chooseColor.forEach(item => {
   item.addEventListener('click', (e) => {
      chooseColor.forEach(elem => {
         elem.classList.remove('color_active');
      });
      e.target.classList.add('color_active');
      changeProduct(e.target.getAttribute('data-color-type'));
   });
})


function changeProduct(path) {
   const carouselImg = [...document.querySelectorAll('.carousel-item')],
      carouselBtn = [...document.querySelectorAll('.img-type')];

   for (let i = 0; i < [...carouselImg].length; i++) {
      carouselImg[i].getAttribute('src');
      carouselImg[i].firstElementChild.setAttribute('src', `img/${path}-type_${i + 1}.png`);
   }

   for (let i = 0; i < carouselBtn.length; i++) {
      carouselBtn[i].style.backgroundImage = `url("img/${path}-type_${i + 1}.png")`;
   }
}