function initMap() {
    var uluru = {lat: 49.833755, lng: 18.16357};

    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: uluru
    });

    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    })};

$(document).ready(function() {
    var countDownDate = new Date("Dec 24, 2019 00:00:00").getTime();

    var x = setInterval(function() {
    // today
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("counter").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    if (distance < 0) {
    clearInterval(x);
    document.getElementById("counter").innerHTML = "Vánoce jsou tady!!";
    }
    }, 1000);
    initMap();
})