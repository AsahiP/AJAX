'use strict';

// PART 1: SHOW A FORTUNE

//$.get('/adjective', response => {
//   $('#adjective').text(response);
// });

function showFortune(evt) {

  $.get('/fortune', response => {
    $('#fortune-text').html(response);
  });
}

$('#get-fortune-button').on('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();

  const url = '/weather.json';
  const formData = {zipcode: $('#zipcode-field').val()};
  //                {'zipcode' : ~user input~} --> {'zipcode' : '32567'}
          //weather = {'zipcode'(93838): {'forecast': 'some weather', 'temp: 80F'}

  $.get(url, formData, res => {
    // $('#weather-info').html(res['temp']);
    // $('#weather-info').html(res['forecast']);
    alert(`${res.temp}`);
    alert(`${res.forecast}`);
    
//   });

//   // TODO: request weather with that URL and show the forecast in #weather-info
// }

// PART 3: ORDER MELONS

// Show the result’s message text in the #order-status div.

function orderMelons(evt) {
  evt.preventDefault();

  const formData = { 
    melon_type: $("#melon-type-field" ).val(),
    qty: $("#qty-field").val()
  };
  
  $.post('/order-melons.json', formData, res => {
    alert(res.msg);
  });

  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$('#order-form').on('submit', orderMelons);
