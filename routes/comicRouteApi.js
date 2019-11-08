require("dotenv").config();
const express = require('express');
const path = require('path');

//require axios to make Node call API
const axios = require('axios');

const router = express.Router();

const apiKey = process.env.API_KEY;

//random number generator so a random id is selected for hero
let randomNum = Math.floor(Math.random() * 500);
//console.log("Random number test " + randomNum);
let nameInput = "batman"; //under character table in API doc

// let apiQuery = `https://superheroapi.com/api/${apiKey}/search/${nameInput}`;
//    console.log(apiQuery);
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
    res.send(response.data.results);
       //console.log(res.data.results[0]); 
  //    console.log(res.data.results[0].name); 
  //    console.log(res.data.results[0].appearance.gender);
  //    console.log(res.data.results[0].biography.publisher); 
  //    console.log(res.data.results[0].image.url); 
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
       nameInput: nameInput
    }
  }).then( ( response) => {
   res.send(response.data);
     
  }).catch( (error) => {
    console.log(error);
  });
});

module.exports = router;