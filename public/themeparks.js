var t = 0;
var z = 0;

function myCanvas(rideWaitTime) {
  var colorRed = "red";
  var done = "\"";
  //console.log("myCanvas index: " + z + " time: " + rideWaitTime);
 if(rideWaitTime > 10) {stuff = "<canvas name = \"red\" width=\"150\" height=\"40\" id =\"" + colorRed + z  + done; z++;}
 else if(rideWaitTime > 20) stuff = "<canvas width=\"100\" height=\"20\" style=\"border:10px solid #d3d3d3;\"></canvas>";
else stuff = "<canvas width=\"100\" height=\"20\" style=\"border:1px solid #d3d3d3;\"></canvas>";

return stuff;
}

function getThemeParkInfo() {

    let xhttp = new XMLHttpRequest();
  
    // build the URL to work on both the local machine and heroku
    let str = window.location.pathname;
    let base_url = str.slice(0, str.lastIndexOf("/"));
    var park = str.replace('/', '');
    console.log(park);
    let url = "//" + window.location.host + base_url + "/getridetimes";
    let params = '?park=' + park;
    
    // begin get request
    xhttp.open("GET", url + params, true);
    //console.log(url);
    xhttp.onreadystatechange = function() {
      if(xhttp.readyState === 4 && xhttp.status === 200) {
        let response = JSON.parse(xhttp.responseText);
        //console.log(response);
        let times = [];
        let rides = [];
        for(let i = 0; i < response.length; i++) {
         // requestoutput(response);
/*           if(response[i].waitTime > 5) {
           //console.log("Ride: "+ response[i].name);
           //console.log("WaitTime: "+ response[i].waitTime);
           //console.log("Active?: "+ response[i].active);
          requestoutput(response);
          } */  


        }
        requestoutput(response);
        //timeGraph();
      }
    };
    xhttp.send();
 
  }
function requestoutput(response){
var htmlString = "";

//console.log("how many: " + response.length);
  for(i=0; i < response.length;i++) {
    var rideActive = response[i].active;
    var rideWaitTime = response[i].waitTime;
    var z = 1;
    //console.log(" Line 57");
    if(response[i].waitTime > 5 && rideActive){
      
      //console.log("inner loop for I: " + i + " count" + t); t++;
    htmlString += "<div class=\"red\">" + 
    "Ride: " + response[i].name + "<br>" +
    "Active: " + response[i].active + "<br>" +
    "Waiting time: " + response[i].waitTime + "<br>"
    + myCanvas(rideWaitTime)  
    + ">"
    + "</div>";
      //console.log("z-index: " + z);
      
    }
    
    //console.log("z-index2: " + z);
    //console.log("Line 71:  " + response[i].name);
   //console.log("end of loop #: " + i);
}

if(htmlString == "") {
 
  htmlString += "<div class=\"box\">" + 
  "Looks like the park is closed, or there are no wait times, so get over there ASAP. We kid, pretty sure the park is closed." 
  + "</div>"; 

  }

    document.getElementById("ridetimes").innerHTML = htmlString;
//console.log(htmlString);

var htmlString ="";

  for(i=0; i < response.length;i++) {
    var rideActive = response[i].active;
//console.log("lLine 81 , less than 5 minute wait");
    if(response[i].waitTime < 5 && rideActive){
    htmlString += "<div class=\"box\">" + 
    "Ride: " + response[i].name + "<br>" +
    "Active: " + response[i].active + "<br>" +
    "Waiting time: " + response[i].waitTime 
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
    htmlString += "<div class=\"box\">" + 
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

function getClassNumbers() {
  var x = 0;
  var x  = document.getElementsByClassName("red");
  value = x.length;
  alert(value);
  return value;
}

function timeGraph() {
 // console.log("line 123");
      var numz = 5;
      //document.getElementsByClassName("red");
      console.log("line 123");
      console.log("first loop: z = " + z);
      var q= 0;

var x = getClassNumbers();

  for (q = 0; q < x ; q++) {
    //alert("inner loop: q = " + q);
   var ctx = document.getElementById('red'+ q).getContext('2d');
  
   // Draw background
   ctx.fillStyle = 'rgb(255, 51, 0)'; // stright RGB color
   ctx.fillRect(0, 0, 150, 37.5); //location
 
   //console.log("line 132");
   // Draw semi transparent rectangles
   for (var i = 0; i < 10; i++) {
     //ctx.fillStyle = 'rgba(255, 255, 255, ' + (i + 1) / 10 + ')';
 ctx.fillStyle = 'rgba(255, 255, 255, ' + (10 - i) * .1 + ')';
     for (var j = 0; j < 1; j++) {
       ctx.fillRect(5 + i * 14, 5 + j * 37.5, 14, 27.5);
       //console.log("line 139");
     }
   }
  }
 } 
