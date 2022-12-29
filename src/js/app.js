'use strict';

import { TabsAutomatic } from './modules/tabs-a11y.js';
import * as slider from './modules/slider.js';
import * as func from './modules/functions.js';
// import * as Swiper from "./modules/swiper-bundle.js";

func.isWebp();

const navigationHieght = document.querySelector('.header');
document.documentElement.style.setProperty(
	'--scroll-padding',
	navigationHieght.getBoundingClientRect().height + 'px'
);

const menuToggle = document.querySelector('.menu-button');
const menuBody = document.querySelector('.menu-mobile');

if (menuToggle) {
	menuToggle.addEventListener('click', function (event) {
		const isOpened = menuToggle.getAttribute('aria-expanded') === 'true';
		menuToggle.setAttribute('aria-expanded', !isOpened);
		toggleBurgerInteractionClasses();
	});
}

function toggleBurgerInteractionClasses() {
	// disable scroll on the page while menu is open
	document.body.classList.toggle('scroll-lock');
	menuToggle.classList.toggle('menu-button--active');
	menuBody.classList.toggle('menu-mobile--active');
}

const filterMenuBackground = document.querySelector(
	'.page__filter.menu-blured-bg'
);
const filterMenuWrapper = document.querySelector(
	'.filter__wrapper.menu-wrapper'
);

const cartMenuBackground = document.querySelector(
	'.page__cart-menu.menu-blured-bg'
);
const cartMenuWrapper = document.querySelector(
	'.cart-menu__wrapper.menu-wrapper'
);

const foodMenuBackground = document.querySelector(
	'.page__product.menu-blured-bg'
);
const foodMenuWrapper = document.querySelector(
	'.product__wrapper.menu-wrapper'
);

const loginMenuBackground = document.querySelector(
	'.page__login-menu.menu-blured-bg'
);
const loginMenuWrapper = document.querySelector(
	'.login-menu__wrapper.menu-wrapper'
);

const page = document.querySelector('.wrapper');

page.addEventListener('click', function (event) {
	const clickButton = event.target.closest('button');

	if (!clickButton) return;

	const buttonClasses = clickButton.classList;

	if (
		buttonClasses.contains('filter__close') ||
		buttonClasses.contains('food__filter')
	) {
		toggleSideMenu(filterMenuBackground, filterMenuWrapper);
	} else if (
		buttonClasses.contains('cart-menu__close') ||
		buttonClasses.contains('cart-btn__button')
	) {
		toggleSideMenu(cartMenuBackground, cartMenuWrapper);
	} else if (
		buttonClasses.contains('food__select') ||
		buttonClasses.contains('product__close') ||
		buttonClasses.contains('product__close-mobile')
	) {
		toggleSideMenu(foodMenuBackground, foodMenuWrapper);
	} else if (
		buttonClasses.contains('login-menu__close') ||
		buttonClasses.contains('login-dropdown__title')
	) {
		toggleSideMenu(loginMenuBackground, loginMenuWrapper);
	}
});

function toggleSideMenu(background, content) {
	if (!background || !content) {
		return;
	}
	document.body.classList.toggle('scroll-lock');
	background.classList.toggle('menu-blured-bg--active');
	content.classList.toggle('menu-wrapper--active');
}

const pcMenuContainer = document.getElementById('nav-other');
const mobileContacts = document.querySelector('.menu-mobile__contacts');
const menuItemsList = document.getElementById('other-dropdown');

const smallDevice = window.matchMedia('(min-width: 48em)');

smallDevice.addListener(handleDeviceChange);

function handleDeviceChange(e) {
	if (e.matches) {
		pcMenuContainer.append(menuItemsList);
	} else {
		mobileContacts.before(menuItemsList);
	}
}

// Run it initially
handleDeviceChange(smallDevice);
