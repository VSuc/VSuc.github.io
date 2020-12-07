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

