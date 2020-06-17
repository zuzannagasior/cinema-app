const router = require('express').Router();
let CinemaHall = require('../models/cinema-hall.model');

router.route('/:name').get((req, res) => {
    CinemaHall.findOne({ name: req.params.name })
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;