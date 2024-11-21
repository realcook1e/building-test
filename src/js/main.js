import "./../scss/style.scss";

document.addEventListener("DOMContentLoaded", () => {
	const header = document.querySelector(".site-header");
	const menuList = document.querySelector(".header-menu");
	const hamburger = document.querySelector(".menu-hamburger");

	window.addEventListener("scroll", () => {
		if (window.scrollY > 100) {
			header.classList.add("active");
		} else {
			header.classList.remove("active");
		}
	});

	hamburger.addEventListener("click", () => {
		if (hamburger.classList.contains("active")) {
			hamburger.classList.remove("active");
			menuList.classList.remove("active");
		} else {
			hamburger.classList.add("active");
			menuList.classList.add("active");
		}
	});
});
