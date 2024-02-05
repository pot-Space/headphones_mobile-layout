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
      carouselBtn[i].style.backgroundImage = `url("./img/${path}-type_${i + 1}.png")`;
   }
}

// timer
(() => {
   const date = new Date(),
      deadline = new Date(date.getTime() + ((60 * 60 * 1000 * 3) + (60 * 1000 * 59) + (37 * 1000) + 700)); // 3h 59m 37s 7ms

   function getTimeRemaining(endtime) {
      let t = Date.parse(endtime) - Date.parse(new Date()),
         seconds = Math.floor((t / 1000) % 60),
         minutes = Math.floor((t / 1000 / 60) % 60),
         hours = Math.floor((t / (1000 * 60 * 60)) % 24),
         days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
         'total': t,
         'days': days,
         'hours': hours,
         'minutes': minutes,
         'seconds': seconds,
      };
   }

   function initializeClock(timer, endtime) {
      let timeHours = timer.querySelector('.time-h'),
         timeMinutes = timer.querySelector('.time-m'),
         timeSeconds = timer.querySelector('.time-s');

      function updateClock() {
         let t = getTimeRemaining(endtime);
         timeHours.innerHTML = ('0' + t.hours).slice(-2);
         timeMinutes.innerHTML = ('0' + t.minutes).slice(-2);
         timeSeconds.innerHTML = ('0' + t.seconds).slice(-2);

         if (t.total <= 0) {
            clearInterval(timeinterval);
         }
      }

      updateClock();
      let timeinterval = setInterval(updateClock, 1000);
   }

   initializeClock(document.querySelector('.time'), deadline);
})();