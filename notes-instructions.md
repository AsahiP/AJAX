Hackbright morning lab
9/22/21 
AJAX

https://fellowship.hackbrightacademy.com/materials/serft8/exercises/ajax/

Goals: To practice basic AJAX patterns using jQuery’s $.get() and $.post() methods.

In this exercise, you’ll be working with a small Flask application. It has three features:

provide a random fortune

provide a weather forecast for a zipcode

handle ordering melons

The Flask server file is server.py.
IMPORTANT: DO NOT CHANGE the server file in this exercise. The only thing you’ll need to change is the JavaScript file. 


### Part 1: Random Fortune ###

[ACTION] user clicks the “Get Fortune” button.
[RESULT] the user to gets a random fortune. This fortune should appear in the #fortune-text div. 

This should not` be a full new HTML page. Instead, the fortune should be fetched and placed into the existing page using an AJAX-style call.

There is already a route in the Flask server for this, at /fortune. It returns just the text of a fortune. You can test this out by going to the URL http://localhost:5000/fortune and seeing that it returns just the text of a single fortune.

Fill in the function in the JavaScript file to load the text returned by this route and put it into the #fortune-text div. You’ll use the $.get() method. (If needed, refer to the lecture notes for a good example.)

### Part 2: Weather ###
We want the user to be able to type in a zipcode and get a forecast back for that zipcode.

There is already a route in the Flask server, /weather, that returns a JSON object like this:

{temp: TEMP, forecast: FORECAST}

We don’t want to actually show the temperature on the page, though, just the forecast. This is a common pattern: APIs tend to return a lot of data, and we only want to show some.

Fill in the missing parts of the function in the JavaScript file. You’ll need to decide which kind of AJAX call to make, and how to extract the forecast from the JSON object you get back.

### Part 3: Ordering Melons ###
We want the users to be able to order melons using an AJAX-style form.

There is already a route in the Flask server, /order-melons, to handle processing the data. It returns a JSON object with a status code and a text message.

Fill in the missing parts of the JavaScript file. You’ll need to use jQuery’s $.post() method to make a request to that route, using the data from the form. Then, take the returned result object and extract the status code and message.