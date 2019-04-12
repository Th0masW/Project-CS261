
// required modules
const Themeparks = require('themeparks');

module.exports = function(app) {

  app.get('/epcot', function(req, res) {
     epcot = new Themeparks.Parks.WaltDisneyWorldEpcot();
      res.render('index', {title: 'EPCOT Attractions Wait Times'});
  });

  app.get('/ak', function(req, res) {
     epcot = new Themeparks.Parks.WaltDisneyWorldEpcot();
      res.render('index', {title: 'Animal Kingdom Attractions Wait Times'});
  });

  app.get('/hs', function(req, res) {
     epcot = new Themeparks.Parks.WaltDisneyWorldEpcot();
      res.render('index', {title: 'Hollywood Studios Attractions Wait Times'});
  });

// index page 
app.get('/', function(req, res) {
    res.render('index', {title: 'Magic Kingdom Attractions Wait Times'});
});

app.get('/getridetimes', function(req,res) {
     park = req.query.park;
     myThemePark = pickThemePark(park);
    myThemePark.GetWaitTimes().then(function(rides) {
      res.json(rides);
    })
  });
};


function pickThemePark(park){
     myPark = "";
    switch(park){
      case "":
        myPark = new Themeparks.Parks.WaltDisneyWorldMagicKingdom();
        break;
      case "epcot":
        myPark = new Themeparks.Parks.WaltDisneyWorldEpcot();
        break;
      case "ak":
        myPark = new Themeparks.Parks.WaltDisneyWorldAnimalKingdom();
        break;
      case "hs":
        myPark = new Themeparks.Parks.WaltDisneyWorldHollywoodStudios();
        break;
      default:
        myPark = new Themeparks.Parks.WaltDisneyWorldMagicKingdom();;
        break;
    }
    return myPark;
  } 


