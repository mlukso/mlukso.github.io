'use strict';

$(document).ready(function() {
  let totalCredits = 0; //Number of clicks w/ auto incriment
  let totalCurrent = 0; //Number that displays in the box
  let totalValueIncrease = 0; //value indicator for how fast points can be accumulated

setInterval(intervalCreditGrowth,1000);

function intervalCreditGrowth() {
  totalCredits += totalValueIncrease;
  totalCurrent += totalValueIncrease;
  updateReport();
}

function updateReport() {
  $("#currentTotal").text(Math.floor(totalCurrent));

  if ($('#stormtrooper').data('cost') > totalCurrent) {
    $('#stormtrooper').css('background-color', 'gray')
    $('#stormtrooper').css('color', 'lightgray')
    $('#stormtrooper').css('cursor', 'default')
  } else {
    $('#stormtrooper').css('background-color', 'black')
    $('#stormtrooper').css('color', 'yellow')
    $('#stormtrooper').css('cursor', 'pointer')
  }

  if ($('#tiefighter').data('cost') > totalCurrent) {
    $('#tiefighter').css('background-color', 'gray')
    $('#tiefighter').css('color', 'lightgray')
    $('#tiefighter').css('cursor', 'default')
  } else {
    $('#tiefighter').css('background-color', 'black')
    $('#tiefighter').css('color', 'yellow')
    $('#tiefighter').css('cursor', 'pointer')
  }

  if ($('#stardestroyer').data('cost') > totalCurrent) {
    $('#stardestroyer').css('background-color', 'gray')
    $('#stardestroyer').css('color', 'lightgray')
    $('#stardestroyer').css('cursor', 'default')
  } else {
    $('#stardestroyer').css('background-color', 'black')
    $('#stardestroyer').css('color', 'yellow')
    $('#stardestroyer').css('cursor', 'pointer')
  }

  if ($('#deathstar').data('cost') > totalCurrent) {
    $('#deathstar').css('background-color', 'gray')
    $('#deathstar').css('color', 'lightgray')
    $('#deathstar').css('cursor', 'default')
  } else {
    $('#deathstar').css('background-color', 'black')
    $('#deathstar').css('color', 'yellow')
    $('#deathstar').css('cursor', 'pointer')
  }

  if ($('#sithlord').data('cost') > totalCurrent) {
    $('#sithlord').css('background-color', 'gray')
    $('#sithlord').css('color', 'lightgray')
    $('#sithlord').css('cursor', 'default')
  } else {
    $('#sithlord').css('background-color', 'black')
    $('#sithlord').css('color', 'yellow')
    $('#sithlord').css('cursor', 'pointer')
  }

}

$('#empire-logo').click(function () {

  totalCredits ++;
  totalCurrent ++;
  updateReport();
});



$(".buttons").click(function (){
  let addVal = $(this).data('cost');
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
    totalCurrent -= parseFloat($(this).data('cost').toPrecision(2));
    totalValueIncrease += parseFloat($(this).data('val'));
    $(this ).children("span").html( parseInt($(this).children("span").html()*1.15));
    $(this).data("cost", parseInt($(this).data( "cost" ) * 1.15));
  }

  updateReport();
});



});
