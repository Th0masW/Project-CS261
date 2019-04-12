

function getParkName() {
    //get url for park name
    str = window.location.pathname;
    base_url = str.slice(0, str.lastIndexOf("/"));
    var park = str.replace('/', '');
    console.log(park); //just checking the value


    switch(park){
      case "":
        myPark = "Magic Kingdom";
        break;
      case "epcot":
        myPark = "EPCOT";
        break;
      case "ak":
        myPark = "Animal Kingdom";
        break;
      case "hs":
        myPark = "Hollywood Studios";
        break;
      default:
        myPark = "hmmm, not sure which park this is!";
        break;
    }

    //send back to DOM
    document.getElementById("parkname").innerHTML = myPark;
}