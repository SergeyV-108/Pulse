//=================== Активация бургер-меню =================

let headerBurger = document.querySelector('.header__burger');
let navHeaderList = document.querySelector('.nav-header__list');

headerBurger.addEventListener("click", function (e) {
	headerBurger.classList.toggle('active');
	navHeaderList.classList.toggle('active');
});
//===========================================================
//====== Навигация при клике по меню menu-header__list ======

let navHeaderLinks = document.querySelectorAll('.nav-header__link');
let cardUpFooterLinks = document.querySelectorAll('.card-up-footer__link');
let dataScrolls = document.querySelectorAll('[data-scroll]');

for (let dataScroll of dataScrolls) {
	let dataScrollId = dataScroll.getAttribute("data-scroll");
	let sectionId = document.querySelector(dataScrollId);

	dataScroll.onclick = function (e) {
		e.preventDefault();
		if (!dataScroll.classList.contains('active')) {
			for (let dataScroll of dataScrolls) {
				dataScroll.classList.remove('active');
			};
			
			headerBurger.classList.remove('active');
			navHeaderList.classList.remove('active');
			
			for (let cardUpFooterLink of cardUpFooterLinks) {

				let cardUpFooterLinkId = cardUpFooterLink.getAttribute("data-scroll");
				
				if (cardUpFooterLinkId == dataScrollId) {
					cardUpFooterLink.classList.add('active');
				}
			}
			for (let navHeaderLink of navHeaderLinks) {

				let navHeaderLinksId = navHeaderLink.getAttribute("data-scroll");
				
				if (navHeaderLinksId == dataScrollId) {
					navHeaderLink.classList.add('active');
				}
			}
		}

		sectionId.scrollIntoView({
			block: 'center',
			behavior: 'smooth', // плавный скрол
		});
	}
}
//document.querySelector('[data-scroll]').click();
//===========================================================
//================= Класс fixed для header ==================

let header = document.querySelector('.header');
let headerLogo = document.querySelector('.header__logo');

//Проверка после загрузки страницы
document.addEventListener("DOMContentLoaded", function () {
	checkScroll();
}); // ИЛИ 
//просто checkScroll();

//проверка при скроле страницы
window.onscroll = function () {
	checkScroll();
}

//Активция
function checkScroll() {
	let scrollPos = window.scrollY;
	if (scrollPos > 25) {
		header.classList.add('fixed');
		headerLogo.classList.add('active');
	} else {
		header.classList.remove('fixed');
		headerLogo.classList.remove('active');
	}
}
//===========================================================