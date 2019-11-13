const connection = require('../config/connection');

function printQuestionMarks(num) {
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push('?');
    }
    return arr.toString();
}

function objToSql(ob) {
    let arr = [];

    //loops through the keys and push the key/value as a string int
    for (let key in ob) {
        let value = ob[key];
        //check to skip hidden properties
        if (Object.hasOwnProperty.call(ob,key)) {
            //if string with spaces add quotes
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = "'" + value + "'"; 
            }
            //eg {name: 'Lana Del Grey'} => ["name='Lana Del Grey']
            arr.push(`${key}=${value}`);
        }
    }
    //translate array of strings to single comma seperated string
    return arr.toString();
}

const orm = {
    all: (tableInput, cb) => {
        let queryString = `SELECT * FROM ${tableInput};`
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    create: (table, cols, vals, cb) => {
        let queryString = `INSERT INTO ${table}`;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    update: (table, objColVals, condition, cb) => {
        let queryString = `UPDATE ${table}`;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, (err, result) => {
        if (err) {
            throw err;
        }

        cb(result);
        });
    },

    // Delete function
    delete: (table, condition, cb) => {
        var queryString = 'DELETE FROM ' + table;
        queryString += ' WHERE ';
        queryString += condition;

        connection.query(queryString, (err, result) => {
        if (err) {
            throw err;
        }

        cb(result);
        });
    }
 };

module.exports = orm;