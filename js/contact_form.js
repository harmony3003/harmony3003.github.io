$(function() {
    //фкнкция вызова формы обратной связи
    $('.callback').click(function(){
        //появление окна обратной связи
        $('#popup').fadeIn();
        //добавляем к окну иконку закрытия
        $('#popup').append('<a id="popup_close"></a>');
        //расчитываем высоту и ширину всплывающего окна что бы вывести окно прямо по центру экрана
        q_width = $('#popup').outerWidth()/-2;
        q_height = $('#popup').outerHeight()/-2;
        $('#popup').css({
            'margin-left': q_width,
            'margin-top': q_height
        });
        //выводим затемение страницы и делаем полупрозрачным
        $('body').append('<div id="fade"></div>');
        $('#fade').fadeIn();
        return false;
    });

    //функция закрытия окна
    $('body').on('click', '#popup_close, #fade',function() {
        $('#fade').fadeOut(function() {
            $('#fade').remove();
            $('#popup_close').remove();
            $('#popup').fadeOut();
        });
    });

});