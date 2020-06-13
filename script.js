$(document).ready(function() {

    //Set the current day on the page header using moment.js
    $("#currentDay").text(moment().format('dddd' + ", " + 'MMMM Do'));

    //Create timeblocks
    var hours = [];
    var timeStart = 9;
    var timeEnd = 17;
    var timeNow = (moment().hour());

    for (var i = timeStart; i <= timeEnd; i++) {

        //Create timeblock and add to the container
        var timeBlockRow = $("<row>");
        timeBlockRow.addClass("time-block");
        timeBlockRow.attr("id", "time-block-" + i);
        $(".container").append(timeBlockRow);

        //Add hour to the hours array
        hours.push(i + ":00");

        //Append a div class=hour to the timeblock
        var hour = $("<div>");
        hour.addClass("hour");
        hour.attr("id", "hour-" + i);
        $("#time-block-" + i).append(hour);
        hour.text(hours[hours.length - 1]);

        //Append a text area for user to type in or edit a task
        var task = $("<textarea>");
        task.addClass("time-block");
        $("#time-block-" + i).append(task);
        //Compare the div class=hour value to the current time
        if (i < timeNow) {
            task.addClass("past");
        } else if (i == timeNow) {
            task.addClass("present");
        } else {
            task.addClass("future");
        }
        task.attr("task", i);
        var taskID = "task-ID" + i;
        task.text(localStorage.getItem(taskID));

        //Append buttons for each task
        var button = $("<button>");
        button.addClass("time-block");
        $("#time-block-" + i).append(button);
        button.text("Save Task");
        button.addClass("saveBtn");
        button.attr("button-id", i);
    }

    //Add button handling
    $(".saveBtn").on("click", saveTask);

    function saveTask() {
        event.preventDefault();
        //Get the task ID of the text field
        var taskID = $(this.previousElementSibling.attributes.task).val();
        //Get the text field value and save to local storage
        var taskText = $(this.previousElementSibling).val();
        localStorage.setItem("task-ID" + taskID, taskText);
    }

});