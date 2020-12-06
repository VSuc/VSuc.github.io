$(document).ready(function(){
    //Zavreni popularnich
    $(".popular-posts-title").on("click",function(){
        $("#popular-wrapper").slideToggle("slow");
    })

    //Bocni menu sipka
    $("#side-arrow-wrapper").on("click",function(){
        if(!($("#blog-content #blog-side").hasClass("active"))){
            $("#blog-content #blog-side").addClass("active");
            $("#blog-side #side-arrow").removeClass("left");
            $("#blog-side #side-arrow").addClass("right");
        }
        else
        {
            $("#blog-content #blog-side").removeClass("active")
            $("#blog-side #side-arrow").removeClass("right");
            $("#blog-side #side-arrow").addClass("left");
        }
    });

    //Ukazat vse
    $("#blog-all").on("click", function(){
        $("#blog-icons .blog-icon").removeClass("active-icon");
        updatePosts();
    })

    //Update vyhledavani
    function  updatePosts(){
        if($("#blog-icons .blog-icon").hasClass("active-icon"))
        {
            $("#blog-icons .row").children().each(function()
            {
                if($(this).hasClass("active-icon")){
                    $("#blog-posts").children(".post-wrapper." + $(this).text()).css("display","flex");
                }
                else
                {
                    $("#blog-posts").children(".post-wrapper." + $(this).text()).css("display","none");
                }
            })
        }
        else
        {
            $("#blog-posts").children(".post-wrapper").css("display","flex");
        }
        
    }

    //Vyhledavani
    $("#blog-icons .blog-icon").on("click", function(){
        if($(this).hasClass("active-icon"))
        {
            $(this).removeClass("active-icon")
        }
        else
        {
            $(this).addClass("active-icon")
        }
        updatePosts();
    });

    $("#blog-side .posts-categories li").on("click",function(){
        $("#blog-icons .row").children().removeClass("active-icon");
        $("#blog-icons .row").children(".icon-"+$(this).attr("alt")).addClass("active-icon");

        updatePosts();
    } )
    
    //Fullscreen clanek
    $("#blog-posts .detail-button").click(function(){
        if($(this).hasClass("show-fullscreen")) {
            //Otevrit
            $(this).closest(".post-wrapper").addClass("fullscreen")
            $("body").css("overflow-y", "hidden"); 
            $(this).removeClass("show-fullscreen");
            $(this).addClass("hide-fullscreen");
            $(this).html("Zavřít článek");
            $('<div/>', {
                id: 'blackout'
            }).appendTo("body");
            console.log("xx")
        }
        else{ 
            //Zavrit
            $(".post-wrapper.fullscreen").removeClass("fullscreen")
            $("body").css("overflow-y", "auto"); 
            $(this).removeClass("hide-fullscreen");
            $(this).addClass("show-fullscreen");
            $(this).html("Celý článek");
            $("#blackout").remove();
        }

    })

    $(document).on('keyup',function(evt) {
        if (evt.keyCode == 27) {
            $(".post-wrapper.fullscreen").find(".detail-button").removeClass("hide-fullscreen");
            $(".post-wrapper.fullscreen").find(".detail-button").addClass("show-fullscreen");
            $(".post-wrapper.fullscreen").find(".detail-button").html("Celý článek");
            $(".post-wrapper.fullscreen").removeClass("fullscreen");
            $("body").css("overflow-y", "auto");
            $("#blackout").remove();
        }
    });

    //Protaceni obrazku
    $(function(){
        window.setInterval(() => {
            var activeImages = $("#popular-wrapper .popular-active");
            var hiddenImages = $("#popular-wrapper .popular-hidden");
            $("#popular-row").children(".popular-active").stop(true,true).slideUp(1000, function(){
                activeImages.removeClass("popular-active");
                activeImages.addClass("popular-hidden");

                hiddenImages.removeClass("popular-hidden");
                hiddenImages.addClass("popular-active");
                $("#popular-row").children(".popular-active").delay(500).slideDown(500, function(){
                    
                })
            });
            
            if($("#popular-posts .slide-dots").children(".active-dot").next().length!=0) {
                oldDot = $("#popular-posts .slide-dots").children(".active-dot")
                oldDot.next().addClass("active-dot")
                oldDot.removeClass("active-dot")
            }
            else {
                oldDot = $("#popular-posts .slide-dots").children(".active-dot")
                oldDot.prev().addClass("active-dot")
                oldDot.removeClass("active-dot")
            }
        }, 5000);
        })

})