$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query:"오늘" },
  headers:{Authorization: "KakaoAK b2719fa9ddf5ddd546927b16f804f54a"}
})
.done(function( msg ) {





  var divs = document.getElementsByTagName('div');

  for(var i=0; i<divs.length; i++){

    $(".special_imgbox").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
    $(".special_textbox").eq(i).append("<h4>" + msg.documents[i].title + "</h4>"  + msg.documents[i].price + "원" + "</h4>" );

  }

});