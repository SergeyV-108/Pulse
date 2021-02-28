// Инициализируем слайдер

var swiper = new Swiper('.combo-page__slider', {
	//Стрелки
	navigation: {
		nextEl: '.favorite-page__arrow_next',
	},

	//Кол-во слайдов для показа
	//slidesPerView: 3,
	slidesPerView: 'auto',

	//Отступ между слайдами
	spaceBetween: 30,

	//Кол-во пролистываемых слайдов
	slidesPerGroup: 1,

	//Бесконечный цикл
	loop: true,

});
