var currentTime = dayjs().format('HH');

$(document).ready(function () { 
  //This prevents anything from being executed prior to the page loading.


  $('#currentDay').text(dayjs().format('dddd, MMMM Do, YYYY'));
  console.log(currentDay);
   // This formats the Date and displays it to the page.

  $('.saveBtn').click(function() {
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();
    //This click function parses through the DOM to check for any text values entered.
    localStorage.setItem(time, text);
    // This takes the value of text and saves it to local storage.
  })

  for (let i = 9; i < 18; i++) {
    if (currentTime < i)  {
      $(".time-block").eq(i - 9).addClass("future");
    } else if (currentTime > i) {
      $(".time-block").eq(i - 9).addClass("past"); 
    } else {
      $(".time-block").eq(i - 9).addClass("present");
    }  
  }

  var mainDiv = $('#main').children('.row'); //Targets the main <div> and all associated children with the class of row
  for (let i = 0; i < mainDiv.length; i++) { // Loops through the total length of the main Div's Children with class of row
    var mainDivPosition = mainDiv.eq(i).attr('id'); //the .eq() selects an element with a specific index number starting from zero
    var values = localStorage.getItem(mainDivPosition);
    console.log(mainDivPosition); // Check the console to make sure that all the main Div's are picked up
    console.log(values); // Shows in the console what the values are inside the local storage
    mainDiv.eq(i).children(".description").val(values); // Uses the .eq to ensure that whatever is in the value are in local storage is repopulated on the page. 
  }
  
});