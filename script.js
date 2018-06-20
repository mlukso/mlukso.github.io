'use strict';

$(document).ready(function() {
  let totalCredits = 0; //Number of total points
  let totalCurrent = 0; //Number of current credits which is displayed in the HTML
  let totalValueIncrease = 0; //Value indicator for how fast points can be accumulated

//Interval for the points increasing automatically
setInterval(intervalCreditGrowth,1000);

//Function to increase the amount of credits given when purchases are made
function intervalCreditGrowth() {
  totalCredits += totalValueIncrease;
  totalCurrent += totalValueIncrease;
  updateReport();
}

//Updating the current total of Galactic Credits
function updateReport() {
  $("#currentTotal").text(Math.floor(totalCurrent));

//Adjusting the CSS based on whether you can purchase any of the troops
  if ($('#stormtrooper').data('cost') > totalCurrent) {
    $('#stormtrooper').css('background-color', 'gray')
    $('#stormtrooper').css('color', 'lightgray')
    $('#stormtrooper').css('cursor', 'default')
    $('#stormtrooper').css('animation-name', 'none')
  } else {
    $('#stormtrooper').css('background-color', 'black')
    $('#stormtrooper').css('color', 'yellow')
    $('#stormtrooper').css('cursor', 'pointer')
    $('#stormtrooper').css('animation-name', 'click')
  }

  if ($('#tiefighter').data('cost') > totalCurrent) {
    $('#tiefighter').css('background-color', 'gray')
    $('#tiefighter').css('color', 'lightgray')
    $('#tiefighter').css('cursor', 'default')
    $('#tiefighter').css('animation-name', 'none')
  } else {
    $('#tiefighter').css('background-color', 'black')
    $('#tiefighter').css('color', 'yellow')
    $('#tiefighter').css('cursor', 'pointer')
    $('#tiefighter').css('animation-name', 'click')
  }

  if ($('#stardestroyer').data('cost') > totalCurrent) {
    $('#stardestroyer').css('background-color', 'gray')
    $('#stardestroyer').css('color', 'lightgray')
    $('#stardestroyer').css('cursor', 'default')
    $('#stardestroyer').css('animation-name', 'none')
  } else {
    $('#stardestroyer').css('background-color', 'black')
    $('#stardestroyer').css('color', 'yellow')
    $('#stardestroyer').css('cursor', 'pointer')
    $('#stardestroyer').css('animation-name', 'click')
  }

  if ($('#deathstar').data('cost') > totalCurrent) {
    $('#deathstar').css('background-color', 'gray')
    $('#deathstar').css('color', 'lightgray')
    $('#deathstar').css('cursor', 'default')
    $('#deathstar').css('animation-name', 'none')
  } else {
    $('#deathstar').css('background-color', 'black')
    $('#deathstar').css('color', 'yellow')
    $('#deathstar').css('cursor', 'pointer')
    $('#deathstar').css('animation-name', 'click')
  }

  if ($('#sithlord').data('cost') > totalCurrent) {
    $('#sithlord').css('background-color', 'gray')
    $('#sithlord').css('color', 'lightgray')
    $('#sithlord').css('cursor', 'default')
    $('#sithlord').css('animation-name', 'none')
  } else {
    $('#sithlord').css('background-color', 'black')
    $('#sithlord').css('color', 'yellow')
    $('#sithlord').css('cursor', 'pointer')
    $('#sithlord').css('animation-name', 'click')
  }

}

//Adds to the current total in the HTML and the total when the logo is clicked
$('#empire-logo').click(function () {

  totalCredits ++;
  totalCurrent ++;
  updateReport();
});

//Checks to see if you have enough credits to purchase troops
//Appends the image into the container for what you purchased
$(".buttons").click(function (){

  if ($(this).data('cost') < totalCurrent) {
    if ($(this).attr('id') === "stormtrooper") {
      $('#stormtrooper-icon').append('<div><img src="img/stormtrooper.png" width="50px" height:"auto"></div>')
    } else if ($(this).attr('id') === "tiefighter") {
      $('#tiefighter-icon').append('<div><img src="img/tie_fighter.png" width="75px" height:"auto"></div>')
    } else if ($(this).attr('id') === "stardestroyer") {
      $('#stardestroyer-icon').append('<div><img src="img/star_destroyer.png" width="150px" height:"auto"></div>')
    } else if ($(this).attr('id') === "deathstar") {
      $('#deathstar-icon').append('<div><img src="img/Death_Star.png" width="200px" height:"auto"></div>')
    } else if ($(this).attr('id') === "sithlord") {
      $('#sithlord-icon').append('<div><img src="img/sith_lord.JPEG" width="225px" height:"auto"></div>')
    }
//Deducts the cost of your purchase from your total current credits
    totalCurrent -= parseFloat($(this).data('cost').toPrecision(2));
//Incriments the totalValueIncrease so you get more credits based on the 'val' of your purchase
    totalValueIncrease += parseFloat($(this).data('val'));
//Incriments the cost of troops after a purchase
    $(this ).children("span").html( parseInt($(this).children("span").html()*1.15));
//Incriments the actual cost of troops after a purchase
    $(this).data("cost", parseInt($(this).data( "cost" ) * 1.15));
  }

  updateReport();
});



});
