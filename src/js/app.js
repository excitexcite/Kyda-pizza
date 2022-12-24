"use strict";

import Swiper, { Navigation } from "swiper";
import * as flsFunctions from "./modules/functions.js";
// import * as Swiper from "./modules/swiper-bundle.js";

// import ""
// import * as swiper from "./modules/swiper-bundle.js";

// const da = new dynamicAdaptive.DynamicAdapt("min");
// da.init();
Swiper.use([Navigation]);
flsFunctions.isWebp();

const mainSlider = new Swiper('.main-slider', {
	// // Optional parameters
	// direction: 'vertical',
	// loop: true,
	// slidesPerView: 1,
	slidesPerView: "auto",
	spaceBetween: 20,
	// watchOverflow: true,
	// spaceBetween: 20,
	// slidesPerGroup: 1,

	breakpoints: {
		"900": {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		"1100": {
			spaceBetween: 30,
		},
	},
});

const defaultIngredientsSlider = new Swiper('.product__ingredients', {
	slidesPerView: "auto",
	spaceBetween: 12,

	breakpoints: {
		"1024": {
			spaceBetween: 20,
		},
	},
})

const addFoodOrderSlider = new Swiper('.add-food__slider', {
	slidesPerView: "auto",
	spaceBetween: 20,

	navigation: {
		enabled: false,
		nextEl: '.order-add__next-slide',
		prevEl: '.order-add__prev-slide'
		// nextEl: '.swiper-button-next',
		// prevEl: '.swiper-button-prev'
	},

	breakpoints: {
		"768": {
			spaceBetween: 30,
		},
		"1024": {
			spaceBetween: 30,
			navigation: {
				enabled: true
			}
		}
	},
})


const foodFilterButton = document.querySelector('.food__filter');

if (foodFilterButton) {
	foodFilterButton.addEventListener('click', function (event) {
		toggleSideMenu(filterMenuBackground, filterMenuWrapper);

	})
}

const cartOpenButton = document.querySelector('.cart-btn__button');
console.log(cartOpenButton);
if (cartOpenButton) {
	cartOpenButton.addEventListener('click', function (event) {
		toggleSideMenu(cartMenuBackground, cartMenuWrapper);
	});
}

const loginButton = document.querySelector('.top-header__login');
console.log(loginButton);
if (loginButton) {
	loginButton.addEventListener('click', function (event) {
		event.preventDefault();
		toggleSideMenu(loginMenuBackground, loginMenuWrapper);
	})
}

const sideMenuCloseButton = document.querySelector('.filter__close');
const filterMenuBackground = document.querySelector('.page__filter.menu-blured-bg');
// console.log(filterMenuBackground);
const filterMenuWrapper = document.querySelector('.filter__wrapper.menu-wrapper');

const cartMenuBackground = document.querySelector('.page__cart-menu.menu-blured-bg');
console.log(cartMenuBackground);
const cartMenuWrapper = document.querySelector('.cart-menu__wrapper.menu-wrapper');

const foodMenuBackground = document.querySelector('.page__product.menu-blured-bg');
// console.log(cartMenuBackground);
const foodMenuWrapper = document.querySelector('.product__wrapper.menu-wrapper');

const loginMenuBackground = document.querySelector('.page__login-menu.menu-blured-bg');
// console.log(cartMenuBackground);
const loginMenuWrapper = document.querySelector('.login-menu__wrapper.menu-wrapper');

// const sideMenuContent = document.querySelector('.menu-content');
const page = document.querySelector('.page');

page.addEventListener('click', function (event) {
	const clickButton = event.target.closest('button');

	if (!clickButton) return;

	if (clickButton.classList.contains('filter__close')) {
		toggleSideMenu(filterMenuBackground, filterMenuWrapper);
	} else if (clickButton.classList.contains('cart-menu__close')) {
		console.log("clicked!!");
		toggleSideMenu(cartMenuBackground, cartMenuWrapper);
	} else if (clickButton.classList.contains('food__select') || clickButton.classList.contains('product__close') || clickButton.classList.contains('product__close-mobile')) {
		toggleSideMenu(foodMenuBackground, foodMenuWrapper);
	} else if (clickButton.classList.contains('login-menu__close')) {
		toggleSideMenu(loginMenuBackground, loginMenuWrapper);
	}
})


// if (sideMenuCloseButton) {
// 	sideMenuCloseButton.addEventListener('click', function (event) {
// 		toggleSideMenu();
// 	})
// }



function toggleSideMenu(background, content) {
	document.body.classList.toggle("scroll-lock");

	background.classList.toggle('menu-blured-bg--active');
	content.classList.toggle('menu-wrapper--active');
}

const iconMenu = document.querySelector('.menu-icon');
const menuBody = document.querySelector('.menu-mobile');

if (iconMenu) {
	// console.log(menu.backgroundColor);
	iconMenu.addEventListener('click', function (event) {
		toggleBurgerInteractionClasses();
	});
}

function toggleBurgerInteractionClasses() {
	// disable scroll on the page while menu is open
	document.body.classList.toggle("scroll-lock")
	iconMenu.classList.toggle('menu-icon--active');
	menuBody.classList.toggle('menu-mobile--active');
}

const headerNavBackground = document.querySelector('.header');
const pageSection = document.querySelector('.main__categories-list');
// const pageSection = document.querySelector('.main');

// const pageSectionOptions = {
// 	rootMargin: "0px 0px 0px 0px"
// };

// const pageSectionObserver =
// 	new IntersectionObserver(function (entries, pageSectionObserver) {
// 		entries.forEach(entry => {
// 			console.log(entry.target);
// 			if (!entry.isIntersecting) {
// 				headerNavBackground.classList.add('sticky');
// 				// headerNavBackground.classList.remove('sticky');
// 			} else {
// 				// headerNavBackground.classList.add('sticky');
// 				headerNavBackground.classList.remove('sticky');
// 			}
// 		});
// 	}, pageSectionOptions);

// pageSectionObserver.observe(pageSection);


class TabsAutomatic {
	constructor(groupNode) {
		this.tablistNode = groupNode;

		this.tabs = [];

		this.firstTab = null;
		this.lastTab = null;

		this.tabs = Array.from(this.tablistNode.querySelectorAll('[role=tab]'));
		this.tabpanels = [];

		for (var i = 0; i < this.tabs.length; i += 1) {
			var tab = this.tabs[i];
			var tabpanel = document.getElementById(tab.getAttribute('aria-controls'));

			tab.tabIndex = -1;
			tab.setAttribute('aria-selected', 'false');
			this.tabpanels.push(tabpanel);

			tab.addEventListener('keydown', this.onKeydown.bind(this));
			tab.addEventListener('click', this.onClick.bind(this));

			if (!this.firstTab) {
				this.firstTab = tab;
			}
			this.lastTab = tab;
		}

		this.setSelectedTab(this.firstTab, false);
	}

	setSelectedTab(currentTab, setFocus) {
		if (typeof setFocus !== 'boolean') {
			setFocus = true;
		}
		for (var i = 0; i < this.tabs.length; i += 1) {
			var tab = this.tabs[i];
			if (currentTab === tab) {
				tab.setAttribute('aria-selected', 'true');
				tab.removeAttribute('tabindex');
				this.tabpanels[i].classList.remove('is-hidden');
				if (setFocus) {
					tab.focus();
				}
			} else {
				tab.setAttribute('aria-selected', 'false');
				tab.tabIndex = -1;
				this.tabpanels[i].classList.add('is-hidden');
			}
		}
	}

	setSelectedToPreviousTab(currentTab) {
		var index;

		if (currentTab === this.firstTab) {
			this.setSelectedTab(this.lastTab);
		} else {
			index = this.tabs.indexOf(currentTab);
			this.setSelectedTab(this.tabs[index - 1]);
		}
	}

	setSelectedToNextTab(currentTab) {
		var index;

		if (currentTab === this.lastTab) {
			this.setSelectedTab(this.firstTab);
		} else {
			index = this.tabs.indexOf(currentTab);
			this.setSelectedTab(this.tabs[index + 1]);
		}
	}

	/* EVENT HANDLERS */

	onKeydown(event) {
		var tgt = event.currentTarget,
			flag = false;

		switch (event.key) {
			case 'ArrowLeft':
				this.setSelectedToPreviousTab(tgt);
				flag = true;
				break;

			case 'ArrowRight':
				this.setSelectedToNextTab(tgt);
				flag = true;
				break;

			case 'Home':
				this.setSelectedTab(this.firstTab);
				flag = true;
				break;

			case 'End':
				this.setSelectedTab(this.lastTab);
				flag = true;
				break;

			default:
				break;
		}

		if (flag) {
			event.stopPropagation();
			event.preventDefault();
		}
	}

	onClick(event) {
		this.setSelectedTab(event.currentTarget);
	}
}

// Initialize tablist

window.addEventListener('load', function () {
	var tablists = document.querySelectorAll('[role=tablist].automatic');
	for (var i = 0; i < tablists.length; i++) {
		new TabsAutomatic(tablists[i]);
	}
});
