$(function () {
  var saveButton = $(".saveBtn");
  saveButton.on("click", function () {
    var timeBlock = $(this).parent();
    var hourId = timeBlock.attr("id");
    var description = timeBlock.find(".description").val();

    localStorage.setItem(hourId, description);
  });

  //get the current hour dayjs()
  var currentHour = dayjs().format("H");

  //loop through hours to apply ppf class
  $(".time-block").each(function () {
    var hourBlock = $(this).attr("id");
    //get the hour number from the id
    var hourNum = parseInt(hourBlock.split("-")[1]);

    //grab description values for local storage
    var description = localStorage.getItem(hourBlock);
    if (description) {
      $(this).find(".description").val(description);
    }
    //remove current PPF class and add updated class given the time
    $(this).removeClass("past present future");

    if (hourNum < currentHour) {
      $(this).addClass("past");
    } else if (hourNum == currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  //display current day
  var dayId = $("#currentDay");
  var currentDay = dayjs().format("MMMM D, YYYY");

  dayId.text(currentDay);
});
