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
    var inputText = $(this).parent().children(".description").val();
    var inputParent = $(this).parent().attr("id");
    localStorage.setItem(inputParent, inputText);
  });
for (let i = 9; i < 18; i++) {
  var savedInput = (localStorage.getItem("hour-" + [i]));
  $("#hour-" + [i]).children(".description").text(savedInput);
}});