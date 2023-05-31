/* 소설분야 */

$(function() {
	function prevsub1() {
		$('.re_slide1 li:last').prependTo('.re_slide1 ul');
		$('.re_slide1 ul').css({marginLeft:-160}); 
		$('.re_slide1 ul').stop().animate({ marginLeft: 0 }, 800);
	}

	function nextsub1() {
		$('.re_slide1 ul').stop().animate({ marginLeft: -160 }, function () {
			$('.re_slide1 li:first').appendTo('.re_slide1 ul');
			$('.re_slide1 ul').css({ marginLeft: 0 });
		});
	}

	function slidesub1() {
		$('.re_slide1 ul').stop().animate({ marginLeft: -160 }, function () {
			$('.re_slide1 li:first').appendTo('.re_slide1 ul');
			$('.re_slide1 ul').css({ marginLeft: 0 });
		});
	}

	setInterval(slidesub1, 3000);

	$('.sub1_prev').click(function () {
		prevsub1();
	});

	$('.sub1_next').click(function () {
		nextsub1();
	});
});



/* 조회 회원 */

$(function() {
	function prevsub2() {
		$('.re_slide2 li:last').prependTo('.re_slide2 ul');
		$('.re_slide2 ul').css({marginLeft:-160}); 
		$('.re_slide2 ul').stop().animate({ marginLeft: 0 }, 800);
	}

	function nextsub2() {
		$('.re_slide2 ul').stop().animate({ marginLeft: -160 }, function () {
			$('.re_slide2 li:first').appendTo('.re_slide2 ul');
			$('.re_slide2 ul').css({ marginLeft: 0 });
		});
	}

	function slidesub2() {
		$('.re_slide2 ul').stop().animate({ marginLeft: -160 }, function () {
			$('.re_slide2 li:first').appendTo('.re_slide2 ul');
			$('.re_slide2 ul').css({ marginLeft: 0 });
		});
	}

	setInterval(slidesub2, 2000);

	$('.sub2_prev').click(function () {
		prevsub2();
	});

	$('.sub2_next').click(function () {
		nextsub2();
	});
});

