require("dotenv").config();
const express = require('express');
const path = require('path');

//require axios to make Node call API
const axios = require('axios');

const router = express.Router();

const apiKey = process.env.API_KEY;

//random number generator so a random id is selected for hero
let randomNum = Math.floor(Math.random() * 730);
//console.log("Random number test " + randomNum);
let nameInput = "captain marvel"; //under character table in API doc

//lets you find hero information based on what is searched by user
router.get('/name/comic-json', (req, res) => {
   let apiQuery = `https://superheroapi.com/api/${apiKey}/search/${nameInput}`;
   console.log(apiQuery);
   axios.get(apiQuery, {
     params: {
        apiKey: process.env.API_KEY,
        nameInput: nameInput
     }
   }).then( ( response) => {
     //***----Tests for making sure api results are queried correctly----***/
  //  res.json(response.data.results[0].name);
       //console.log(res.data.results[0]); 
  //    console.log(res.data.results[0].name); 
  //    console.log(res.data.results[0].appearance.gender);
  //    console.log(res.data.results[0].biography.publisher); 
  //    console.log(res.data.results[0].image.url); 
  //aliases, alter ego, first appearance, place-of-birth,base,group-affiliation
  //
//****------------Takes only needed results for display-json to use */
    resultsInfo = {
      "name": response.data.results[0].name,
      "gender": response.data.results[0].appearance.gender,
      "group-affiliation": response.data.results[0].connections,
      "aliases": response.data.results[0].biography.aliases,
      "publisher": response.data.results[0].biography.publisher,
      "alignment": response.data.results[0].biography.alignment,
      "image": response.data.results[0].image.url,
      "base": response.data.results[0].work.base
    }
    res.json(resultsInfo);

   }).catch( (error) => {
     console.log(error);
   });
 });

 router.get('/random/comic-json', (req, res) => {
  let apiQuery = `https://superheroapi.com/api/${apiKey}/${randomNum}`;
  console.log(apiQuery);
  axios.get(apiQuery, {
    params: {
       apiKey: process.env.API_KEY,
       randomNum: randomNum
    }
  }).then( ( response) => {
    res.json(response.data);
    //**********-----Display info for random-character-------***/
    resultsInfo = {
     "name": response.data.results[0].name,
     "gender": response.data.results[0].appearance.gender,
     "group-affiliation": response.data.results[0].connections,
     "aliases": response.data.results[0].biography.aliases,
     "publisher": response.data.results[0].biography.publisher,
     "alignment": response.data.results[0].biography.alignment,
     "image": response.data.results[0].image.url,
     "base": response.data.results[0].work
   }
   res.json(resultsInfo);
     
  }).catch( (error) => {
    console.log(error);
  });
});

module.exports = router;