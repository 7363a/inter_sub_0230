/* 서브 메뉴 */

$(function () {
	$("#submenu_nav>ul a ").click(function () {
		var i = $(this).index();
		$("#submenu_nav>ul a li").removeClass("on1");
		$("#submenu_nav>ul a li").eq(i).addClass("on1");
	})
});