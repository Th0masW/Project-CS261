
function getThemeParkTimes() {

    let xhttp = new XMLHttpRequest();
  
    // build the URL for the API call
    str = window.location.pathname;
    base_url = str.slice(0, str.lastIndexOf("/"));
    var park = str.replace('/', '');
    console.log(park);
    url = "//" + window.location.host + base_url + "/getridetimes";
    params = '?park=' + park;
    //Usual request, nothing to see here
    xhttp.open("GET", url + params, true);
    //console.log(url);
    xhttp.onreadystatechange = function() {
      if(xhttp.readyState === 4 && xhttp.status === 200) {
        response = JSON.parse(xhttp.responseText);
        requestOutput(response);
      }
    };
    xhttp.send();
 
  }
function requestOutput(response){
var htmlString = ""; //init string to empty

  for(i=0; i < response.length;i++) {
    //have to create variable, fails if just using value from response JavaScript...


    var rideActive = response[i].active;
    //console.log(" Line 57");
    if(response[i].waitTime > 60 && rideActive){
    htmlString += "<div class=\"red\">" + 
    response[i].name + "<br>" +
    + response[i].waitTime + " Minute Wait"
    + "</div>";     
    } else if (response[i].waitTime > 16 && rideActive) {
      htmlString += "<div class=\"orange\">" + 
    response[i].name + "<br>" +
    + response[i].waitTime + " Minute Wait"
    + "</div>"; 
    } else if (response[i].waitTime > 5 && rideActive) {
      htmlString += "<div class=\"green\">" + 
    response[i].name + "<br>" +
    + response[i].waitTime + " Minute Wait"
    + "</div>"; 
    }
}
//check to see if string is still empty, that means the park is closed, or there is zero wait
// time, which is very very unlikely. I was at Magic Kingdom the week of Sept. 11, that was the
// slowest ever.
if(htmlString == "") {
   htmlString += "<div class=\"closed\">" + 
  "Looks like the park is closed, or there are no wait times, so get over there ASAP. We kid, pretty sure the park is closed." 
  + "</div>"; 
  }
 document.getElementById("ridetimes").innerHTML = htmlString;

var htmlString ="";
  for(i=0; i < response.length;i++) {
    var rideActive = response[i].active;
    if(response[i].waitTime < 5 && rideActive){
    htmlString += "<div class=\"blue\">" + 
    "Ride: " + response[i].name + "<br>" +
    + response[i].waitTime + " Minute Wait"
    + "</div>";
    }
    //console.log("end of loop #: " + i);
  }
  if(htmlString == "") {
     htmlString += "<div class=\"closed\">" + 
    "Looks like the park is closed, or there are no wait times, so get over there ASAP. We kid, pretty sure the park is closed." 
    + "</div>"; 
    }
    document.getElementById("zer0ridetimes").innerHTML = htmlString;

var htmlString ="";
    // Show all closed or inactive rides
  for(i=0; i < response.length;i++) {
    var rideActive = response[i].active;

    if(!rideActive){
    htmlString += "<div class=\"gray\">" + 
    "Ride: " + response[i].name + "<br>" +
    "Active: " + response[i].active + "<br>" +
    "Waiting time: " + response[i].waitTime 
    + "</div>";
    }
  }
    document.getElementById("inactiveRides").innerHTML = htmlString;
}
