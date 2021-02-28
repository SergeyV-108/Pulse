//=============== Вкл./выкл. видео кнопкой play =============

let headerBtn = document.querySelector('.header__btn');
let headerVideo = document.querySelector('.header__video');

headerBtn.onclick = function () {
	headerVideo.classList.toggle('active');
	headerBtn.classList.toggle('active');
}

//===========================================================
//====== Навигация при клике по меню menu-header__list ======

let menuHeaderLinks = document.querySelectorAll('.menu-header__link');

for (let menuHeaderLink of menuHeaderLinks) {
	menuHeaderLink.onclick = function (e) {
		e.preventDefault();

		let menuHeaderLinkId = menuHeaderLink.getAttribute("data-scroll");
		let sectionId = document.querySelector(menuHeaderLinkId);

		if (!menuHeaderLink.classList.contains('active')) {
			for (let menuHeaderLink of menuHeaderLinks) {
				menuHeaderLink.classList.remove('active');
			};
			this.classList.add('active');
		}

		sectionId.scrollIntoView({
			behavior: 'smooth', // плавный скрол
		});
	}
}

//document.querySelector('.menu-header__link').click();

//===========================================================
//=================== Активация бургер-меню =================

let burger = document.querySelector('.burger');
let menuHeaderList = document.querySelector('.menu-header__list');

burger.onclick = function () {
	burger.classList.toggle('active');
	menuHeaderList.classList.toggle('active');
}

//===========================================================
//============== Функционал кнопки scroll-up ================

let pageScrollBtn = document.querySelector('.page__scroll-btn');
let header = document.querySelector('.header');
let basePage = document.querySelector('.base-page');

//Проверка после загрузки страницы
document.addEventListener("DOMContentLoaded", function () {
	checkScroll();
}); // ИЛИ 
//просто checkScroll();

//проверка при скроле страницы
window.onscroll = function () {
	checkScroll();
}

//Появление
function checkScroll() {
	let headerOffset = basePage.offsetTop;
	if (headerOffset <= window.pageYOffset) {
		pageScrollBtn.classList.add('active');
	} else {
		pageScrollBtn.classList.remove('active');
	}
}

//Скрол вверх
pageScrollBtn.onclick = function () {
	window.scrollTo({
		top: 0,
		behavior: 'smooth' // плавный скрол
	});
}

//===========================================================