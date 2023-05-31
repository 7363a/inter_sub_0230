/* 소설 분야*/

$.ajax({
	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query:"소설" },
	headers:{Authorization: "KakaoAK 8f2acc4c7c2927695f8f4a1e398e0c1e"}
})
.done(function( msg ) {

	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		var str=msg.documents[i].title;
		var sub1=str.substring(0,28);

		$(".re_slide1 > ul > li").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
		$(".re_slide1 > ul > li").eq(i).append("<p>" + sub1 + "</p>");

	}

});
/* 조회 회원*/
$.ajax({
	method: "GET",
	url: "https://dapi.kakao.com/v3/search/book?target=title",
	data: { query:"프레드릭 배크만" },
	headers:{Authorization: "KakaoAK 8f2acc4c7c2927695f8f4a1e398e0c1e"}
})
.done(function( msg ) {

	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		var str=msg.documents[i].title;
		var sub1=str.substring(0,28);

		$(".re_slide2 > ul > li").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
		$(".re_slide2 > ul > li").eq(i).append("<p>" + sub1 + "</p>");

	}

});