// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
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

    $(this).removeClass("past present future");

    if (hourNum < currentHour) {
      $(this).addClass("past");
    } else if (hourNum == currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  var dayId = $("#currentDay");
  var currentDay = dayjs().format("MMMM D, YYYY");

  dayId.text(currentDay);
});
