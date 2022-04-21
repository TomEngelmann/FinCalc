const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        let results = await db.all(); //Gets result from db 
        res.json(results);
    }
    catch(e){
        res.sendStatus(500);
        console.log(e);
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        let results = await db.one(req.params.id); //Gets result from db 
        console.log(req.params.id);
        res.json(results);
    }
    catch(e){
        res.sendStatus(500);
        console.log(e);
    }
})

/*
router.put, router.delete, router.post
*/

module.exports = router;