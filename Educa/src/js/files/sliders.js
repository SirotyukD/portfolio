/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper, {
	Navigation,
	EffectCreative,
	Pagination
} from 'swiper';
// import Swiper from 'swiper/bundle';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
// import 'swiper/css/bundle';
// import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
// import 'swiper/css/grid';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.swiper')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.swiper', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, EffectCreative, Pagination],
			slidesPerView: 1,
			loop: true,
			effect: "creative",
			creativeEffect: {
				prev: {
					shadow: true,
					translate: [0, 0, -400],
				},
				next: {
					translate: ["100%", 0, 0],
				},
			},
			// autoplay: {
			// 	delay: 3000,
			// 	disableOnInteraction: false,
			// },
			// grid: {
			// 	rows: 2,
			// },
			observer: true,
			observeParents: true,
			// slidesPerView: 3,
			// spaceBetween: 5,
			// slidesPerGroup: 2,
			// autoHeight: true,
			// speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: false,
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				// renderBullet: function (index, className) {
				// 	return '<span class="' + className + '">' + (index + 1) + "</span>";
				// },
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоінти
			breakpoints: {
				// 768: {
				// 	spaceBetween: 20,
				// },
				// 992: {
				// 	slidesPerView: 3,
				// 	slidesPerGroup: 3,
				// 	spaceBetween: 34,
				// }
			},

			// Події
			// on: {

			// }
		});
	}
	if (document.querySelector('.graph__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.graph__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Pagination, Autoplay, EffectCreative],
			slidesPerView: 1,
			loop: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			effect: 'creative',
			creativeEffect: {
				prev: {
					shadow: true,
					origin: "left center",
					translate: ["-5%", 0, -200],
					rotate: [0, 100, 0],
				},
				next: {
					origin: "right center",
					translate: ["5%", 0, -200],
					rotate: [0, -100, 0],
				},
			},
			// grid: {
			// 	rows: 2,
			// },
			observer: true,
			observeParents: true,
			// slidesPerView: 3,
			spaceBetween: 5,
			// slidesPerGroup: 2,
			autoHeight: true,
			// speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: false,
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				// renderBullet: function (index, className) {
				// 	return '<span class="' + className + '">' + (index + 1) + "</span>";
				// },
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			// navigation: {
			// 	prevEl: '.swiper-button-prev',
			// 	nextEl: '.swiper-button-next',
			// },

			// Брейкпоінти
			breakpoints: {
				// 768: {
				// 	spaceBetween: 20,
				// },
				// 992: {
				// 	slidesPerView: 3,
				// 	slidesPerGroup: 3,
				// 	spaceBetween: 34,
				// }
			},

			// Події
			// on: {

			// }
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