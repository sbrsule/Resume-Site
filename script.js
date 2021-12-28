$(document).ready(function(){
	$(".navbar").hide();
	$(window).scroll(function () {
		if (isScrolledAfterElement("#my-projects")) {
			$(".navbar").fadeIn();
		}
		else {
			$(".navbar").fadeOut();
		}

	});

	function isScrolledAfterElement(el) {
		var $el = $(el);
		var $window = $(window);

		var docViewTop = $window.scrollTop();
		var docViewBottom = docViewTop + $window.height();

		var elTop = $el.offset().top;
		return elTop <= docViewBottom;
	}
});

document.ready();
