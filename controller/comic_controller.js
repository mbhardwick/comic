var express = require("express");

var router = express.Router();

var comic = require("../models/comic.js");

router.get("/", function(req, res) {
  res.redirect("comic");
});

router.get("/comic", function(req, res) {
  comic.selectAll(function(data) {
    var hbsObject = {
      comic: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/comic/create", function(req, res) {
  burgers.insertOne(["comic_name"], [req.body.comic_name], function(data) {
    res.redirect("/comic");
  });
});

router.put("/comic/update/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);

  comic.updateOne(
    {
      saved: req.body.devoured
    },
    condition,
    function(data) {
      res.redirect("/comic");
    }
  );
});

module.exports = router;
