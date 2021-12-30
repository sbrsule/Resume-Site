const navDisplay = document.getElementById("nav-display");
const aboutMeLinks = document.querySelectorAll(".to-about-me");
const myProjectsLinks = document.querySelectorAll(".to-my-projects");
const contactMeLinks = document.querySelectorAll(".to-contact-me");
const aboutMe = document.getElementById("about-me");
const myProjects = document.getElementById("my-projects");
const contactMe = document.getElementById("contact-me");

myProjectsLinks.forEach(myProjectsLink => {
	myProjectsLink.addEventListener("click", (e) => {
		myProjectsLinks[0].style.textDecoration = "underline";
		myProjectsLinks[1].style.textDecoration = "underline";
		aboutMeLinks[0].style.textDecoration = "none";
		aboutMeLinks[1].style.textDecoration = "none";
		contactMeLinks[0].style.textDecoration = "none";
		contactMeLinks[1].style.textDecoration = "none";
		myProjects.style.display = "flex";
		aboutMe.style.display = "none";
		contactMe.style.display = "none";
	});
});


aboutMeLinks.forEach(aboutMeLink => {
	aboutMeLink.addEventListener("click", (e) => {
		aboutMeLinks[0].style.textDecoration = "underline";
		aboutMeLinks[1].style.textDecoration = "underline";
		myProjectsLinks[0].style.textDecoration = "none";
		myProjectsLinks[1].style.textDecoration = "none";
		contactMeLinks[0].style.textDecoration = "none";
		contactMeLinks[1].style.textDecoration = "none";
		aboutMe.style.display = "flex";
		myProjects.style.display = "none";
		contactMe.style.display = "none";
	});
});

contactMeLinks.forEach(contactMeLink => {
	contactMeLink.addEventListener("click", (e) => {
		contactMeLinks[0].style.textDecoration = "underline";
		contactMeLinks[1].style.textDecoration = "underline";
		aboutMeLinks[0].style.textDecoration = "none";
		aboutMeLinks[1].style.textDecoration = "none";
		myProjectsLinks[0].style.textDecoration = "none";
		myProjectsLinks[1].style.textDecoration = "none";
		contactMe.style.display = "flex";
		aboutMe.style.display = "none";
		myProjects.style.display = "none";
	});
});

// jQuery for dynamic navbar
$(document).ready(function(){
	$(".navbar").hide();
	$(window).scroll(function () {

		if (isScrolledBeforeEl("#skyline")) {
			$(".navbar").fadeIn();
			navDisplay.style.visibility = "hidden";
		}
		else {
			$(".navbar").fadeOut();
			navDisplay.style.visibility = "visible";
		}

	});

	function isScrolledBeforeEl(el) {
		var $el = $(el);
		var $window = $(window);

		var docViewTop = $window.scrollTop();
		var docViewBottom = docViewTop + $window.height();

		var elTop = $el.offset().top;
		var elBottom = elTop + $el.height();
		return elBottom <= docViewTop;
	}

	function isScrolledAfterEl(el) {
		var $el = $(el);
		var $window = $(window);
		
		var docViewTop = $window.scrollTop();
		var docViewBottom = docViewTop + $window.height();

		var elTop = $el.offset().top;
		var elBottom = elTop + $el.height();
		return elBottom <= docViewTop;
	}
});

