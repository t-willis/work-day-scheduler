// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var hour = dayjs().hour() -12;
  $("#currentDay").text(dayjs().format("MMM D, YYYY"));
  $('.time-block').each(function() {
    var id = $(this).attr('id').split('-')[1];
    var rowHour = parseInt(id);

    if (hour > rowHour) {
      $(this).addClass('past');
    } else if (hour < rowHour) {
      $(this).addClass('future');
    } else {
      $(this).addClass('present');
    }
  });

  $(".saveBtn").on("click", function() {
    var btnParent = $(this).parent().children(".description").val();
    localStorage.setItem("description", btnParent);
  });

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  // FINISHED vvvv
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  // FINISHED ^^^^

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  // FINISHED vvvv
  // TODO: Add code to display the current date in the header of the page.
  // FINISHED ^^^^


  

});
