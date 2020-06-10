$(document).ready(function () {
    $("#currentDay").text(moment().format('dddd' + ", " + 'MMMM Do'));

    //Create timeblocks

    var now = moment();
    console.log(now.startOf('day').format('hh a'));

    var hours = [];
    var hoursIDs = [];
    var timeNow = (moment().hour());
        console.log(timeNow);
    for (var i = now.startOf('day').hour(); i < 24; i++) {
        //Create timeblock and add to the container
        var timeBlockID = "<div class=time-block id=time-block" + [i] + "></div>";
        $(".container").append(timeBlockID);
        //Add hour to the hours array
        hours.push(i + ":00");
        //Append a div class=hour to the timeblock
        $("#time-block"+[i]).append("<div class=hour id=time" + [i] + ">" + hours[i] + "</div>");
        //Compare the div class=hour value to the current time
        //var hh = hours[i].match(/^(\d+)[ :,](\d+)$/);
        //hh = parseInt(hh[1]);
        if (i < timeNow) {
             console.log(i + " is in the Past.");
         } else console.log(i + " is now or later.");
        hoursIDs.push(i);
    }
});