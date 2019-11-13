const express = require('express');

const router = express.Router();

const comic = require('../models/comics');


router.get('/', (req, res) => {
    comic.all((data) => {
        let comicsObj = {
            comics: data
        };
        console.log(comics);
        res.send('index');
    });
});

router.post('/comic/update', (req, res) => {
    comic.create([
        'hero_name'
    ], [
        req.body.characterName
    ], (result) => {
        res.json({id: result.insertId});
        //res.redirect('/'); 
    });
});

router.put('/comic/update/:id', (req, res) => {
    let condition = `id = ${req.params.id};`
    console.log(`condition`, condition);

    comic.update({
        saved: req.body.saved
    }, condition, (result) => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete('/comic/update/:id', (req,res) => {
        let condition = `id = ${req.params.id}`;
        console.log(condition);
        comic.delete(condition, (result) => {
            if (result.affectedRows === 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
               // res.redirect('/');
            }
        });
    });


module.exports = router;