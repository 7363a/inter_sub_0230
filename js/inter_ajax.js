/* 인터파크 추천! */

$(function() {

$.ajax({
method: "GET",
url: "https://dapi.kakao.com/v3/search/book?target=title",
data: { query:"노력"},
headers:{Authorization: "KakaoAK 8f2acc4c7c2927695f8f4a1e398e0c1e"}
})
.done(function( msg ) {





var divs = document.getElementsByTagName('div');

for(var i=0; i<divs.length; i++){

  $(".main1_slide > li:nth-child(1) > .inter_imgbox").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
  $(".main1_slide > li:nth-child(1) > .inter_content > p").eq(i).append(msg.documents[i].title);


  var str=msg.documents[i].contents;
  var main1str2=str.substring(0,70);

  $(".main1_slide > li:nth-child(1) > .inter_content > .content > p").eq(i).append("<p>"+main1str2+"</p>");

}

});


$.ajax({
method: "GET",
url: "https://dapi.kakao.com/v3/search/book?target=title",
data: { query:"무너지지" },
headers:{Authorization: "KakaoAK 8f2acc4c7c2927695f8f4a1e398e0c1e"}
})
.done(function( msg ) {




var divs = document.getElementsByTagName('div');

for(var i=0; i<divs.length; i++){

  $(".main1_slide > li:nth-child(2) > .inter_imgbox").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
  $(".main1_slide > li:nth-child(2) > .inter_content > p").eq(i).append(msg.documents[i].title);


  var str=msg.documents[i].contents;
  var main1str2=str.substring(0,70);

  $(".main1_slide > li:nth-child(2) > .inter_content > .content > p").eq(i).append("<p>"+main1str2+"</p>");

}

});


$.ajax({
method: "GET",
url: "https://dapi.kakao.com/v3/search/book?target=title",
data: { query:"코딩" },
headers:{Authorization: "KakaoAK 8f2acc4c7c2927695f8f4a1e398e0c1e"}
})
.done(function( msg ) {




var divs = document.getElementsByTagName('div');

for(var i=0; i<divs.length; i++){

  $(".main1_slide > li:nth-child(3) > .inter_imgbox").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
  $(".main1_slide > li:nth-child(3) > .inter_content > p").eq(i).append(msg.documents[i].title);


  var str=msg.documents[i].contents;
  var main1str2=str.substring(0,70);

  $(".main1_slide > li:nth-child(3) > .inter_content > .content > p").eq(i).append("<p>"+main1str2+"</p>");

}

});


$.ajax({
method: "GET",
url: "https://dapi.kakao.com/v3/search/book?target=title",
data: { query:"제이쿼리" },
headers:{Authorization: "KakaoAK 8f2acc4c7c2927695f8f4a1e398e0c1e"}
})
.done(function( msg ) {



var divs = document.getElementsByTagName('div');

for(var i=0; i<divs.length; i++){

  $(".main1_slide > li:nth-child(4) > .inter_imgbox").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
  $(".main1_slide > li:nth-child(4) > .inter_content > p").eq(i).append(msg.documents[i].title);


  var str=msg.documents[i].contents;
  var main1str2=str.substring(0,70);

  $(".main1_slide > li:nth-child(4) > .inter_content > .content > p").eq(i).append("<p>"+main1str2+"</p>");

}

});



});