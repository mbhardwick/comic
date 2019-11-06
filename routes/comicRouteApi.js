//hides sensitive info in .env
require("dotenv").config();
const express = require('express');
const path = require('path');

//require axios to make Node call API
const axios = require('axios');

const router = express.Router();

//API key included in .env to make secured API call
  const apiKey = process.env.API_KEY;
  
  let publisherInput; //under character table in API doc
  let genderInput; //under character table in API doc
  let nameInput = "batman"; //under character table in API doc

  //builds api based on what user inputs for name
  let apiQuery = `https://comicvine.gamespot.com/api/search/?api_key=${apiKey}&format=json&sort=name:asc&resources=issue&query=${nameInput}`;
   console.log(apiQuery); //current api link works and takes to Json Data.

router.get('/comic-json', (req, res) => {
  axios.get(apiQuery, {
    params: {
       apiKey: process.env.API_KEY,
       nameInput: nameInput
    }
  }).then( (res) => {
   // console.log(res.data.results[0]);
    console.log(res.data.results[0].volume.name); //hero name
    console.log(res.data.results[0].cover_date); //date it was published
    console.log(res.data.results[0].name); //name of comic
    console.log(res.data.results[0].image.medium_url); //image source
    console.log(res.data.results[0].description); //description of the commic

  }).catch( (error) => {
    console.log(error);
  })
})
  
    
module.exports = router;