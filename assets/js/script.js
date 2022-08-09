// Display today's time and date
var today = moment().format('dddd - MMMM DD YYYY');
$("#currentDay").html(today);

$(document).ready(function () {
    // saveButton click listener
    $(".saveBtn").on("click", function () {
        // from JQuery, obtain the values of the description 
        var desc = $(this).siblings(".description").val();
        var clock = $(this).parent().attr("id");

        // Save description to local storage
        localStorage.setItem(clock, desc);
        alert("Appointment Added to localStorage! ✅");
    })
   
    function checkTime() {
        //get current hour.
        var clockTime = moment().hour();

        // loop over block of time
        $(".time-block").each(function () {
            var currTime = parseInt($(this).attr("id").split
            ("BlkHour")[1]);

            // Check current time and show past/present/future in different colors
            // if (currTime < clockTime) {
            //     $(this).addClass("past");
            //     $(this).removeClass("present");
            //     $(this).removeClass("future");
            // }
            // else if (currTime === clockTime) {
            //     $(this).removeClass("past");
            //     $(this).removeClass("future");
            //     $(this).addClass("present");
            // }
            // else {
            //     $(this).removeClass("present");
            //     $(this).removeClass("past");
            //     $(this).addClass("future");

            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
            if (currTime < clockTime) {
                $(this).addClass("past")};
            if (currTime === clockTime) {
                $(this).addClass("present")};
            if (currTime > clockTime) {
                $(this).addClass("future")};

           // }
        })
    }

    // Get locally stored item and display
    $("#BlkHour9 .description").val(localStorage.getItem("BlkHour9"));
    $("#BlkHour10 .description").val(localStorage.getItem("BlkHour10"));
    $("#BlkHour11 .description").val(localStorage.getItem("BlkHour11"));
    $("#BlkHour12 .description").val(localStorage.getItem("BlkHour12"));
    $("#BlkHour13 .description").val(localStorage.getItem("BlkHour13"));
    $("#BlkHour14 .description").val(localStorage.getItem("BlkHour14"));
    $("#BlkHour15 .description").val(localStorage.getItem("BlkHour15"));
    $("#BlkHour16 .description").val(localStorage.getItem("BlkHour17"));
    $("#BlkHour18 .description").val(localStorage.getItem("BlkHour18"));
    $("#BlkHour19 .description").val(localStorage.getItem("BlkHour19"));

    checkTime();
})