//dependencies
const express = require('express');
//file paths
const orm = require('../config/orm.js');

let comics = {
    all: (cb) => {
        orm.all('comics', (res) => {
            cb(res);
        });
    },
    //var for col and vals are arrays
    create: (cols, vals, cb) => {
        orm.create('comics', cols, vals, (res) => {
            cb(res);
        });
    },
    update: (objColVals, condition, cb) => {
     orm.update('comics', objColVals, condition, (res) => {
         cb(res);
     });
    },

    delete: (condition, cb) => {
        orm.delete('comics', condition, (res) => {
          cb(res);
        })
      }
    };

module.exports = comics;