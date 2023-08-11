/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
// import Swiper from 'swiper';
import Swiper from 'swiper/bundle';
// import { Navigation } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
// import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';
import 'swiper/css/bundle';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.slider-it')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		const slider = document.querySelector('.slider-it');
		const slides = slider.querySelectorAll('.slider-it__slide');
		let slidesNames = [];

		slides.forEach(item => {
			slidesNames.push(item.dataset.slideName)
		})


		new Swiper(slider, { // Вказуємо склас потрібного слайдера
			// modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 5,
			autoHeight: true,
			speed: 800,
			loop: true,

			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},


			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},

			pagination: {
				el: '.slider-it-pagination',
				clickable: 'true',
				type: 'bullets',
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + '<span>' + slidesNames[index] + '</span>' + '<i></i>' + '<b></b>' + '</span>';
				},

			},
		});
	}

	if (document.querySelector('.slider-pd')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		const slider = document.querySelector('.slider-pd');
		const slides = slider.querySelectorAll('.slider-pd__slide');
		let slidesNames = [];

		const test = slides[0].dataset.slideName

		slides.forEach(item => {
			slidesNames.push(item.dataset.slideName)
		})


		new Swiper(slider, { // Вказуємо склас потрібного слайдера
			// modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 5,
			autoHeight: true,
			speed: 800,
			loop: true,


			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},


			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},

			pagination: {
				el: '.slider-pd__controll',
				clickable: 'true',
				type: 'bullets',
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + '<span>' + slidesNames[index] + '</span>' + '<i></i>' + '<b></b>' + '</span>';
				},

			},
		});
	}
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});