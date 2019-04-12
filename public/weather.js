function weather() {
    //Create a container to hold html
    var weatherHTML = document.getElementById("weather");

//create listner for button click
        var zipCode = '32836'; //easier to change later if need be....
        var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        displayWeather(myObj); 
    } 
};
xmlhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&units=imperial&appid=b15cb1a670b75de35d5bbb19f0754981", true);
xmlhttp.send(); 


function displayWeather(myObj){
var options = {timeZone: "America/New_York"}; //Set to EST
var sunUp = myObj.sys.sunrise * 1000;
var sunrise = new Date(sunUp).toLocaleTimeString("en-US", options);
var sunDown = myObj.sys.sunset * 1000;
var sunset = new Date(sunDown).toLocaleTimeString("en-US", options);

console.log(myObj.name);


var htmlWeatherString = "<div class=\"weatherBox\"><strong>Current Weather: </strong></div>" 
+ "<div class=\"weatherBox\">" + Math.round(myObj.main.temp) + "&#176 Degrees </div>"
+ "<div class=\"weatherBox\">" + myObj.weather[0].description  + "</div>"
+ "<div class=\"weatherBox\">" + myObj.main.humidity  + "&#37 Humidity" + "</div>"
+ "<div class=\"weatherBox\">" + Math.round(myObj.wind.speed)  + " MPH Wind</div>"
+ "<div class=\"weatherBox\">Sunrise: " + sunrise + "</div>"
+ "<div class=\"weatherBox\">Sunset: " + sunset + "</div>";

document.getElementById("weather").innerHTML = htmlWeatherString;
   
}

}