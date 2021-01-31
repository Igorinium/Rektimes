$(document).ready(function () {
	$('.header-burger').click(function (event) {
		$('.header-burger').toggleClass('active');
		$('body').toggleClass('lock');
		$('.menu-gray').toggleClass('active');
		$('.main-menu').toggleClass('active');
		$('.menu-space').toggleClass('active');
	});
	$('.menu-gray').click(function (event) {
		$('.menu-gray').removeClass('active');
		$('.header-burger').removeClass('active');
		$('body').removeClass('lock');
		$('.main-menu').removeClass('active');
		$('.menu-space').removeClass('active');
	});

	$('.list-spoiler__title._1st').click(function (event) {
		$('.list-spoiler__title._2st').removeClass('active');
		$(this).toggleClass('active');
		$('.list-spoiler__ul._1st').toggleClass('active');
	});
	$('.list-spoiler__title._2st').click(function (event) {
		$(this).toggleClass('active').next().toggleClass('active');
	});
});
// .next().slideToggle(300)
let myImageSlider = new Swiper('.image-slider', {
	// Стрелки
	navigation: {
		nextEl: '.swiper-navigation-next',
		prevEl: '.swiper-navigation-prev'
	},
	slideToClickedSlide: true,
	slidesPerView: 2,
	loop: true,
	spaceBetween: 20,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		1340: {
			slidesPerView: 2,
		},
	}
});
