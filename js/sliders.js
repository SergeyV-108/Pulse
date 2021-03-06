$(function () {

	// products слайдеры

	$('.slider-img').slick({
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1000,
		infinite: true,
		variableWidth: true,
		/* autoplay: true,
		autoplaySpeed: 1000,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true, */
		asNavFor: ".slider-text", // привязка слайдеров (одновременная прокрутка)


	});

	$('.slider-text').slick({
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1000,
		infinite: true,
		variableWidth: true,
		/* autoplay: true,
		autoplaySpeed: 1000,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true, */
		asNavFor: ".slider-img"

	});

});