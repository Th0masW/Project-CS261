
function getThemeParkTimes() {

    let xhttp = new XMLHttpRequest();
  
    // build the URL for the API call
    str = window.location.pathname;
    base_url = str.slice(0, str.lastIndexOf("/"));
    var park = str.replace('/', '');
    console.log(park);
    url = "//" + window.location.host + base_url + "/getridetimes";
    params = '?park=' + park;
    
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
var htmlString = "";

  for(i=0; i < response.length;i++) {
    var rideActive = response[i].active;
    var rideWaitTime = response[i].waitTime;
    var z = 1;
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

if(htmlString == "") {
 
  htmlString += "<div class=\"box\">" + 
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
 
    htmlString += "<div class=\"box\">" + 
    "Looks like the park is closed, or there are no wait times, so get over there ASAP. We kid, pretty sure the park is closed." 
    + "</div>"; 
  
    }
    document.getElementById("zer0ridetimes").innerHTML = htmlString;
//console.log(htmlString);

var htmlString ="";
//console.log("Line  95");
  for(i=0; i < response.length;i++) {
    var rideActive = response[i].active;

    if(!rideActive){
    htmlString += "<div class=\"gray\">" + 
    "Ride: " + response[i].name + "<br>" +
    "Active: " + response[i].active + "<br>" +
    "Waiting time: " + response[i].waitTime 
    + "</div>";
    }
    //console.log("end of loop #: " + i);
  }
    document.getElementById("inactiveRides").innerHTML = htmlString;
//console.log(htmlString);

}
