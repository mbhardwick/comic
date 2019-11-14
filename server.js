require("dotenv").config();
const express = require('express');
const path = require('path');

const comincVineRoute = require('./routes/comicRouteApi');
const apiRoutes = require('./routes/apiRoutes');

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Routes
//Route where 3rd party api json info is stored
app.use("/api", comincVineRoute);
//route where database info sends updates/creation of data after saved is clicked
app.use("/data", apiRoutes);
//require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
//db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
//});

module.exports = app;
