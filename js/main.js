$(function () {
    $('#about, #contact').hover(function () {
        switch ($(this).attr('id')){
            case 'about': $('#ref_about').addClass('nav-hover'); break;
            case 'contact':$('#ref_contact').addClass('nav-hover'); break;
        }

    },function () {
        switch ($(this).attr('id')){
            case 'about': $('#ref_about').removeClass('nav-hover'); break;
            case 'contact':$('#ref_contact').removeClass('nav-hover'); break;
        }
    });
    $('.full-block').hover(function () {
        $('#nav').css('opacity',0.5);
    }, function () {
        $('#nav').css('opacity',1);
    });
    $('.project').hover(function () {
        $('#ref_project').addClass('nav-hover');
    },function () {
        $('#ref_project').removeClass('nav-hover');
    })
});