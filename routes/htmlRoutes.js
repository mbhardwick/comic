console.log('HTML Route Connected Successfully');


// Node Dependencies
var path = require('path');


// Includes  Routes
function htmlRoutes(app) {


  // A default USE route that leads to home.html which displays the home page.
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/index.html'));
  });

}


// Export for use in main server.js file
module.exports = htmlRoutes;