$(document).ready(function () {
    $("#currentDay").text(moment().format('dddd' + ", " + 'MMMM Do'));

    //Create timeblocks

    var now = moment();
    console.log(now.startOf('day').format('hh a'));

    var hours = [];
    var hoursIDs = [];
    var past = [];
    var future = [];
    var timeNow = (moment().hour());
    console.log(timeNow);
    for (var i = now.startOf('day').hour(); i < 24; i++) {
        //Create timeblock and add to the container
        var timeBlockRow = `<row class=time-block id=time-block${[i]}></row>`;
        $(".container").append(timeBlockRow);
        //Add hour to the hours array
        hours.push(i + ":00");
        //Append a div class=hour to the timeblock
        var hourColumn = `<div class=col-3 id=time${[i]}>${hours[i]}</div>`
        $(`#time-block${[i]}`).append(hourColumn);
        $(`#time${[i]}`).addClass("hour");
        //Compare the div class=hour value to the current time
        if (i < timeNow) {
            $(`#time-block${[i]}`).append(`<textarea class = past id=text${[i]}>Past</textarea>`);
        } else if (i == timeNow) {
            $(`#time-block${[i]}`).append(`<textarea class = present id=text${[i]}>Present</textarea>`);
        }
        else $(`#time-block${[i]}`).append(`<textarea class = future  id=text${[i]}>Future</textarea>`);
        $(`#text${[i]}`).addClass("col-6");

        hoursIDs.push(i);
    }
});