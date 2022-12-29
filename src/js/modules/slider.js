// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation]);

const mainSlider = new Swiper('.main-slider', {
	slidesPerView: 'auto',
	spaceBetween: 20,

	breakpoints: {
		900: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		1100: {
			spaceBetween: 30,
		},
	},
});

const defaultIngredientsSlider = new Swiper('.product__ingredients', {
	slidesPerView: 'auto',
	spaceBetween: 12,

	breakpoints: {
		1024: {
			spaceBetween: 20,
		},
	},
});

const addFoodOrderSlider = new Swiper('.add-food__slider', {
	slidesPerView: 'auto',
	spaceBetween: 20,

	navigation: {
		enabled: false,
		nextEl: '.order-add__next-slide',
		prevEl: '.order-add__prev-slide',
	},

	breakpoints: {
		768: {
			spaceBetween: 30,
		},
		1024: {
			spaceBetween: 30,
			navigation: {
				enabled: true,
			},
		},
	},
});
