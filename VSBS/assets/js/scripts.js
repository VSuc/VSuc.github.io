$("#header-button").click(function() {
    $('html,body').animate({
        scrollTop: $("#content").offset().top-40},
        'slow');
});


function countup(){
        var now = new Date();
        var eventDate = new Date(1992, 5, 22);

        var currentTiime = now.getTime();
        var eventTime = eventDate.getTime();

        var remTime =  currentTiime - eventTime;
        var days = Math.floor(remTime/(24*3600*1000));
        var months = Math.floor(days/30);
        var years = Math.floor(months/12);
        
        months %= 12;
        days %=30;


        document.getElementById("days").textContent = days;
        document.getElementById("months").textContent = months;
        document.getElementById("years").textContent = years;

        setTimeout(countup, 1000);
    }

    countup();


$(function(){
    
    var latestImgArray=new Array();
    latestImgArray[0]="./assets/img/latest0.jpeg"
    latestImgArray[1]="./assets/img/latest1.jpeg"
    latestImgArray[2]="./assets/img/latest2.jpeg"
    latestImgArray[3]="./assets/img/latest3.jpeg"
    latestImgArray[4]="./assets/img/latest4.jpeg"
    latestImgArray[5]="./assets/img/latest5.jpeg"

    var imageText = new Array();
    imageText[0]="Naše práce #1";
    imageText[1]="Naše práce #2";
    imageText[2]="Naše práce #3";
    imageText[3]="Naše práce #4";
    imageText[4]="Naše práce #5";
    imageText[5]="Naše práce #6";
    var count=2 
    window.setInterval(function(){
        $("#dot" + (count/2)).removeClass("active-dot")
        
        if(count==6){
            count=0
        }
        $("#big1").attr("src",latestImgArray[count]);
        $("#big2").attr("src",latestImgArray[count+1]);
        $("#big1text").text(imageText[count]);
        $("#big2text").text(imageText[count+1]);
           /*
            $("#big1").fadeTo("slow",0, function() {
                $("#big1").attr("src",latestImgArray[count]);
                $("#big1").on('load', function(){
                    $("#big1").fadeTo(1500,1);
                });
            });

            $("#big2").fadeTo("slow",0, function() {
                $("#big2").attr("src",latestImgArray[count+1]);
                $("#big2").on('load', function(){
                    $("#big2").fadeTo(1500,1);
                });
            });*/
        $("#big1ref").attr("href",latestImgArray[count]);
        $("#big2ref").attr("href",latestImgArray[count+1]);
        count=count+2;
        $("#dot" + (count/2)).addClass("active-dot");

    },5000);

    
})

