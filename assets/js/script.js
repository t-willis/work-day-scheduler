$(function () {
  var hour = dayjs().hour();
  // printing date to currentDay id in header
  $("#currentDay").text("Todays date: " + dayjs().format("MMM D, YYYY"));
  // color change for divs based on time of day
  $('.time-block').each(function() {
    var id = $(this).attr('id').split('-')[1];
    var rowHour = parseInt(id);
    (hour > rowHour) ? $(this).addClass('past')
    : (hour < rowHour) ? $(this).addClass('future') 
    : $(this).addClass('present');
  });
  // click event for all buttons to save input to localStorage
  $(".saveBtn").on("click", function() {
    var inputText = $(this).parent().children(".description").val();
    var inputParent = $(this).parent().attr("id");
    localStorage.setItem(inputParent, inputText);
  });

  // click event to clear all localStorage and refresh browser
  $(".clearBtn").on("click", function() {
    localStorage.clear();
    location.reload();
  });

  // for loop to getItem from localStorage and populate textarea in html
for (let i = 9; i < 18; i++) {
  var savedInput = (localStorage.getItem("hour-" + [i]));
  $("#hour-" + [i]).children(".description").text(savedInput);
}});