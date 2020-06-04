const router = require('express').Router();
let Repertoire = require('../models/repertoire.model');

router.route('/:day').get((req, res) => {
    console.log('req.params.day', req.params.day);

    Repertoire.find({ day: req.params.day })
    .then(repertoire => {
        console.log(repertoire, 'repertoire');
        res.json(repertoire)
    }
    )
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;