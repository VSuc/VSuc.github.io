$(document).ready(function(){

    $('html,body').animate({
        scrollTop: $("#content").offset().top-40},
        'slow');

    $("#header-button").click(function() {
        $('html,body').animate({
            scrollTop: $("#content").offset().top-40},
            'slow');
    });

    
    $('#reasons .reason').on('click', function() {
        if(!($(this).hasClass("active-reason"))) {
            $("#reasons .reason.active-reason").removeClass("active-reason");

            $("#reasons .reasons-list.row .reason").eq(($(this).children("span").html())-1).addClass("active-reason");

            $("#reasons .reason-text .active-reason-text").slideUp(300);
            $("#reasons .reason-text .active-reason-text").removeClass("active-reason-text");

            $("#reasons .reason-text").children("p").eq(($(this).children("span").html())-1).slideDown(1000);
            $("#reasons .reason-text").children("p").eq(($(this).children("span").html())-1).addClass("active-reason-text");
        }
    
        /*($(this).html())*/
    });

})