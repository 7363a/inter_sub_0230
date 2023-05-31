/* slide 왼쪽 책 이미지에 마우스 커서 올리면 배너 나타남 */

$(function () {
    $('#slider_left').mouseenter(function(){
        if($('#slider_left_hover').css("display")=="none"){
            $('#slider_left_hover').animate({
                width:"toggle",
                height:"toggle",
                opacity:'1'
            },'slow');
        }
    });

    $('.hover_close1').click(function(){
        $('#slider_left_hover').animate({
            width:"toggle",
            height:"toggle",
            opacity:"0"
        },'slow');
    });

    $('.hover_close2').click(function(){
        $('#slider_left_hover').animate({
            width:"toggle",
            height:"toggle",
            opacity:"0"
        },'slow');
    });
});